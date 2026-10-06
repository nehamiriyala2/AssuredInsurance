import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

export function CheckList({
  items,
  columns = 1,
  tone = "default",
  className,
}: {
  items: string[];
  columns?: 1 | 2 | 3;
  tone?: "default" | "inverse";
  className?: string;
}) {
  const inverse = tone === "inverse";
  return (
    <ul className={cn("grid gap-x-8 gap-y-3.5", columns === 2 && "sm:grid-cols-2", columns === 3 && "sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-start gap-3 text-copy leading-relaxed", inverse ? "text-white/85" : "text-ink")}>
          <span
            className={cn(
              "mt-[0.2em] flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              inverse ? "bg-green text-navy" : "bg-green/15 text-green-ink",
            )}
          >
            <Icon name="check" className="h-3 w-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
