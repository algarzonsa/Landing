"use client";

import {
  useEffect,
  useId,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { CloseIcon } from "@/components/Icons";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

/** Diálogo nativo compartido: foco, Escape y backdrop los gestiona el navegador. */
export function Dialog({ open, onClose, title, children, footer }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === ref.current) onClose();
  }

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="m-auto w-[min(92vw,28rem)] rounded-md border border-line bg-paper p-0 text-ink shadow-panel"
    >
      <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
        <h2
          id={titleId}
          className="font-display text-xl font-semibold tracking-[-0.01em]"
        >
          {title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Chiudi la finestra"
          className="-mr-1 -mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="px-6 py-5">{children}</div>

      {footer && <div className="border-t border-line px-6 py-4">{footer}</div>}
    </dialog>
  );
}
