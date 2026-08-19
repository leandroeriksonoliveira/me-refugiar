"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { Countdown } from "@/components/countdown";
import { siteConfig } from "@/lib/event";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=2400&q=80"
        alt="Ambiente acolhedor e luminoso do Congresso Me Refugiar"
        fill
        priority
        className="hero-image object-cover object-[center_30%] sm:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-earth/75 via-burgundy/55 to-earth/88" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-28 sm:px-8 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[11px] tracking-[0.22em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.32em]"
        >
          {siteConfig.tagline} · {siteConfig.edition.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="mt-4 font-serif text-5xl leading-[0.95] text-cream sm:text-7xl"
        >
          Me Refugiar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.16 }}
          className="mt-3 text-[11px] tracking-[0.28em] text-gold-soft uppercase sm:text-xs"
        >
          Mulheres
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg"
        >
          {siteConfig.congressLine}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28 }}
          className="mt-3 text-sm text-gold-soft"
        >
          {siteConfig.edition.theme} · {siteConfig.edition.sessions} ministrações
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="mt-5"
        >
          <Countdown light />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.38 }}
          className="mt-5 max-w-md font-serif text-base italic leading-relaxed text-gold-soft"
        >
          “{siteConfig.verse.text}”
          <cite className="mt-1 block not-italic text-xs tracking-[0.18em] text-cream/70 uppercase">
            {siteConfig.verse.ref}
          </cite>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <a
            href="#inscricao"
            className="inline-flex w-full items-center justify-center rounded-full bg-velvet px-8 py-3.5 text-sm font-semibold tracking-wide text-cream uppercase transition hover:bg-earth sm:w-auto"
          >
            Garantir Minha Vaga
          </a>
          <a
            href="#sobre"
            className="inline-flex w-full items-center justify-center rounded-full border border-cream/30 px-8 py-3.5 text-sm text-cream transition hover:border-gold-soft hover:text-gold-soft sm:w-auto"
          >
            Conhecer o congresso
          </a>
        </motion.div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-cream/80 sm:flex-row sm:gap-8">
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={16} className="text-gold-soft" />
            {siteConfig.edition.dates}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-gold-soft" />
            {siteConfig.venue.name} · {siteConfig.venue.city} — {siteConfig.venue.state}
          </span>
        </div>
      </div>
    </section>
  );
}
