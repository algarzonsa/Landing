import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giunti Psychometrics | Test, formazione e risorse per professionisti",
  description:
    "Catalogo di test psicologici, manuali e corsi di formazione per psicologi, scuole e organizzazioni. Strumenti selezionati con rigore scientifico.",
  applicationName: "Giunti Psychometrics",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${plex.variable} ${newsreader.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
