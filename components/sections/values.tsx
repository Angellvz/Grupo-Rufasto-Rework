import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { values } from "@/lib/data";

export function Values() {
  return (
    <section className="bg-background py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Nuestros valores"
            title="Los principios detrás de cada servicio"
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center gap-2 bg-surface px-6 py-10 text-center">
                <span className="font-mono text-xs text-accent-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="text-xs leading-relaxed text-ink/50">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
