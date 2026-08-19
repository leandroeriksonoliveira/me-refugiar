"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandedProducts, luare } from "@/lib/event";

export function Products() {
  const [copied, setCopied] = useState(false);

  async function copyCoupon() {
    try {
      await navigator.clipboard.writeText(luare.coupon);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="produtos" className="bg-sand/40 py-16 sm:py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Identidade visual"
            title="Produtos personalizados"
            description="A oliveira fala de paz, força e crescimento. A libélula, de transformação e renovação. Juntas, elas vestem o crachá, a garrafa e a bag do Me Refugiar."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {brandedProducts.map((product, index) => (
            <FadeIn key={product.name} delay={index * 0.08}>
              <article className="h-full overflow-hidden rounded-[1.6rem] border border-gold/15 bg-cream shadow-[0_20px_50px_-32px_rgba(92,42,53,0.45)]">
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    fill
                    className="object-contain p-3"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="px-5 pb-6 pt-2 sm:px-6">
                  <p className="text-[11px] tracking-[0.22em] text-gold uppercase">
                    Aplicação
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-earth">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div
            id="parcerias"
            className="mt-16 grid overflow-hidden rounded-[1.8rem] border border-gold/15 bg-cream md:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="relative min-h-[320px] bg-[#f3ebe3] md:min-h-[420px]">
              <Image
                src={luare.flyer}
                alt="Cupom especial LUARE Semi Joias para o Me Refugiar"
                fill
                className="object-contain object-center p-4 sm:p-6"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
              <p className="text-[11px] tracking-[0.22em] text-gold uppercase">
                Parceria · produtos personalizados
              </p>
              <h3 className="mt-3 font-serif text-3xl text-earth sm:text-4xl">
                {luare.name}
              </h3>
              <p className="mt-2 text-xs tracking-[0.18em] text-muted uppercase">
                {luare.slogan}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{luare.description}</p>
              <p className="mt-6 text-xs tracking-[0.18em] text-gold uppercase">
                Cupom especial
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <code className="rounded-full border border-gold/30 bg-white px-4 py-2 font-sans text-sm font-semibold tracking-wide text-velvet">
                  {luare.coupon}
                </code>
                <button
                  type="button"
                  onClick={copyCoupon}
                  className="inline-flex items-center gap-1.5 text-sm text-earth transition hover:text-velvet"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copiado" : "Copiar cupom"}
                </button>
              </div>
              <p className="mt-2 text-xs text-muted">Válido para compras no site da LUARE.</p>
              <a
                href={luare.url}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-velvet px-6 py-3 text-sm font-medium tracking-wide text-cream uppercase transition hover:bg-burgundy"
              >
                Aproveite agora
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
