"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
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
      <div className="absolute inset-0 bg-gradient-to-b from-earth/70 via-burgundy/55 to-earth/85" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-28 sm:px-8 sm:pb-28 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-full text-[10px] leading-relaxed tracking-[0.18em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.35em]"
        >
          {siteConfig.tagline} · {siteConfig.edition.title}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-lg sm:mt-5"
        >
          <Image
            src="/brand/logo-full-light.png"
            alt="Me Refugiar — Ministério de Mulheres"
            width={900}
            height={587}
            priority
            className="h-auto w-[min(100%,18rem)] sm:w-[26rem]"
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:mt-6 sm:text-xl"
        >
          Venha descansar. Encontre refúgio. Renove a sua identidade em Deus —
          um congresso para mulheres que desejam voltar ao coração do Pai.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-4 font-serif text-xl text-gold-soft italic"
        >
          Com {siteConfig.speaker}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
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

        <div className="mt-10 flex flex-col gap-3 text-sm text-cream/80 sm:flex-row sm:gap-8">
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={16} className="text-gold-soft" />
            {siteConfig.edition.dates}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-gold-soft" />
            {siteConfig.venue.name} · {siteConfig.venue.city}/{siteConfig.venue.state}
          </span>
        </div>
      </div>
    </section>
  );
}
