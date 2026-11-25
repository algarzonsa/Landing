import { CatalogProvider } from "@/components/CatalogProvider";
import { CatalogSection } from "@/components/CatalogSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <CatalogProvider>
      <a
        href="#contenuto"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-white transition-transform focus:translate-y-0 focus-visible:outline-white"
      >
        Vai al contenuto
      </a>

      <Header />

      <main id="contenuto" tabIndex={-1}>
        <Hero />
        <CatalogSection />
        <ContactForm />
      </main>

      <Footer />
    </CatalogProvider>
  );
}
