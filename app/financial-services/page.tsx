import { Fragment } from "react";
import { buildMetadata } from "@/lib/seo";
import type { ProcessStep } from "@/lib/types";
import { faqGroups } from "@/data/faqs";
import { financialServices, planningPillars } from "@/data/financial";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, SectionHeading } from "@/components/ui/SectionHeading";
import { Steps } from "@/components/sections/Steps";
import { CheckList } from "@/components/sections/CheckList";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata = buildMetadata({
  title: "Financial Planning Services",
  description:
    "Financial planning, investment planning, retirement planning and goal-based planning designed around your priorities and long-term needs.",
  path: "/financial-services",
});

const advisorHref = "/contact?service=financial-planning";

/* ---------------------------------------------------------------- content */

/** Extra detail for each planning pillar on this page (titles/short lines come from data/financial.ts). */
const pillarDetail: { icon: IconName; detail: string }[] = [
  { icon: "shield", detail: "Life and health cover sized to your responsibilities, so one event doesn't derail everything else." },
  { icon: "piggy", detail: "An emergency reserve and regular saving habit that keep short-term needs away from long-term money." },
  { icon: "target", detail: "Education, a home, retirement — each goal given an amount, a horizon and an approach that suits it." },
];

const approachPoints = [
  "We begin with your goals and obligations, not with a product",
  "Trade-offs and risks are explained in plain language",
  "Protection is considered alongside savings and investments",
  "Your plan is revisited when your circumstances change",
];

const moments: { icon: IconName; label: string }[] = [
  { icon: "heartHandshake", label: "Getting married" },
  { icon: "baby", label: "A new child" },
  { icon: "key", label: "Buying a home" },
  { icon: "briefcase", label: "A career change" },
  { icon: "store", label: "Starting a business" },
  { icon: "sunset", label: "Approaching retirement" },
];

const planningSteps: ProcessStep[] = [
  { title: "Share where you stand", description: "Income, regular expenses, existing savings, loans and insurance — a candid snapshot of today is the starting point." },
  { title: "Define and rank your goals", description: "Put a rough amount and a timeframe against each goal, then decide together which ones come first." },
  { title: "Check protection first", description: "Before planning to grow money, make sure illness, accident or loss of income wouldn't undo the plan." },
  { title: "Shape a plan you can follow", description: "Set out saving and investment choices that match each goal's horizon and your comfort with risk." },
  { title: "Revisit as life moves on", description: "Review the plan periodically and whenever something significant changes — a new job, a child, a move." },
];

/* ------------------------------------------------------------------- page */

