import type { ProcessStep } from "@/lib/types";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

const num = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Numbered steps, in three compositions so process sections don't all look alike:
 *
 *  - `rail`    horizontal connected nodes on desktop, vertical timeline on mobile.
 *              Works for 3–6 steps. Good for a journey across the full width.
 *  - `stack`   vertical list with large numerals and rules. Pairs with a
 *              sticky heading in a side column.
 *  - `columns` numbered columns with a green top rule. Compact; no connectors.
 */
export function Steps({
  steps,
  variant = "rail",
  tone = "default",
  className,
}: {
  steps: ProcessStep[];
  variant?: "rail" | "stack" | "columns";
  tone?: "default" | "inverse";
  className?: string;
}) {
  const inverse = tone === "inverse";
  const titleClass = cn("font-display text-title", inverse && "text-white");
  const textClass = cn("mt-2 text-copy", inverse ? "text-white/75" : "text-ink-muted");

  if (variant === "stack") {
    return (
      <ol className={cn("border-t", inverse ? "border-white/15" : "border-line", className)}>
        {steps.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            delay={i * 60}
            className={cn("grid grid-cols-[3.5rem_1fr] gap-4 border-b py-6 sm:grid-cols-[5rem_1fr] lg:py-7", inverse ? "border-white/15" : "border-line")}
          >
            <span className={cn("font-display text-[2rem] font-bold leading-none tracking-[-0.04em] sm:text-[2.5rem]", inverse ? "text-green" : "text-green-ink")}>
              {num(i)}
            </span>
            <div>
              <h3 className={titleClass}>{s.title}</h3>
              <p className={cn(textClass, "max-w-measure")}>{s.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    );
  }

  if (variant === "columns") {
    return (
      <ol className={cn("grid gap-x-8 gap-y-10 sm:grid-cols-2", steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3", className)}>
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 60} className={cn("border-t-2 pt-5", inverse ? "border-green" : "border-green")}>
            <span className={cn("font-display text-sm font-bold tracking-[0.1em]", inverse ? "text-green" : "text-green-ink")}>STEP {num(i)}</span>
            <h3 className={cn(titleClass, "mt-3")}>{s.title}</h3>
            <p className={textClass}>{s.description}</p>
          </Reveal>
        ))}
      </ol>
    );
  }

  // rail
  return (
    <ol
      className={cn("relative grid gap-0 lg:gap-8 lg:[grid-template-columns:repeat(var(--steps),minmax(0,1fr))]", className)}
      style={{ ["--steps" as string]: steps.length }}
    >
      {/* Desktop connector line through the node centres */}
      <span aria-hidden="true" className={cn("absolute left-6 right-6 top-6 hidden h-px lg:block", inverse ? "bg-white/20" : "bg-line-strong")} />
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <Reveal as="li" key={s.title} delay={i * 70} className="relative flex gap-5 pb-8 last:pb-0 lg:block lg:pb-0">
            {/* Mobile connector */}
            {!last && <span aria-hidden="true" className={cn("absolute bottom-0 left-6 top-12 w-px lg:hidden", inverse ? "bg-white/20" : "bg-line-strong")} />}
            <span
              className={cn(
                "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-base font-bold",
                i === 0 ? "bg-green-ink text-white" : inverse ? "border border-white/30 bg-navy text-white" : "border border-line-strong bg-white text-navy",
              )}
            >
              {num(i)}
            </span>
            <div className="pt-2.5 lg:pt-6">
              <h3 className={titleClass}>{s.title}</h3>
              <p className={textClass}>{s.description}</p>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
