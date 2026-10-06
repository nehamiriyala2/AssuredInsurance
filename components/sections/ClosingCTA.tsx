import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Photo, type PhotoKey } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

type Action = { label: string; href: string };

/**
 * End-of-page call to action. One component, four treatments — pick the one
 * that suits the page, and always write page-specific copy.
 *
 *  - `navy`   brand-navy band; heading left, actions right. Use on at most one
 *             section per page (and not on pages whose hero is already navy).
 *  - `photo`  light band with a photograph beside the copy.
 *  - `panel`  inset light panel with a green edge; compact.
 *  - `plain`  centred statement on white, separated by a rule.
 */
export function ClosingCTA({
  variant,
  title,
  description,
  primary,
  secondary,
  photo,
  note,
}: {
  variant: "navy" | "photo" | "panel" | "plain";
  title: string;
  description: ReactNode;
  primary: Action;
  secondary?: Action;
  photo?: PhotoKey;
  /** Optional small print under the actions. */
  note?: ReactNode;
}) {
  if (variant === "navy") {
    return (
      // Inset on white so it never merges with the navy footer below.
      <section className="bg-canvas pb-12 pt-4 md:pb-16 xl:pb-20">
        <div className="container">
        <div className="grid gap-8 rounded-panel bg-navy px-7 py-12 text-white sm:px-10 md:py-14 lg:grid-cols-12 lg:items-center lg:gap-12 xl:px-16 xl:py-16">
          <Reveal className="lg:col-span-7">
            <span aria-hidden="true" className="block h-3 w-3 bg-green" />
            <h2 className="mt-6 text-display-md text-white">{title}</h2>
            <p className="mt-4 max-w-measure text-lead text-white/75">{description}</p>
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <ButtonLink href={primary.href} size="lg" arrow variant="light">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} size="lg" variant="outlineLight">
                {secondary.label}
              </ButtonLink>
            )}
          </Reveal>
          {note && <p className="text-sm text-white/60 lg:col-span-12">{note}</p>}
        </div>
        </div>
      </section>
    );
  }

  if (variant === "photo") {
    return (
      <section className="section bg-surface">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {photo && (
            <Reveal>
              <Photo photo={photo} className="aspect-[16/10]" />
            </Reveal>
          )}
          <Reveal delay={80}>
            <h2 className="text-display-md">{title}</h2>
            <p className="mt-4 max-w-measure text-lead text-ink-muted">{description}</p>
            <Actions primary={primary} secondary={secondary} className="mt-8" />
            {note && <p className="mt-6 text-sm text-ink-soft">{note}</p>}
          </Reveal>
        </div>
      </section>
    );
  }

  if (variant === "panel") {
    return (
      <section className="section-sm bg-canvas">
        <div className="container">
          <Reveal className="grid gap-8 rounded-panel border border-line border-l-4 border-l-green bg-surface p-7 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:p-12">
            <div className="lg:col-span-7">
              <h2 className="text-display-sm lg:text-display-md">{title}</h2>
              <p className="mt-3 max-w-measure text-lead text-ink-muted">{description}</p>
            </div>
            <div className="lg:col-span-5">
              <Actions primary={primary} secondary={secondary} className="lg:justify-end" />
              {note && <p className="mt-4 text-sm text-ink-soft lg:text-right">{note}</p>}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  // plain
  return (
    <section className="section border-t border-line bg-canvas">
      <Reveal className="container flex flex-col items-center text-center">
        <span aria-hidden="true" className="brand-square h-3 w-3" />
        <h2 className="mt-6 max-w-3xl text-display-md">{title}</h2>
        <p className="mt-4 max-w-measure text-lead text-ink-muted">{description}</p>
        <Actions primary={primary} secondary={secondary} className="mt-8 justify-center" />
        {note && <p className="mt-6 text-sm text-ink-soft">{note}</p>}
      </Reveal>
    </section>
  );
}

function Actions({ primary, secondary, className }: { primary: Action; secondary?: Action; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <ButtonLink href={primary.href} size="lg" arrow>
        {primary.label}
      </ButtonLink>
      {secondary && (
        <ButtonLink href={secondary.href} size="lg" variant="outline">
          {secondary.label}
        </ButtonLink>
      )}
    </div>
  );
}
