import Link from "next/link";
import type { Article } from "@/lib/types";
import { resourceCategoryIcon } from "@/data/resources";
import { Icon } from "@/components/ui/Icon";

/** Text-first editorial card: category label, title, excerpt and status. */
export function ArticleCard({ article }: { article: Article }) {
  const published = Boolean(article.href);
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 ease-premium hover:border-line-strong hover:shadow-card lg:p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-green-ink">
          <Icon name={resourceCategoryIcon[article.category] ?? "book"} className="h-4 w-4" />
          {article.category}
        </span>
        {!published && <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-semibold text-ink-soft">Coming soon</span>}
      </div>
      <h3 className="mt-4 font-display text-title">
        {published ? (
          <Link href={article.href!} className="after:absolute after:inset-0 after:content-[''] group-hover:text-navy">
            {article.title}
          </Link>
        ) : (
          article.title
        )}
      </h3>
      <p className="mt-3 flex-1 text-copy text-ink-muted">{article.excerpt}</p>
      <p className="mt-6 flex items-center gap-2 border-t border-line pt-4 font-display text-[0.9375rem] font-semibold text-navy">
        {published ? (
          <>
            Read guide <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        ) : (
          <span className="text-ink-soft">Guide in preparation</span>
        )}
      </p>
    </article>
  );
}
