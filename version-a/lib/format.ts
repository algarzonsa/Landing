const formattatorePrezzo = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

export function formatPrezzo(valore: number): string {
  return formattatorePrezzo.format(valore);
}

export function formatData(iso: string): string {
  const data = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(data);
}

export function scontoPercentuale(originale: number, scontato: number): number {
  return Math.round((1 - scontato / originale) * 100);
}
