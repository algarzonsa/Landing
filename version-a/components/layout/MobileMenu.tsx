"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AccountButton } from "@/components/layout/AccountButton";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { iconButton } from "@/components/ui/button-styles";
import { ChevronRightIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { NAV_LINKS } from "@/data/navigation";

/**
 * Menú móvil por divulgación: el botón mantiene el foco, Escape cierra
 * y el panel queda justo después del header en el orden de tabulación.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={iconButton}
      >
        <span className="sr-only">{open ? "Chiudi il menu" : "Apri il menu"}</span>
        {open ? (
          <CloseIcon className="h-5 w-5" />
        ) : (
          <MenuIcon className="h-5 w-5" />
        )}
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-t border-line bg-paper shadow-panel"
        >
          <div className="mx-auto w-full max-w-[1240px] px-5 pb-6 pt-5 sm:px-8">
            <HeaderSearch />

            <nav aria-label="Navigazione principale" className="mt-4">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-line py-3.5 text-[17px] font-medium text-ink transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ChevronRightIcon className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-5">
              <AccountButton fullWidth />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
