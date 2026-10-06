import { buildMetadata } from "@/lib/seo";
import { getInsuranceCategory } from "@/data/insurance";
import type { FAQ, ProcessStep } from "@/lib/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, SectionHeading } from "@/components/ui/SectionHeading";
import { SectionNav } from "@/components/sections/SectionNav";
import { Steps } from "@/components/sections/Steps";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

const category = getInsuranceCategory("life")!;

export const metadata = buildMetadata({
  title: category.seo!.title,
  description: category.seo!.description,
  path: "/insurance/life",
});

const enquireHref = "/contact?service=insurance";

/* ---------------------------------------------------------------- content */

const num = (i: number) => String(i + 1).padStart(2, "0");

const termSteps: ProcessStep[] = [
  {
    title: "Choose a cover amount and term",
    description: "You decide the sum assured and how many years the policy should run — ideally the years your family would rely on your income.",
  },
  {
    title: "Pay premiums for the term",
    description: "Premiums are paid as the plan specifies — regularly, for a limited period or once — while the policy stays in force.",
  },
  {
    title: "Nominees receive the sum assured",
    description: "If the life insured dies during the term, the nominees receive the sum assured, as set out in the policy terms and conditions.",
  },
];

const suitableIcons: IconName[] = ["users", "baby", "home", "briefcase", "fileSearch"];

const lifeStages: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "baby",
    title: "Starting a family",
    text: "A new dependant often changes the picture. Many people first look at cover here, sized around the household's ongoing costs.",
  },
  {
    icon: "key",
    title: "Buying a home",
    text: "A home loan adds a long liability. Cover may be reviewed so the outstanding amount wouldn't fall on your family.",
  },
  {
    icon: "graduation",
    title: "Children's education",
    text: "School and college costs become concrete. Protection needs may rise to keep those milestones funded whatever happens.",
  },
  {
    icon: "sunset",
    title: "Approaching retirement",
    text: "As loans are repaid and children become independent, the need for pure protection may reduce while retirement income takes focus.",
  },
];

const exploreSteps: ProcessStep[] = [
  {
    title: "Map your responsibilities",
    description: "List who depends on you, what you owe and the goals you want protected — the basis for any cover discussion.",
  },
  {
    title: "Estimate cover and term",
    description: "Work through a sum assured and policy term that reflect your income, liabilities and how long support would be needed.",
  },
  {
    title: "Compare plan features",
    description: "Look at plan types, riders, payout options and exclusions side by side, rather than premium alone.",
  },
  {
    title: "Disclose fully and apply",
    description: "Complete the proposal with accurate health and lifestyle details, and keep nominee information up to date afterwards.",
  },
];

const faqs: FAQ[] = [
  ...(category.faqs ?? []),
  {
    question: "Does a pure term plan pay anything if I outlive the term?",
    answer:
      "A pure term plan generally has no maturity or survival benefit — it pays only if the life insured dies during the term. Some variants, such as return-of-premium plans, work differently and usually cost more. Check the specific plan's features.",
  },
];

/* ------------------------------------------------------------------- page */

