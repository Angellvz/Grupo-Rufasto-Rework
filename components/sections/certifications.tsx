import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

// Sustituye cada ruta por el PDF correspondiente cuando lo agregues a public/certificados.
const certifications = [
  { image: "/images/Iso9001.png", name: "ISO 9001", href: "/certificados/iso-9001.pdf" },
  { image: "/images/Iso45001.png", name: "ISO 45001", href: "/certificados/iso-45001.pdf" },
  { image: "/images/Iso14001.png", name: "ISO 14001", href: "/certificados/iso-14001.pdf" },
];

export function Certifications() {
  return (
    <section className="bg-primary-50/60 py-20 sm:py-24">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Nuestro respaldo"
          title="Certificaciones"
          description="Estándares que respaldan nuestro compromiso con la calidad, la seguridad y el cuidado ambiental."
          descriptionAccentWords={3}
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {certifications.map((certification) => (
            <a
              key={certification.name}
              href={certification.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-52 flex-col items-center justify-center rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent-400 hover:shadow-lg"
            >
              <div className="relative h-28 w-full">
                <Image
                  src={certification.image}
                  alt={`Certificación ${certification.name}`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 640px) 240px, 70vw"
                />
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-800 group-hover:text-accent-700">
                Ver certificado <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
