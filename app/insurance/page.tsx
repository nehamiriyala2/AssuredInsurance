import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { faqGroups } from "@/data/faqs";
import { insuranceCategories, insurancePages } from "@/data/insurance";
import type { ProcessStep } from "@/lib/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Photo, type PhotoKey } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Steps } from "@/components/sections/Steps";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata = buildMetadata({
  title: "Insurance Solutions — Life, Health, Motor, Home, Travel & Business",
  description:
    "Explore insurance categories including life, health, motor, home, travel and business insurance, with clear guidance from Assured & Insured Financial Services.",
  path: "/insurance",
});

const enquireHref = "/contact?service=insurance";

/* ---------------------------------------------------------------- content */

const categoryPhotos: Record<string, PhotoKey> = {
  life: "lifeFamily",
  health: "healthConsultation",
  motor: "motorCar",
  home: "homeInterior",
  travel: "travelWing",
  business: "businessTeam",
};

/** General starting points — guidance, not recommendations. Edit freely. */
const lifeStages: { icon: IconName; stage: string; context: string; consider: { label: string; href: string }[] }[] = [
  {
    icon: "graduation",
    stage: "Starting out",
    context: "First job, first vehicle, maybe first trip abroad.",
    consider: [{ label: "Health", href: "/insurance/health" }, { label: "Motor", href: "/insurance/motor" }, { label: "Travel", href: "/insurance/travel" }],
  },
  {
    icon: "users",
    stage: "Growing family",
    context: "Others now rely on your income and plans.",
    consider: [{ label: "Life", href: "/insurance/life" }, { label: "Family health", href: "/insurance/health#family" }, { label: "Child planning", href: "/insurance/life#child-future" }],
  },
  {
    icon: "home",
    stage: "Homeowner",
    context: "A large asset — often with a loan attached.",
    consider: [{ label: "Home", href: "/insurance/home" }, { label: "Life", href: "/insurance/life" }, { label: "Contents", href: "/insurance/home#contents" }],
  },
  {
    icon: "briefcase",
    stage: "Business owner",
    context: "Premises, clients and a team to look after.",
    consider: [{ label: "Business", href: "/insurance/business" }, { label: "Liability", href: "/insurance/business#professional-liability" }, { label: "Group cover", href: "/insurance/business#group-protection" }],
  },
  {
    icon: "sunset",
    stage: "Planning retirement",
    context: "Health costs rise as regular income winds down.",
    consider: [{ label: "Senior health", href: "/insurance/health#senior-citizen" }, { label: "Retirement protection", href: "/insurance/life#retirement-protection" }, { label: "Critical illness", href: "/insurance/health#critical-illness" }],
  },
];

const howWeHelp: ProcessStep[] = [
  { title: "Map what needs protecting", description: "Your family, health, vehicles, home, travel and business — we start with what you have and who depends on it." },
  { title: "Prioritise the gaps", description: "Not everything needs cover at once. We help you see which risks would hurt most and address those first." },
  { title: "Compare the options", description: "Plan types, cover levels, waiting periods and exclusions explained plainly, so the trade-offs are clear." },
  { title: "Stay with you after", description: "Renewals, life changes and claims — we help you keep cover current and understand the steps when you need it." },
];

/* ------------------------------------------------------------------- page */

