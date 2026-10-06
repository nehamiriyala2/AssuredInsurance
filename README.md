# Assured & Insured Financial Services — Website

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Lucide icons.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Brand system

**The logo is the only source of colour.** Values were sampled from `public/brand/logo-original.png` and live once, as CSS
variables, in `styles/globals.css`. `tailwind.config.ts` *replaces* Tailwind's palette with these tokens, so default colours
(`blue-500`, `sky-*`, `indigo-*`, `slate-*`…) do not exist and cannot be used by accident.

| Token (CSS var) | Tailwind | Value | Source / use |
|---|---|---|---|
| `--brand-navy` | `navy` | `#0E1565` | Logo letterforms. Headings, footer, one accent band per page at most |
| `--brand-green` | `green` | `#629C27` | Logo square & emblem. Accents, active states, the brand square |
| `--brand-green-ink` | `green-ink` | `#4A7A1E` | Logo green deepened for WCAG AA: primary buttons, green text on white |
| `--background` / `--surface` / `--surface-strong` | `canvas` / `surface` / `surface-strong` | `#FFF` / `#F6F6F7` / `#EDEDEF` | Neutral backgrounds |
| `--border` / `--border-strong` | `line` / `line-strong` | `#E4E4E7` / `#D9D9DB` | `#D9D9DB` is the logo's extrusion grey |
| `--text-primary/secondary/tertiary` | `ink` / `ink-muted` / `ink-soft` | neutral greys | Body text |
| `--danger` | `danger` | `#B42318` | Form validation messages only |

Tints are made with opacity on the green only (`bg-green/10`). Navy is never tinted into light blue.

Usage principles: most sections are white or light grey; navy is an anchor (footer + at most one band per page); green marks
actions. The small green square — the dot of the "i" in the logo — is the only recurring decorative mark.

## Page design

Every service page has its own composition. The design system is shared; layouts are not. Shared building blocks
(`components/sections`) come in variants so pages don't repeat geometry:

| Component | Variants |
|---|---|
| `Steps` | `rail` (connected journey), `stack` (numbered list beside a sticky heading), `columns` |
| `ClosingCTA` | `navy` (inset panel), `photo`, `panel`, `plain` — always with page-specific copy |
| `SectionNav` | `bar` (sticky "on this page" strip with scrollspy), `rail` (sidebar, legal pages) |
| `CompareTable` | real table on desktop, stacked blocks on mobile |
| `Tabs` | `pill`, `underline` |

Also: `Photo` (single image treatment and registry), `CheckList`, `FAQAccordion`/`FAQTabs`, `Note`, `RelatedLinks`, `ScrollAids`
(back-to-top; on mobile combined with the consultation bar).

## Photography

`public/images` — Unsplash License photos (non-Premium only), self-hosted. See `public/images/CREDITS.md`. Register new photos in
`components/ui/Photo.tsx`. Replace with the client's own photography whenever available.

## Before going live — replace placeholders

Nothing has been invented. All of the following must be supplied by the client:

| What | Where |
|---|---|
| Phone, email, address, business hours | `lib/site.ts` → `contact` (placeholders render until set) |
| Production domain | `lib/site.ts` → `url` |
| Social profiles (only real ones) | `lib/site.ts` → `social` |
| Genuine testimonials | `data/testimonials.ts` (section stays hidden while empty) |
| Form delivery | set env `CONTACT_WEBHOOK_URL` (see `app/api/contact/route.ts`). In production the form refuses submissions until this is set. |
| Company history, registrations, team | `app/about/page.tsx` (TODO marked) |
| Legal review + effective dates | `app/privacy-policy`, `app/terms`, footer disclaimer |
| Published articles | `data/resources.ts` (add `href`. Cards show "Coming soon" until then) |

## Editing content

- `data/insurance.ts`, `data/loans.ts` — categories that drive menus, cards, the sitemap and shared content (subcategories,
  FAQs, eligibility, documents, SEO). Subcategory `id`s are anchor targets on the service pages.
- Page-specific copy for each service page sits as typed constants at the top of its route file
  (e.g. `app/insurance/health/page.tsx`), next to the layout that uses it.
- `data/financial.ts`, `data/home.ts`, `data/faqs.ts`, `data/navigation.ts`, `data/resources.ts`

## Structure

```
app/                     routes — each service has its own folder (insurance/health, loans/home, …)
components/ui/           Button, Icon, Photo, SectionHeading/Kicker, Breadcrumbs, Tabs, Reveal, Logo
components/layout/       Header (sticky), MegaMenu, MobileMenu, Footer, ScrollAids
components/sections/     SectionNav, Steps, ClosingCTA, CompareTable, CheckList, FAQ*, Note, RelatedLinks, ContactForm, …
components/templates/    LegalPage
data/                    shared content
lib/                     site config, SEO helper, validation, types
public/images/           photography (+ CREDITS.md)
```
