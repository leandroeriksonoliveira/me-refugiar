import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PrayerForm } from "@/components/prayer-form";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/event";

export const metadata: Metadata = {
  title: "Pedido de oração",
  description:
    "Envie um pedido de oração confidencial para a equipe do Me Refugiar. Somente a organização lê o que você escrever.",
};

export default function OracaoPage() {
  return (
    <>
      <Header />
      <main className="bg-sand/40 pt-24 pb-20 sm:pt-28 sm:pb-28">
        <Container className="max-w-2xl">
          <p className="text-xs tracking-[0.28em] text-gold uppercase">Oração</p>
          <h1 className="mt-3 font-serif text-4xl text-earth sm:text-5xl">
            Deixe o seu pedido
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Um espaço seguro para apresentar ao Pai o que pesa o coração. Qualquer
            mulher pode enviar. A equipe do {siteConfig.name} receberá o pedido e
            orará com confidencialidade — ele não aparece publicamente.
          </p>
          <div className="mt-10">
            <PrayerForm />
          </div>
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
