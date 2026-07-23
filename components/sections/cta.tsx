import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { whatsappLink } from "@/lib/data";

export function Cta() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <Container>
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-700">
            Soluciones complementarias
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Rufasto <span className="text-[#007224]">Servicios</span>
          </h2>
          <p className="mt-3 text-ink/60">
            Conoce nuestra otra empresa y contáctanos directamente por WhatsApp.
          </p>
        </div>
        <a
          href={whatsappLink("Hola, quisiera información sobre Rufasto Servicios")}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto block max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-border"
        >
          <div className="relative aspect-[16/7] min-h-52 w-full">
            <Image
              src="/images/Rufasto servicios.png"
              alt="Rufasto Servicios"
              fill
              className="object-contain transition duration-500 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 960px, 100vw"
            />
          </div>
        </a>
      </Container>
    </section>
  );
}
