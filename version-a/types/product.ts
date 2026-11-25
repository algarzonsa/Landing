/** Categorías del catálogo. Los datos son ficticios. */
export type Categoria =
  | "Clinica e Neuropsicologia"
  | "Scuola ed Età evolutiva"
  | "Lavoro e Organizzazioni"
  | "Formazione";

export type Formato = "Cartaceo" | "Digitale" | "Corso online" | "In presenza";

interface ProdottoBase {
  id: string;
  nome: string;
  autore: string;
  categoria: Categoria;
  formato: Formato;
  prezzoOriginale: number;
  prezzoScontato: number;
  immagine: string;
  alt: string;
}

export interface Test extends ProdottoBase {
  tipo: "test";
  etaRange: string;
}

export interface Corso extends ProdottoBase {
  tipo: "corso";
  /** Fecha ISO (YYYY-MM-DD). */
  dataInizio: string;
}

export type Prodotto = Test | Corso;
