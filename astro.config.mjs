import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://claudex.dev",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
