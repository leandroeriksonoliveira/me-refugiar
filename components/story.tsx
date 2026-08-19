import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/event";

export function Story() {
  return (
    <section id="historia" className="bg-sand/50 py-16 sm:py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="A origem"
            title="Me Refugiar Mulheres"
            description="Há cinco anos, esse projeto começou de uma forma simples e profunda."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Renata deixou a cidade e se mudou para a roça, vivendo um tempo de
              cura, silêncio e restauração. Foi nesse período que, em uma conversa
              com seu irmão e alguns amigos, nasceu uma ideia que carregava algo
              maior: o Me Refugiar Mulheres.
            </p>
            <p>
              O que nasceu de uma experiência pessoal de restauração tornou-se um
              movimento para proporcionar a outras mulheres encontros de
              transformação, por meio de movimentos, ações e interações que
              alcançam o coração de cada mulher.
            </p>
            <p>
              Me Refugiar Mulheres une profundidade espiritual e delicadeza
              humana. É um convite para que cada mulher deixe aos pés de Deus os
              pesos que carrega, reconheça sua própria história, encontre cura e
              descubra que é possível recomeçar.
            </p>
            <p>
              É sobre deixar para trás aquilo que aprisiona, reconhecer quem Deus
              diz que somos e voltar a voar.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <blockquote className="mx-auto mt-12 max-w-2xl text-center font-serif text-2xl leading-snug text-velvet sm:text-3xl">
            <p>Voar alto.</p>
            <p>Cada vez mais alto.</p>
            <p>Sem medo, mas com esperança.</p>
            <p>Sem carregar pesos, mas com fé.</p>
            <p className="mt-4 text-xl text-earth sm:text-2xl">
              Sem esconder a própria história, mas permitindo que Deus transforme
              cada capítulo em testemunho.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="mx-auto mt-12 max-w-2xl space-y-3 text-center text-base leading-relaxed text-muted sm:text-lg">
            <p>Porque existe um lugar seguro.</p>
            <p>Existe um caminho de restauração.</p>
            <p>E existe um Deus que ainda está escrevendo novas histórias.</p>
            <p className="pt-4 font-serif text-xl text-earth sm:text-2xl">
              Me Refugiar Mulheres — um lugar para se refugiar, ser restaurada,
              ser livre e voltar a voar.
            </p>
            <blockquote className="pt-6 font-serif text-xl italic text-velvet sm:text-2xl">
              “{siteConfig.verse.text}”
              <cite className="mt-2 block not-italic text-sm tracking-[0.18em] text-gold uppercase">
                {siteConfig.verse.ref}
              </cite>
            </blockquote>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
