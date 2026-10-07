import Image from "next/image";
import { cn } from "@/lib/cn";
import { teamMembers } from "@/data/team";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Our Team — Home page, directly below the hero's four service cards.
 * Content lives in data/team.ts; fields not yet supplied are omitted rather than
 * shown as placeholders. Uses the Home page's heading-left / content-right layout.
 */
export function OurTeam() {
  // Keep both cards structurally identical: render the text panel on both as soon as either has text.
  const showText = teamMembers.some((m) => m.name || m.designation || m.bio);

  return (
    <section id="our-team" aria-labelledby="our-team-title" className="section border-t border-line bg-canvas">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <SectionHeading
            id="our-team-title"
            title="Our Team"
            description="You speak directly with the people who lead Assured & Insured — from the first conversation through every review and renewal."
          />
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-8 lg:gap-8">
          {teamMembers.map((m, i) => (
            <Reveal as="li" key={m.photo} delay={i * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-panel border border-line bg-white shadow-card">
                <div className="relative aspect-[4/5] bg-surface-strong">
                  <Image
                    src={m.photo}
                    alt={m.name ? `Portrait of ${m.name}` : "Portrait of a member of the Assured & Insured team"}
                    fill
                    sizes="(min-width: 1536px) 440px, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    quality={90}
                    className="object-cover"
                    style={{ objectPosition: m.photoPosition ?? "50% 25%" }}
                  />
                </div>
                {showText && (
                  // An empty panel is kept side-by-side (so both cards align) but dropped when stacked.
                  <div className={cn("flex-1 border-t border-line p-6 lg:p-7", !(m.name || m.designation || m.bio) && "hidden sm:block")}>
                    {m.name && <h3 className="font-display text-title text-navy">{m.name}</h3>}
                    {m.designation && (
                      <p className={cn("font-display text-[0.9375rem] font-semibold text-green-ink", m.name && "mt-1")}>{m.designation}</p>
                    )}
                    {m.bio && <p className="mt-4 text-copy text-ink-muted">{m.bio}</p>}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
