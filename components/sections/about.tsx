import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/data";

export function About() {
  return (
    <section className="bg-primary-900 pt-[72px]">
      <Container className="grid gap-16 py-24 sm:py-28 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
            Quiénes somos
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Somos Grupo Rufasto
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            En Grupo Rufasto somos líderes en sanidad ambiental, especializados
            en limpieza industrial, control fitosanitario y desinfección. Con
            años de experiencia y el respaldo de nuestros clientes,
            garantizamos calidad en cada servicio.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Trabajamos con productos eco-amigables, comprometidos con el medio
            ambiente, y ofrecemos cobertura en {siteConfig.locations.join(", ")}.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl lg:ml-auto">
            <Image
              src="/images/equipo.jpg"
              alt="Equipo técnico de Grupo Rufasto"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 90vw"
            />
          </div>
        </Reveal>
      </Container>

      <div className="border-t border-white/10 bg-primary-900">
        <Container className="grid gap-8 py-16 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <Target className="h-6 w-6 text-accent-400" />
              <h2 className="mt-4 font-display text-xl font-semibold text-white">
                Nuestra Misión
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Brindar un servicio de manera oportuna, responsable y de
                calidad, garantizando eficiencia y eficacia en cada trabajo, y
                asesorando a nuestros clientes para cumplir con los estándares
                más altos de calidad y el mejor staff de trabajadores.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <Eye className="h-6 w-6 text-accent-400" />
              <h2 className="mt-4 font-display text-xl font-semibold text-white">
                Nuestra Visión
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Ser la empresa líder en la prestación de servicios de
                saneamiento ambiental y limpieza industrial en el mercado
                nacional, brindando un servicio de calidad certificado, con
                productos biológicos y máquinas de última generación.
              </p>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
