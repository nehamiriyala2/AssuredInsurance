"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

export type TabItem = { id: string; label: string; icon?: IconName; content: ReactNode };

/**
 * Accessible tabs (WAI-ARIA tab pattern, arrow-key navigation).
 * `variant="pill"` — compact segmented control; `variant="underline"` — wide tabs on a rule.
 */
export function Tabs({ items, label, variant = "pill", className }: { items: TabItem[]; label: string; variant?: "pill" | "underline"; className?: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next: number | null = null;
    if (e.key in step) next = (active + step[e.key] + items.length) % items.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = items.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className={cn(
          // contain:inline-size stops the tab strip's full width from stretching a parent grid column
          // (which caused horizontal page overflow on phones); the strip scrolls sideways instead.
          "no-scrollbar -mx-[var(--gutter)] flex overflow-x-auto px-[var(--gutter)] [contain:inline-size] sm:mx-0 sm:px-0",
          variant === "pill" ? "gap-2" : "gap-6 border-b border-line lg:gap-10",
        )}
      >
        {items.map((t, i) => {
          const selected = active === i;
          return (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              id={`${base}-tab-${t.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${base}-panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 font-display text-base font-semibold transition-colors",
                variant === "pill"
                  ? cn("h-11 rounded-full border px-5", selected ? "border-navy bg-navy text-white" : "border-line-strong bg-white text-ink-muted hover:border-navy hover:text-navy")
                  : cn("-mb-px h-14 border-b-2", selected ? "border-green text-navy" : "border-transparent text-ink-muted hover:text-navy"),
              )}
            >
              {t.icon && <Icon name={t.icon} className="h-[1.125rem] w-[1.125rem]" />}
              {t.label}
            </button>
          );
        })}
      </div>
      {items.map((t, i) => (
        <div
          key={t.id}
          id={`${base}-panel-${t.id}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${t.id}`}
          hidden={active !== i}
          tabIndex={0}
          className="mt-8 focus-visible:ring-offset-4"
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
