"use client";

import { useId, useRef, type MouseEvent } from "react";
import { buttonPrimary, buttonSecondary } from "@/components/ui/button-styles";
import { CloseIcon, UserIcon } from "@/components/ui/icons";

interface AccountButtonProps {
  className?: string;
  fullWidth?: boolean;
}

/**
 * Botón "Accedi" solicitado por la prueba: no hay login real.
 * Abre un diálogo que explica la limitación de la demo.
 */
export function AccountButton({
  className,
  fullWidth = false,
}: AccountButtonProps) {
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
        className={`inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-line-strong bg-paper/60 px-3.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:bg-white/70 ${
          fullWidth ? "w-full" : ""
        } ${className ?? ""}`}
      >
        <UserIcon className="h-4 w-4" />
        <span>Accedi</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={handleBackdropClick}
        className="m-auto w-[min(92vw,26rem)] rounded-md border border-line bg-paper p-0 text-ink shadow-panel"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div>
            <h2
              id={titleId}
              className="font-display text-xl font-semibold tracking-[-0.01em]"
            >
              Area riservata
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              Accesso per professionisti registrati.
            </p>
          </div>
          <button
            type="button"
            onClick={closeDialog}
            aria-label="Chiudi la finestra"
            className="-mr-1 -mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 py-5 text-sm leading-6 text-ink-soft">
          <p>
            In questa demo l’accesso non è attivo. Per informazioni su
            qualifiche professionali, crediti e materiali riservati, contatta
            l’assistenza scientifica.
          </p>
        </div>

        <div className="flex flex-col-reverse gap-2 border-t border-line px-6 py-4 sm:flex-row sm:justify-end">
          <button type="button" onClick={closeDialog} className={buttonSecondary}>
            Chiudi
          </button>
          <a href="#contatti" onClick={closeDialog} className={buttonPrimary}>
            Contatta l’assistenza
          </a>
        </div>
      </dialog>
    </>
  );
}
