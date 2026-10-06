import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/**
 * The supplied logo mark is used as-is (only surrounding whitespace trimmed).
 * The wordmark beside it is set in the site typeface.
 * On navy backgrounds the mark sits on a white tile so its colours are unchanged.
 */
export function Logo({ tone = "default", className }: { tone?: "default" | "inverse"; className?: string }) {
  const inverse = tone === "inverse";
  return (
    <Link href="/" aria-label={`${site.name} — home`} className={cn("group inline-flex shrink-0 items-center gap-3", className)}>
      <span className={cn("flex shrink-0 items-center justify-center", inverse && "rounded-lg bg-white p-1.5")}>
        <Image src="/brand/logo-mark.png" alt="" width={350} height={304} priority className={cn("w-auto", inverse ? "h-10" : "h-10 xl:h-12")} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.0625rem] font-bold tracking-[-0.01em] sm:text-[1.1875rem]", inverse ? "text-white" : "text-navy")}>
          Assured <span className={inverse ? "text-green" : "text-green-ink"}>&amp;</span> Insured
        </span>
        <span
          className={cn(
            "mt-1.5 font-display text-[0.625rem] font-semibold uppercase tracking-[0.22em] sm:text-[0.6875rem]",
            inverse ? "text-white/65" : "text-ink-soft",
          )}
        >
          Financial Services
        </span>
      </span>
    </Link>
  );
}
