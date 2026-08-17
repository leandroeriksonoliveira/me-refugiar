import { NextResponse } from "next/server";
import { AsaasRequestError, createPayment, findOrCreateCustomer, getPixQrCode } from "@/lib/asaas";
import { getTicket } from "@/lib/event";
import { validateCheckout } from "@/lib/validations";
import type { CheckoutInput, CheckoutResponse } from "@/types/checkout";

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "0.0.0.0";
  return request.headers.get("x-real-ip") ?? "0.0.0.0";
}

export async function POST(request: Request) {
  let body: CheckoutInput;

  try {
    body = (await request.json()) as CheckoutInput;
  } catch {
    return NextResponse.json<CheckoutResponse>(
      { ok: false, message: "Requisição inválida." },
      { status: 400 },
    );
  }

  const validation = validateCheckout(body);
  if (!validation.valid) {
    return NextResponse.json<CheckoutResponse>(
      { ok: false, message: "Revise os campos destacados.", errors: validation.errors },
      { status: 422 },
    );
  }

  const ticket = getTicket(body.ticketId);
  if (!ticket) {
    return NextResponse.json<CheckoutResponse>(
      { ok: false, message: "Ingresso não encontrado." },
      { status: 400 },
    );
  }

  try {
    const customerId = await findOrCreateCustomer(body);
    const payment = await createPayment(
      customerId,
      body,
      ticket.price,
      `Me Refugiar 2026 — ${ticket.name} — ${body.name}`,
      getClientIp(request),
    );

    const pix =
      body.billingType === "PIX" ? await getPixQrCode(payment.id) : undefined;

    return NextResponse.json<CheckoutResponse>({
      ok: true,
      data: {
        paymentId: payment.id,
        status: payment.status,
        billingType: body.billingType,
        value: ticket.price,
        ticketName: ticket.name,
        invoiceUrl: payment.invoiceUrl,
        pix,
      },
    });
  } catch (error) {
    if (error instanceof AsaasRequestError) {
      return NextResponse.json<CheckoutResponse>(
        { ok: false, message: error.message },
        { status: error.status >= 400 && error.status < 500 ? 400 : 502 },
      );
    }

    const message =
      error instanceof Error && error.message.includes("ASAAS_API_KEY")
        ? "Pagamento temporariamente indisponível. Configure a chave do Asaas."
        : "Não foi possível processar o pagamento. Tente novamente.";

    return NextResponse.json<CheckoutResponse>({ ok: false, message }, { status: 503 });
  }
}
