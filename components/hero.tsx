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
        src="/images/edicoes/comunhao.jpg"
        alt="Mulheres reunidas em comunhão no Me Refugiar"
        fill
        priority
        className="hero-image object-cover object-[center_35%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-earth/90 via-earth/70 to-earth/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-earth/85 via-transparent to-earth/45" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-28 sm:px-8 sm:pb-24 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[10px] tracking-[0.22em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.32em]"
        >
          Congresso para mulheres · {siteConfig.edition.title}
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
          transition={{ delay: 0.18 }}
          className="mt-3 text-sm tracking-[0.22em] text-gold-soft uppercase"
        >
          Ministério de mulheres
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg"
        >
          {siteConfig.congressLine}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 max-w-lg text-sm text-gold-soft sm:text-base"
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.38 }}
          className="mt-4 inline-flex items-center gap-2 text-sm text-cream/85"
        >
          <CalendarDays size={16} className="text-gold-soft" />
          {siteConfig.edition.dates}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42 }}
          className="mt-3 inline-flex items-start gap-2 text-sm text-cream/85"
        >
          <MapPin size={16} className="mt-0.5 shrink-0 text-gold-soft" />
          <span>
            {siteConfig.venue.name} · {siteConfig.venue.city} — {siteConfig.venue.state}
          </span>
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.46 }}
          className="mt-5 max-w-md font-serif text-base italic leading-relaxed text-gold-soft sm:text-lg"
        >
          “{siteConfig.verse.text}”
          <cite className="mt-1 block not-italic text-xs tracking-[0.18em] text-cream/70 uppercase">
            {siteConfig.verse.ref}
          </cite>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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
      </div>
    </section>
  );
}
