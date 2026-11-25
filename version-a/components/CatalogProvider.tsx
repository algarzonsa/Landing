"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { PRODOTTI } from "@/data/products";
import { CheckIcon } from "@/components/Icons";
import type { Ordinamento } from "@/lib/catalog";
import type { Categoria } from "@/types/product";

interface CatalogContextValue {
  query: string;
  setQuery: (value: string) => void;
  categoria: Categoria | "Tutti";
  setCategoria: (value: Categoria | "Tutti") => void;
  ordinamento: Ordinamento;
  setOrdinamento: (value: Ordinamento) => void;
  azzeraFiltri: () => void;
  carrello: readonly string[];
  aggiungiAlCarrello: (id: string) => void;
  rimuoviDalCarrello: (id: string) => void;
  svuotaCarrello: () => void;
}

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState<Categoria | "Tutti">("Tutti");
  const [ordinamento, setOrdinamento] = useState<Ordinamento>("rilevanza");
  const [carrello, setCarrello] = useState<string[]>([]);
  const [avviso, setAvviso] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function mostraAvviso(messaggio: string) {
    if (timer.current) clearTimeout(timer.current);
    setAvviso(messaggio);
    timer.current = setTimeout(() => setAvviso(""), 3200);
  }

  function azzeraFiltri() {
    setQuery("");
    setCategoria("Tutti");
    setOrdinamento("rilevanza");
  }

  function aggiungiAlCarrello(id: string) {
    if (carrello.includes(id)) {
      mostraAvviso("Questo prodotto è già nel carrello.");
      return;
    }

    const prodotto = PRODOTTI.find((item) => item.id === id);
    setCarrello((corrente) => [...corrente, id]);
    mostraAvviso(`${prodotto?.nome ?? "Prodotto"} aggiunto al carrello.`);
  }

  function rimuoviDalCarrello(id: string) {
    setCarrello((corrente) => corrente.filter((item) => item !== id));
  }

  function svuotaCarrello() {
    setCarrello([]);
  }

  return (
    <CatalogContext.Provider
      value={{
        query,
        setQuery,
        categoria,
        setCategoria,
        ordinamento,
        setOrdinamento,
        azzeraFiltri,
        carrello,
        aggiungiAlCarrello,
        rimuoviDalCarrello,
        svuotaCarrello,
      }}
    >
      {children}

      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[90] flex justify-center px-5"
      >
        {avviso && (
          <p className="flex items-center gap-2 rounded-sm bg-ink px-4 py-3 text-sm font-medium text-white shadow-panel">
            <CheckIcon className="h-4 w-4 text-accent" />
            {avviso}
          </p>
        )}
      </div>
    </CatalogContext.Provider>
  );
}

export function useCatalog(): CatalogContextValue {
  const contesto = useContext(CatalogContext);

  if (!contesto) {
    throw new Error("useCatalog deve essere usato dentro CatalogProvider");
  }

  return contesto;
}
