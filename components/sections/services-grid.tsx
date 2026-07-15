import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/data";

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const list = compact ? services.slice(0, 6) : services;

  return (
    <section className="bg-surface py-24 sm:py-32" id="servicios">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionTitle
              eyebrow="Nuestros servicios"
              title="Soluciones integrales de sanidad ambiental"
              description="Del control de plagas a la limpieza industrial: un servicio diseñado para cada tipo de espacio."
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Card className="h-full transition-shadow duration-300 hover:shadow-xl hover:shadow-primary-900/5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    {/* Signature: a "clean line" wipe that sweeps across the image on hover,
                        echoing the act of sanitizing a surface. */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-[-40%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-accent-400/70 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-primary transition-colors group-hover:text-accent-700">
                      Saber más
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
