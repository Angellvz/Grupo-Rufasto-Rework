"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { services, whatsappLink } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const list = services;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-surface py-24 sm:py-32" id="servicios">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Soluciones integrales de sanidad ambiental"
            titleAccentWords={2}
            description="Del control de plagas a la limpieza industrial: un servicio diseñado para cada tipo de espacio."
            descriptionAccentWords={4}
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-5">
              {list.map((service, i) => {
                const Icon = service.icon;
                const words = service.title.split(" ");
                const formattedTitle = words.length > 1 ? (
                  <>
                    {words.slice(0, -1).join(" ")} <span className="text-primary">{words[words.length - 1]}</span>
                  </>
                ) : (
                  service.title
                );
                
                const wsetMessage = `Hola, quisiera información sobre el servicio de ${service.title}`;

                return (
                  <div
                    key={service.slug}
                    className="min-w-0 shrink-0 grow-0 basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
                  >
                    <Reveal className="h-full">
                      <Card className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/10 hover:border-primary/20">
                        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-white">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent" />
                          <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span
                            aria-hidden
                            className="pointer-events-none absolute inset-y-0 left-[-40%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-accent-400/30 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="font-display text-xl font-semibold text-ink">
                            {formattedTitle}
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                            {service.description}
                          </p>
                          <a
                            href={whatsappLink(wsetMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-white group/btn"
                          >
                            <span className="absolute inset-0 -z-10 animate-echo rounded-full bg-primary" />
                            Consultar servicio
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      </Card>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-3 sm:-left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-ink shadow-md transition-all hover:border-primary hover:bg-primary hover:text-white hidden sm:flex"
            aria-label="Servicio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-3 sm:-right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-ink shadow-md transition-all hover:border-primary hover:bg-primary hover:text-white hidden sm:flex"
            aria-label="Siguiente servicio"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
