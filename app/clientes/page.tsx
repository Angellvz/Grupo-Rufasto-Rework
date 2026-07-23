import type { Metadata } from "next";
import { ClientsGrid } from "@/components/sections/clients-grid";

export const metadata: Metadata = {
  title: "Nuestros Clientes | Fumigación y Sanidad Ambiental",
  description:
    "Empresas industriales, mineras y corporativas del sur del Perú que confían en Grupo Rufasto para sus servicios de fumigación y sanidad ambiental.",
  alternates: { canonical: "/clientes" },
};

export default function ClientesPage() {
  return (
    <>
      <ClientsGrid />
    </>
  );
}
