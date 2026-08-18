import Image from "next/image";
import { Heart, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig, stats } from "@/lib/event";

const pillars = [
  {
    icon: Heart,
    title: "Refúgio",
    text: "Um tempo para sair da pressa e se esconder em Deus, sem máscaras e sem pressa de performar fé.",
  },
  {
    icon: Sparkles,
    title: "Restauração",
    text: "Palavra, oração e cuidado pastoral para curar feridas, renovar a identidade e reabrir o coração.",
  },
  {
    icon: Users,
    title: "Comunhão",
    text: "Mulheres caminhando juntas — um espaço seguro para partilhar, chorar, rir e recomeçar.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-cream py-16 sm:py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="O congresso"
            title="Um lugar para voltar para casa"
            description="O Me Refugiar nasceu do desejo de criar um encontro onde a mulher possa descansar, ser vista e lembrar quem ela é diante de Deus. Não é um evento para impressionar. É um tempo para restaurar."
          />
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

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-square sm:rounded-[2rem]">
              <Image
                src="/images/renata-vitorino-coelho.png"
                alt={`${siteConfig.speaker}, idealizadora do Congresso Me Refugiar`}
                width={1200}
                height={1200}
                className="h-full w-full object-cover object-[center_20%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-transparent to-transparent" />
              <p className="absolute right-5 bottom-5 left-5 font-serif text-xl text-cream sm:bottom-6 sm:left-6 sm:right-auto sm:text-2xl">
                {siteConfig.speaker}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.28em] text-gold uppercase">A idealizadora</p>
            <h3 className="mt-3 font-serif text-3xl text-earth sm:text-4xl">{siteConfig.speaker}</h3>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-velvet transition hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
              @renatavco
            </a>
            <div className="gold-rule my-6 w-24" />
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                Renata Vitorino Coelho carrega um chamado claro: acompanhar mulheres
                até o lugar seguro onde Deus as espera. Com uma voz acolhedora e uma
                escuta pastoral, ela tem conduzido encontros de restauração, ensino
                bíblico e cuidado emocional.
              </p>
              <p>
                Idealizadora do Congresso Me Refugiar, Renata une profundidade
                espiritual e delicadeza humana. Sua mensagem convida cada mulher a
                largar o peso, reconhecer a própria história e se esconder no
                refúgio que não falha.
              </p>
              <p className="font-serif text-xl text-velvet italic">
                “Há um lugar em Deus onde a alma cansa de lutar e começa a
                descansar.”
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 rounded-[1.5rem] bg-burgundy px-4 py-8 text-center sm:mt-20 sm:gap-4 sm:rounded-[2rem] sm:px-10 sm:py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl text-gold-soft sm:text-5xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-[10px] leading-snug tracking-wide text-blush uppercase sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
