import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";

const clientCount = 18;
const clients = Array.from({ length: clientCount }, (_, i) => ({
  id: i + 1,
  name: `Cliente ${i + 1}`,
  logo: `/images/clientes/logo${String(i + 1).padStart(2, "0")}.png`,
}));

export function ClientsGrid() {
  return (
    <section className="bg-background py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Clientes"
            title="Ellos confían en nosotros"
            titleAccentWords={2}
            description="Empresas industriales, mineras y corporativas del sur del Perú que respaldan nuestro trabajo."
            descriptionAccentWords={2}
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, i) => (
            <Reveal key={client.id} delay={(i % 6) * 0.05}>
              <div className="group relative flex aspect-[3/2] items-center justify-center rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain transition-all duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
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
