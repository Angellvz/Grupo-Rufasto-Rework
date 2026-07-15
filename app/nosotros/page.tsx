import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Values } from "@/components/sections/values";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Grupo Rufasto: nuestra misión, visión y valores como líderes en sanidad ambiental en el sur del Perú.",
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
