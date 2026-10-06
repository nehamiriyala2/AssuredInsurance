"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

export type ChecklistItem = { id: string; title: string; detail: string };

/** Tick-off list for trip preparation. State lives only in the browser tab. */
export function TravelChecklist({ items }: { items: ChecklistItem[] }) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const count = items.filter((i) => done[i.id]).length;

  return (
    <div className="rounded-panel border border-line bg-white">
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
        <p className="font-display text-base font-bold text-ink">Your pre-trip list</p>
        <p className="text-sm text-ink-muted" aria-live="polite">
          {count} of {items.length} done
        </p>
      </div>
      <ul className="divide-y divide-line">
        {items.map((item) => {
          const checked = !!done[item.id];
          return (
            <li key={item.id}>
              <label className="flex cursor-pointer items-start gap-4 px-5 py-4 transition-colors hover:bg-surface sm:px-7">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={checked}
                  onChange={() => setDone((d) => ({ ...d, [item.id]: !d[item.id] }))}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-green peer-focus-visible:ring-offset-2",
                    checked ? "border-green-ink bg-green-ink text-white" : "border-line-strong bg-white text-transparent",
                  )}
                >
                  <Icon name="check" className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>
                  <span className={cn("block font-display text-base font-bold transition-colors", checked ? "text-ink-soft line-through" : "text-ink")}>
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-[0.9375rem] text-ink-muted">{item.detail}</span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
