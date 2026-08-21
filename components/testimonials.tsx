"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/event";

const AUTO_MS = 8000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const current = testimonials[index];
  const total = testimonials.length;

  const goTo = useEffectEvent((next: number) => {
    setIndex((next + total) % total);
  });

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => goTo(index + 1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [index, paused]);

  return (
    <section
      id="testemunhos"
      className="grain relative overflow-hidden bg-earth py-16 text-cream sm:py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-velvet/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-gold/10 blur-3xl"
      />

      <Container className="relative">
        <FadeIn>
          <SectionHeading
            light
            eyebrow="Testemunhos"
            title="O que Deus já fez nelas"
            description="Vozes de mulheres que passaram pelo Me Refugiar — e saíram renovadas."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="relative mx-auto mt-14 max-w-3xl"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const start = touchStartX.current;
              const end = event.changedTouches[0]?.clientX;
              touchStartX.current = null;
              if (start == null || end == null) return;
              const delta = end - start;
              if (Math.abs(delta) < 48) return;
              goTo(delta < 0 ? index + 1 : index - 1);
            }}
          >
            <p
              aria-hidden
              className="pointer-events-none absolute -top-6 left-0 font-serif text-[7rem] leading-none text-gold/20 select-none sm:-top-10 sm:text-[9rem]"
            >
              “
            </p>

            <div
              className="relative min-h-[16rem] px-2 pt-8 sm:min-h-[15rem] sm:px-8"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <p
                    className={`font-serif leading-snug text-cream ${
                      current.quote.length > 180
                        ? "text-xl sm:text-2xl md:text-[1.7rem]"
                        : "text-2xl sm:text-3xl md:text-4xl"
                    }`}
                  >
                    {current.quote}
                  </p>
                  <footer className="mt-8">
                    <cite className="not-italic">
                      <span className="block text-[11px] tracking-[0.22em] text-gold-soft uppercase">
                        Participante
                      </span>
                      <span className="mt-1 block text-sm text-blush/75">
                        Edições anteriores
                      </span>
                    </cite>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() => goTo(index - 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream transition hover:border-gold/50 hover:bg-cream/5"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="flex flex-1 flex-col items-center gap-3">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Ir para depoimento ${i + 1}`}
                      aria-current={i === index ? "true" : undefined}
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-8 bg-gold"
                          : "w-1.5 bg-cream/30 hover:bg-cream/55"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[11px] tracking-[0.2em] text-blush/60 uppercase">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </p>
              </div>

              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => goTo(index + 1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream transition hover:border-gold/50 hover:bg-cream/5"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