export default function InsurancePage() {
  const other = insuranceCategories.find((c) => !c.hasPage);
  const insuranceFaqs = faqGroups.find((g) => g.id === "insurance")?.items ?? [];

  return (
    <>
      {/* Hero + visual category grid */}
      <section className="bg-canvas">
        <div className="container pb-12 pt-6 lg:pb-16 lg:pt-8">
          <Breadcrumbs items={[{ label: "Insurance" }]} />
          <div className="mt-8 grid gap-6 animate-fade-up lg:mt-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <h1 className="text-display-lg text-navy lg:col-span-7">Insurance for Every Part of Life</h1>
            <div className="lg:col-span-5">
              <p className="text-lead text-ink-muted">
                Six areas of protection, each explained in plain language. Start with the one on your mind — or talk it through with us first.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={enquireHref} size="lg" arrow>
                  Talk to an Advisor
                </ButtonLink>
                <ButtonLink href="#life-stages" size="lg" variant="outline">
                  Start by Life Stage
                </ButtonLink>
              </div>
            </div>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-6">
            {insurancePages.map((c, i) => {
              const large = i < 2;
              return (
                <Reveal as="li" key={c.slug} delay={(i % 3) * 60} className={large ? "lg:col-span-3" : "lg:col-span-2"}>
                  <Link
                    href={`/insurance/${c.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-panel border border-line bg-white transition-shadow hover:shadow-card"
                  >
                    <Photo
                      photo={categoryPhotos[c.slug] ?? "familyHome"}
                      className={cn("rounded-none", large ? "aspect-[16/9]" : "aspect-[16/10]")}
                      sizes={large ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                      imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="flex flex-1 flex-col p-6 lg:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className={cn("font-display text-ink transition-colors group-hover:text-navy", large ? "text-display-sm" : "text-title")}>{c.title}</h2>
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-navy transition-colors group-hover:border-green group-hover:bg-green group-hover:text-navy">
                          <Icon name="arrowUpRight" className="h-4 w-4" />
                        </span>
                      </div>
                      <p className="mt-2 text-[0.9375rem] text-ink-muted">{c.summary}</p>
                      <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                        {c.subcategories.map((s) => (
                          <li key={s.id} className="rounded-full bg-surface px-3 py-1 text-sm text-ink-muted">
                            {s.title.replace(/ Insurance$/, "")}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Other protection */}
      {other && (
        <section id={other.slug} className="section-sm scroll-mt-28 border-y border-line bg-surface">
          <div className="container grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="flex items-start gap-4 lg:col-span-4">
              <span className="icon-tile bg-white">
                <Icon name={other.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-display-sm">{other.title}</h2>
                <p className="mt-2 text-[0.9375rem] text-ink-muted">{other.summary}</p>
              </div>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
              {other.subcategories.map((s) => (
                <li key={s.id} id={s.id} className="scroll-mt-28 bg-white p-5">
                  <p className="font-display text-base font-bold text-ink">{s.title}</p>
                  <p className="mt-1 text-[0.9375rem] text-ink-muted">{s.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Life-stage matrix */}
      <section id="life-stages" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Find a Starting Point by Life Stage"
            description="Protection needs tend to follow life's milestones. These are common places to begin a conversation — not a prescription."
          />
          <div className="mt-10 overflow-hidden rounded-panel border border-line lg:mt-12">
            <div className="hidden grid-cols-12 gap-6 border-b border-line bg-surface px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-ink-soft md:grid">
              <span className="col-span-4">Life stage</span>
              <span className="col-span-8">Commonly considered</span>
            </div>
            <ul className="divide-y divide-line">
              {lifeStages.map((s) => (
                <li key={s.stage} className="grid gap-4 bg-white px-5 py-6 sm:px-7 md:grid-cols-12 md:items-center md:gap-6">
                  <div className="flex items-center gap-4 md:col-span-4">
                    <span className="icon-tile h-11 w-11">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-title">{s.stage}</h3>
                      <p className="text-[0.9375rem] text-ink-muted">{s.context}</p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2.5 md:col-span-8">
                    {s.consider.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-[0.9375rem] font-semibold text-navy transition-colors hover:border-green hover:bg-green/10"
                        >
                          {c.label}
                          <Icon name="arrowRight" className="h-3.5 w-3.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="How We Help You Choose"
            description="Whatever the category, the approach is the same: understand your situation first, then narrow down the choices."
          />
          <Steps steps={howWeHelp} variant="columns" className="mt-10 lg:mt-12" />
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section bg-canvas">
        <div className="container max-w-[64rem]">
          <SectionHeading title="Insurance Questions" description="General answers that apply across categories. Each category page has its own questions too." align="center" />
          <div className="mt-10">
            <FAQAccordion items={insuranceFaqs} />
          </div>
        </div>
      </section>

      <ClosingCTA
        variant="photo"
        photo="advisorMeeting"
        title="Find the Protection That Fits Your Life"
        description="Not sure where to begin? Share a little about your family, home, work and plans, and we'll help you work out which cover deserves attention first."
        primary={{ label: "Talk to an Advisor", href: enquireHref }}
        secondary={{ label: "Claims & Assistance", href: "/claims" }}
      />
    </>
  );
}
