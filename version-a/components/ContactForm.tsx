"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckIcon, MailIcon, PhoneIcon } from "@/components/Icons";

interface Valori {
  nome: string;
  email: string;
  messaggio: string;
}

type Errori = Partial<Record<keyof Valori, string>>;

const VALORI_INIZIALI: Valori = { nome: "", email: "", messaggio: "" };

function valida(valori: Valori): Errori {
  const errori: Errori = {};

  if (valori.nome.trim().length < 2) {
    errori.nome = "Inserisci il tuo nome (almeno 2 caratteri).";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valori.email.trim())) {
    errori.email = "Inserisci un indirizzo email valido.";
  }

  if (valori.messaggio.trim().length < 10) {
    errori.messaggio = "Scrivi un messaggio di almeno 10 caratteri.";
  }

  return errori;
}

function ErroreCampo({ id, testo }: { id: string; testo?: string }) {
  if (!testo) return null;

  return (
    <p id={id} className="mt-1.5 text-[13px] leading-5 text-danger">
      {testo}
    </p>
  );
}

export function ContactForm() {
  const [valori, setValori] = useState<Valori>(VALORI_INIZIALI);
  const [errori, setErrori] = useState<Errori>({});
  const [inviato, setInviato] = useState(false);
  const riepilogo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inviato) riepilogo.current?.focus();
  }, [inviato]);

  function aggiorna(campo: keyof Valori, valore: string) {
    setValori((corrente) => ({ ...corrente, [campo]: valore }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nuoviErrori = valida(valori);
    setErrori(nuoviErrori);

    const primoErrore = (["nome", "email", "messaggio"] as const).find(
      (campo) => nuoviErrori[campo],
    );

    if (primoErrore) {
      document.getElementById(primoErrore)?.focus();
      return;
    }

    setInviato(true);
  }

  function ricomincia() {
    setValori(VALORI_INIZIALI);
    setErrori({});
    setInviato(false);
  }

  return (
    <section
      id="contatti"
      aria-labelledby="contatti-title"
      className="scroll-mt-24"
    >
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <h2
              id="contatti-title"
              className="max-w-[15ch] text-balance font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.03] tracking-[-0.018em] text-ink"
            >
              Parliamo del progetto che hai in mente.
            </h2>

            <p className="mt-5 max-w-[48ch] text-[15.5px] leading-7 text-ink-soft">
              Ti aiutiamo a scegliere lo strumento giusto, a capire licenze e
              crediti formativi e a organizzare una somministrazione. Scrivici:
              risponde una persona, non un automatismo.
            </p>

            <dl className="mt-9 space-y-4 border-t border-line pt-7 text-sm">
              <div className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                <div>
                  <dt className="text-ink-soft">Email</dt>
                  <dd className="mt-0.5 font-medium text-ink">
                    assistenza@giunti-demo.it
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                <div>
                  <dt className="text-ink-soft">Telefono</dt>
                  <dd className="mt-0.5 font-medium text-ink">
                    +39 02 1234 5678
                  </dd>
                </div>
              </div>
            </dl>

            <p className="mt-7 text-[13px] leading-5 text-ink-soft">
              Lun–Ven, 9:00–18:00. I recapiti e i tempi di risposta sono
              dimostrativi.
            </p>
          </div>

          <div className="rounded-md border border-line bg-white p-6 shadow-panel sm:p-8">
            {inviato ? (
              <div
                ref={riepilogo}
                role="status"
                tabIndex={-1}
                className="flex min-h-[24rem] flex-col items-start justify-center"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-[-0.01em] text-ink">
                  Messaggio inviato.
                </h3>
                <p className="mt-2 max-w-[38ch] text-sm leading-6 text-ink-soft">
                  Grazie {valori.nome.trim()}. Ti risponderemo entro due giorni
                  lavorativi. In questa demo non viene inviata alcuna email.
                </p>
                <button
                  type="button"
                  onClick={ricomincia}
                  className="btn btn--secondary mt-7"
                >
                  Invia un’altra richiesta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">
                  Scrivici
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  I campi contrassegnati con * sono obbligatori.
                </p>

                <div className="mt-6">
                  <label
                    htmlFor="nome"
                    className="text-sm font-medium text-ink"
                  >
                    Nome *
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={valori.nome}
                    onChange={(event) => aggiorna("nome", event.target.value)}
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errori.nome)}
                    aria-describedby={errori.nome ? "errore-nome" : undefined}
                    className={`field mt-1.5 h-11 px-3.5 text-[15px] ${
                      errori.nome ? "field--error" : ""
                    }`}
                  />
                  <ErroreCampo id="errore-nome" testo={errori.nome} />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-ink"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={valori.email}
                    onChange={(event) => aggiorna("email", event.target.value)}
                    autoComplete="email"
                    required
                    aria-invalid={Boolean(errori.email)}
                    aria-describedby={errori.email ? "errore-email" : undefined}
                    className={`field mt-1.5 h-11 px-3.5 text-[15px] ${
                      errori.email ? "field--error" : ""
                    }`}
                  />
                  <ErroreCampo id="errore-email" testo={errori.email} />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="messaggio"
                    className="text-sm font-medium text-ink"
                  >
                    Messaggio *
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={5}
                    value={valori.messaggio}
                    onChange={(event) =>
                      aggiorna("messaggio", event.target.value)
                    }
                    required
                    aria-invalid={Boolean(errori.messaggio)}
                    aria-describedby={
                      errori.messaggio ? "errore-messaggio" : undefined
                    }
                    className={`field mt-1.5 resize-y px-3.5 py-3 text-[15px] leading-6 ${
                      errori.messaggio ? "field--error" : ""
                    }`}
                  />
                  <ErroreCampo
                    id="errore-messaggio"
                    testo={errori.messaggio}
                  />
                </div>

                <button type="submit" className="btn btn--primary mt-6 w-full">
                  Invia il messaggio
                </button>

                <p className="mt-3 text-center text-[12.5px] leading-5 text-ink-soft">
                  Demo dimostrativa: nessun dato viene inviato o conservato.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
