import { brazilStates, getTicket } from "@/lib/event";
import { onlyDigits } from "@/lib/format";
import type { CheckoutInput } from "@/types/checkout";

export function isValidCpf(value: string) {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  const calc = (base: string, factor: number) => {
    let total = 0;
    for (const digit of base) {
      total += Number(digit) * factor;
      factor -= 1;
    }
    const rest = (total * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  const first = calc(cpf.slice(0, 9), 10);
  const second = calc(cpf.slice(0, 10), 11);
  return first === Number(cpf[9]) && second === Number(cpf[10]);
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string) {
  const digits = onlyDigits(value);
  return digits.length === 10 || digits.length === 11;
}

export function validateCheckout(input: CheckoutInput) {
  const errors: Record<string, string> = {};

  if (!input.name || input.name.trim().length < 5) {
    errors.name = "Informe o nome completo.";
  }
  if (!isValidCpf(input.cpf)) {
    errors.cpf = "CPF inválido.";
  }
  if (!isValidEmail(input.email)) {
    errors.email = "E-mail inválido.";
  }
  if (!isValidPhone(input.phone)) {
    errors.phone = "Telefone/WhatsApp inválido.";
  }
  if (!input.city || input.city.trim().length < 2) {
    errors.city = "Informe a cidade.";
  }
  if (!brazilStates.includes(input.state as (typeof brazilStates)[number])) {
    errors.state = "Selecione o estado.";
  }
  if (!getTicket(input.ticketId)) {
    errors.ticketId = "Selecione um ingresso válido.";
  }
  if (input.billingType !== "PIX" && input.billingType !== "CREDIT_CARD") {
    errors.billingType = "Escolha PIX ou cartão de crédito.";
  }

  if (input.billingType === "CREDIT_CARD") {
    const card = input.creditCard;
    if (!card?.holderName || card.holderName.trim().length < 3) {
      errors.holderName = "Informe o nome impresso no cartão.";
    }
    if (onlyDigits(card?.number ?? "").length < 13) {
      errors.cardNumber = "Número do cartão inválido.";
    }
    if (!/^(0[1-9]|1[0-2])$/.test(card?.expiryMonth ?? "")) {
      errors.expiry = "Validade inválida.";
    }
    if (!/^\d{4}$/.test(card?.expiryYear ?? "")) {
      errors.expiry = "Validade inválida.";
    }
    if (!/^\d{3,4}$/.test(card?.ccv ?? "")) {
      errors.ccv = "CVV inválido.";
    }
    if (onlyDigits(card?.postalCode ?? "").length !== 8) {
      errors.postalCode = "CEP inválido.";
    }
    if (!card?.addressNumber) {
      errors.addressNumber = "Informe o número do endereço.";
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
