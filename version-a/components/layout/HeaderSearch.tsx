"use client";

import { useId, useState, type FormEvent } from "react";
import { SearchIcon } from "@/components/ui/icons";

interface HeaderSearchProps {
  className?: string;
  placeholder?: string;
}

/**
 * Buscador del header. En la siguiente fase compartirá estado con el catálogo;
 * por ahora envía al ancla del catálogo sin recargar la página.
 */
export function HeaderSearch({ className, placeholder }: HeaderSearchProps) {
  const inputId = useId();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const catalog = document.getElementById("catalogo");
    if (!catalog) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    catalog.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={className}
      aria-label="Cerca nel catalogo"
    >
      <div className="relative">
        <label htmlFor={inputId} className="sr-only">
          Cerca un test o un corso
        </label>
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
        <input
          id={inputId}
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder ?? "Cerca un test o un corso"}
          autoComplete="off"
          className="h-11 w-full rounded-sm border border-line bg-surface/70 pl-9 pr-3 text-sm text-ink placeholder:text-ink-soft transition-colors hover:border-line-strong focus:border-accent-deep focus:bg-white"
        />
      </div>
    </form>
  );
}
