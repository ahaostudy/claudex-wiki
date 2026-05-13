export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
};

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  if (seg && (locales as readonly string[]).includes(seg)) {
    return seg as Locale;
  }
  return defaultLocale;
}

/**
 * Convert a canonical (English) path like "/docs/installation" into the
 * locale-prefixed equivalent. The default locale stays unprefixed.
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

/**
 * Strip a locale prefix from a path, returning the canonical (English) path.
 * Used to render the language switcher: keep the user on the same page when
 * they switch.
 */
export function unlocalizePath(path: string): string {
  const clean = path.replace(/\/+$/, "") || "/";
  for (const loc of locales) {
    if (loc === defaultLocale) continue;
    if (clean === `/${loc}`) return "/";
    if (clean.startsWith(`/${loc}/`)) return clean.slice(`/${loc}`.length);
  }
  return clean === "" ? "/" : clean;
}
