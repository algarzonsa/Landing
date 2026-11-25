export interface NavLink {
  label: string;
  href: string;
}

/** Navegación principal. Las páginas internas no existen en la demo. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: "Test", href: "#catalogo" },
  { label: "Formazione", href: "#catalogo" },
  { label: "Risorse", href: "#risorse" },
  { label: "Contatti", href: "#contatti" },
];
