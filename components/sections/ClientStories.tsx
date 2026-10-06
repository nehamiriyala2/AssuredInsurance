import { testimonials } from "@/data/testimonials";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Renders only when genuine testimonials exist in data/testimonials.ts
 * and the feature flag is enabled. Nothing is shown otherwise.
 */
export function ClientStories() {
  if (!site.features.clientStories || testimonials.length === 0) return null;

  return (
    <section className="section border-t border-line bg-canvas">
      <div className="container">
        <SectionHeading title="In Our Clients' Words" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-card border border-line bg-white p-7">
                <span aria-hidden="true" className="brand-square h-2.5 w-2.5" />
                <blockquote className="mt-5 flex-1 text-lead leading-relaxed text-ink">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <span className="block font-display font-semibold text-ink">{t.name}</span>
                  {t.context && <span className="mt-0.5 block text-sm text-ink-soft">{t.context}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
