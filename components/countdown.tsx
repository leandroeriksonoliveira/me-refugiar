"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/event";

function calendarDaysUntil(ymd: string, now = new Date()) {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
  }).format(now);
  const start = Date.parse(`${today}T00:00:00-03:00`);
  const end = Date.parse(`${ymd}T00:00:00-03:00`);
  return Math.max(0, Math.round((end - start) / 86_400_000));
}

export function Countdown({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const [days, setDays] = useState<number | null>(null);
  const ymd = siteConfig.edition.startYmd;

  useEffect(() => {
    const tick = () => setDays(calendarDaysUntil(ymd));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [ymd]);

  const label = days === 1 ? "dia" : "dias";
  const tone = light ? "text-cream" : "text-earth";
  const muted = light ? "text-gold-soft" : "text-muted";

  return (
    <div className={`min-h-[3.25rem] ${className}`} aria-live="polite">
      {days == null ? null : days === 0 ? (
        <p className={`font-serif text-2xl ${tone}`}>É hoje. Venha para Mais Profundo Nele.</p>
      ) : (
        <p className={muted}>
          Faltam{" "}
          <span className={`font-serif text-4xl tabular-nums sm:text-5xl ${tone}`}>
            {days.toLocaleString("pt-BR")}
          </span>{" "}
          {label}
        </p>
      )}
    </div>
  );
}
