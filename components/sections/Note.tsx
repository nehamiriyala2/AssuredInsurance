import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/** Small-print disclosure. Neutral, never alarming. */
export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-start gap-3 rounded-card bg-surface px-5 py-4 text-[0.9375rem] leading-relaxed text-ink-muted", className)}>
      <Icon name="info" className="mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-navy" />
      <span>{children}</span>
    </p>
  );
}