export default function FinancialServicesPage() {
  const planningFaqs = faqGroups.find((g) => g.id === "planning")?.items ?? [];

  return (
    <>
      {/* Hero — copy left, advisor photograph right */}
      <section className="bg-canvas">
        <div className="container grid gap-10 pb-12 pt-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-16 lg:pt-8 xl:gap-16">
          <div className="animate-fade-up lg:col-span-6">
            <Breadcrumbs items={[{ label: "Financial Services" }]} />
            <Kicker className="mt-8 lg:mt-12">Financial Planning</Kicker>
            <h1 className="mt-4 text-display-lg text-navy">Financial Planning Designed Around Your Goals</h1>
            <p className="mt-5 max-w-[38rem] text-lead text-ink-muted">
              Bring protection, savings and long-term plans into one clear picture — with guidance shaped around your priorities, your
              timeline and the people who depend on you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={advisorHref} size="lg" arrow>
                Talk to a Planning Advisor
              </ButtonLink>
              <ButtonLink href="#services" size="lg" variant="outline">
                Planning Areas
              </ButtonLink>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms] lg:col-span-6">
            <Photo photo="advisorMeeting" priority className="aspect-[4/3] lg:aspect-[5/4]" />
            <span aria-hidden="true" className="absolute -right-2 -top-2 h-4 w-4 bg-green" />
          </div>
        </div>
      </section>

      {/* Where planning starts — horizontal three-step flow */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Where Planning Starts"
            description="Most sound plans are built in the same order. Getting the foundation right makes every later decision simpler."
          />
          <ol className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-5">
            {planningPillars.map((p, i) => (
              <Fragment key={p.title}>
                {i > 0 && (
                  // Non-interactive sequence connector (a rule + brand square, not an arrow, so it
                  // doesn't read as a link). Vertical on mobile, horizontal on desktop.
                  <li aria-hidden="true" className="flex items-center justify-center gap-0 lg:w-10">
                    <span className="flex flex-col items-center lg:flex-row">
                      <span className="h-4 w-px bg-line-strong lg:h-px lg:w-3" />
                      <span className="h-2 w-2 bg-green" />
                      <span className="h-4 w-px bg-line-strong lg:h-px lg:w-3" />
                    </span>
                  </li>
                )}
                <Reveal as="li" delay={i * 80} className="rounded-panel border border-line bg-white p-7 lg:p-8">
                  <div className="flex items-center justify-between">
                    <span className="icon-tile">
                      <Icon name={pillarDetail[i]?.icon ?? "check"} className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm font-bold tracking-[0.12em] text-green-ink">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 font-display text-display-sm">{p.title}</h3>
                  <p className="mt-2 font-display text-base font-semibold text-ink">{p.description}</p>
                  <p className="mt-3 text-copy text-ink-muted">{pillarDetail[i]?.detail}</p>
                </Reveal>
              </Fragment>
            ))}
          </ol>
        </div>
      </section>

      {/* Planning services — 4 × 2 compact grid, each item an anchor target */}
      <section id="services" className="section scroll-mt-20 bg-canvas">
        <div className="container">
          <SectionHeading
            title="Planning Areas We Can Help With"
            description="Every plan starts with understanding you. These are the areas we most often work through together — on their own or as part of a wider plan."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {financialServices.map((s, i) => (
              <Reveal
                as="li"
                key={s.id}
                delay={(i % 4) * 60}
                className="h-full"
              >
                <div
                  id={s.id}
                  className="h-full scroll-mt-28 rounded-card border border-line bg-white p-6 transition-colors target:border-green target:ring-1 target:ring-green"
                >
                  <span className="icon-tile">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-title">{s.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach — editorial two-column */}
      <section className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-display-md">Clarity First. Decisions Second.</h2>
            <p className="mt-5 text-lead text-ink-muted">
              Good planning is less about choosing products and more about understanding where you are, where you want to be, and the
              sensible steps in between.
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-measure text-body text-ink-muted">
              We help you organise the whole picture first — commitments, cover, savings and goals — so that when a decision does come up, it
              feels considered rather than rushed. Where an option carries risk, we say so and explain what it could mean for you.
            </p>
            <CheckList items={approachPoints} className="mt-8" />
            <p className="mt-8 max-w-measure border-t border-line pt-5 text-sm text-ink-soft">
              Investments are subject to market risks. Past performance does not indicate future results. Please read all scheme and product
              documents carefully before investing.
            </p>
          </div>
        </div>
      </section>

      {/* Moments when planning helps */}
      <section className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="text-display-md">Moments When Planning Helps</h2>
            <p className="mt-5 text-lead text-ink-muted">
              A plan is worth making at any time, but life changes are when it matters most — responsibilities shift, new goals appear, and
              cover that once fitted may no longer be enough.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="flex flex-wrap gap-3">
              {moments.map((m) => (
                <li
                  key={m.label}
                  className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white px-5 py-3 font-display text-base font-semibold text-ink"
                >
                  <Icon name={m.icon} className="h-5 w-5 text-green-ink" />
                  {m.label}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-measure text-copy text-ink-muted">
              Going through one of these? A conversation now can help you see what needs adjusting before decisions are made in a hurry.
            </p>
          </div>
        </div>
      </section>

      {/* Process — sticky heading beside stacked steps */}
      <section className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                title="How Planning With Us Works"
                description="A plan is not a one-off document. These five steps repeat, lightly, every time your life changes."
              />
              <ButtonLink href={advisorHref} variant="navy" arrow className="mt-8">
                Begin with a conversation
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Steps steps={planningSteps} variant="stack" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Financial Planning Questions" description="What people commonly ask before they start planning." />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={planningFaqs} />
          </div>
        </div>
      </section>

      <ClosingCTA
        variant="navy"
        title="Start Planning With Greater Clarity"
        description="Share your goals and where you stand today. We'll help you see how protection, savings and long-term plans can fit together."
        primary={{ label: "Talk to a Planning Advisor", href: advisorHref }}
        secondary={{ label: "Explore Insurance", href: "/insurance" }}
        note="Investments are subject to market risks. Guidance is general and does not guarantee any outcome."
      />
    </>
  );
}
