"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "@/lib/types";
import { cn } from "@/lib/cn";

/** Accessible accordion (button + region pattern). Also emits FAQPage structured data. */
export function FAQAccordion({ items, structuredData = true, defaultOpen = 0 }: { items: FAQ[]; structuredData?: boolean; defaultOpen?: number | null }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(defaultOpen);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left font-display text-lead font-semibold text-ink transition-colors hover:text-navy sm:py-6"
              >
                {item.question}
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300 ease-premium",
                    isOpen ? "rotate-45 border-green-ink bg-green-ink text-white" : "border-line-strong text-navy",
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid transition-[grid-template-rows] duration-300 ease-premium", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className={cn("max-w-measure pb-6 pr-12 text-body text-ink-muted transition-opacity duration-300", !isOpen && "invisible opacity-0")}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
      {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </div>
  );
}
