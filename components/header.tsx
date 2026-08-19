"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#historia", label: "História" },
  { href: "#galeria", label: "Galeria" },
  { href: "#produtos", label: "Produtos" },
  { href: "#programacao", label: "Programação" },
  { href: "/oracao", label: "Oração" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const pathname = usePathname();
  const onHome = pathname === "/";
  const overHero = onHome && !scrolled && !open;

  function navHref(href: string) {
    if (href.startsWith("/")) return href;
    return onHome ? href : `/${href}`;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        overHero
          ? "border-b border-cream/10 bg-earth/55 backdrop-blur-md"
          : "border-b border-gold/15 bg-cream/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:px-8">
        <Logo light={overHero} variant="nav" />

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={navHref(link.href)}
              className={`rounded-full px-3 py-2 text-[13px] tracking-wide whitespace-nowrap transition xl:px-3.5 ${
                pathname === link.href
                  ? overHero
                    ? "bg-cream/15 text-cream"
                    : "bg-sand/80 text-earth"
                  : overHero
                    ? "text-cream/90 hover:bg-cream/10 hover:text-cream"
                    : "text-earth/80 hover:bg-sand/60 hover:text-earth"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={navHref("#inscricao")}
            className="ml-2 rounded-full bg-velvet px-5 py-2 text-[13px] font-medium text-cream shadow-sm transition hover:bg-burgundy"
          >
            Garantir vaga
          </a>
        </nav>

        <button
          type="button"
          className={`ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border lg:hidden ${
            overHero ? "border-cream/30 text-cream" : "border-gold/30 text-earth"
          }`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-cream px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={navHref(link.href)}
                className="rounded-xl px-2 py-3 text-lg text-earth"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={navHref("#inscricao")}
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-velvet px-5 py-3.5 text-center text-sm font-medium text-cream"
            >
              Garantir vaga
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
