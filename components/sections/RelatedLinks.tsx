import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";

export type RelatedLink = { label: string; href: string; icon: IconName };

/** Horizontal "explore related" navigation — a slim row of links, not a card grid. */
export function RelatedLinks({ title, items }: { title: string; items: RelatedLink[] }) {
  return (
    <nav aria-label={title} className="border-t border-line bg-canvas">
      <div className="container flex flex-col gap-4 py-8 lg:flex-row lg:items-center lg:gap-10">
        <p className="shrink-0 font-display text-base font-bold text-ink">{title}</p>
        <ul className="flex flex-wrap gap-x-2 gap-y-2">
          {items.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-[0.9375rem] font-medium text-ink transition-colors hover:border-navy hover:text-navy"
              >
                <Icon name={l.icon} className="h-4 w-4 text-green-ink" />
                {l.label}
                <Icon name="arrowRight" className="h-3.5 w-3.5 text-ink-soft transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
