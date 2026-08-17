export type BillingType = "PIX" | "CREDIT_CARD";

export type CreditCardInput = {
  holderName: string;
  number: string;
  expiryMonth: string;
  expiryYear: string;
  ccv: string;
  postalCode: string;
  addressNumber: string;
  installmentCount?: number;
};

export type CheckoutInput = {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  ticketId: string;
  billingType: BillingType;
  creditCard?: CreditCardInput;
};

export type PixPayload = {
  encodedImage: string;
  payload: string;
  expirationDate: string | null;
};

export type CheckoutSuccess = {
  paymentId: string;
  status: string;
  billingType: BillingType;
  value: number;
  ticketName: string;
  invoiceUrl?: string;
  pix?: PixPayload;
};

export type CheckoutResponse =
  | { ok: true; data: CheckoutSuccess }
  | { ok: false; message: string; errors?: Record<string, string> };
