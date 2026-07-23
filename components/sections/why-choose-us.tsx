"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { whyChooseUs } from "@/lib/data";

const slides = [
  { image: "/images/noscuidamos.png", alt: "En Grupo Rufasto nos cuidamos" },
  { image: "/images/trabajarnosotros.png", alt: "Trabaja con Grupo Rufasto" },
];

export function WhyChooseUs() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Nuestro compromiso"
          title="¿Por qué elegir a Grupo Rufasto?"
          titleAccentWords={2}
          description="Experiencia, cercanía y procesos responsables para cuidar cada espacio."
          descriptionAccentWords={3}
        />

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-primary-900 shadow-xl">
            {slides.map((slide, index) => (
              <div
                key={slide.image}
                className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                aria-hidden={index !== activeSlide}
              >
                <Image src={slide.image} alt={slide.alt} fill className="object-cover" sizes="(min-width: 1024px) 960px, 100vw" />
              </div>
            ))}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                  aria-current={index === activeSlide}
                  className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-8 bg-accent-400" : "w-2.5 bg-white/70"}`}
                />
              ))}
            </div>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <li className="group h-full rounded-2xl bg-primary-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-100 hover:shadow-md">
                  <CheckCircle2 className="h-5 w-5 text-accent-600 transition-transform duration-300 group-hover:scale-110" />
                  <p className="mt-4 font-display font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.description}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
