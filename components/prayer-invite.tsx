import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function PrayerInvite() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="rounded-[1.5rem] bg-burgundy px-6 py-10 text-center sm:rounded-[2rem] sm:px-12 sm:py-14">
            <p className="text-xs tracking-[0.28em] text-gold-soft uppercase">Oração</p>
            <h2 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
              Tem algo para apresentar ao Pai?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blush/90 sm:text-base">
              Deixe um pedido confidencial. Somente a organização do Me Refugiar
              lê — nada é publicado no site.
            </p>
            <Link
              href="/oracao"
              className="mt-8 inline-flex rounded-full bg-velvet px-8 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition hover:bg-earth"
            >
              Enviar pedido de oração
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
