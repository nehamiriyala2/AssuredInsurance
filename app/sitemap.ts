import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { insurancePages } from "@/data/insurance";
import { loanPages } from "@/data/loans";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/insurance", "/financial-services", "/loans", "/about", "/contact", "/resources", "/claims", "/privacy-policy", "/terms"];
  const routes = [
    ...staticRoutes,
    ...insurancePages.map((c) => `/insurance/${c.slug}`),
    ...loanPages.map((l) => `/loans/${l.slug}`),
  ];
  return routes.map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
