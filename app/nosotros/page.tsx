import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Values } from "@/components/sections/values";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Empresa de Fumigación y Sanidad Ambiental",
  description:
    "Conoce a Grupo Rufasto, líderes en fumigación y sanidad ambiental en el sur del Perú. Más de 10 años garantizando espacios seguros y libres de plagas.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <About />
      <Values />
      <ContactForm />
    </>
  );
}
