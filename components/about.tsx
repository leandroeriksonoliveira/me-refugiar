import { Heart, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/lib/event";

const pillars = [
  {
    icon: Heart,
    title: "Refúgio",
    text: "Um tempo para se voltar para Deus sem distrações.",
  },
  {
    icon: Sparkles,
    title: "Restauração",
    text: "Momentos marcados pela Palavra de Deus e oração. Cura de feridas, renovação de identidade e avanço para o propósito.",
  },
  {
    icon: Users,
    title: "Comunhão",
    text: "Mulheres compartilhando momentos de alegria, choro, riso e cuidado.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-cream py-16 sm:py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="O encontro"
            title="Um lugar de renovação para um novo tempo"
            description="O Me Refugiar Mulheres é um momento único de refúgio em Deus, restauração de identidade e renovação de esperança."
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg">
            Gerado no coração de Deus, esse encontro foi criado há 6 anos pela
            Pra. Renata Vitorino e vem transformando a vida de muitas mulheres.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.08}>
              <article className="h-full rounded-3xl border border-gold/15 bg-white/60 p-5 shadow-[0_20px_50px_-32px_rgba(92,42,53,0.45)] sm:p-8">
                <pillar.icon className="text-velvet" size={26} />
                <h3 className="mt-5 font-serif text-2xl text-earth">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-10 grid gap-6 rounded-[1.5rem] bg-burgundy px-4 py-8 text-center sm:mt-12 sm:rounded-[2rem] sm:px-10 sm:py-10 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl text-gold-soft sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-[11px] leading-snug tracking-wide text-blush uppercase sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
