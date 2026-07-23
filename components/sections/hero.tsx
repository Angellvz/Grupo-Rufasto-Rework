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
      className="relative w-full sm:min-h-[min(720px,100svh)] overflow-hidden bg-primary-900 pt-[72px]"
      aria-roledescription="carrusel"
      aria-label="Presentación de Grupo Rufasto"
    >
      <div className="relative mx-auto w-full aspect-[5/2] sm:aspect-auto sm:min-h-[calc(min(720px,100svh)-72px)] max-w-[1600px]">
        {slides.map((slide, index) => {
          const isLideres = slide.image === "/images/LideresSanidad.svg";
          const imageContent = (
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-[center_top] sm:object-center"
              sizes="100vw"
            />
          );

          return (
            <div
              key={slide.image}
              aria-hidden={index !== activeSlide}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === activeSlide
                  ? "z-10 translate-x-0 opacity-100"
                  : index < activeSlide
                    ? "z-0 -translate-x-8 opacity-0 pointer-events-none"
                    : "z-0 translate-x-8 opacity-0 pointer-events-none"
              }`}
            >
              {isLideres ? (
                <a 
                  href={whatsappLink("Hola Grupo Rufasto, quisiera información sobre sus servicios")}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative block h-full w-full"
                >
                  {imageContent}
                </a>
              ) : (
                imageContent
              )}
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-32 bg-gradient-to-t from-primary-900/10 sm:from-primary-900/35 to-transparent" />

        <button
          type="button"
          onClick={() => goToSlide((activeSlide - 1 + slides.length) % slides.length)}
          aria-label="Ver imagen anterior"
          className="absolute left-3 sm:left-4 top-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-primary-900/40 text-white backdrop-blur-sm transition hover:bg-primary-900/60"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          type="button"
          onClick={() => goToSlide((activeSlide + 1) % slides.length)}
          aria-label="Ver imagen siguiente"
          className="absolute right-3 sm:right-4 top-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-primary-900/40 text-white backdrop-blur-sm transition hover:bg-primary-900/60"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="absolute bottom-6 sm:bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2">
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
