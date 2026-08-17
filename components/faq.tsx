"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/event";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Dúvidas"
            title="Perguntas frequentes"
            description="Se a sua pergunta não estiver aqui, fale com a gente pelo WhatsApp. Teremos alegria em acolher você."
          />
        </FadeIn>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gold/15 rounded-[2rem] border border-gold/15 bg-white/70">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question} className="px-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl text-earth">{item.question}</span>
                  <ChevronDown
                    className={`shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
