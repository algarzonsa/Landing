"use client";

import Image from "next/image";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/header/guinti-logo.png"
      alt="Logo de Giunti Psychometrics"
      width={100}
      height={36}
      className={className}
    />
  );
}
