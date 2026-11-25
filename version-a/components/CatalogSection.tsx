"use client";

import { useMemo } from "react";
import { useCatalog } from "@/components/CatalogProvider";
import { ProductCard } from "@/components/ProductCard";
import { SearchField } from "@/components/SearchField";
import { CATEGORIE, PRODOTTI } from "@/data/products";
import {
  filtraProdotti,
  ORDINAMENTI,
  ordinaProdotti,
  type Ordinamento,
} from "@/lib/catalog";

export function CatalogSection() {
  const {
    query,
    categoria,
    setCategoria,
    ordinamento,
    setOrdinamento,
    azzeraFiltri,
  } = useCatalog();

  const risultati = useMemo(
    () =>
      ordinaProdotti(
        filtraProdotti(PRODOTTI, query, categoria),
        ordinamento,
      ),
    [query, categoria, ordinamento],
  );

  const conteggi = useMemo(() => {
    return new Map(
      CATEGORIE.map((item) => [
        item.nome,
        filtraProdotti(PRODOTTI, query, item.nome).length,
      ]),
    );
  }, [query]);

  const totalePerQuery = useMemo(
    () => filtraProdotti(PRODOTTI, query, "Tutti").length,
    [query],
  );

  const filtriAttivi = query.trim() !== "" || categoria !== "Tutti";

  return (
    <section
      id="catalogo"
      aria-labelledby="catalogo-title"
      className="scroll-mt-24 border-y border-line/70 bg-paper/55"
    >
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end lg:gap-16">
          <h2
            id="catalogo-title"
            className="max-w-[18ch] text-balance font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.03] tracking-[-0.018em] text-ink"
          >
            Strumenti per capire, accompagnare, decidere.
          </h2>
          <p className="max-w-[52ch] text-[15.5px] leading-7 text-ink-soft">
            Una selezione ragionata di test e percorsi formativi. Filtra per
            ambito o cerca per nome, autore e formato.
          </p>
        </div>

        <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <aside
            aria-labelledby="filtri-title"
            className="min-w-0 lg:sticky lg:top-28 lg:self-start"
          >
            <h3
              id="filtri-title"
              className="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink"
            >
              Ambiti
            </h3>

            <div className="mt-3 flex w-full min-w-0 gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              <button
                type="button"
                onClick={() => setCategoria("Tutti")}
                aria-pressed={categoria === "Tutti"}
                className={`flex shrink-0 items-center justify-between gap-4 rounded-sm border px-3.5 py-2.5 text-left text-sm transition-colors lg:w-full ${
                  categoria === "Tutti"
                    ? "border-primary bg-primary text-white"
                    : "border-line bg-transparent text-ink hover:border-primary"
                }`}
              >
                Tutti
                <span
                  className={`text-[12px] ${
                    categoria === "Tutti" ? "text-white/75" : "text-ink-soft"
                  }`}
                >
                  {totalePerQuery}
                </span>
              </button>

              {CATEGORIE.map((item) => {
                const attiva = categoria === item.nome;

                return (
                  <button
                    key={item.nome}
                    type="button"
                    onClick={() => setCategoria(item.nome)}
                    aria-pressed={attiva}
                    className={`flex shrink-0 items-center justify-between gap-4 rounded-sm border px-3.5 py-2.5 text-left text-sm transition-colors lg:w-full ${
                      attiva
                        ? "border-primary bg-primary text-white"
                        : "border-line bg-transparent text-ink hover:border-primary"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.nome}</span>
                    <span
                      className={`text-[12px] ${
                        attiva ? "text-white/75" : "text-ink-soft"
                      }`}
                    >
                      {conteggi.get(item.nome) ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="w-full md:max-w-xs">
                <SearchField />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="ordina" className="shrink-0 text-sm text-ink-soft">
                  Ordina
                </label>
                <select
                  id="ordina"
                  value={ordinamento}
                  onChange={(event) =>
                    setOrdinamento(event.target.value as Ordinamento)
                  }
                  className="field h-11 w-full px-3 text-sm md:w-52"
                >
                  {ORDINAMENTI.map((opzione) => (
                    <option key={opzione.value} value={opzione.value}>
                      {opzione.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
              <p role="status" aria-live="polite" className="text-sm text-ink-soft">
                <span className="font-medium text-ink">{risultati.length}</span>{" "}
                {risultati.length === 1 ? "prodotto" : "prodotti"}
                {categoria !== "Tutti" && (
                  <>
                    {" "}
                    in <span className="text-ink">{categoria}</span>
                  </>
                )}
              </p>

              {filtriAttivi && (
                <button
                  type="button"
                  onClick={azzeraFiltri}
                  className="text-sm text-ink-soft underline underline-offset-4 transition-colors hover:text-primary"
                >
                  Azzera i filtri
                </button>
              )}
            </div>

            {risultati.length > 0 ? (
              <ul
                role="list"
                className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
              >
                {risultati.map((prodotto) => (
                  <li key={prodotto.id}>
                    <ProductCard prodotto={prodotto} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 rounded-md border border-dashed border-line-strong bg-white/60 px-6 py-16 text-center">
                <p className="font-display text-2xl font-medium tracking-[-0.01em] text-ink">
                  Nessun prodotto trovato.
                </p>
                <p className="mx-auto mt-2 max-w-[42ch] text-sm leading-6 text-ink-soft">
                  Prova a cambiare ambito o a cercare un altro termine. Puoi
                  anche azzerare i filtri e ricominciare.
                </p>
                <button
                  type="button"
                  onClick={azzeraFiltri}
                  className="btn btn--secondary mt-6"
                >
                  Azzera i filtri
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
