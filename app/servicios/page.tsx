import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ServicesList } from "@/components/sections/services-list";

export const metadata: Metadata = {
  title: "Servicios de Fumigación y Sanidad Ambiental",
  description:
    "Expertos en fumigación, desinfección, control de plagas y limpieza industrial en Arequipa, Cusco, Puno, Moquegua y Tacna.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Un servicio para cada necesidad de sanidad ambiental"
        titleAccentWords={2}
        description="Ocho líneas de servicio especializadas, con protocolos certificados y productos eco-amigables."
        descriptionAccentWords={2}
        backgroundImage="/images/ServiciosPortada.png"
      />
      <ServicesList />
    </>
  );
}
