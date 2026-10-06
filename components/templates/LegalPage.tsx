import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { SectionNav } from "@/components/sections/SectionNav";

export type LegalSection = { id: string; title: string; content: ReactNode };

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

/** Shared layout for legal pages: compact hero, sticky contents rail, readable prose. */
export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  const others = legalLinks.filter((l) => l.label !== title);
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container pb-10 pt-6 lg:pb-14 lg:pt-8">
          <Breadcrumbs items={[{ label: title }]} />
          <h1 className="mt-8 text-display-lg text-navy lg:mt-10">{title}</h1>
          <p className="mt-4 max-w-measure text-lead text-ink-muted">{intro}</p>
          {/* TODO(client): have this text reviewed by legal counsel and add the effective date. */}
          <p className="mt-6 inline-block rounded-md border border-dashed border-line-strong px-3 py-1 text-sm italic text-ink-soft">
            Last updated: date to be added
          </p>
        </div>
      </section>

      <section className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="space-y-8 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <div>
                <SectionNav variant="rail" items={sections.map((s) => ({ id: s.id, label: s.title }))} />
              </div>
              <div className="space-y-3 border-t border-line pt-6 lg:pt-8">
                {others.map((l) => (
                  <Link key={l.href} href={l.href} className="flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-navy hover:text-green-ink">
                    <Icon name="file" className="h-4 w-4 text-ink-soft" />
                    {l.label}
                  </Link>
                ))}
                <p className="text-[0.9375rem] text-ink-muted">
                  Questions about this page?{" "}
                  <Link href="/contact" className="font-semibold text-navy underline underline-offset-2 hover:text-green-ink">
                    Contact us
                  </Link>
                  .
                </p>
              </div>
            </div>
          </aside>

          <div className="prose-legal max-w-measure space-y-12 lg:col-span-8 xl:col-span-7">
            {sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
                <h2 id={`${s.id}-title`}>{s.title}</h2>
                {s.content}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
