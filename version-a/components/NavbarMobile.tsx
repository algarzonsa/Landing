import { useId } from "react";
import { NAV_LINKS, PLATFORM_LINKS, TOP_BAR_LINKS } from "@/data/navigation";
import { NavLinkRow } from "@/components/NavLinkRow";
import { PlatformMenu } from "@/components/PlatformMenu";

interface NavbarMobileProps {
  onNavClick: (label: string) => void;
}

export function NavbarMobile({ onNavClick }: NavbarMobileProps) {
  const navId = useId();

  return (
    <>
      <nav aria-label="Navigazione principale" className="mt-4">
        <ul id={navId}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLinkRow
                label={link.label}
                href={link.href}
                onClick={() => onNavClick(link.label)}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-5">
        <p className="text-[13px] font-medium text-ink-soft">
          Accesso alla piattaforma
        </p>
        <div className="mt-1.5">
          <PlatformMenu
            variant="inline"
            links={PLATFORM_LINKS}
            onNavigate={() => onNavClick("Accesso alla piattaforma")}
          />
        </div>
      </div>

      <nav aria-label="Link utili" className="mt-4">
        <ul>
          {TOP_BAR_LINKS.map((link) => (
            <li key={link.label}>
              <NavLinkRow
                label={link.label}
                href={link.href}
                onClick={() => onNavClick(link.label)}
                external
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
