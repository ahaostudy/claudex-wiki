import type { Locale } from "~/i18n/config";
import { localizePath } from "~/i18n/config";
import { useTranslations, type UIKey } from "~/i18n/ui";

export type DocLink = {
  /** Locale-prefixed href ready to drop into an <a>. */
  href: string;
  title: string;
  /** Optional one-line summary shown on the docs index page. */
  summary?: string;
};

export type DocSection = {
  label: string;
  links: DocLink[];
};

type DocSlug =
  | "introduction"
  | "installation"
  | "first-run"
  | "remote-access"
  | "troubleshooting";

type SectionDef = {
  /** Translation key for the section label. */
  labelKey: UIKey;
  slugs: DocSlug[];
};

/**
 * Sidebar order is intentional: a first-time user reads top-to-bottom.
 * Add new pages here to make them appear in the sidebar and the index.
 */
const sections: SectionDef[] = [
  {
    labelKey: "docs.section.getting-started",
    slugs: ["introduction", "installation", "first-run"],
  },
  {
    labelKey: "docs.section.going-further",
    slugs: ["remote-access", "troubleshooting"],
  },
];

export function getDocsNav(locale: Locale): DocSection[] {
  const t = useTranslations(locale);
  return sections.map((section) => ({
    label: t(section.labelKey),
    links: section.slugs.map((slug) => ({
      href: localizePath(`/docs/${slug}`, locale),
      title: t(`docs.${slug}.title` as UIKey),
      summary: t(`docs.${slug}.summary` as UIKey),
    })),
  }));
}

export function flattenDocs(locale: Locale): DocLink[] {
  return getDocsNav(locale).flatMap((section) => section.links);
}

export function findDocByHref(
  href: string,
  locale: Locale,
): { section: DocSection; link: DocLink; index: number } | null {
  const nav = getDocsNav(locale);
  const flat = nav.flatMap((s) => s.links);
  const i = flat.findIndex((l) => l.href === href);
  if (i < 0) return null;
  for (const section of nav) {
    const link = section.links.find((l) => l.href === href);
    if (link) return { section, link, index: i };
  }
  return null;
}

export function getNeighbors(
  href: string,
  locale: Locale,
): { prev: DocLink | null; next: DocLink | null } {
  const flat = flattenDocs(locale);
  const i = flat.findIndex((l) => l.href === href);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: i > 0 ? flat[i - 1]! : null,
    next: i < flat.length - 1 ? flat[i + 1]! : null,
  };
}
