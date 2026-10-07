/**
 * Central site configuration.
 *
 * EVERYTHING IN `contact` AND `social` IS A PLACEHOLDER.
 * Replace with verified client details before going live. Any field left as
 * `null` is rendered as a clearly-marked "to be added" placeholder in the UI,
 * so nothing invented is ever shown to visitors.
 */
export const site = {
  name: "Assured & Insured Financial Services",
  shortName: "Assured & Insured",
  tagline: "Protection for today. Confidence for tomorrow.",
  description:
    "Insurance, financial planning and loan services from Assured & Insured Financial Services — guidance designed to help you protect what matters and plan for what lies ahead.",
  // TODO(client): replace with the production domain.
  url: "https://www.example.com",
  locale: "en_IN",

  contact: {
    phone: null as string | null, // e.g. "+91 00000 00000"
    email: null as string | null, // e.g. "hello@yourdomain.com"
    whatsapp: null as string | null,
    address: null as string | null, // full office address
    hours: null as string | null, // e.g. "Mon – Sat, 9:30 AM – 6:30 PM"
    mapEmbedUrl: null as string | null,
  },

  // Only add profiles that genuinely exist. Empty entries are not rendered.
  social: [] as { label: string; href: string }[],

  /** Feature flags for sections that depend on client-supplied content. */
  features: {
    /** Show the Client Stories section once genuine testimonials are added to data/testimonials.ts */
    clientStories: true,
    /**
     * Resources (guides & FAQs hub — app/resources/page.tsx). Disabled: hidden from the
     * navigation, footer and sitemap. The route and data/resources.ts are kept intact;
     * set to `true` to restore its nav item, footer column, sitemap entry and FAQ links.
     */
    resources: false,
  },
} as const;

/** "All FAQs" link target on service pages — only while the Resources hub is enabled. */
export const faqsHref: string | null = site.features.resources ? "/resources#faqs" : null;

export const placeholderLabel = {
  phone: "Phone number to be added",
  email: "Email address to be added",
  address: "Office address to be added",
  hours: "Business hours to be added",
} as const;
