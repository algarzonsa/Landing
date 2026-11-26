"use client";

import { useId, type FormEvent } from "react";
import { useCatalog } from "@/components/CatalogProvider";
import { CloseIcon, SearchIcon } from "@/components/Icons";

interface SearchFieldProps {
  onSearch?: () => void;
}

export function SearchField({ onSearch }: SearchFieldProps) {
  const { query, setQuery } = useCatalog();
  const inputId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.();

    const catalogo = document.getElementById("catalogo");
    if (!catalogo) return;

    const ridotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    catalogo.scrollIntoView({
      behavior: ridotto ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <form role="search" onSubmit={handleSubmit} aria-label="Cerca nel catalogo">
      <label htmlFor={inputId} className="sr-only">
        Cerca un test o un corso
      </label>
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cerca un test o un corso"
          autoComplete="off"
          className="field h-11 pl-9 pr-9 text-sm"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Cancella la ricerca"
            className="absolute right-1.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
          >
            <CloseIcon className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </form>
  );
}
