import { cn } from "@/lib/cn";

/** Renders a verified value, or a clearly-marked placeholder for the client to replace. */
export function ValueOrPlaceholder({
  value,
  placeholder,
  href,
  tone = "default",
}: {
  value: string | null;
  placeholder: string;
  href?: string;
  tone?: "default" | "inverse";
}) {
  if (value) {
    return href ? (
      <a href={href} className={cn("transition-colors", tone === "inverse" ? "hover:text-green" : "hover:text-green-ink")}>
        {value}
      </a>
    ) : (
      <span>{value}</span>
    );
  }
  return (
    <span
      className={cn(
        "inline-block rounded-md border border-dashed px-2 py-0.5 text-sm italic",
        tone === "inverse" ? "border-white/30 text-white/65" : "border-line-strong text-ink-soft",
      )}
    >
      {placeholder}
    </span>
  );
}
