import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

export type CompareValue = boolean | string | ReactNode;
export type CompareRow = { label: string; values: CompareValue[] };

function Cell({ value }: { value: CompareValue }) {
  if (value === true)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green/15 text-green-ink">
        <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center text-ink-soft">
        <Icon name="minus" className="h-4 w-4" />
        <span className="sr-only">No</span>
      </span>
    );
  return <>{value}</>;
}

/**
 * Comparison table. A real <table> from md up; on small screens each column
 * becomes its own stacked block so nothing scrolls sideways.
 */
export function CompareTable({
  columns,
  rows,
  caption,
  highlight,
  className,
}: {
  columns: { label: string; sublabel?: string }[];
  rows: CompareRow[];
  caption: string;
  /** Index of a column to emphasise. */
  highlight?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {/* md and up */}
      <div className="hidden overflow-hidden rounded-panel border border-line bg-white md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-line bg-surface">
              <th scope="col" className="w-[28%] px-6 py-5 font-display text-sm font-bold uppercase tracking-[0.1em] text-ink-soft">
                <span className="sr-only">Feature</span>
              </th>
              {columns.map((c, i) => (
                <th key={c.label} scope="col" className={cn("px-6 py-5 align-bottom", highlight === i && "bg-white shadow-[inset_0_3px_0_rgb(var(--brand-green))]")}>
                  <span className="block font-display text-title text-ink">{c.label}</span>
                  {c.sublabel && <span className="mt-1 block text-sm font-normal text-ink-muted">{c.sublabel}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b border-line last:border-0">
                <th scope="row" className="px-6 py-5 align-top font-display text-base font-semibold text-ink">
                  {r.label}
                </th>
                {r.values.map((v, i) => (
                  <td key={i} className="px-6 py-5 align-top text-copy text-ink-muted">
                    <Cell value={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Small screens */}
      <div className="grid gap-4 md:hidden">
        {columns.map((c, ci) => (
          <div key={c.label} className={cn("rounded-card border bg-white p-5", highlight === ci ? "border-green" : "border-line")}>
            <p className="font-display text-title text-ink">{c.label}</p>
            {c.sublabel && <p className="mt-1 text-sm text-ink-muted">{c.sublabel}</p>}
            <dl className="mt-4 divide-y divide-line border-t border-line">
              {rows.map((r) => (
                <div key={r.label} className="flex items-start justify-between gap-4 py-3">
                  <dt className="text-[0.9375rem] font-semibold text-ink">{r.label}</dt>
                  <dd className="max-w-[55%] text-right text-[0.9375rem] text-ink-muted">
                    <Cell value={r.values[ci]} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
