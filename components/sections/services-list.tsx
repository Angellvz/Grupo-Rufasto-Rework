"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { services, whatsappLink } from "@/lib/data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesList() {
  return (
    <div id="servicios-lista">
      {services.map((service, i) => {
        const Icon = service.icon;
        const isElevador = service.slug === "alquiler-de-elevadores";
        const isEven = i % 2 === 0;
        
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
          <section
            key={service.slug}
            className={cn(
              "py-20 sm:py-28",
              isEven ? "bg-background" : "bg-primary-50/50 border-y border-primary/10"
            )}
          >
            <Container>
              <Reveal>
                <div
                  className={cn(
                    "flex flex-col gap-12 lg:items-center",
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}
                >
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] w-full lg:w-1/2 overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-2 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 to-transparent" />
                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col lg:w-1/2">
                    <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                      {formattedTitle}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-ink/70 text-justify">
                      {service.description}
                    </p>

                    {service.features && service.features.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-ink/80">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {isElevador && (
                      <div className="mt-8 rounded-2xl bg-white p-6 text-sm text-ink/80 border border-primary/15 shadow-md hover:border-primary/30 transition-colors">
                        <h4 className="mb-4 font-semibold text-primary text-base">Plataforma de Elevación Eléctrica Bipersonal</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                          <li><strong>Marca:</strong> Fullen</li>
                          <li><strong>Modelo:</strong> PSA140D</li>
                          <li><strong>Serie:</strong> QYLY20191011-10, AÑO 2019</li>
                          <li><strong>Columnas:</strong> 2</li>
                          <li><strong>Altura Máxima:</strong> 12.000mm</li>
                          <li><strong>Despeje del Suelo:</strong> 60mm</li>
                          <li><strong>Capacidad de Carga:</strong> 200kg</li>
                          <li><strong>Tamaño de Plataforma:</strong> 1570x600mm</li>
                          <li><strong>Tamaño de Equipo:</strong> 1820x950x2300mm</li>
                          <li><strong>Peso Operativo:</strong> 860kg</li>
                          <li><strong>Motor AC:</strong> 220V/60Hz</li>
                          <li><strong>Potencia:</strong> 1,5 Kw</li>
                        </ul>
                      </div>
                    )}

                    <a
                      href={whatsappLink(wsetMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-700 hover:shadow-lg group/btn"
                    >
                      <span className="absolute inset-0 -z-10 animate-echo rounded-full bg-primary" />
                      Consultar servicio
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
