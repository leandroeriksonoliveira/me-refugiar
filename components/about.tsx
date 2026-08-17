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
    <section id="sobre" className="relative bg-cream py-24 sm:py-32">
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
              <article className="h-full rounded-3xl border border-gold/15 bg-white/60 p-8 shadow-[0_20px_50px_-32px_rgba(92,42,53,0.45)]">
                <pillar.icon className="text-velvet" size={26} />
                <h3 className="mt-5 font-serif text-2xl text-earth">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=80"
                alt={`Retrato institucional de ${siteConfig.speaker}`}
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 font-serif text-2xl text-cream">
                {siteConfig.speaker}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.28em] text-gold uppercase">A idealizadora</p>
            <h3 className="mt-3 font-serif text-4xl text-earth">{siteConfig.speaker}</h3>
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

        <div className="mt-20 grid grid-cols-2 gap-4 rounded-[2rem] bg-burgundy px-6 py-10 text-center sm:grid-cols-4 sm:px-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl text-gold-soft sm:text-5xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs tracking-wide text-blush uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
