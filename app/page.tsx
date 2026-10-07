import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import type { IconItem, InsuranceCategory } from "@/lib/types";
import { faqGroups } from "@/data/faqs";
import { financialServices, planningPillars } from "@/data/financial";
import { processSteps, quickSolutions, trustPoints } from "@/data/home";
import { insuranceCategories, insuranceHref, insurancePages } from "@/data/insurance";
import { featuredLoans, loanCategories, loanHref } from "@/data/loans";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Photo, type PhotoKey } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Steps } from "@/components/sections/Steps";
import { ClientStories } from "@/components/sections/ClientStories";
import { FAQTabs } from "@/components/sections/FAQTabs";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { OurTeam } from "@/components/sections/Team";

export const metadata = buildMetadata({
  title: "Insurance, Financial Planning & Loan Services",
  description:
    "Assured & Insured Financial Services offers guidance on life, health, motor, home, travel and business insurance, financial planning and loan services.",
  path: "/",
});

/* ---------------------------------------------------------------- content */

/** Hero strip: the four ways in. Business Protection is reachable via Insurance, so Claims takes its place here. */
const solutions: (IconItem & { href: string })[] = [
  ...quickSolutions.filter((s) => s.href !== "/insurance/business"),
  { icon: "lifebuoy", title: "Claims & Assistance", description: "Help understanding the claim process and the documents insurers ask for.", href: "/claims" },
];

/** The two insurance categories shown as large photo tiles in the bento grid. */
const featuredInsurance: Partial<Record<string, PhotoKey>> = { life: "lifeFamily", health: "healthConsultation" };

const planningHighlights = ["financial-planning", "investment-planning", "retirement-planning", "goal-based-planning"]
  .map((id) => financialServices.find((s) => s.id === id))
  .filter((s): s is (typeof financialServices)[number] => Boolean(s));

const pillarIcons: IconName[] = ["shield", "piggy", "target"];

/* ------------------------------------------------------------------- page */

