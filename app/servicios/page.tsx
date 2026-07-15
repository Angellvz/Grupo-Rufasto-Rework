import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Certifications } from "@/components/sections/certifications";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desinfección, desinsectación, desratización, control aviar, limpieza de tanques, limpieza industrial, áreas verdes y alquiler de elevadores.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Un servicio para cada necesidad de sanidad ambiental"
        description="Ocho líneas de servicio especializadas, con protocolos certificados y productos eco-amigables."
      />
      <ServicesGrid />
      <Certifications />
      <Cta />
    </>
  );
}
