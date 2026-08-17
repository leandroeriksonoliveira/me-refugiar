import { NextResponse } from "next/server";
import { AsaasRequestError, getPayment } from "@/lib/asaas";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id || !id.startsWith("pay_")) {
    return NextResponse.json({ ok: false, message: "Pagamento inválido." }, { status: 400 });
  }

  try {
    const payment = await getPayment(id);
    return NextResponse.json({
      ok: true,
      data: {
        paymentId: payment.id,
        status: payment.status,
        value: payment.value,
        billingType: payment.billingType,
      },
    });
  } catch (error) {
    if (error instanceof AsaasRequestError) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 404 });
    }
    return NextResponse.json(
      { ok: false, message: "Não foi possível consultar o pagamento." },
      { status: 503 },
    );
  }
}
