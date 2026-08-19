import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { schedule, siteConfig } from "@/lib/event";

export function Schedule() {
  return (
    <section id="programacao" className="bg-sand/60 py-16 sm:py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Programação"
            title="Três dias para ir mais profundo Nele"
            description={schedule.note}
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {schedule.days.map((block, index) => (
            <FadeIn key={block.day} delay={index * 0.08}>
              <article className="h-full rounded-[1.5rem] border border-gold/15 bg-cream p-6 text-center sm:rounded-[2rem] sm:p-8">
                <p className="text-xs tracking-[0.22em] text-gold uppercase">{block.date}</p>
                <h3 className="mt-2 font-serif text-3xl text-earth">{block.day}</h3>
                <p className="mt-4 text-sm text-muted">
                  {siteConfig.edition.theme}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