export default function HomePage() {
  const largeTiles = insurancePages.filter((c) => featuredInsurance[c.slug]);
  const compactTiles = insurancePages.filter((c) => !featuredInsurance[c.slug]);
  const otherProtection = insuranceCategories.find((c) => !c.hasPage);
  const moreLoans = loanCategories.filter((l) => !featuredLoans.includes(l));

  return (
    <>
      {/* Hero — editorial statement left, family photograph right, solutions strip below */}
      <section className="bg-canvas">
        <div className="container pb-12 pt-8 lg:pb-16 lg:pt-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
            <div className="animate-fade-up lg:col-span-7">
              <h1 className="text-display-xl text-navy">
                <span className="block">Protection for Today.</span>
                <span className="block text-ink">Confidence for Tomorrow.</span>
              </h1>
              <p className="mt-6 max-w-[38rem] text-lead text-ink-muted">
                Insurance, financial planning and loan guidance for individuals, families and businesses — explained in plain language, so
                you can choose what fits your life with a clear head.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg" arrow>
                  Get a Consultation
                </ButtonLink>
                <ButtonLink href="#solutions" size="lg" variant="outline">
                  Explore Solutions
                </ButtonLink>
              </div>
            </div>

            <div className="relative animate-fade-up [animation-delay:120ms] lg:col-span-5">
              <Photo
                photo="familyHome"
                priority
                className="aspect-[4/3] lg:aspect-[4/5] lg:max-h-[38rem]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                position="50% 40%"
              />
              <span aria-hidden="true" className="absolute -bottom-2 -left-2 h-5 w-5 bg-green" />
            </div>
          </div>

          <nav id="solutions" aria-label="Our solutions" className="mt-12 scroll-mt-24 lg:mt-16">
            <ul className="grid overflow-hidden rounded-panel border border-line sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map((s) => (
                <li
                  key={s.href}
                  className="border-b border-line last:border-b-0 sm:odd:border-r sm:[&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <Link href={s.href} className="group flex h-full gap-4 p-6 transition-colors hover:bg-surface lg:flex-col lg:p-7">
                    <span className="icon-tile transition-colors group-hover:bg-white">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="flex items-center gap-2 font-display text-title text-ink group-hover:text-navy">
                        {s.title}
                        <Icon name="arrowRight" className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-navy" />
                      </span>
                      <span className="mt-1.5 block text-copy text-ink-muted">{s.description}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Our Team — directly below the hero's four service cards (data/team.ts) */}
      <OurTeam />

      {/* Insurance — bento: two photo tiles, four compact tiles, slim "other" row */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Protection for Every Part of Life"
            description="Your family, your health, the vehicle you drive, the home you live in, the trips you take and the business you run — each needs a different kind of cover."
            action={
              <ButtonLink href="/insurance" variant="outline" arrow>
                All insurance
              </ButtonLink>
            }
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {largeTiles.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70} className="lg:col-span-2">
                <InsuranceFeatureTile category={c} photo={featuredInsurance[c.slug]!} />
              </Reveal>
            ))}
            {compactTiles.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link
                  href={insuranceHref(c)}
                  className="group flex h-full flex-col rounded-panel border border-line bg-white p-6 transition-colors hover:border-navy lg:p-7"
                >
                  <span className="icon-tile">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-title group-hover:text-navy">{c.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">{c.summary}</p>
                  <Icon name="arrowRight" className="mt-5 h-5 w-5 text-navy transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>

          {otherProtection && (
            <Link
              href="/insurance#other-protection"
              className="group mt-5 flex flex-col gap-3 rounded-panel border border-line bg-white px-6 py-5 transition-colors hover:border-navy md:flex-row md:items-center md:justify-between lg:px-7"
            >
              <span className="flex items-center gap-4">
                <Icon name={otherProtection.icon} className="h-5 w-5 shrink-0 text-green-ink" />
                <span>
                  <span className="font-display text-base font-bold text-ink">{otherProtection.title}</span>
                  <span className="text-[0.9375rem] text-ink-muted"> — {otherProtection.subcategories.map((s) => s.title).join(" · ")}</span>
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 font-display text-[0.9375rem] font-semibold text-navy">
                Specialised cover
                <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          )}
        </div>
      </section>

      {/* Financial planning — copy + highlights left, pillars diagram right */}
      <section className="section bg-canvas">
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          <div className="lg:col-span-7">
            <h2 className="text-display-md">Plan Your Finances With Greater Clarity</h2>
            <p className="mt-5 max-w-measure text-lead text-ink-muted">
              A financial plan connects what you earn, what you protect and what you are saving for — so a decision about one doesn&apos;t
              quietly undo another.
            </p>
            <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {planningHighlights.map((s) => (
                <li key={s.id}>
                  <Link href={`/financial-services#${s.id}`} className="group flex gap-4">
                    <span className="icon-tile transition-colors group-hover:bg-navy group-hover:text-white">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block font-display text-title text-ink group-hover:text-navy">{s.title}</span>
                      <span className="mt-1 block text-copy text-ink-muted">{s.description}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?service=financial-planning" variant="navy" size="lg" arrow>
                Talk to a Planning Advisor
              </ButtonLink>
              <ButtonLink href="/financial-services" variant="outline" size="lg">
                All Planning Services
              </ButtonLink>
            </div>
          </div>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="rounded-panel border border-line bg-surface p-7 sm:p-9">
              <p className="font-display text-base font-bold text-ink">How a plan is built</p>
              <p className="mt-1 text-[0.9375rem] text-ink-muted">Each layer rests on the one beneath it.</p>
              <ol className="relative mt-8">
                <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-line-strong" />
                {planningPillars.map((p, i) => (
                  <li key={p.title} className="relative flex gap-5 pb-8 last:pb-0">
                    <span
                      className={cn(
                        "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                        i === 0 ? "bg-green-ink text-white" : "border border-line-strong bg-white text-navy",
                      )}
                    >
                      <Icon name={pillarIcons[i] ?? "check"} className="h-5 w-5" />
                    </span>
                    <div className="pt-1">
                      <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-green-ink">Step {i + 1}</p>
                      <h3 className="mt-1 font-display text-title">{p.title}</h3>
                      <p className="mt-1 text-copy text-ink-muted">{p.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Loans — the page's one navy band */}
      <section className="section bg-navy text-white">
        <div className="container">
          <SectionHeading
            tone="inverse"
            title="Funding Your Next Milestone"
            description="A home, a business plan, a vehicle or a personal need — we help you understand eligibility, documents and the lender's process before you apply."
            action={
              <ButtonLink href="/loans" variant="light" size="lg" arrow>
                Explore Loans
              </ButtonLink>
            }
          />

          <ul className="mt-10 grid divide-y divide-white/15 border-y border-white/15 lg:mt-12 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {featuredLoans.map((l) => (
              <li key={l.slug}>
                <Link href={loanHref(l)} className="group flex h-full gap-5 py-6 lg:flex-col lg:gap-0 lg:px-7 lg:py-8 lg:first:pl-0">
                  <Icon name={l.icon} className="h-7 w-7 shrink-0 text-green" />
                  <span className="flex-1 lg:mt-6">
                    <span className="block font-display text-title text-white transition-colors group-hover:text-green">{l.title}</span>
                    <span className="mt-1.5 block text-copy text-white/75">{l.summary}</span>
                  </span>
                  <Icon name="arrowRight" className="mt-1 h-5 w-5 shrink-0 text-white/70 transition-transform group-hover:translate-x-1 group-hover:text-white lg:mt-6" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-copy text-white/80">
              <span className="font-semibold text-white">Also:</span>
              {moreLoans.map((l, i) => (
                <span key={l.slug} className="inline-flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">·</span>}
                  <Link href={loanHref(l)} className="underline-offset-4 hover:text-white hover:underline">
                    {l.title}
                  </Link>
                </span>
              ))}
            </p>
            <p className="text-sm text-white/60">Loan approval, amount and terms are decided solely by the lender.</p>
          </div>
        </div>
      </section>

      {/* Why Assured & Insured */}
      <section className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              title="Why Assured & Insured"
              description="Good decisions come from clear information and someone who takes the time to understand your situation. That is how we work."
            />
            <TextLink href="/about" className="mt-7">
              About us
            </TextLink>
          </div>
          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-8">
            {trustPoints.map((t, i) => (
              <Reveal as="li" key={t.title} delay={(i % 2) * 70} className="flex gap-4">
                <Icon name={t.icon} className="mt-0.5 h-6 w-6 shrink-0 text-green-ink" />
                <div>
                  <h3 className="font-display text-title">{t.title}</h3>
                  <p className="mt-1.5 text-copy text-ink-muted">{t.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="How It Works"
            description="Four steps from the first conversation to ongoing support, whichever service you come to us for."
            action={
              <ButtonLink href="/contact" variant="navy" arrow>
                Start the conversation
              </ButtonLink>
            }
          />
          <Steps steps={processSteps} variant="rail" className="mt-12 lg:mt-14" />
        </div>
      </section>

      <ClientStories />

      {/* FAQs */}
      <section className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Questions, Answered Clearly" description="Common questions about insurance, loans and financial planning." />
            <TextLink href="/contact" className="mt-7">
              Ask an advisor
            </TextLink>
          </div>
          <div className="lg:col-span-8">
            <FAQTabs groups={faqGroups} />
          </div>
        </div>
      </section>

      <ClosingCTA
        variant="plain"
        title="Let's Build a More Protected Financial Future"
        description="Tell us what you'd like to protect, plan or finance. We'll listen first, then help you understand the options that may suit you."
        primary={{ label: "Get a Consultation", href: "/contact" }}
        secondary={{ label: "Claims & Assistance", href: "/claims" }}
      />
    </>
  );
}

/* ---------------------------------------------------------------- helpers */

function InsuranceFeatureTile({ category: c, photo }: { category: InsuranceCategory; photo: PhotoKey }) {
  return (
    <Link href={insuranceHref(c)} className="group flex h-full flex-col overflow-hidden rounded-panel border border-line bg-white transition-colors hover:border-navy">
      <Photo photo={photo} className="aspect-[16/9] rounded-none" sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="flex items-center gap-3">
          <Icon name={c.icon} className="h-6 w-6 text-green-ink" />
          <h3 className="font-display text-display-sm group-hover:text-navy">{c.title}</h3>
        </div>
        <p className="mt-3 max-w-measure text-copy text-ink-muted">{c.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {c.subcategories.slice(0, 4).map((s) => (
            <li key={s.id} className="rounded-full bg-surface px-3 py-1 text-sm text-ink-muted">
              {s.title}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-display text-[0.9375rem] font-semibold text-navy">
          Explore {c.shortTitle} Insurance
          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
