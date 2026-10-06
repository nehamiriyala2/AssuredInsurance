import type { IconName } from "@/components/ui/Icon";

export type FAQ = { question: string; answer: string };

export type TitledText = { title: string; description: string };

export type IconItem = TitledText & { icon: IconName };

export type SubCategory = { id: string; title: string; description: string };

export type InsuranceCategory = {
  slug: string;
  /** Categories without a detail page link to an anchor on /insurance instead. */
  hasPage: boolean;
  title: string;
  shortTitle: string;
  icon: IconName;
  summary: string;
  hero: { heading: string; description: string };
  subcategories: SubCategory[];
  why?: IconItem[];
  protects?: string[];
  suitableFor?: string[];
  considerations?: TitledText[];
  faqs?: FAQ[];
  seo?: { title: string; description: string };
};

export type LoanCategory = {
  slug: string;
  hasPage: boolean;
  title: string;
  icon: IconName;
  summary: string;
  hero?: { heading: string; description: string };
  why?: IconItem[];
  eligibility?: string[];
  documents?: { group: string; items: string[] }[];
  faqs?: FAQ[];
  seo?: { title: string; description: string };
};

export type ProcessStep = { title: string; description: string };

export type Article = {
  title: string;
  excerpt: string;
  category: string;
  /** Leave undefined until the article is published — the card shows "Coming soon". */
  href?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  context?: string;
};
