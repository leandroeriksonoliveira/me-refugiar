import { dueDatePlusDays, onlyDigits } from "@/lib/format";
import type { CheckoutInput, PixPayload } from "@/types/checkout";

const ASAAS_TIMEOUT_MS = 60_000;

type AsaasError = {
  errors?: { code?: string; description?: string }[];
};

type AsaasCustomer = {
  id: string;
};

type AsaasPayment = {
  id: string;
  status: string;
  value: number;
  billingType: string;
  invoiceUrl?: string;
  customer: string;
};

function getConfig() {
  const apiKey = process.env.ASAAS_API_KEY;
  const baseUrl = (process.env.ASAAS_API_URL ?? "https://api-sandbox.asaas.com").replace(
    /\/$/,
    "",
  );

  if (!apiKey) {
    throw new Error("ASAAS_API_KEY não configurada.");
  }

  return { apiKey, baseUrl };
}

async function asaasFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const { apiKey, baseUrl } = getConfig();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ASAAS_TIMEOUT_MS);

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      ...init,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        access_token: apiKey,
        "User-Agent": "MeRefugiar/1.0.0",
        ...(init?.headers ?? {}),
      },
    });

    const data = (await response.json()) as T & AsaasError;

    if (!response.ok) {
      const message =
        data.errors?.[0]?.description ??
        "Não foi possível concluir a operação no Asaas.";
      throw new AsaasRequestError(message, response.status, data.errors);
    }

    return data;
  } finally {
    clearTimeout(timeout);
  }
}

export class AsaasRequestError extends Error {
  status: number;
  errors?: AsaasError["errors"];

  constructor(message: string, status: number, errors?: AsaasError["errors"]) {
    super(message);
    this.name = "AsaasRequestError";
    this.status = status;
    this.errors = errors;
  }
}

export async function findOrCreateCustomer(input: CheckoutInput) {
  const cpfCnpj = onlyDigits(input.cpf);
  const existing = await asaasFetch<{ data?: AsaasCustomer[] }>(
    `/v3/customers?cpfCnpj=${cpfCnpj}`,
  );

  if (existing.data?.[0]?.id) {
    return existing.data[0].id;
  }

  const customer = await asaasFetch<AsaasCustomer>("/v3/customers", {
    method: "POST",
    body: JSON.stringify({
      name: input.name.trim(),
      cpfCnpj,
      email: input.email.trim(),
      mobilePhone: onlyDigits(input.phone),
      externalReference: `me-refugiar:${cpfCnpj}`,
      observations: `Cidade/UF: ${input.city}/${input.state} | Ingresso: ${input.ticketId}`,
      notificationDisabled: false,
    }),
  });

  return customer.id;
}

export async function createPayment(
  customerId: string,
  input: CheckoutInput,
  value: number,
  description: string,
  remoteIp: string,
) {
  const dueDate = dueDatePlusDays(2);
  const externalReference = `me-refugiar:${input.ticketId}:${onlyDigits(input.cpf)}:${Date.now()}`;

  if (input.billingType === "PIX") {
    return asaasFetch<AsaasPayment>("/v3/payments", {
      method: "POST",
      body: JSON.stringify({
        customer: customerId,
        billingType: "PIX",
        value,
        dueDate,
        description,
        externalReference,
      }),
    });
  }

  const card = input.creditCard;
  if (!card) {
    throw new Error("Dados do cartão são obrigatórios.");
  }

  const installmentCount = card.installmentCount && card.installmentCount > 1
    ? card.installmentCount
    : undefined;

  return asaasFetch<AsaasPayment>("/v3/payments", {
    method: "POST",
    body: JSON.stringify({
      customer: customerId,
      billingType: "CREDIT_CARD",
      value: installmentCount ? undefined : value,
      totalValue: installmentCount ? value : undefined,
      installmentCount,
      dueDate,
      description,
      externalReference,
      remoteIp,
      creditCard: {
        holderName: card.holderName.trim(),
        number: onlyDigits(card.number),
        expiryMonth: card.expiryMonth,
        expiryYear: card.expiryYear,
        ccv: card.ccv,
      },
      creditCardHolderInfo: {
        name: input.name.trim(),
        email: input.email.trim(),
        cpfCnpj: onlyDigits(input.cpf),
        postalCode: onlyDigits(card.postalCode),
        addressNumber: card.addressNumber,
        phone: onlyDigits(input.phone),
        mobilePhone: onlyDigits(input.phone),
      },
    }),
  });
}

export async function getPixQrCode(paymentId: string) {
  return asaasFetch<PixPayload>(`/v3/payments/${paymentId}/pixQrCode`);
}

export async function getPayment(paymentId: string) {
  return asaasFetch<AsaasPayment>(`/v3/payments/${paymentId}`);
}
