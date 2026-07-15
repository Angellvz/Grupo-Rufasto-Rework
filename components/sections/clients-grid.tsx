import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";

const clientCount = 18;
const clients = Array.from({ length: clientCount }, (_, i) => ({
  id: i + 1,
  name: `Cliente ${i + 1}`,
  logo: `/images/clientes/cliente-${String(i + 1).padStart(2, "0")}.png`,
}));

export function ClientsGrid() {
  return (
    <section className="bg-background py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Clientes"
            title="Ellos confían en nosotros"
            description="Empresas industriales, mineras y corporativas del sur del Perú que respaldan nuestro trabajo."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, i) => (
            <Reveal key={client.id} delay={(i % 6) * 0.05}>
              <div className="flex aspect-[3/2] items-center justify-center rounded-xl border border-border bg-surface p-6 grayscale transition-all duration-300 hover:grayscale-0 hover:shadow-md">
                <div className="relative h-full w-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
