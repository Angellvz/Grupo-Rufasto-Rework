import { splitAccentWords } from "@/lib/text-accent";
import { cn } from "@/lib/utils";

type AccentTextProps = {
  text: string;
  accentWordCount?: number;
  className?: string;
  accentClassName?: string;
  as?: "span" | "p" | "h1" | "h2";
};

export function AccentText({
  text,
  accentWordCount,
  className,
  accentClassName,
  as: Tag = "span",
}: AccentTextProps) {
  const { main, accent } = splitAccentWords(text, accentWordCount);

  return (
    <Tag className={className}>
      {main && <>{main}{accent ? " " : ""}</>}
      {accent && <span className={cn(accentClassName)}>{accent}</span>}
    </Tag>
  );
}
