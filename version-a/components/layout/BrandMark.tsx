/**
 * Marca propia de la demo: una curva de distribución sobre una línea base.
 * No reproduce el logo de Giunti Psychometrics.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect width="40" height="40" rx="11" className="fill-primary" />
      <path
        d="M8.5 28.5h23"
        className="stroke-white/45"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M9 28.5C12.8 28.5 14.2 15 20 15C25.8 15 27.2 28.5 31 28.5"
        fill="none"
        className="stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="14.5" r="2" className="fill-accent" />
    </svg>
  );
}
