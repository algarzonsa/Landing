import {
  PLATFORM_LINKS,
  SHIPPING_NOTE,
  TOP_BAR_LINKS,
} from "@/data/navigation";
import { PlatformMenu, type PlatformLink } from "@/components/PlatformMenu";

interface TopBarProps {
  shippingText?: string;
  links?: readonly PlatformLink[];
  platformLinks?: readonly PlatformLink[];
}

/**
 * Franja superior de utilidades: aviso de envío a la izquierda y enlaces
 * secundarios + acceso a plataformas a la derecha. El borde inferior
 * separa esta franja de la navegación principal.
 */
export function TopBar({
  shippingText = SHIPPING_NOTE,
  links = TOP_BAR_LINKS,
  platformLinks = PLATFORM_LINKS,
}: TopBarProps) {
  return (
    <div className="border-b border-line bg-paper/90">
      <div className="shell flex h-10 items-center justify-between gap-6">
        <p className="truncate text-[13px] text-ink-soft">{shippingText}</p>

        <div className="hidden shrink-0 items-center gap-5 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-ink-soft transition-colors hover:text-primary focus-visible:text-primary"
            >
              {link.label}
            </a>
          ))}

          <PlatformMenu links={platformLinks} />
        </div>
      </div>
    </div>
  );
}
