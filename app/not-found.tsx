import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-background pt-[72px]">
      <Container className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent-700">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-4 text-ink/60">
          La página que buscas no existe o fue movida.
        </p>
        <LinkButton href="/" variant="primary" size="lg" className="mt-8">
          Volver al inicio
        </LinkButton>
      </Container>
    </section>
  );
}
