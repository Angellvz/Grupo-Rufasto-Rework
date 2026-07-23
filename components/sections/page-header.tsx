import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { AccentText } from "@/components/ui/accent-text";

export function PageHeader({
  eyebrow,
  title,
  description,
  titleAccentWords = 2,
  descriptionAccentWords = 3,
  backgroundImage,
}: {
  eyebrow: string;
  title: string;
  description: string;
  titleAccentWords?: number;
  descriptionAccentWords?: number;
  backgroundImage?: string;
}) {
  return (
    <section className={`relative pt-[72px] ${!backgroundImage ? "bg-primary-900" : "bg-ink"}`}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </>
      )}
      <Container className="relative py-20 sm:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-300 shadow-sm">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl">
            <AccentText
              as="span"
              text={title}
              accentWordCount={titleAccentWords}
              accentClassName="text-green-400 drop-shadow-md"
            />
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-md">
            <AccentText
              as="span"
              text={description}
              accentWordCount={descriptionAccentWords}
              accentClassName="font-medium text-green-400"
            />
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
