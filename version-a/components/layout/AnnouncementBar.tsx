export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white">
      <div className="mx-auto flex h-9 w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
        <p className="truncate text-[12.5px] tracking-[0.005em] text-white/95">
          Spedizione gratuita per ordini superiori a 120 €
        </p>

        <div className="hidden shrink-0 items-center gap-4 text-[12.5px] sm:flex">
          <a
            href="#contatti"
            className="text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-white"
          >
            Assistenza
          </a>
          <span aria-hidden="true" className="h-3 w-px bg-white/25" />
          <span className="text-white/75">Italiano</span>
          <span className="text-white/75">EUR</span>
        </div>
      </div>
    </div>
  );
}
