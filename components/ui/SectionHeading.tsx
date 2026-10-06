import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Optional short label. Use only where it adds orientation — most sections don't need one. */
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  as?: "h1" | "h2" | "h3";
  /** Shown to the right of the heading on wide screens. */
  action?: ReactNode;
  className?: string;
  id?: string;
};

export function Kicker({ children, tone = "default", className }: { children: ReactNode; tone?: "default" | "inverse"; className?: string }) {
  return (
    <p className={cn("kicker", tone === "inverse" && "!text-green", className)}>
      <span className="brand-square" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({ kicker, title, description, align = "left", tone = "default", as: Tag = "h2", action, className, id }: Props) {
  const centered = align === "center";
  const inverse = tone === "inverse";
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        action && !centered && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        centered && "items-center text-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", centered && "mx-auto flex flex-col items-center")}>
        {kicker && <Kicker tone={tone}>{kicker}</Kicker>}
        <Tag id={id} className={cn("text-display-md", kicker && "mt-4", inverse && "text-white")}>
          {title}
        </Tag>
        {description && <p className={cn("mt-4 text-lead", inverse ? "text-white/75" : "text-ink-muted", centered && "max-w-2xl")}>{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
