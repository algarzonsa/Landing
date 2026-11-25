import type { Categoria, Prodotto } from "@/types/product";

export const ORDINAMENTI = [
  { value: "rilevanza", label: "Rilevanza" },
  { value: "prezzo-asc", label: "Prezzo crescente" },
  { value: "prezzo-desc", label: "Prezzo decrescente" },
  { value: "nome", label: "Nome A–Z" },
] as const;

export type Ordinamento = (typeof ORDINAMENTI)[number]["value"];

function normalizza(valore: string): string {
  return valore
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function filtraProdotti(
  prodotti: readonly Prodotto[],
  query: string,
  categoria: Categoria | "Tutti",
): Prodotto[] {
  const termine = normalizza(query.trim());

  return prodotti.filter((prodotto) => {
    const categoriaOk = categoria === "Tutti" || prodotto.categoria === categoria;
    if (!categoriaOk) return false;
    if (!termine) return true;

    const testo = normalizza(
      `${prodotto.nome} ${prodotto.autore} ${prodotto.categoria} ${prodotto.formato}`,
    );
    return testo.includes(termine);
  });
}

const comparatori: Record<
  Exclude<Ordinamento, "rilevanza">,
  (a: Prodotto, b: Prodotto) => number
> = {
  "prezzo-asc": (a, b) => a.prezzoScontato - b.prezzoScontato,
  "prezzo-desc": (a, b) => b.prezzoScontato - a.prezzoScontato,
  nome: (a, b) => a.nome.localeCompare(b.nome, "it"),
};

export function ordinaProdotti(
  prodotti: readonly Prodotto[],
  ordinamento: Ordinamento,
): Prodotto[] {
  if (ordinamento === "rilevanza") return [...prodotti];
  return [...prodotti].sort(comparatori[ordinamento]);
}
