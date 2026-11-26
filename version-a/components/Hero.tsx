import Image from "next/image";
import {
  ArrowUpRightIcon,
  ChevronRightIcon,
} from "@/components/Icons";
import { CATEGORIE, PRODOTTI } from "@/data/products";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <Image
        src="/images/header/bg-header.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="hero-overlay absolute inset-0 -z-10" />

      <div className="shell pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <h1
              id="hero-title"
              className="max-w-[16ch] text-balance font-display text-[clamp(2.75rem,6.2vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.022em] text-white"
            >
              Ogni valutazione comincia da un ascolto.
            </h1>

            <p className="mt-6 max-w-[56ch] text-[17px] leading-7 text-white sm:mt-7 sm:text-lg sm:leading-8">
              Test, manuali e formazione per psicologi, scuole e organizzazioni.
              Strumenti selezionati con rigore scientifico, pensati per capire le
              persone e accompagnarle nel cambiamento.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#catalogo" className="btn btn--primary">
                Esplora il catalogo
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <a href="#contatti" className="btn btn--secondary">
                Parla con un consulente
              </a>
            </div>
          </div>

          <aside aria-labelledby="ambiti-title">
            <div className="rounded-md border border-line bg-paper p-6 shadow-panel sm:p-7">
              <h2
                id="ambiti-title"
                className="border-b border-line pb-4 font-display text-[19px] font-semibold tracking-[-0.01em] text-ink"
              >
                Ambiti di applicazione
              </h2>

              <ul>
                {CATEGORIE.map((categoria, index) => {
                  const totale = PRODOTTI.filter(
                    (prodotto) => prodotto.categoria === categoria.nome,
                  ).length;

                  return (
                    <li
                      key={categoria.nome}
                      className={index === 0 ? "" : "border-t border-line/80"}
                    >
                      <a
                        href="#catalogo"
                        className="group grid grid-cols-[1fr_auto] items-center gap-4 py-4"
                      >
                        <span>
                          <span className="block text-[15px] font-medium leading-6 text-ink transition-colors group-hover:text-primary">
                            {categoria.nome}
                          </span>
                          <span className="mt-0.5 block text-[13px] leading-5 text-ink-soft">
                            {categoria.descrizione}
                          </span>
                        </span>
                        <span className="flex items-center gap-2 text-[13px] text-ink-soft">
                          {totale}
                          <ChevronRightIcon className="h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:text-accent-deep" />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <p className="border-t border-line pt-4 text-[13px] text-ink-soft">
                {PRODOTTI.length} strumenti disponibili in catalogo.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
