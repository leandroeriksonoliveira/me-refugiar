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
        <Container className="flex items-center justify-between gap-3 py-4 sm:py-5">
          <Logo />
          <Link href="/" className="shrink-0 text-xs text-velvet hover:text-gold sm:text-sm">
            Voltar
          </Link>
        </Container>
      </header>
      <main className="bg-cream py-16">
        <Container className="max-w-3xl">
          <p className="text-xs tracking-[0.28em] text-gold uppercase">Institucional</p>
          <h1 className="mt-3 font-serif text-3xl text-earth sm:text-5xl">{title}</h1>
          <div className="gold-rule my-8" />
          <div className="space-y-5 text-sm leading-relaxed text-muted">{children}</div>
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
