import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig, tickets } from "@/lib/event";
import { formatCurrency } from "@/lib/format";

export function Registration() {
  return (
    <section id="inscricao" className="bg-burgundy py-16 text-cream sm:py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            light
            eyebrow="Inscrição"
            title="Garanta a sua vaga!"
            description="As inscrições 2027 já estão abertas! Confira os valores abaixo!"
          />
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {tickets.map((ticket, index) => (
            <FadeIn key={ticket.id} delay={index * 0.08}>
              <article
                className={`h-full rounded-[1.25rem] border p-5 sm:rounded-[1.6rem] sm:p-7 ${
                  ticket.featured
                    ? "border-gold bg-cream text-earth"
                    : "border-cream/15 bg-white/5"
                }`}
              >
                <p
                  className={`text-[11px] tracking-[0.2em] uppercase ${
                    ticket.featured ? "text-gold" : "text-gold-soft"
                  }`}
                >
                  {ticket.badge}
                </p>
                <h3 className="mt-1 font-serif text-2xl">{ticket.name}</h3>
                <p className="mt-3 font-serif text-4xl">{formatCurrency(ticket.price)}</p>
                <p className={`mt-3 text-sm ${ticket.featured ? "text-muted" : "text-blush/80"}`}>
                  {ticket.description}
                </p>
                <ul className={`mt-4 space-y-1 text-xs ${ticket.featured ? "text-muted" : "text-blush/70"}`}>
                  {ticket.benefits.map((benefit) => (
                    <li key={benefit}>· {benefit}</li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.16} className="mt-10 flex justify-center sm:mt-12">
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-velvet px-8 py-4 text-sm font-semibold tracking-wide text-cream uppercase shadow-lg transition hover:bg-earth sm:w-auto"
          >
            Clique aqui para se inscrever
            <ExternalLink size={16} />
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
