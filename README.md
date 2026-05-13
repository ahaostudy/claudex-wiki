# claudex-wiki

Marketing site and user-facing documentation for [claudex](https://github.com/ahaostudy/claudex).

Built with [Astro](https://astro.build/) + Tailwind. Output is fully static — deploy to GitHub Pages, Cloudflare Pages, Vercel, Netlify, or any static host.

## Stack

- Astro 5 + Tailwind 3
- Same design tokens as `web/` (Fraunces serif / Geist sans / JetBrains Mono, klein-orange + warm-white palette)
- i18n-ready routing (English first; structure leaves room for `/zh`, `/ja`, etc. without code rewrite)

## Develop

```sh
pnpm install     # at the repo root, also installs claudex-wiki deps
pnpm --filter @claudex/wiki dev
```

Open http://localhost:4321.

## Build

```sh
pnpm --filter @claudex/wiki build
```

Output lands in `claudex-wiki/dist/`. Deploy that directory.

## Layout

```
claudex-wiki/
├── astro.config.mjs
├── tailwind.config.mjs
├── public/                 # static assets
└── src/
    ├── styles/global.css   # design tokens + doc-prose styles
    ├── layouts/
    │   ├── BaseLayout.astro
    │   └── DocsLayout.astro
    ├── components/
    │   ├── Navbar.astro
    │   ├── Footer.astro
    │   ├── home/           # marketing-page sections
    │   └── docs/           # docs sidebar
    ├── data/docs-nav.ts    # sidebar order; add new docs here
    └── pages/
        ├── index.astro     # homepage
        └── docs/
            ├── index.astro
            ├── introduction.astro
            ├── installation.astro
            ├── first-run.astro
            ├── remote-access.astro
            └── troubleshooting.astro
```

## Writing docs

Each doc page is a `.astro` file that wraps `<DocsLayout>`. The body is plain HTML — Tailwind classes work, raw SVG works, inline `<script>` works. That's the design intent: when you need a visual example, you can drop in any HTML you like (a hand-drawn diagram, a fake terminal, an interactive widget) without fighting a Markdown renderer.

The default body styling comes from the `.doc-prose` class in `global.css`, so plain `<h2>`, `<p>`, `<ul>`, `<pre><code>`, `<table>`, and `<blockquote>` are styled correctly out of the box. For anything outside the prose flow, use `class="not-prose"` to opt out (Tailwind utilities still apply).

To add a new doc:

1. Create `src/pages/docs/<slug>.astro`.
2. Add an entry to `src/data/docs-nav.ts` so it shows up in the sidebar and the docs index.

Prev / next navigation is computed from the order in `docs-nav.ts`.
