import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Iconos de trazo, sin dependencias externas.
 * Todos son decorativos: el texto accesible vive en el elemento que los acompaña.
 */
function baseProps(props: IconProps): IconProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: "false",
    ...props,
  };
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.2 4.2" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5.5 19.5c.9-3.2 3.4-4.8 6.5-4.8s5.6 1.6 6.5 4.8" />
    </svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M5.5 8.5h13l-.8 11H6.3l-.8-11Z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  );
}
