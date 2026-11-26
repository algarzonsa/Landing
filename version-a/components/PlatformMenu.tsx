"use client";

import { useId, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/Icons";
import { NavLinkRow } from "@/components/NavLinkRow";

export interface PlatformLink {
  label: string;
  href: string;
}

interface PlatformMenuProps {
  label?: string;
  links: readonly PlatformLink[];
  variant?: "dropdown" | "inline";
  onNavigate?: () => void;
}

/**
 * Menú desplegable reutilizable de plataformas.
 * Abre con hover, foco o click; cierra con Escape, al salir el cursor
 * o cuando el foco abandona el componente.
 */
export function PlatformMenu({
  label = "Accesso alla piattaforma",
  links,
  variant = "dropdown",
  onNavigate,
}: PlatformMenuProps) {
  const [aperto, setAperto] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  if (variant === "inline") {
    return (
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <NavLinkRow
              label={link.label}
              href={link.href}
              onClick={onNavigate}
              external
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setAperto(true)}
      onMouseLeave={(event) => {
        if (!event.currentTarget.contains(document.activeElement)) {
          setAperto(false);
        }
      }}
      onFocus={() => setAperto(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setAperto(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        setAperto(false);
        triggerRef.current?.focus();
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={aperto}
        aria-controls={panelId}
        onClick={() => setAperto((atual) => !atual)}
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary focus-visible:text-primary"
      >
        {label}
        <ChevronDownIcon
          className={`h-3.5 w-3.5 transition-transform motion-reduce:transition-none ${
            aperto ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={panelId}
        className={`absolute right-0 top-full z-50 w-56 pt-2 transition duration-150 motion-reduce:transition-none ${
          aperto
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <ul className="rounded-sm border border-line bg-paper p-1 shadow-panel">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-sm px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
