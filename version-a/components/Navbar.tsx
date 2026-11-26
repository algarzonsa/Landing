import { useId } from "react";
import { NAV_LINKS } from "@/data/navigation";

interface NavbarProps {
  onNavClick: (label: string) => void;
}

export function Navbar({ onNavClick }: NavbarProps) {
  const navId = useId();

  return (
    <nav aria-label="Navigazione principale" className="hidden flex-1 lg:block">
      <ul className="flex items-center justify-center gap-7 xl:gap-9" id={navId}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => onNavClick(link.label)}
              className="relative inline-flex py-2 text-[15px] font-medium text-ink-soft transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100 focus-visible:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
