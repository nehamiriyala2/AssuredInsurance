import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Set true for pages that shouldn't be indexed (e.g. drafts). */
  noIndex?: boolean;
};

export function buildMetadata({ title, description, path, noIndex }: PageMeta): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      title: `${title} | ${site.shortName}`,
      description,
      url,
      images: [{ url: "/brand/logo-original.png", width: 1080, height: 1080, alt: `${site.name} logo` }],
    },
    twitter: {
      card: "summary",
      title: `${title} | ${site.shortName}`,
      description,
      images: ["/brand/logo-original.png"],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
