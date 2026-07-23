import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Grupo Rufasto - Ir al inicio"
      className={cn("relative flex h-14 w-[210px] shrink-0 sm:h-16 sm:w-[240px]", className)}
    >
      <Image
        src="/images/LogoRufasto.png"
        alt="Grupo Rufasto"
        fill
        priority
        className={cn("object-contain object-left", light && "brightness-0 invert")}
        sizes="240px"
      />
    </Link>
  );
}
