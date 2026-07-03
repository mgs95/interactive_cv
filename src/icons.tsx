type IconProps = { size?: number };

const base = (size: number) =>
  ({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  }) as const;

export function GitHubIcon({ size = 20 }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor" stroke="none">
      <path d="M12 1.5A10.5 10.5 0 0 0 8.68 21.96c.53.1.72-.23.72-.5v-1.98c-2.92.63-3.54-1.24-3.54-1.24-.48-1.21-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.06.08 1.61 1.08 1.61 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.66-1.4-2.33-.27-4.78-1.17-4.78-5.19 0-1.15.41-2.09 1.08-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.89 1.08a10.05 10.05 0 0 1 5.25 0c2-1.36 2.88-1.08 2.88-1.08.58 1.45.22 2.52.11 2.79.67.73 1.08 1.67 1.08 2.82 0 4.03-2.46 4.92-4.8 5.18.38.32.71.96.71 1.94v2.88c0 .28.19.6.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20 }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor" stroke="none">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

export function MailIcon({ size = 20 }: IconProps) {
  return (
    <svg {...base(size)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 14 }: IconProps) {
  return (
    <svg {...base(size)} strokeWidth={2}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function SunIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

export function PrinterIcon({ size = 18 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="7" />
    </svg>
  );
}
