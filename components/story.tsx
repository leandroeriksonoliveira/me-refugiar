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
            description="A história do Me Refugiar começou de uma forma pouco convencional, em um processo simples e, ao mesmo tempo, profundo."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Em 2021, a Pra. Renata aceitou um convite para deixar a vida
              agitada na capital mineira e se mudar para um sítio, na zona rural
              de uma cidade do interior. Era uma proposta para ajudar a cuidar do
              espaço e, ao mesmo tempo, desfrutar de um tempo de cura, silêncio e
              restauração.
            </p>
            <p>
              Essa mudança não foi apenas por interesses pessoais. Antes mesmo de
              tudo começar a acontecer, ela recebeu uma palavra de que se mudaria
              para um lugar de muitas árvores, onde as frutas tocavam o chão.
              Quando recebeu a proposta e foi visitar o local, viu exatamente o
              que o Senhor já havia anunciado. E seu coração, sempre obediente,
              não teve dúvidas para dizer sim.
            </p>
            <p>
              O que ela não sabia é que aquela mudança reservava algo especial não
              apenas para ela. As experiências e a profundidade de relacionamento
              com Deus que começaram a desabrochar naquele novo lugar eram
              sementes que ainda trariam muitos frutos.
            </p>
            <p>
              Em meio a encontros e conversas com amigos e familiares ali no
              sítio, nasceu uma ideia que carregava algo maior: o Me Refugiar
              Mulheres. Um anseio e um fogo ardendo no coração dos que estavam
              presentes por alcançar vidas! Com isso, Renata não estava mais
              sozinha: tinha outras mulheres sonhando o mesmo sonho e caminhando
              ao seu lado.
            </p>
            <p>
              A organização da parte logística não era o que causava frio na
              barriga, mas as ministrações. Como fazer? Será que estavam no
              caminho certo? Como as mulheres presentes receberiam as mensagens?
              E foi em um passo de fé e rendição ao Espírito Santo que elas
              decidiram assumir o risco e começaram.
            </p>
            <p>
              O que nasceu de uma experiência pessoal de restauração tornou-se um
              ambiente para proporcionar a outras mulheres encontros de
              transformação, rendição e relacionamento profundo com Deus. Desde
              2022, acontece anualmente um final de semana dedicado às mulheres
              que desejam um tempo de refúgio com Deus.
            </p>
            <p>
              O Me Refugiar Mulheres une profundidade espiritual e delicadeza
              humana. É um convite para que cada mulher possa se render
              completamente a Deus, reconhecer sua própria história, entender o
              quanto é amada, encontrar cura e descobrir que sempre é possível
              recomeçar.
            </p>
            <p>
              É sobre encontrar a liberdade, reconhecer quem Deus diz que somos e
              voltar a voar.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <blockquote className="mx-auto mt-12 max-w-2xl text-center font-serif text-2xl leading-snug text-velvet sm:text-3xl">
            <p>Voar alto.</p>
            <p>Cada vez mais alto.</p>
            <p>Sem medo, mas cheias de amor e esperança.</p>
            <p>Sem carregar pesos, mas radiantes em fé e alegria.</p>
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
            <p>E existe um Deus que continua escrevendo novas histórias.</p>
            <p className="pt-4 font-serif text-xl text-earth sm:text-2xl">
              Me Refugiar Mulheres — um lugar de refúgio, restauração, liberdade
              e voos altos.
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
