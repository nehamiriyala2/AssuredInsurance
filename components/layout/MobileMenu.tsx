"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function MobileMenu({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto overscroll-contain border-t border-line bg-white transition-[opacity,transform,visibility] duration-300 ease-premium nav:hidden",
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
      )}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile" className="container flex min-h-full flex-col pb-10 pt-2">
        <ul className="divide-y divide-line">
          {mainNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            if (!item.children) {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    tabIndex={open ? undefined : -1}
                    aria-current={active ? "page" : undefined}
                    className={cn("flex items-center justify-between py-4 font-display text-lg font-semibold", active ? "text-navy" : "text-ink")}
                  >
                    {item.label}
                    {active && <span className="brand-square" aria-hidden="true" />}
                  </Link>
                </li>
              );
            }
            const isOpen = expanded === item.label;
            const panelId = `mobile-sub-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <li key={item.href}>
                {/* Label navigates to the overview page; the chevron expands the sub-links. */}
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    tabIndex={open ? undefined : -1}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn("flex-1 py-4 font-display text-lg font-semibold", active ? "text-navy" : "text-ink")}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    tabIndex={open ? undefined : -1}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={`${isOpen ? "Hide" : "Show"} ${item.label} links`}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="-mr-2 flex h-11 w-11 items-center justify-center rounded-[10px] text-ink-soft transition-colors hover:bg-surface hover:text-navy"
                  >
                    <ChevronDown aria-hidden="true" className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")} />
                  </button>
                </div>
                <div id={panelId} className={cn("grid transition-[grid-template-rows] duration-300 ease-premium", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <ul className="grid gap-1 pb-4 sm:grid-cols-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            tabIndex={open && isOpen ? undefined : -1}
                            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-base text-ink-muted transition-colors hover:bg-surface hover:text-navy"
                          >
                            {child.icon && (
                              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface text-navy">
                                <Icon name={child.icon} className="h-[1.125rem] w-[1.125rem]" />
                              </span>
                            )}
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      <li className="sm:col-span-2">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          tabIndex={open && isOpen ? undefined : -1}
                          className="inline-flex items-center gap-1.5 px-2 py-2.5 font-display text-[0.9375rem] font-semibold text-green-ink"
                        >
                          View all {item.label.toLowerCase()}
                          <Icon name="arrowRight" className="h-4 w-4" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-8">
          <ButtonLink href="/contact" size="lg" arrow className="w-full" tabIndex={open ? undefined : -1} onClick={onClose}>
            Get a Consultation
          </ButtonLink>
          <Link
            href="/claims"
            onClick={onClose}
            tabIndex={open ? undefined : -1}
            className="mt-3 flex items-center justify-center gap-2 py-2 text-[0.9375rem] font-medium text-ink-muted"
          >
            <Icon name="lifebuoy" className="h-4 w-4" /> Claims &amp; Assistance
          </Link>
        </div>
      </nav>
    </div>
  );
}
