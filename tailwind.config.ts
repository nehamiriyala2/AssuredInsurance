import type { Config } from "tailwindcss";

/**
 * Brand palette — the ONLY colours available to the site.
 *
 * Every value resolves to a CSS variable in styles/globals.css, sampled from
 * the supplied logo (public/brand/logo-original.png):
 *   --brand-navy   #0E1565  the "A" and "i" letterforms
 *   --brand-green  #629C27  the "i" square and the hand emblem
 *   neutrals       derived from the logo's grey extrusion #D9D9DB
 *
 * `theme.colors` is REPLACED (not extended), so Tailwind's default palette —
 * blue-500, sky, indigo, slate… — does not exist and cannot be used by accident.
 * Use opacity modifiers (e.g. `bg-green/10`) for tints rather than new colours.
 */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts", "./lib/**/*.ts"],
  // The container is defined in styles/globals.css (fluid gutters + wide max-width).
  corePlugins: { container: false },
  theme: {
    /*
     * Breakpoints, declared as one ordered list (Tailwind emits media queries in this
     * order, so a later, wider breakpoint always wins over a narrower one).
     * `nav` is the width at which the full desktop navigation fits — logo, six links
     * and the consultation button — so the header switches from the hamburger there.
     * Keep it in sync with the `--header-h` media query in styles/globals.css.
     */
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      nav: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      white: token("white"),
      navy: token("brand-navy"),
      green: {
        DEFAULT: token("brand-green"),
        /** Logo green deepened for WCAG AA contrast — green text on white and white text on green. */
        ink: token("brand-green-ink"),
      },
      canvas: token("background"),
      surface: { DEFAULT: token("surface"), strong: token("surface-strong") },
      line: { DEFAULT: token("border"), strong: token("border-strong") },
      ink: { DEFAULT: token("text-primary"), muted: token("text-secondary"), soft: token("text-tertiary") },
      /** Form validation only. */
      danger: token("danger"),
    },
    extend: {
      borderColor: { DEFAULT: token("border") },
      ringColor: { DEFAULT: token("brand-green") },
      ringOffsetColor: { DEFAULT: token("background") },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        /*
         * Fluid type scale. Approximate sizes at 375px → 1440px (→ max):
         *   display-xl  40 → 72 (76)   home hero H1
         *   display-lg  36 → 64 (68)   page hero H1
         *   display-md  30 → 46 (50)   section H2
         *   display-sm  24 → 30 (32)   sub-section H3
         *   title       20 → 23 (24)   card / block titles
         *   lead        18 → 20 (21)   intro paragraphs
         *   body        17 → 18        running text
         *   copy        16 → 17 (17.5) card / list copy
         */
        "display-xl": ["clamp(2.5rem, 3vw + 1.8rem, 4.75rem)", { lineHeight: "1.03", letterSpacing: "-0.032em", fontWeight: "700" }],
        "display-lg": ["clamp(2.25rem, 2.63vw + 1.63rem, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-md": ["clamp(1.875rem, 1.5vw + 1.52rem, 3.125rem)", { lineHeight: "1.1", letterSpacing: "-0.026em", fontWeight: "700" }],
        "display-sm": ["clamp(1.5rem, 0.75vw + 1.2rem, 2rem)", { lineHeight: "1.18", letterSpacing: "-0.02em", fontWeight: "700" }],
        title: ["clamp(1.25rem, 0.4vw + 1.07rem, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.014em", fontWeight: "700" }],
        lead: ["clamp(1.125rem, 0.3vw + 1rem, 1.3125rem)", { lineHeight: "1.6" }],
        body: ["clamp(1.0625rem, 0.1vw + 1.03rem, 1.125rem)", { lineHeight: "1.7" }],
        copy: ["clamp(1rem, 0.15vw + 0.95rem, 1.09375rem)", { lineHeight: "1.65" }],
      },
      maxWidth: {
        /** Comfortable reading measure for running text. */
        measure: "42rem",
      },
      borderRadius: {
        card: "0.875rem",
        panel: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(var(--brand-navy) / 0.04), 0 6px 18px -8px rgb(var(--brand-navy) / 0.10)",
        lift: "0 2px 4px rgb(var(--brand-navy) / 0.05), 0 22px 44px -16px rgb(var(--brand-navy) / 0.22)",
        header: "0 1px 0 rgb(var(--border)), 0 10px 24px -18px rgb(var(--brand-navy) / 0.35)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "menu-in": { from: { opacity: "0", transform: "translateY(-6px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "fade-up": { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "menu-in": "menu-in 200ms cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-up": "fade-up 650ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
