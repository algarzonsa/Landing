import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <a
        href="#contenuto"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-white transition-transform focus:translate-y-0 focus-visible:outline-white"
      >
        Vai al contenuto
      </a>

      <AnnouncementBar />
      <SiteHeader />

      <main id="contenuto" tabIndex={-1}>
        <Hero />
        <div id="catalogo" aria-hidden="true" className="scroll-mt-28" />
      </main>
    </>
  );
}
