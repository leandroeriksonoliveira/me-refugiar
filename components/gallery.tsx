"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/lib/event";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const current = active !== null ? galleryImages[active] : null;

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((value) => (value === null ? 0 : (value + 1) % galleryImages.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((value) =>
          value === null ? 0 : (value + galleryImages.length - 1) % galleryImages.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="galeria" className="bg-cream py-16 sm:py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Galeria"
            title="Memórias das edições anteriores"
            description="Olhares, abraços, altares e jardins. Cada imagem guarda um pedaço do que Deus já fez — e do que ainda fará."
          />
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.04} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-auto md:h-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={index === 0 ? 1200 : 700}
                  height={index === 0 ? 1400 : 800}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-earth/0 transition group-hover:bg-earth/25" />
                <span className="absolute bottom-3 left-3 font-serif text-cream opacity-0 transition group-hover:opacity-100">
                  {image.caption}
                </span>
              </button>
            </FadeIn>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {current && active !== null ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-earth/85 p-3 backdrop-blur-sm sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute top-[max(1rem,env(safe-area-inset-top))] right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-earth/60 text-cream"
              aria-label="Fechar"
              onClick={() => setActive(null)}
            >
              <X size={20} />
            </button>
            <button
              type="button"
              className="absolute bottom-6 left-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-earth/70 text-cream sm:top-1/2 sm:bottom-auto sm:left-4 sm:-translate-y-1/2"
              aria-label="Anterior"
              onClick={(event) => {
                event.stopPropagation();
                setActive((value) =>
                  value === null ? 0 : (value + galleryImages.length - 1) % galleryImages.length,
                );
              }}
            >
              <ChevronLeft size={28} />
            </button>
            <motion.div
              key={current.src}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative max-h-[80vh] w-full max-w-4xl px-0 sm:px-14"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={1600}
                height={1200}
                className="max-h-[72vh] w-full rounded-2xl object-contain sm:max-h-[85vh]"
              />
              <p className="mt-3 text-center font-serif text-base text-cream sm:text-lg">{current.caption}</p>
            </motion.div>
            <button
              type="button"
              className="absolute right-3 bottom-6 z-10 grid h-11 w-11 place-items-center rounded-full bg-earth/70 text-cream sm:top-1/2 sm:right-4 sm:bottom-auto sm:-translate-y-1/2"
              aria-label="Próxima"
              onClick={(event) => {
                event.stopPropagation();
                setActive((value) =>
                  value === null ? 0 : (value + 1) % galleryImages.length,
                );
              }}
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
