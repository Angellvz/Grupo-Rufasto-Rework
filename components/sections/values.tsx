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
            titleAccentWords={2}
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
