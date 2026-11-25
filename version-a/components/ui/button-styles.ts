/** Clases compartidas de botones. Mantener aquí evita divergencias visuales. */
export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-sm text-[15px] font-medium transition-colors";

export const buttonPrimary = `${buttonBase} h-11 bg-primary px-5 text-white hover:bg-primary-deep`;

export const buttonSecondary = `${buttonBase} h-11 border border-line-strong bg-paper/60 px-5 text-ink hover:border-primary hover:bg-white/70`;

export const iconButton =
  "inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line bg-paper/60 text-ink transition-colors hover:border-line-strong hover:bg-white/70";
