"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#historia", label: "História" },
  { href: "#galeria", label: "Galeria" },
  { href: "#produtos", label: "Produtos" },
  { href: "#programacao", label: "Programação" },
  { href: "#inscricao", label: "Inscrição" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled || open
          ? "border-b border-gold/15 bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-8 sm:py-3">
        <Logo
          light={!scrolled && !open}
          variant={scrolled || open ? "nav" : "mark"}
        />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition hover:text-gold ${
                scrolled ? "text-earth" : "text-cream/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inscricao"
            className="rounded-full bg-velvet px-5 py-2.5 text-sm font-medium text-cream shadow-md transition hover:bg-burgundy"
          >
            Garantir Minha Vaga
          </a>
        </nav>

        <button
          type="button"
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border lg:hidden ${
            scrolled || open ? "border-gold/30 text-earth" : "border-cream/30 text-cream"
          }`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-gold/10 bg-cream px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-2 py-3 text-lg text-earth"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-velvet px-5 py-3.5 text-center text-sm font-medium text-cream"
            >
              Garantir Minha Vaga
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
