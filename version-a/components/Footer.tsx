import { BrandMark } from "@/components/BrandMark";
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  YouTubeIcon,
} from "@/components/Icons";

const linkCatalogo = [
  { label: "Test e valutazioni", href: "#catalogo" },
  { label: "Corsi e webinar", href: "#catalogo" },
  { label: "Ambiti di applicazione", href: "#catalogo" },
];

const linkRisorse = [
  { label: "Guide alla somministrazione", href: "#contatti" },
  { label: "Norme e crediti", href: "#contatti" },
  { label: "Domande frequenti", href: "#contatti" },
];

const linkContatti = [
  { label: "Scrivici", href: "#contatti" },
  { label: "Assistenza scientifica", href: "#contatti" },
  { label: "Diventa rivenditore", href: "#contatti" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icona: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com", Icona: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com", Icona: YouTubeIcon },
];

function Colonna({
  titolo,
  voci,
}: {
  titolo: string;
  voci: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-medium text-white">{titolo}</h2>
      <ul className="mt-3 space-y-2.5">
        {voci.map((voce) => (
          <li key={voce.label}>
            <a
              href={voce.href}
              className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-white"
            >
              {voce.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="risorse" className="scroll-mt-24 bg-ink text-white/75">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-36" />
            </div>

            <p className="mt-5 max-w-[34ch] text-sm leading-6 text-white/70">
              Test psicologici, manuali e formazione per professionisti, scuole
              e organizzazioni. Una demo con dati di esempio.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {social.map(({ label, href, Icona }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (si apre in una nuova scheda)`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 text-white/75 transition-colors hover:border-white/50 hover:text-white focus-visible:outline-white"
                >
                  <Icona className="h-5 w-5" />
                </a>
              ))}
              <a
                href="#contatti"
                aria-label="Scrivi all’assistenza"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 text-white/75 transition-colors hover:border-white/50 hover:text-white focus-visible:outline-white"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Colonna titolo="Catalogo" voci={linkCatalogo} />
          <Colonna titolo="Risorse" voci={linkRisorse} />
          <Colonna titolo="Contatti" voci={linkContatti} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-[12.5px] text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Giunti Psychometrics. Demo dimostrativa con dati di esempio.</p>
          <p>P. IVA 00000000000 · Milano, Italia</p>
        </div>
      </div>
    </footer>
  );
}
