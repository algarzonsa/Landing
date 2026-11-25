/** Categorías editoriales del catálogo (datos ficticios). */
export type Categoria =
  | "Clinica e Neuropsicologia"
  | "Scuola ed Età evolutiva"
  | "Lavoro e Organizzazioni"
  | "Formazione";

export interface CategoriaInfo {
  nome: Categoria;
  descrizione: string;
}
