import { NextResponse } from "next/server";

const processedEvents = new Set<string>();

type AsaasWebhookBody = {
  id?: string;
  event?: string;
  payment?: {
    id?: string;
    status?: string;
    value?: number;
    billingType?: string;
    customer?: string;
    externalReference?: string;
    description?: string;
  };
};

const CONFIRMED_EVENTS = new Set([
  "PAYMENT_CONFIRMED",
  "PAYMENT_RECEIVED",
  "PAYMENT_APPROVED_BY_RISK_ANALYSIS",
]);

export async function POST(request: Request) {
  const authToken = process.env.ASAAS_WEBHOOK_TOKEN;
  const incomingToken = request.headers.get("asaas-access-token");

  if (authToken && incomingToken !== authToken) {
    return NextResponse.json({ received: false }, { status: 401 });
  }

  let body: AsaasWebhookBody;
  try {
    body = (await request.json()) as AsaasWebhookBody;
  } catch {
    return NextResponse.json({ received: false }, { status: 400 });
  }

  const eventId = body.id ?? `${body.event}:${body.payment?.id}`;
  if (processedEvents.has(eventId)) {
    return NextResponse.json({ received: true, duplicate: true });
  }
  processedEvents.add(eventId);

  if (body.event && CONFIRMED_EVENTS.has(body.event)) {
    console.info("[asaas:confirmed]", {
      event: body.event,
      paymentId: body.payment?.id,
      status: body.payment?.status,
      value: body.payment?.value,
      reference: body.payment?.externalReference,
    });
  } else {
    console.info("[asaas:event]", {
      event: body.event,
      paymentId: body.payment?.id,
      status: body.payment?.status,
    });
  }

  return NextResponse.json({ received: true });
}
