import { AccountButton } from "@/components/layout/AccountButton";
import { Brand } from "@/components/layout/Brand";
import { CartButton } from "@/components/layout/CartButton";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAV_LINKS } from "@/data/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-[1240px] items-center gap-4 px-5 sm:px-8 lg:h-[76px] lg:gap-8">
        <Brand />

        <nav aria-label="Navigazione principale" className="hidden flex-1 lg:block">
          <ul className="flex items-center justify-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative inline-flex py-2 text-[15px] font-medium text-ink-soft transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100 focus-visible:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <HeaderSearch className="hidden w-52 lg:block xl:w-60" />
          <span className="hidden lg:block">
            <AccountButton />
          </span>
          <CartButton />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
