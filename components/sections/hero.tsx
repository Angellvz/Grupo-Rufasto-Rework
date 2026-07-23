"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { whatsappLink } from "@/lib/data";

const slides = [
  {
    image: "/images/LideresSanidad.svg",
    alt: "Grupo Rufasto, líderes en sanidad ambiental",
  },
  {
    image: "/images/RufastoTrabajadores.svg",
    alt: "Trabajadores de Grupo Rufasto",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setActiveSlide(index);

  return (
    <section
      className="relative min-h-[min(720px,100svh)] overflow-hidden bg-primary-900 pt-[72px]"
      aria-roledescription="carrusel"
      aria-label="Presentación de Grupo Rufasto"
    >
      <div className="relative mx-auto min-h-[calc(min(720px,100svh)-72px)] max-w-[1600px]">
        {slides.map((slide, index) => {
          const isLideres = slide.image === "/images/LideresSanidad.svg";
          const imageContent = (
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          );

          return (
            <div
              key={slide.image}
              aria-hidden={index !== activeSlide}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === activeSlide
                  ? "translate-x-0 opacity-100"
                  : index < activeSlide
                    ? "-translate-x-8 opacity-0"
                    : "translate-x-8 opacity-0"
              }`}
            >
              {isLideres ? (
                <a 
                  href={whatsappLink("Hola Grupo Rufasto, quisiera información sobre sus servicios")}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block h-full w-full"
                >
                  {imageContent}
                </a>
              ) : (
                imageContent
              )}
            </div>
          );
        })}

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-900/35 to-transparent" />

        <button
          type="button"
          onClick={() => goToSlide((activeSlide - 1 + slides.length) % slides.length)}
          aria-label="Ver imagen anterior"
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-primary-900/30 p-3 text-white backdrop-blur-sm transition hover:bg-primary-900/60 sm:block"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goToSlide((activeSlide + 1) % slides.length)}
          aria-label="Ver imagen siguiente"
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-primary-900/30 p-3 text-white backdrop-blur-sm transition hover:bg-primary-900/60 sm:block"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ver diapositiva ${index + 1}`}
              aria-current={index === activeSlide}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide ? "w-8 bg-accent-400" : "w-2.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
