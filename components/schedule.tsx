import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { schedule } from "@/lib/event";

export function Schedule() {
  return (
    <section id="programacao" className="bg-sand/60 py-24 sm:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Programação"
            title="Três dias para se esconder em Deus"
            description="Uma jornada pensada com ritmo, silêncio, palavra e comunhão — sem pressa, com intenção."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {schedule.map((block, index) => (
            <FadeIn key={block.day} delay={index * 0.08}>
              <article className="h-full rounded-[2rem] border border-gold/15 bg-cream p-8">
                <p className="text-xs tracking-[0.22em] text-gold uppercase">{block.date}</p>
                <h3 className="mt-2 font-serif text-3xl text-earth">{block.day}</h3>
                <ul className="mt-8 space-y-6">
                  {block.items.map((item) => (
                    <li key={item.title} className="border-t border-gold/15 pt-5">
                      <p className="text-xs font-medium tracking-widest text-velvet uppercase">
                        {item.time}
                      </p>
                      <h4 className="mt-1 font-serif text-xl text-earth">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
