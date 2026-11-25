import { CATEGORIE } from "@/data/categories";
import {
  buttonPrimary,
  buttonSecondary,
} from "@/components/ui/button-styles";
import { ArrowUpRightIcon, ChevronRightIcon } from "@/components/ui/icons";

/**
 * Portada editorial: titular serif, descripción breve y un índice de ámbitos
 * que funciona como antesala del catálogo (no es una rejilla de tarjetas).
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <h1
              id="hero-title"
              className="max-w-[16ch] text-balance font-display text-[clamp(2.75rem,6.2vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink"
            >
              Ogni valutazione comincia da un ascolto.
            </h1>

            <p className="mt-6 max-w-[56ch] text-[17px] leading-7 text-ink-soft sm:mt-7 sm:text-lg sm:leading-8">
              Test, manuali e formazione per psicologi, scuole e organizzazioni.
              Strumenti selezionati con rigore scientifico, pensati per capire le
              persone e accompagnarle nel cambiamento.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#catalogo" className={buttonPrimary}>
                Esplora il catalogo
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <a href="#contatti" className={buttonSecondary}>
                Parla con un consulente
              </a>
            </div>
          </div>

          <aside aria-labelledby="ambiti-title">
            <div className="rounded-md border border-line bg-paper/75 p-6 shadow-panel backdrop-blur-[2px] sm:p-7">
              <h2
                id="ambiti-title"
                className="border-b border-line pb-4 font-display text-[19px] font-semibold tracking-[-0.01em] text-ink"
              >
                Ambiti di applicazione
              </h2>

              <ul>
                {CATEGORIE.map((categoria, index) => (
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
                      <ChevronRightIcon className="h-4 w-4 text-ink-soft transition-all group-hover:translate-x-0.5 group-hover:text-accent-deep" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
