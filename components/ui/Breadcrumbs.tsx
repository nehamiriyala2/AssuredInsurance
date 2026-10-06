import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, tone = "default", className }: { items: Crumb[]; tone?: "default" | "inverse"; className?: string }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const inverse = tone === "inverse";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm", inverse ? "text-white/65" : "text-ink-soft")}>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className={cn("transition-colors", inverse ? "hover:text-white" : "hover:text-navy")}>
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={cn(last && "font-medium", last && (inverse ? "text-white" : "text-ink-muted"))}>
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 opacity-60" />}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
