"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Dialog } from "@/components/Dialog";
import { useCatalog } from "@/components/CatalogProvider";
import { SearchField } from "@/components/SearchField";
import {
  BagIcon,
  ChevronRightIcon,
  CloseIcon,
  MenuIcon,
  TrashIcon,
  UserIcon,
} from "@/components/Icons";
import { NAV_LINKS } from "@/data/navigation";
import { PRODOTTI } from "@/data/products";
import { formatPrezzo } from "@/lib/format";

/** Marca propia de la demo: curva de distribución, sin reproducir el logo real. */
function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <a
      href="#contenuto"
      onClick={onNavigate}
      aria-label="Giunti Psychometrics, vai all'inizio della pagina"
      className="flex shrink-0 items-center gap-2.5 sm:gap-3"
    >
      <BrandMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="flex flex-col">
        <span className="font-display text-[21px] font-semibold leading-none tracking-[-0.01em] text-ink sm:text-[23px]">
          Giunti
        </span>
        <span className="mt-1 font-sans text-[10px] font-medium uppercase leading-none tracking-[0.22em] text-ink-soft">
          Psychometrics
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const {
    carrello,
    rimuoviDalCarrello,
    svuotaCarrello,
    setCategoria,
  } = useCatalog();
  const [menuAperto, setMenuAperto] = useState(false);
  const [accediAperto, setAccediAperto] = useState(false);
  const [carrelloAperto, setCarrelloAperto] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanelId = useId();

  const articoli = PRODOTTI.filter((prodotto) => carrello.includes(prodotto.id));
  const totale = articoli.reduce(
    (somma, prodotto) => somma + prodotto.prezzoScontato,
    0,
  );

  useEffect(() => {
    if (!menuAperto) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuAperto(false);
      menuButton.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuAperto]);

  function handleNavClick(label: string) {
    if (label === "Formazione") setCategoria("Formazione");
    if (label === "Test") setCategoria("Tutti");
    setMenuAperto(false);
  }

  return (
    <>
      <div className="bg-primary text-white">
        <div className="shell flex h-9 items-center justify-between gap-4">
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

      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
        <div className="shell flex h-[68px] items-center gap-4 lg:h-[76px] lg:gap-8">
          <Brand onNavigate={() => setMenuAperto(false)} />

          <nav aria-label="Navigazione principale" className="hidden flex-1 lg:block">
            <ul className="flex items-center justify-center gap-7 xl:gap-9">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.label)}
                    className="relative inline-flex py-2 text-[15px] font-medium text-ink-soft transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100 focus-visible:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <div className="hidden w-52 lg:block xl:w-60">
              <SearchField />
            </div>

            <span className="hidden lg:block">
              <button
                type="button"
                onClick={() => setAccediAperto(true)}
                aria-haspopup="dialog"
                className="btn btn--secondary h-11 px-3.5 text-sm"
              >
                <UserIcon className="h-4 w-4" />
                Accedi
              </button>
            </span>

            <button
              type="button"
              onClick={() => setCarrelloAperto(true)}
              aria-haspopup="dialog"
              aria-label={
                carrello.length === 0
                  ? "Apri il carrello, vuoto"
                  : `Apri il carrello, ${carrello.length} ${
                      carrello.length === 1 ? "articolo" : "articoli"
                    }`
              }
              className="icon-btn relative"
            >
              <BagIcon className="h-[18px] w-[18px]" />
              {carrello.length > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-white"
                >
                  {carrello.length}
                </span>
              )}
            </button>

            <button
              ref={menuButton}
              type="button"
              aria-expanded={menuAperto}
              aria-controls={menuPanelId}
              onClick={() => setMenuAperto((aperto) => !aperto)}
              className="icon-btn lg:hidden"
            >
              <span className="sr-only">
                {menuAperto ? "Chiudi il menu" : "Apri il menu"}
              </span>
              {menuAperto ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {menuAperto && (
          <div
            id={menuPanelId}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-7rem)] overflow-y-auto border-t border-line bg-paper shadow-panel lg:hidden"
          >
            <div className="shell pb-6 pt-5">
              <SearchField onSearch={() => setMenuAperto(false)} />

              <nav aria-label="Navigazione principale" className="mt-4">
                <ul>
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => handleNavClick(link.label)}
                        className="group flex items-center justify-between border-b border-line py-3.5 text-[17px] font-medium text-ink transition-colors hover:text-primary"
                      >
                        {link.label}
                        <ChevronRightIcon className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <button
                type="button"
                onClick={() => {
                  setMenuAperto(false);
                  setAccediAperto(true);
                }}
                aria-haspopup="dialog"
                className="btn btn--secondary mt-5 w-full"
              >
                <UserIcon className="h-4 w-4" />
                Accedi
              </button>
            </div>
          </div>
        )}
      </header>

      <Dialog
        open={accediAperto}
        onClose={() => setAccediAperto(false)}
        title="Area riservata"
        footer={
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setAccediAperto(false)}
              className="btn btn--secondary"
            >
              Chiudi
            </button>
            <a
              href="#contatti"
              onClick={() => setAccediAperto(false)}
              className="btn btn--primary"
            >
              Contatta l’assistenza
            </a>
          </div>
        }
      >
        <p className="text-sm leading-6 text-ink-soft">
          In questa demo l’accesso non è attivo. Per informazioni su qualifiche
          professionali, crediti e materiali riservati, contatta l’assistenza
          scientifica.
        </p>
      </Dialog>

      <Dialog
        open={carrelloAperto}
        onClose={() => setCarrelloAperto(false)}
        title="Carrello"
        footer={
          articoli.length > 0 ? (
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-ink-soft">
                  Totale{" "}
                  <span className="ml-1 text-base font-semibold text-ink">
                    {formatPrezzo(totale)}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={svuotaCarrello}
                  className="text-sm text-ink-soft underline underline-offset-4 transition-colors hover:text-primary"
                >
                  Svuota
                </button>
              </div>
              <a
                href="#contatti"
                onClick={() => setCarrelloAperto(false)}
                className="btn btn--primary mt-3 w-full"
              >
                Richiedi un preventivo
              </a>
            </div>
          ) : (
            <a
              href="#catalogo"
              onClick={() => setCarrelloAperto(false)}
              className="btn btn--primary w-full"
            >
              Sfoglia il catalogo
            </a>
          )
        }
      >
        {articoli.length === 0 ? (
          <div className="py-3 text-center">
            <p className="font-display text-lg text-ink">Il carrello è vuoto.</p>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-6 text-ink-soft">
              Aggiungi test o corsi dal catalogo per preparare la tua richiesta.
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {articoli.map((prodotto) => (
              <li key={prodotto.id} className="flex items-start gap-3">
                <Image
                  src={prodotto.immagine}
                  alt=""
                  width={64}
                  height={64}
                  sizes="64px"
                  className="h-16 w-16 shrink-0 rounded-sm border border-line object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-5 text-ink">
                    {prodotto.nome}
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-ink-soft">
                    {prodotto.formato}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {formatPrezzo(prodotto.prezzoScontato)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => rimuoviDalCarrello(prodotto.id)}
                  aria-label={`Rimuovi ${prodotto.nome} dal carrello`}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-ink-soft transition-colors hover:bg-surface hover:text-primary"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </Dialog>
    </>
  );
}
