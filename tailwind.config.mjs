const c = (v) => `rgb(var(${v}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: c("--c-canvas"),
        paper: c("--c-paper"),
        ink: {
          DEFAULT: c("--c-ink"),
          soft: c("--c-ink-soft"),
          muted: c("--c-ink-muted"),
          faint: c("--c-ink-faint"),
        },
        line: {
          DEFAULT: c("--c-line"),
          strong: c("--c-line-strong"),
          faint: c("--c-line-faint"),
        },
        klein: {
          DEFAULT: c("--c-klein"),
          soft: c("--c-klein-soft"),
          ink: c("--c-klein-ink"),
          wash: c("--c-klein-wash"),
        },
        success: { DEFAULT: c("--c-success"), wash: c("--c-success-wash") },
        warn: { DEFAULT: c("--c-warn"), wash: c("--c-warn-wash") },
        danger: { DEFAULT: c("--c-danger"), wash: c("--c-danger-wash") },
        indigo: { DEFAULT: c("--c-indigo"), wash: c("--c-indigo-wash"), ink: c("--c-indigo-ink") },
        purple: { DEFAULT: c("--c-purple"), wash: c("--c-purple-wash") },
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "ui-serif", "serif"],
        sans: ['"Geist"', '"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05)",
        lift: "0 12px 44px -18px rgba(0,0,0,0.32), 0 1px 2px rgba(0,0,0,0.06)",
        glow: "0 30px 80px -30px rgba(204,120,92,0.45), 0 2px 4px rgba(0,0,0,0.08)",
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};
