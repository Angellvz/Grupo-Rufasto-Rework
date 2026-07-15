import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink } from "@/lib/data";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,197,63,0.18),transparent_50%)]" />
      <Container className="relative z-10 flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            ¿Listo para un espacio más limpio y seguro?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-lg text-white/60">
            Escríbenos y un especialista te contactará para diseñar el plan de
            sanidad ambiental que tu empresa necesita.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <LinkButton
            href={whatsappLink("Hola Grupo Rufasto, quisiera información sobre Rufasto Servicios")}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            size="lg"
          >
            <MessageCircle className="h-4 w-4" />
            Escríbenos por WhatsApp
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
