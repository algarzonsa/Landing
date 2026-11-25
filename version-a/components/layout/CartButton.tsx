"use client";

import { useId, useRef, type MouseEvent } from "react";
import { buttonPrimary } from "@/components/ui/button-styles";
import { BagIcon, CloseIcon } from "@/components/ui/icons";

interface CartButtonProps {
  /** Se conectará al estado del catálogo en la siguiente fase. */
  count?: number;
}

export function CartButton({ count = 0 }: CartButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) closeDialog();
  }

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-label={count === 0 ? "Carrello, vuoto" : `Carrello, ${count} articoli`}
        className="relative inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line bg-paper/60 text-ink transition-colors hover:border-line-strong hover:bg-white/70"
      >
        <BagIcon className="h-[18px] w-[18px]" />
        {count > 0 && (
          <span
            aria-hidden="true"
            className="absolute -right-1 -top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-white"
          >
            {count}
          </span>
        )}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={handleBackdropClick}
        className="m-auto w-[min(92vw,26rem)] rounded-md border border-line bg-paper p-0 text-ink shadow-panel"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-5">
          <h2
            id={titleId}
            className="font-display text-xl font-semibold tracking-[-0.01em]"
          >
            Carrello
          </h2>
          <button
            type="button"
            onClick={closeDialog}
            aria-label="Chiudi il carrello"
            className="-mr-1 inline-flex h-9 w-9 items-center justify-center rounded-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 py-8 text-center">
          <p className="font-display text-lg text-ink">Il carrello è vuoto.</p>
          <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-6 text-ink-soft">
            Aggiungi test o corsi dal catalogo per preparare la tua richiesta.
          </p>
        </div>

        <div className="border-t border-line px-6 py-4">
          <a
            href="#catalogo"
            onClick={closeDialog}
            className={`${buttonPrimary} w-full`}
          >
            Sfoglia il catalogo
          </a>
        </div>
      </dialog>
    </>
  );
}
