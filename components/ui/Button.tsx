import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Variant = "primary" | "navy" | "outline" | "light" | "outlineLight";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-display font-semibold tracking-[-0.005em] transition-[background-color,color,border-color,box-shadow] duration-200 ease-premium disabled:pointer-events-none disabled:opacity-60";

/** Green = primary action. Navy = secondary emphasis. Both hover to the other brand colour. */
const variants: Record<Variant, string> = {
  primary: "bg-green-ink text-white hover:bg-navy",
  navy: "bg-navy text-white hover:bg-green-ink",
  outline: "border border-line-strong bg-white text-navy hover:border-navy",
  light: "bg-white text-navy hover:bg-green hover:text-white",
  outlineLight: "border border-white/35 text-white hover:border-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-base",
  lg: "h-[3.25rem] px-7 text-base lg:h-14 lg:px-8 lg:text-[1.0625rem]",
};

type CommonProps = { variant?: Variant; size?: Size; arrow?: boolean; children: ReactNode; className?: string };

export function buttonClasses({ variant = "primary", size = "md", className }: Omit<CommonProps, "children" | "arrow">) {
  return cn(base, variants[variant], sizes[size], className);
}

function Content({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow && <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  arrow,
  className,
  children,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link href={href} className={buttonClasses({ variant, size, className })} {...rest}>
      <Content arrow={arrow}>{children}</Content>
    </Link>
  );
}

export function Button({
  variant,
  size,
  arrow,
  className,
  children,
  type = "button",
  ...rest
}: CommonProps & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest}>
      <Content arrow={arrow}>{children}</Content>
    </button>
  );
}

/** Understated text link with an arrow. */
export function TextLink({
  href,
  children,
  className,
  tone = "default",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-1.5 font-display text-copy font-semibold transition-colors",
        tone === "inverse" ? "text-white hover:text-green" : "text-navy hover:text-green-ink",
        className,
      )}
    >
      {children}
      <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
    </Link>
  );
}
