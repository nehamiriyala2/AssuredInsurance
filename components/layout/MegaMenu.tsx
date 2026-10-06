import Link from "next/link";
import type { NavItem } from "@/data/navigation";
import { insuranceCategories, insuranceHref } from "@/data/insurance";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/Button";

export function MegaMenu({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  const primary = insuranceCategories.filter((c) => c.hasPage);
  const other = insuranceCategories.filter((c) => !c.hasPage);
  return (
    <div id={id} className="absolute inset-x-0 top-full animate-menu-in border-t border-line bg-white shadow-lift">
      <div className="container grid grid-cols-12 gap-10 py-9">
        <ul className="col-span-9 grid grid-cols-3 gap-x-10 gap-y-7">
          {primary.map((c) => {
            const href = insuranceHref(c);
            return (
              <li key={c.slug}>
                <Link href={href} onClick={onNavigate} className="group flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-navy transition-colors group-hover:bg-green group-hover:text-white">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base font-bold text-ink transition-colors group-hover:text-navy">{c.title}</span>
                </Link>
                <ul className="ml-5 mt-3 space-y-2 border-l border-line pl-[1.4rem]">
                  {c.subcategories.slice(0, 4).map((s) => (
                    <li key={s.id}>
                      <Link href={`${href}#${s.id}`} onClick={onNavigate} className="text-[0.9375rem] text-ink-muted transition-colors hover:text-navy">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="col-span-3 flex flex-col border-l border-line pl-10">
          <p className="font-display text-lg font-bold leading-snug text-ink">Not sure where to start?</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">An advisor can help you work out which protection to prioritise for your stage of life.</p>
          <div className="mt-6 flex flex-col gap-3">
            <TextLink href="/insurance" className="text-[0.9375rem]">
              All insurance categories
            </TextLink>
            <TextLink href="/contact?service=insurance" className="text-[0.9375rem]">
              Talk to an advisor
            </TextLink>
          </div>
          {other.map((c) => (
            <div key={c.slug} className="mt-auto rounded-card bg-surface p-4">
              <Link href={insuranceHref(c)} onClick={onNavigate} className="flex items-center gap-2 font-display text-[0.9375rem] font-bold text-ink hover:text-navy">
                <Icon name={c.icon} className="h-4 w-4 text-green-ink" />
                {c.title}
              </Link>
              <p className="mt-1.5 text-sm text-ink-muted">{c.subcategories.map((s) => s.title).join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ListMenu({ id, item, onNavigate }: { id: string; item: NavItem; onNavigate: () => void }) {
  return (
    <div id={id} className="absolute left-0 top-full w-[19rem] animate-menu-in pt-2">
      <div className="rounded-card border border-line bg-white p-2 shadow-lift">
        <ul>
          {item.children?.map((child) => (
            <li key={child.label}>
              <Link href={child.href} onClick={onNavigate} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface">
                {child.icon && (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface text-navy transition-colors group-hover:bg-green group-hover:text-white">
                    <Icon name={child.icon} className="h-4 w-4" />
                  </span>
                )}
                <span className="text-[0.9375rem] font-medium text-ink">{child.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-1 border-t border-line px-3 pb-1.5 pt-3">
          <TextLink href={item.href} className="text-sm">
            View all {item.label.toLowerCase()}
          </TextLink>
        </div>
      </div>
    </div>
  );
}
