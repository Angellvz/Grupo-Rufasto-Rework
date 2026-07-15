import { ShieldCheck, FileCheck2, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/container";

const certs = [
  { icon: ShieldCheck, label: "Certificación Sanitaria Vigente" },
  { icon: FileCheck2, label: "Fichas Técnicas Documentadas" },
  { icon: BadgeCheck, label: "Protocolos de Bioseguridad" },
  { icon: ShieldCheck, label: "Cobertura Regional Autorizada" },
];

export function Certifications() {
  return (
    <section className="border-y border-border bg-primary-50/40 py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {certs.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-primary-800">
              <Icon className="h-5 w-5 shrink-0 text-accent-600" />
              <span className="text-sm font-medium tracking-tight">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
