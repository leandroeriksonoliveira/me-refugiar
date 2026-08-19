"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded-2xl border border-gold/20 bg-white px-4 py-3 text-base text-earth outline-none transition focus:border-velvet sm:text-sm";

export function PrayerForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const response = await fetch("/api/prayer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message, website }),
    });
    const payload = (await response.json()) as { ok: boolean; message?: string };
    setSubmitting(false);

    if (!payload.ok) {
      setError(payload.message ?? "Não foi possível enviar. Tente novamente.");
      return;
    }

    setSent(true);
    setName("");
    setMessage("");
  }

  if (sent) {
    return (
      <div className="rounded-[1.5rem] border border-gold/20 bg-white/80 px-6 py-10 text-center sm:rounded-[2rem] sm:px-10">
        <p className="text-xs tracking-[0.28em] text-gold uppercase">Pedido recebido</p>
        <h2 className="mt-3 font-serif text-3xl text-earth">Estamos orando com você</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          Seu pedido chegou até a equipe de oração do Me Refugiar. Ele será lido
          com confidencialidade e apresentado ao Pai.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-sm text-velvet underline-offset-4 hover:underline"
        >
          Enviar outro pedido
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.5rem] border border-gold/20 bg-white/80 p-5 sm:rounded-[2rem] sm:p-8"
    >
      <label className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        Website
        <input
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs tracking-wide text-muted uppercase">
          Nome <span className="normal-case tracking-normal">(opcional)</span>
        </span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={inputClass}
          placeholder="Pode deixar em branco, se preferir"
          maxLength={80}
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs tracking-wide text-muted uppercase">Pedido de oração</span>
        <textarea
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${inputClass} min-h-40 resize-y`}
          placeholder="Escreva aqui o que deseja apresentar a Deus. Este espaço é confidencial."
          maxLength={2000}
        />
        <span className="mt-1.5 block text-right text-xs text-muted">{message.length}/2000</span>
      </label>

      {error ? <p className="mt-4 text-sm text-velvet">{error}</p> : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-velvet px-6 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition hover:bg-burgundy disabled:opacity-70"
      >
        {submitting ? "Enviando..." : "Enviar pedido"}
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        Somente a organização do Me Refugiar lê os pedidos. Nada é publicado no site.
      </p>
    </form>
  );
}
