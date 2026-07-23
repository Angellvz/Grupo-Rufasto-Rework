import { AccentText } from "@/components/ui/accent-text";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  titleAccentWords?: number;
  descriptionAccentWords?: number;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  titleAccentWords,
  descriptionAccentWords = 3,
  align = "left",
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]",
            light ? "text-accent-300" : "text-primary-700"
          )}
        >
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-ink"
        )}
      >
        <AccentText
          as="span"
          text={title}
          accentWordCount={titleAccentWords}
          accentClassName={light ? "text-accent-300" : "text-primary-700"}
        />
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-ink/70"
          )}
        >
          <AccentText
            as="span"
            text={description}
            accentWordCount={descriptionAccentWords}
            accentClassName={light ? "font-medium text-accent-300" : "font-medium text-primary-700"}
          />
        </p>
      )}
    </div>
  );
}
