import type { CategoriaInfo } from "@/types/catalog";

/**
 * Fuente única de categorías: alimenta el índice del hero,
 * las píldoras del catálogo y el filtrado.
 */
export const CATEGORIE: readonly CategoriaInfo[] = [
  {
    nome: "Clinica e Neuropsicologia",
    descrizione: "Valutazione cognitiva, clinica e neuropsicologica",
  },
  {
    nome: "Scuola ed Età evolutiva",
    descrizione: "Apprendimenti, comportamento e sviluppo",
  },
  {
    nome: "Lavoro e Organizzazioni",
    descrizione: "Selezione, clima e sviluppo del talento",
  },
  {
    nome: "Formazione",
    descrizione: "Corsi ECM, webinar e aggiornamento",
  },
];
