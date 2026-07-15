"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { whatsappLink } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary-900 pt-[72px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Equipo de Grupo Rufasto realizando sanidad ambiental industrial"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/85 to-primary-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,197,63,0.15),transparent_45%)]" />
      </div>

      <Container className="relative z-10 py-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-300 backdrop-blur-sm"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Sanidad ambiental certificada
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Espacios limpios,
            <br />
            <span className="text-accent-400">seguros y saludables.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Líderes en sanidad ambiental, limpieza industrial y control de
            plagas en el sur del Perú. Productos eco-amigables, resultados
            certificados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <LinkButton
              href={whatsappLink("Hola Grupo Rufasto, quisiera información sobre Rufasto Servicios")}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              size="lg"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar cotización
            </LinkButton>
            <LinkButton href="/servicios" variant="outline" size="lg">
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
