"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type SectionNavItem = { id: string; label: string };

/** Tracks which section is currently under the sticky header. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 8) current = id;
      }
      // At the very bottom, the last section is active even if it is short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = ids[ids.length - 1];
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);
  return active;
}

/**
 * Compact "On this page" navigation for long pages.
 *
 *  - `bar` (default): a slim sticky strip under the header. Horizontally
 *    scrollable on small screens; the active link follows the reader.
 *  - `rail`: a vertical list for a sticky sidebar column (legal pages etc.).
 *
 * Section ids must exist on the page. Links smooth-scroll via CSS
 * (`scroll-behavior`), and `scroll-padding-top` accounts for header + bar.
 */
export function SectionNav({ items, variant = "bar", label = "On this page" }: { items: SectionNavItem[]; variant?: "bar" | "rail"; label?: string }) {
  const ids = items.map((i) => i.id);
  const [idKey] = useState(() => ids.join("|"));
  const active = useActiveSection(idKey.split("|"));
  const listRef = useRef<HTMLUListElement>(null);

  // Reserve space for the bar in scroll-padding while it's mounted.
  useEffect(() => {
    if (variant !== "bar") return;
    document.documentElement.style.setProperty("--subnav-h", "53px");
    return () => {
      document.documentElement.style.removeProperty("--subnav-h");
    };
  }, [variant]);

  // Keep the active link visible in the horizontally scrolling bar.
  useEffect(() => {
    if (variant !== "bar") return;
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !link || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: link.offsetLeft - 16, behavior: "smooth" });
  }, [active, variant]);

  if (variant === "rail") {
    return (
      <nav aria-label={label}>
        <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-ink-soft">{label}</p>
        <ul className="mt-4 border-l border-line">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "-ml-px block border-l-2 py-2 pl-4 text-[0.9375rem] transition-colors",
                    isActive ? "border-green font-semibold text-navy" : "border-transparent text-ink-muted hover:text-navy",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label={label} className="sticky top-[var(--header-h)] z-40 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="container flex h-[52px] items-center gap-6">
        <p className="hidden shrink-0 font-display text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-ink-soft lg:block">{label}</p>
        <ul ref={listRef} className="no-scrollbar relative -mx-[var(--gutter)] flex h-full flex-1 items-stretch gap-1 overflow-x-auto px-[calc(var(--gutter)-0.75rem)] lg:mx-0 lg:px-0">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="flex">
                <a
                  href={`#${item.id}`}
                  data-id={item.id}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative flex items-center whitespace-nowrap px-3 font-display text-[0.9375rem] font-semibold transition-colors",
                    isActive ? "text-navy" : "text-ink-muted hover:text-navy",
                  )}
                >
                  {item.label}
                  <span aria-hidden="true" className={cn("absolute inset-x-3 bottom-0 h-[3px] bg-green transition-opacity", isActive ? "opacity-100" : "opacity-0")} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
