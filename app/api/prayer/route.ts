import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { createPrayerRequest } from "@/lib/prayer-store";

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "0.0.0.0";
  return request.headers.get("x-real-ip") ?? "0.0.0.0";
}

export async function POST(request: Request) {
  if (!rateLimit(`prayer:${clientIp(request)}`, 5, 60 * 60 * 1000)) {
    return NextResponse.json(
      { ok: false, message: "Aguarde um pouco antes de enviar outro pedido." },
      { status: 429 },
    );
  }

  let body: { name?: string; message?: string; website?: string };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false, message: "Requisição inválida." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim().slice(0, 80);
  const message = (body.message ?? "").trim();

  if (message.length < 10) {
    return NextResponse.json(
      { ok: false, message: "Escreva o pedido com pelo menos algumas palavras." },
      { status: 422 },
    );
  }

  if (message.length > 2000) {
    return NextResponse.json(
      { ok: false, message: "O pedido pode ter no máximo 2.000 caracteres." },
      { status: 422 },
    );
  }

  try {
    await createPrayerRequest({ name, message });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const messageText =
      error instanceof Error ? error.message : "Não foi possível enviar o pedido.";
    return NextResponse.json({ ok: false, message: messageText }, { status: 503 });
  }
}
