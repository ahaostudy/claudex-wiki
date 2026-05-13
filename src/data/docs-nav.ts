export type DocLink = {
  href: string;
  title: string;
  /** Optional one-line summary shown on the docs index page */
  summary?: string;
};

export type DocSection = {
  label: string;
  links: DocLink[];
};

/**
 * Sidebar order is intentional: a first-time user reads top-to-bottom.
 * Add new pages here to make them appear in the sidebar and the index.
 */
export const docsNav: DocSection[] = [
  {
    label: "Getting started",
    links: [
      {
        href: "/docs/introduction",
        title: "Introduction",
        summary: "What claudex is, what it isn't, and when you'd want it.",
      },
      {
        href: "/docs/installation",
        title: "Installation",
        summary: "One-line installer for macOS / Linux / Windows, plus the manual path.",
      },
      {
        href: "/docs/first-run",
        title: "First run",
        summary: "Admin setup, TOTP enrollment, recovery codes, and your first session.",
      },
    ],
  },
  {
    label: "Going further",
    links: [
      {
        href: "/docs/remote-access",
        title: "Remote access",
        summary: "Front claudex with Cloudflare Tunnel, frpc, Tailscale, or a Caddy reverse proxy.",
      },
      {
        href: "/docs/troubleshooting",
        title: "Troubleshooting",
        summary: "Common boot issues, rebuild loops, restart hangs, and HTTP-vs-HTTPS gotchas.",
      },
    ],
  },
];

export function flattenDocs(): DocLink[] {
  return docsNav.flatMap((section) => section.links);
}

export function findDocByHref(href: string): { section: DocSection; link: DocLink; index: number } | null {
  const flat = flattenDocs();
  const i = flat.findIndex((l) => l.href === href);
  if (i < 0) return null;
  for (const section of docsNav) {
    const link = section.links.find((l) => l.href === href);
    if (link) return { section, link, index: i };
  }
  return null;
}

export function getNeighbors(href: string): { prev: DocLink | null; next: DocLink | null } {
  const flat = flattenDocs();
  const i = flat.findIndex((l) => l.href === href);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: i > 0 ? flat[i - 1]! : null,
    next: i < flat.length - 1 ? flat[i + 1]! : null,
  };
}
