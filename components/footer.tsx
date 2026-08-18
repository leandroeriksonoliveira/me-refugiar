import type { ReactNode } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { getWhatsAppUrl, siteConfig } from "@/lib/event";

export function Footer() {
  return (
    <footer id="contato" className="bg-earth text-cream">
      <Container className="grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light variant="full" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-blush/80">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            <Social href={siteConfig.social.instagram} label="Instagram">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </Social>
            <Social href={siteConfig.social.youtube} label="YouTube">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                <path d="M22 12.2s0-3.2-.4-4.6c-.2-.8-.9-1.5-1.7-1.7C18.4 5.5 12 5.5 12 5.5s-6.4 0-7.9.4c-.8.2-1.5.9-1.7 1.7C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.8.9 1.5 1.7 1.7 1.5.4 7.9.4 7.9.4s6.4 0 7.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.4.4-4.6.4-4.6ZM10 15.2V9.2l5.2 3-5.2 3Z" />
              </svg>
            </Social>
            <Social href={siteConfig.social.facebook} label="Facebook">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
              </svg>
            </Social>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.22em] text-gold-soft uppercase">Local do evento</h3>
          <p className="mt-4 font-serif text-2xl">{siteConfig.venue.name}</p>
          <p className="mt-2 flex items-start gap-2 text-sm text-blush/80">
            <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
            {siteConfig.venue.address}, {siteConfig.venue.neighborhood}
            <br />
            {siteConfig.venue.city}/{siteConfig.venue.state} · {siteConfig.venue.zip}
          </p>
          <a
            href={siteConfig.venue.mapsUrl}
            className="mt-3 inline-block text-sm text-gold-soft underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Ver no mapa
          </a>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.22em] text-gold-soft uppercase">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm text-blush/80">
            <li>
              <Link href="/termos" className="hover:text-gold-soft">
                Termos de uso
              </Link>
            </li>
            <li>
              <Link href="/privacidade" className="hover:text-gold-soft">
                Política de privacidade
              </Link>
            </li>
            <li>
              <a href={getWhatsAppUrl()} className="hover:text-gold-soft" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </li>
            <li>
              <a href="#inscricao" className="hover:text-gold-soft">
                Inscrição
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-2 py-6 pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-xs text-blush/60 sm:flex-row sm:justify-between sm:pb-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>Idealizado e ministrado por {siteConfig.speaker}.</p>
        </Container>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream transition hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}
