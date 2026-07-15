import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ClientsGrid } from "@/components/sections/clients-grid";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Clientes",
  description:
    "Empresas industriales, mineras y corporativas del sur del Perú que confían en Grupo Rufasto.",
  alternates: { canonical: "/clientes" },
};

export default function ClientesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clientes"
        title="Empresas que confían en nuestro trabajo"
        description="Acompañamos a organizaciones industriales, mineras y corporativas en el sur del Perú con servicios de sanidad ambiental certificados."
      />
      <ClientsGrid />
      <Cta />
    </>
  );
}
