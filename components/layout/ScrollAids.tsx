"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

function useScrolledPast(px: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > px);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [px]);
  return past;
}

function toTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  document.getElementById("main")?.focus({ preventScroll: true });
}

/**
 * Scroll helpers, shown once the visitor is well into a page:
 *  - xl and up: a small floating "Back to top" button, centred in the right-hand page gutter
 *    so it never sits over content.
 *  - below xl: a slim bottom action bar (back to top + consultation); the footer reserves space for it.
 */
export function ScrollAids() {
  const pathname = usePathname();
  const visible = useScrolledPast(720);
  const onContact = pathname.startsWith("/contact");

  return (
    <>
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        tabIndex={visible ? undefined : -1}
        className={cn(
          "fixed bottom-6 right-[max(0.75rem,calc((100vw-var(--container-max))/2+(var(--gutter)-2.5rem)/2))] z-30 hidden h-10 w-10 items-center justify-center rounded-full bg-navy text-white shadow-lift transition-[opacity,transform,background-color] duration-300 ease-premium hover:bg-green-ink xl:flex",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <Icon name="arrowUp" className="h-5 w-5" strokeWidth={2} />
      </button>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 pt-2.5 backdrop-blur-md transition-transform duration-300 ease-premium xl:hidden",
          "pb-[calc(0.625rem+env(safe-area-inset-bottom))]",
          visible ? "translate-y-0" : "translate-y-full",
        )}
        aria-hidden={!visible}
      >
        <div className="mx-auto flex max-w-xl items-center gap-2.5">
          <button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            tabIndex={visible ? undefined : -1}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border border-line-strong text-navy"
          >
            <Icon name="arrowUp" className="h-5 w-5" strokeWidth={2} />
          </button>
          {onContact ? (
            <Link
              href="/claims"
              tabIndex={visible ? undefined : -1}
              className="flex h-12 flex-1 items-center justify-center rounded-[10px] border border-line-strong font-display text-base font-semibold text-navy"
            >
              Claims &amp; Assistance
            </Link>
          ) : (
            <Link
              href="/contact"
              tabIndex={visible ? undefined : -1}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[10px] bg-green-ink font-display text-base font-semibold text-white"
            >
              Get a Consultation
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
