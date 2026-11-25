import Link from "next/link";
import { BrandMark } from "@/components/layout/BrandMark";

interface BrandProps {
  className?: string;
}

/** Wordmark tipográfico propio (placeholder permitido por la prueba). */
export function Brand({ className }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="Giunti Psychometrics, vai all'inizio della pagina"
      className={`flex shrink-0 items-center gap-2.5 sm:gap-3 ${className ?? ""}`}
    >
      <BrandMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="flex flex-col">
        <span className="font-display text-[21px] font-semibold leading-none tracking-[-0.01em] text-ink sm:text-[23px]">
          Giunti
        </span>
        <span className="mt-1 font-sans text-[10px] font-medium uppercase leading-none tracking-[0.22em] text-ink-soft sm:text-[10.5px]">
          Psychometrics
        </span>
      </span>
    </Link>
  );
}
