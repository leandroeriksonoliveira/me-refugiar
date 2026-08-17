"use client";

import { FormEvent, useEffect, useMemo, useState, type ReactNode } from "react";
import { Check, Copy, CreditCard, LoaderCircle, QrCode, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { brazilStates, tickets } from "@/lib/event";
import {
  formatCardNumber,
  formatCep,
  formatCpf,
  formatCurrency,
  formatExpiry,
  formatPhone,
  onlyDigits,
} from "@/lib/format";
import type { TicketId } from "@/lib/event";
import type { BillingType, CheckoutResponse, CheckoutSuccess } from "@/types/checkout";

type FormState = {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  ticketId: TicketId;
  billingType: BillingType;
  holderName: string;
  cardNumber: string;
  expiry: string;
  ccv: string;
  postalCode: string;
  addressNumber: string;
  installmentCount: number;
};

const emptyForm: FormState = {
  name: "",
  cpf: "",
  email: "",
  phone: "",
  city: "",
  state: "SP",
  ticketId: "lote-regular",
  billingType: "PIX",
  holderName: "",
  cardNumber: "",
  expiry: "",
  ccv: "",
  postalCode: "",
  addressNumber: "",
  installmentCount: 1,
};

const paidStatuses = new Set(["CONFIRMED", "RECEIVED", "RECEIVED_IN_CASH"]);

export function Registration() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<CheckoutSuccess | null>(null);
  const [copied, setCopied] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string>("");

  const selectedTicket = useMemo(
    () => tickets.find((ticket) => ticket.id === form.ticketId) ?? tickets[0],
    [form.ticketId],
  );

  useEffect(() => {
    if (!result?.paymentId || result.billingType !== "PIX") return;
    if (paidStatuses.has(paymentStatus)) return;

    const timer = window.setInterval(async () => {
      const response = await fetch(`/api/payments/${result.paymentId}`);
      const payload = (await response.json()) as { ok: boolean; data?: { status: string } };
      if (payload.ok && payload.data?.status) {
        setPaymentStatus(payload.data.status);
      }
    }, 5000);

    return () => window.clearInterval(timer);
  }, [result, paymentStatus]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    setErrors({});

    const [expiryMonth, expiryYearShort] = form.expiry.split("/");
    const expiryYear = expiryYearShort ? `20${expiryYearShort}` : "";

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        cpf: form.cpf,
        email: form.email,
        phone: form.phone,
        city: form.city,
        state: form.state,
        ticketId: form.ticketId,
        billingType: form.billingType,
        creditCard:
          form.billingType === "CREDIT_CARD"
            ? {
                holderName: form.holderName,
                number: form.cardNumber,
                expiryMonth,
                expiryYear,
                ccv: form.ccv,
                postalCode: form.postalCode,
                addressNumber: form.addressNumber,
                installmentCount: form.installmentCount,
              }
            : undefined,
      }),
    });

    const payload = (await response.json()) as CheckoutResponse;
    setSubmitting(false);

    if (!payload.ok) {
      setErrors(payload.errors ?? {});
      setMessage(payload.message);
      return;
    }

    setResult(payload.data);
    setPaymentStatus(payload.data.status);
  }

  async function copyPix() {
    if (!result?.pix?.payload) return;
    await navigator.clipboard.writeText(result.pix.payload);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  const confirmed = paidStatuses.has(paymentStatus);

  return (
    <section id="inscricao" className="bg-burgundy py-24 text-cream sm:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            light
            eyebrow="Inscrição"
            title="Garanta o seu lugar neste refúgio"
            description="Preencha seus dados, escolha o lote e conclua o pagamento com PIX ou cartão. A confirmação é automática."
          />
        </FadeIn>

        {result ? (
          <FadeIn className="mx-auto mt-14 max-w-2xl rounded-[2rem] bg-cream p-8 text-earth">
            {confirmed || (result.billingType === "CREDIT_CARD" && paidStatuses.has(result.status)) ? (
              <div className="text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-velvet text-cream">
                  <Check />
                </span>
                <h3 className="mt-5 font-serif text-3xl">Inscrição confirmada</h3>
                <p className="mt-3 text-muted">
                  Sua vaga no {result.ticketName} está garantida. Enviamos os detalhes para {form.email}.
                </p>
              </div>
            ) : result.billingType === "PIX" && result.pix ? (
              <div>
                <div className="flex items-center gap-2 text-velvet">
                  <QrCode size={18} />
                  <p className="text-sm font-medium tracking-wide uppercase">Pagamento via PIX</p>
                </div>
                <h3 className="mt-3 font-serif text-3xl">Escaneie o QR Code</h3>
                <p className="mt-2 text-sm text-muted">
                  {result.ticketName} · {formatCurrency(result.value)}. A confirmação aparece automaticamente.
                </p>
                {/* QR Code dinâmico em Base64 retornado pelo Asaas */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`data:image/png;base64,${result.pix.encodedImage}`}
                  alt="QR Code PIX para pagamento da inscrição"
                  className="mx-auto mt-6 h-56 w-56 rounded-2xl border border-gold/20 bg-white p-3"
                />
                <button
                  type="button"
                  onClick={copyPix}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/30 px-5 py-3 text-sm"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Código copiado" : "Copiar código PIX"}
                </button>
                <p className="mt-4 break-all rounded-2xl bg-sand/70 p-4 text-xs text-muted">
                  {result.pix.payload}
                </p>
                <p className="mt-4 text-center text-sm text-velvet">
                  Status: {paymentStatus || result.status}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="font-serif text-3xl">Estamos confirmando seu pagamento</h3>
                <p className="mt-3 text-muted">
                  Status atual: {result.status}. Se o cartão foi aprovado, você receberá um e-mail em instantes.
                </p>
              </div>
            )}
          </FadeIn>
        ) : (
          <form onSubmit={onSubmit} className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {tickets.map((ticket) => {
                const selected = form.ticketId === ticket.id;
                return (
                  <label
                    key={ticket.id}
                    className={`block cursor-pointer rounded-[1.6rem] border p-6 transition ${
                      selected
                        ? "border-gold bg-cream text-earth"
                        : "border-cream/15 bg-white/5 hover:border-gold/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="ticket"
                      className="sr-only"
                      checked={selected}
                      onChange={() => update("ticketId", ticket.id)}
                    />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-[11px] tracking-[0.2em] uppercase ${selected ? "text-gold" : "text-gold-soft"}`}>
                          {ticket.badge}
                        </p>
                        <h3 className="mt-1 font-serif text-2xl">{ticket.name}</h3>
                        <p className={`mt-2 text-sm ${selected ? "text-muted" : "text-blush/80"}`}>
                          {ticket.description}
                        </p>
                      </div>
                      <p className="font-serif text-2xl">{formatCurrency(ticket.price)}</p>
                    </div>
                  </label>
                );
              })}
            </div>

            <div className="rounded-[2rem] bg-cream p-6 text-earth sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome completo" error={errors.name} className="sm:col-span-2">
                  <input
                    required
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    className={inputClass}
                    placeholder="Como está no documento"
                  />
                </Field>
                <Field label="CPF" error={errors.cpf}>
                  <input
                    required
                    value={form.cpf}
                    onChange={(event) => update("cpf", formatCpf(event.target.value))}
                    className={inputClass}
                    placeholder="000.000.000-00"
                    inputMode="numeric"
                  />
                </Field>
                <Field label="Telefone / WhatsApp" error={errors.phone}>
                  <input
                    required
                    value={form.phone}
                    onChange={(event) => update("phone", formatPhone(event.target.value))}
                    className={inputClass}
                    placeholder="(11) 99999-9999"
                    inputMode="tel"
                  />
                </Field>
                <Field label="E-mail" error={errors.email} className="sm:col-span-2">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    className={inputClass}
                    placeholder="seuemail@exemplo.com"
                  />
                </Field>
                <Field label="Cidade" error={errors.city}>
                  <input
                    required
                    value={form.city}
                    onChange={(event) => update("city", event.target.value)}
                    className={inputClass}
                    placeholder="Sua cidade"
                  />
                </Field>
                <Field label="Estado" error={errors.state}>
                  <select
                    value={form.state}
                    onChange={(event) => update("state", event.target.value)}
                    className={inputClass}
                  >
                    {brazilStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => update("billingType", "PIX")}
                  className={methodClass(form.billingType === "PIX")}
                >
                  <QrCode size={18} />
                  PIX
                </button>
                <button
                  type="button"
                  onClick={() => update("billingType", "CREDIT_CARD")}
                  className={methodClass(form.billingType === "CREDIT_CARD")}
                >
                  <CreditCard size={18} />
                  Cartão
                </button>
              </div>

              {form.billingType === "CREDIT_CARD" ? (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="Nome no cartão" error={errors.holderName} className="sm:col-span-2">
                    <input
                      value={form.holderName}
                      onChange={(event) => update("holderName", event.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Número do cartão" error={errors.cardNumber} className="sm:col-span-2">
                    <input
                      value={form.cardNumber}
                      onChange={(event) => update("cardNumber", formatCardNumber(event.target.value))}
                      className={inputClass}
                      inputMode="numeric"
                      autoComplete="cc-number"
                    />
                  </Field>
                  <Field label="Validade" error={errors.expiry}>
                    <input
                      value={form.expiry}
                      onChange={(event) => update("expiry", formatExpiry(event.target.value))}
                      className={inputClass}
                      placeholder="MM/AA"
                      inputMode="numeric"
                      autoComplete="cc-exp"
                    />
                  </Field>
                  <Field label="CVV" error={errors.ccv}>
                    <input
                      value={form.ccv}
                      onChange={(event) => update("ccv", onlyDigits(event.target.value).slice(0, 4))}
                      className={inputClass}
                      inputMode="numeric"
                      autoComplete="cc-csc"
                    />
                  </Field>
                  <Field label="CEP do titular" error={errors.postalCode}>
                    <input
                      value={form.postalCode}
                      onChange={(event) => update("postalCode", formatCep(event.target.value))}
                      className={inputClass}
                      inputMode="numeric"
                    />
                  </Field>
                  <Field label="Nº do endereço" error={errors.addressNumber}>
                    <input
                      value={form.addressNumber}
                      onChange={(event) => update("addressNumber", event.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Parcelas" className="sm:col-span-2">
                    <select
                      value={form.installmentCount}
                      onChange={(event) => update("installmentCount", Number(event.target.value))}
                      className={inputClass}
                    >
                      {[1, 2, 3, 6, 10, 12].map((count) => (
                        <option key={count} value={count}>
                          {count}x de {formatCurrency(selectedTicket.price / count)}
                          {count === 1 ? " à vista" : ""}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
              ) : null}

              {message ? <p className="mt-4 text-sm text-velvet">{message}</p> : null}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-velvet px-6 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition hover:bg-burgundy disabled:opacity-70"
              >
                {submitting ? <LoaderCircle className="animate-spin" size={18} /> : null}
                {submitting
                  ? "Processando..."
                  : `Pagar ${formatCurrency(selectedTicket.price)}`}
              </button>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
                <ShieldCheck size={14} />
                Pagamento processado com segurança pela API do Asaas. Dados de cartão não são armazenados.
              </p>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
}

const inputClass =
  "w-full rounded-2xl border border-gold/20 bg-white px-4 py-3 text-sm text-earth outline-none transition focus:border-velvet";

function methodClass(active: boolean) {
  return `inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm transition ${
    active ? "border-velvet bg-velvet text-cream" : "border-gold/20 bg-white"
  }`;
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs tracking-wide text-muted uppercase">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-velvet">{error}</span> : null}
    </label>
  );
}
