"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/cn";
import { ArticleCard } from "@/components/cards/ArticleCard";

/** Applies ?topic= from the URL (also on same-page navigation from the hero topic links). */
function TopicSync({ categories, onTopic }: { categories: readonly string[]; onTopic: (t: string) => void }) {
  const params = useSearchParams();
  const topic = params.get("topic");
  useEffect(() => {
    if (topic && categories.includes(topic)) onTopic(topic);
  }, [topic, categories, onTopic]);
  return null;
}

/** Search + category filter for resource articles. Reads an optional ?topic= parameter. */
export function ArticleBrowser({ articles, categories }: { articles: Article[]; categories: readonly string[] }) {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");
  const filters = ["All", ...categories];


  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter(
      (a) =>
        (active === "All" || a.category === active) &&
        (!q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)),
    );
  }, [articles, active, query]);

  return (
    <div>
      <Suspense fallback={null}>
        <TopicSync categories={categories} onTopic={setActive} />
      </Suspense>
      <div className="flex flex-col gap-5 rounded-card border border-line bg-white p-4 lg:flex-row lg:items-center lg:gap-6 lg:p-5">
        <label className="relative block lg:w-[22rem] lg:shrink-0">
          <span className="sr-only">Search guides</span>
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides"
            className="h-12 w-full rounded-[10px] border border-line-strong bg-surface pl-12 pr-10 text-base text-ink placeholder:text-ink-soft focus:border-navy focus:bg-white focus:outline-none focus:ring-4 focus:ring-green/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-ink-soft hover:bg-surface hover:text-navy"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </label>
        <div
          role="group"
          aria-label="Filter guides by topic"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0 lg:pb-0"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={cn(
                "h-11 shrink-0 rounded-lg border px-4 font-display text-[0.9375rem] font-semibold transition-colors",
                active === f ? "border-navy bg-navy text-white" : "border-line bg-white text-ink-muted hover:border-navy hover:text-navy",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "guide" : "guides"}
        {active !== "All" && ` in ${active}`}
        {query && ` matching “${query}”`}
      </p>

      {visible.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {visible.map((a) => (
            <ArticleCard key={a.title} article={a} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-card border border-dashed border-line-strong bg-surface px-6 py-14 text-center">
          <p className="font-display text-title">No guides found</p>
          <p className="mt-2 text-copy text-ink-muted">Try a different search term or topic.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActive("All");
            }}
            className="mt-6 font-display text-[0.9375rem] font-bold text-navy underline underline-offset-4"
          >
            Show all guides
          </button>
        </div>
      )}
    </div>
  );
}
