"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { mainNav, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu, ListMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Sticky header. Always white so it reads cleanly over any section;
 * a hairline and soft shadow appear once the page has scrolled.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape / outside click closes desktop menus.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const trigger = document.getElementById(`nav-trigger-${openMenu.toLowerCase().replace(/\s+/g, "-")}`);
        setOpenMenu(null);
        trigger?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, [cancelClose]);

  const raised = scrolled || openMenu !== null || mobileOpen;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300 ease-premium",
        raised ? "shadow-header" : "shadow-[0_1px_0_rgb(var(--border))]",
      )}
    >
      <a href="#main" className="sr-only z-[60] rounded-md bg-navy px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3">
        Skip to content
      </a>

      <div className="container flex h-[var(--header-h)] items-center justify-between gap-6">
        <Logo />

        <nav ref={navRef} aria-label="Main" className="hidden h-full xl:block" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
          <ul className="flex h-full items-center gap-1 2xl:gap-2">
            {mainNav.map((item) => (
              <DesktopItem
                key={item.href}
                item={item}
                active={isActive(pathname, item.href)}
                open={openMenu === item.label}
                onOpen={() => {
                  cancelClose();
                  setOpenMenu(item.label);
                }}
                onToggle={() => setOpenMenu((m) => (m === item.label ? null : item.label))}
                onClose={() => setOpenMenu(null)}
              />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/contact" className="hidden h-11 px-5 sm:inline-flex">
            Get a Consultation
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-navy transition-colors hover:bg-surface xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span className={cn("absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ease-premium", mobileOpen ? "top-1.5 rotate-45" : "top-0")} />
              <span className={cn("absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity duration-200", mobileOpen && "opacity-0")} />
              <span className={cn("absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ease-premium", mobileOpen ? "top-1.5 -rotate-45" : "top-3")} />
            </span>
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </header>
  );
}

function DesktopItem({
  item,
  active,
  open,
  onOpen,
  onToggle,
  onClose,
}: {
  item: NavItem;
  active: boolean;
  open: boolean;
  onOpen: () => void;
  onToggle: () => void;
  onClose: () => void;
}) {
  const linkClass = cn(
    "relative inline-flex h-full items-center gap-1 px-3 font-display text-[0.9375rem] font-semibold transition-colors 2xl:px-3.5 2xl:text-base",
    active || open ? "text-navy" : "text-ink-muted hover:text-navy",
  );
  const indicator = (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-x-3 bottom-0 h-[3px] origin-left bg-green transition-transform duration-300 ease-premium",
        active ? "scale-x-100" : "scale-x-0",
      )}
    />
  );

  if (!item.children) {
    return (
      // "Home" is redundant with the logo link; it is shown only where the bar has room.
      <li className={cn("h-full", item.href === "/" && "hidden 2xl:block")}>
        <Link href={item.href} className={linkClass} aria-current={active ? "page" : undefined}>
          {item.label}
          {indicator}
        </Link>
      </li>
    );
  }

  const slug = item.label.toLowerCase().replace(/\s+/g, "-");
  const panelId = `nav-panel-${slug}`;
  // Split control: the label is a real link to the overview page; the chevron toggles the menu
  // (hover also opens it). Keyboard and touch users get a dedicated, labelled toggle.
  return (
    <li className={cn("flex h-full items-center", item.menu === "list" && "relative")} onMouseEnter={onOpen}>
      <Link href={item.href} className={cn(linkClass, "pr-1 2xl:pr-1")} aria-current={active ? "page" : undefined} onClick={onClose}>
        {item.label}
        {indicator}
      </Link>
      <button
        id={`nav-trigger-${slug}`}
        type="button"
        className={cn(
          "-ml-0.5 mr-1 inline-flex h-8 w-7 items-center justify-center rounded-md transition-colors hover:bg-surface",
          active || open ? "text-navy" : "text-ink-muted hover:text-navy",
        )}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${open ? "Hide" : "Show"} ${item.label} menu`}
        onClick={onToggle}
      >
        <ChevronDown aria-hidden="true" className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (item.menu === "mega" ? <MegaMenu id={panelId} onNavigate={onClose} /> : <ListMenu id={panelId} item={item} onNavigate={onClose} />)}
    </li>
  );
}
