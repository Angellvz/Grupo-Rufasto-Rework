import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl">
            <Image
              src="/images/empresa.jpg"
              alt="Técnico de Grupo Rufasto en labores de saneamiento"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionTitle
              eyebrow="Por qué elegirnos"
              title="Confianza construida en cada intervención"
              description="Con años de experiencia y el respaldo de nuestros clientes, garantizamos calidad, trazabilidad y cuidado ambiental en cada servicio que realizamos."
            />
          </Reveal>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.08}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <div>
                    <p className="font-display text-base font-semibold text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {item.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
