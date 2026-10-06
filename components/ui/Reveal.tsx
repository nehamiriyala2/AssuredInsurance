"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Subtle fade-up on first entry into the viewport. Respects reduced motion via CSS. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("is-visible");
    // Already on screen (or no observer support): show immediately.
    if (!("IntersectionObserver" in window) || el.getBoundingClientRect().top < window.innerHeight) {
      show();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(el);
    // Fail-safe: content must never stay hidden if the observer doesn't fire
    // (e.g. embedded frames, print, some crawlers). Below-the-fold items are off
    // screen anyway, so revealing them late costs nothing.
    const fallback = window.setTimeout(show, 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag ref={ref} className={cn("reveal", className)} style={delay ? { ["--reveal-delay" as string]: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