export default function LifeInsurancePage() {
  return (
    <>
      {/* Hero — editorial: wide headline, then a cinematic photograph */}
      <section className="bg-canvas">
        <div className="container pb-12 pt-6 lg:pb-16 lg:pt-8">
          <div className="animate-fade-up">
            <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "Life Insurance" }]} />
            <Kicker className="mt-8 lg:mt-12">Life Insurance</Kicker>
            <h1 className="mt-4 max-w-[16ch] text-display-lg text-navy lg:max-w-[20ch]">Protect the Future You&apos;re Building for Your Family</h1>
            <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <p className="text-lead text-ink-muted lg:col-span-7">
                Life cover exists for the people who rely on you — to keep the household running, the loans paid and the plans intact if you&apos;re no
                longer there. We help you understand how it works and what level of protection fits your family.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
                <ButtonLink href={enquireHref} size="lg" arrow>
                  Explore Life Protection
                </ButtonLink>
                <ButtonLink href="#term-explained" size="lg" variant="outline">
                  How Term Insurance Works
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="mt-10 animate-fade-up [animation-delay:120ms] lg:mt-14">
            <Photo photo="lifeFamily" priority sizes="100vw" className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]" position="50% 40%" />
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "why", label: "Why it matters" },
          { id: "types", label: "Types" },
          { id: "term-explained", label: "Term insurance" },
          { id: "who", label: "Who it's for" },
          { id: "considerations", label: "Considerations" },
          { id: "planning", label: "Planning" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Why — pull statement + numbered reasons */}
      <section id="why" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="text-display-md">Why Life Protection Matters</h2>
            <p className="mt-6 font-display text-display-sm text-navy">
              The real question isn&apos;t what happens to you — it&apos;s what happens to the people who count on your income.
            </p>
          </Reveal>
          <ol className="divide-y divide-line border-y border-line lg:col-span-7">
            {(category.why ?? []).map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 60} className="grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-title text-green-ink">{num(i)}</span>
                <div>
                  <h3 className="font-display text-title">{w.title}</h3>
                  <p className="mt-1.5 text-copy text-ink-muted">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Types — 2x2 with large numerals and top rules */}
      <section id="types" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Types of Life Insurance"
            description="Life plans are built for different jobs. These are the broad kinds of protection worth knowing before you compare specific plans."
          />
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:mt-14 lg:gap-x-16 lg:gap-y-14">
            {category.subcategories.map((s, i) => (
              <Reveal key={s.id} delay={i * 60} className="border-t border-line-strong pt-6">
                <article id={s.id} className="grid grid-cols-[auto_1fr] gap-5 sm:gap-7">
                  <span className="font-display text-[2.75rem] font-bold leading-none tracking-[-0.04em] text-green-ink sm:text-[3.5rem]">{num(i)}</span>
                  <div>
                    <h3 className="font-display text-display-sm">{s.title}</h3>
                    <p className="mt-3 max-w-measure text-copy text-ink-muted">{s.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Term explained — the page's one navy band */}
      <section id="term-explained" className="section bg-navy text-white">
        <div className="container">
          <SectionHeading
            tone="inverse"
            title="Term Insurance, Explained"
            description="Term insurance is the simplest form of life cover: protection for a fixed period, and nothing more. Here is how it generally works."
          />
          <Steps steps={termSteps} variant="columns" tone="inverse" className="mt-12 lg:mt-14" />
          <Reveal className="mt-12 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-[auto_1fr] sm:gap-6 lg:mt-14">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-green">
              <Icon name="info" className="h-5 w-5" />
            </span>
            <div className="max-w-measure">
              <h3 className="font-display text-title text-white">What it generally doesn&apos;t include</h3>
              <p className="mt-2 text-copy text-white/75">
                A pure term plan typically has no maturity or savings value — if the term ends and no claim arises, nothing is paid out. Some variants,
                such as return-of-premium options, are built differently, so always check what a specific plan offers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who — pill list */}
      <section id="who" className="section bg-canvas">
        <div className="container grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              title="Who May Consider It"
              description="If someone would struggle financially without your income, life cover is worth a conversation."
            />
          </div>
          <ul className="flex flex-wrap gap-3 lg:col-span-7">
            {(category.suitableFor ?? []).map((s, i) => (
              <Reveal as="li" key={s} delay={i * 50}>
                <span className="inline-flex min-h-12 items-center gap-3 rounded-full border border-line-strong bg-white py-2 pl-2 pr-5 text-[0.9375rem] font-medium text-ink">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-ink">
                    <Icon name={suitableIcons[i] ?? "user"} className="h-[1.125rem] w-[1.125rem]" />
                  </span>
                  {s}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Considerations — two columns with dividers */}
      <section id="considerations" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Key Considerations"
            description="The choices that most shape whether a life policy does its job for your family."
          />
          <dl className="mt-10 grid gap-x-16 border-t border-line md:grid-cols-2 lg:mt-12">
            {(category.considerations ?? []).map((c, i) => (
              <Reveal key={c.title} delay={i * 50} className="border-b border-line py-7">
                <dt className="flex items-center gap-3 font-display text-title text-ink">
                  <span aria-hidden="true" className="brand-square" />
                  {c.title}
                </dt>
                <dd className="mt-2 max-w-measure text-copy text-ink-muted">{c.description}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Planning — life-stage timeline */}
      <section id="planning" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Planning for Family and Long-term Goals"
            description="Protection needs are rarely fixed. They tend to shift as life changes — which is why cover is worth revisiting at each stage."
          />
          <ol className="relative mt-12 grid gap-0 lg:mt-14 lg:grid-cols-4 lg:gap-8">
            <span aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-px bg-line-strong lg:block" />
            {lifeStages.map((s, i) => {
              const last = i === lifeStages.length - 1;
              return (
                <Reveal as="li" key={s.title} delay={i * 70} className="relative flex gap-5 pb-9 last:pb-0 lg:block lg:pb-0">
                  {!last && <span aria-hidden="true" className="absolute bottom-0 left-6 top-12 w-px bg-line-strong lg:hidden" />}
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-strong bg-white text-navy">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div className="pt-2.5 lg:pt-6">
                    <p className="font-display text-sm font-bold tracking-[0.1em] text-green-ink">STAGE {num(i)}</p>
                    <h3 className="mt-1.5 font-display text-title">{s.title}</h3>
                    <p className="mt-2 text-copy text-ink-muted">{s.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* How to explore */}
      <section id="how" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="How to Explore Your Options"
            description="A sensible order for working out the life cover your family may need."
          />
          <Steps steps={exploreSteps} variant="columns" className="mt-12 lg:mt-14" />
        </div>
      </section>

      {/* FAQs — heading left, accordion right */}
      <section id="faqs" className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Frequently Asked Questions" description="Straight answers on life and term cover. For anything specific to you, ask an advisor." />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Also worth exploring"
        items={[
          { label: "Health Insurance", href: "/insurance/health", icon: "health" },
          { label: "Home Loans", href: "/loans/home", icon: "key" },
          { label: "All Insurance", href: "/insurance", icon: "shield" },
        ]}
      />

      <ClosingCTA
        variant="plain"
        title="Explore Life Protection"
        description="Tell us about your family, your commitments and the goals you want protected. We'll help you think through cover, term and plan type before you decide."
        primary={{ label: "Explore Life Protection", href: enquireHref }}
        secondary={{ label: "All Insurance", href: "/insurance" }}
        note="Cover, premiums, acceptance and claims are subject to the insurer's underwriting and policy terms."
      />
    </>
  );
}
