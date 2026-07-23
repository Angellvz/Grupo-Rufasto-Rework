import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { AccentText } from "@/components/ui/accent-text";
import { siteConfig } from "@/lib/data";

export function About() {
  return (
    <>
      <section className="bg-background pt-[72px]">
        <Container className="grid gap-16 py-24 sm:py-28 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Quiénes somos
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              <AccentText
                as="span"
                text="Somos Grupo Rufasto"
                accentWordCount={2}
                accentClassName="text-primary"
              />
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              En Grupo Rufasto somos líderes en sanidad ambiental, especializados
              en limpieza industrial, control fitosanitario y desinfección. Con
              años de experiencia y el respaldo de nuestros clientes,
              garantizamos calidad en cada servicio.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Trabajamos con productos eco-amigables, comprometidos con el medio
              ambiente, y ofrecemos cobertura en {siteConfig.locations.join(", ")}.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative w-full lg:ml-auto">
              <Image
                src="/images/nosotros.jpg"
                alt="Equipo técnico de Grupo Rufasto"
                width={800}
                height={600}
                className="h-auto w-full rounded-3xl object-contain shadow-xl"
                sizes="(min-width: 1024px) 50vw, 90vw"
                priority
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <Container className="grid gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="mt-8 font-display text-2xl font-semibold text-ink">
                Nuestra Misión
              </h2>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink/70">
                Brindar un servicio de manera oportuna, responsable y de
                calidad, garantizando eficiencia y eficacia en cada trabajo, y
                asesorando a nuestros clientes para cumplir con los estándares
                más altos de calidad y el mejor staff de trabajadores.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="mt-8 font-display text-2xl font-semibold text-ink">
                Nuestra Visión
              </h2>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink/70">
                Ser la empresa líder en la prestación de servicios de
                saneamiento ambiental y limpieza industrial en el mercado
                nacional, brindando un servicio de calidad certificado, con
                productos biológicos y máquinas de última generación.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
