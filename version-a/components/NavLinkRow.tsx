import { ArrowUpRightIcon, ChevronRightIcon } from "@/components/Icons";

interface NavLinkRowProps {
  label: string;
  href: string;
  onClick?: () => void;
  external?: boolean;
}

export function NavLinkRow({
  label,
  href,
  onClick,
  external = false,
}: NavLinkRowProps) {
  const Icon = external ? ArrowUpRightIcon : ChevronRightIcon;

  return (
    <a
      href={href}
      onClick={onClick}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex items-center justify-between border-b border-line py-3.5 text-[17px] font-medium text-ink transition-colors hover:text-primary focus-visible:text-primary"
    >
      {label}
      <Icon className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
    </a>
  );
}
