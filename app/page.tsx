import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Certifications } from "@/components/sections/certifications";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Values } from "@/components/sections/values";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Grupo Rufasto - Sanidad Ambiental y Limpieza Industrial",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Certifications />
      <WhyChooseUs />
      <ServicesGrid compact />
      <Values />
      <Cta />
    </>
  );
}
