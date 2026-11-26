import Image from "next/image";
import { useCatalog } from "@/components/CatalogProvider";
import { BagIcon, CheckIcon } from "@/components/Icons";
import { formatData, formatPrezzo, scontoPercentuale } from "@/lib/format";
import type { Prodotto } from "@/types/product";

export function ProductCard({ prodotto }: { prodotto: Prodotto }) {
  const { carrello, aggiungiAlCarrello } = useCatalog();
  const nelCarrello = carrello.includes(prodotto.id);
  const sconto = scontoPercentuale(
    prodotto.prezzoOriginale,
    prodotto.prezzoScontato,
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-panel focus-within:border-line-strong">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={prodotto.immagine}
          alt={prodotto.alt}
          width={1200}
          height={900}
          loading="lazy"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-full border border-line/70 bg-paper/95 px-2.5 py-1 text-[11.5px] font-medium text-ink">
          {prodotto.formato}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12px] font-medium text-accent-deep">
          {prodotto.categoria}
        </p>
        <h3 className="mt-1.5 text-pretty font-display text-[22px] font-semibold leading-[1.1] tracking-[-0.015em] text-ink">
          {prodotto.nome}
        </h3>
        <p className="mt-1.5 text-sm text-ink-soft">{prodotto.autore}</p>

        <p className="mt-3 flex items-center gap-2 text-[13px] leading-5 text-ink-soft">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
          />
          {prodotto.tipo === "test"
            ? `Età consigliata: ${prodotto.etaRange}`
            : `Inizio: ${formatData(prodotto.dataInizio)}`}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <p className="text-[12.5px] text-ink-soft line-through">
              {formatPrezzo(prodotto.prezzoOriginale)}
            </p>
            <p className="mt-0.5 text-[22px] font-semibold tracking-[-0.01em] text-success">
              {formatPrezzo(prodotto.prezzoScontato)}
            </p>
          </div>
          <span className="mb-1 rounded-full bg-success-soft px-2.5 py-1 text-[12px] font-semibold leading-none text-success">
            −{sconto}%
          </span>
        </div>

        {nelCarrello ? (
          <span className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm border border-line bg-surface text-sm font-medium text-ink-soft">
            <CheckIcon className="h-4 w-4" />
            Nel carrello
          </span>
        ) : (
          <button
            type="button"
            onClick={() => aggiungiAlCarrello(prodotto.id)}
            aria-label={`Aggiungi ${prodotto.nome} al carrello`}
            className="btn btn--primary mt-4 w-full"
          >
            <BagIcon className="h-4 w-4" />
            Aggiungi al carrello
          </button>
        )}
      </div>
    </article>
  );
}
