import { useId } from "react";
import { ChevronRightIcon } from "@/components/Icons";
import { NAV_LINKS } from "@/data/navigation";

interface NavbarMobileProps {
  onNavClick: (label: string) => void;
}

/** Navigazione mobile - reutilizable. */
export function NavbarMobile({ onNavClick }: NavbarMobileProps) {
  const navId = useId();

  return (
    <nav aria-label="Navigazione principale" className="mt-4">
      <ul id={navId}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => onNavClick(link.label)}
              className="group flex items-center justify-between border-b border-line py-3.5 text-[17px] font-medium text-ink transition-colors hover:text-primary"
            >
              {link.label}
              <ChevronRightIcon className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
