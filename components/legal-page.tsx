import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-gold/15 bg-cream">
        <Container className="flex items-center justify-between py-5">
          <Logo />
          <Link href="/" className="text-sm text-velvet hover:text-gold">
            Voltar ao início
          </Link>
        </Container>
      </header>
      <main className="bg-cream py-16">
        <Container className="max-w-3xl">
          <p className="text-xs tracking-[0.28em] text-gold uppercase">Institucional</p>
          <h1 className="mt-3 font-serif text-4xl text-earth sm:text-5xl">{title}</h1>
          <div className="gold-rule my-8" />
          <div className="space-y-5 text-sm leading-relaxed text-muted">{children}</div>
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
