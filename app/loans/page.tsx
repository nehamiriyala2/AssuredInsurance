import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { faqGroups } from "@/data/faqs";
import { loanAnchor, loanCategories, loanHref } from "@/data/loans";
import type { ProcessStep } from "@/lib/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/SectionHeading";
import { Steps } from "@/components/sections/Steps";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Note } from "@/components/sections/Note";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata = buildMetadata({
  title: "Loan Services — Home, Personal, Business & Vehicle Loans",
  description:
    "Guidance on home loans, housing loans, personal loans, business loans, vehicle loans and loan against property, from Assured & Insured Financial Services.",
  path: "/loans",
});

const enquireHref = "/contact?service=loans";

/* ---------------------------------------------------------------- content */

/** "What it's typically for" tags, keyed by loan slug. */
const typicalUses: Record<string, string[]> = {
  home: ["Ready home", "Under construction", "Self-construction", "Renovation"],
  housing: ["Plot purchase", "Construction", "Home improvement"],
  personal: ["Education", "Wedding", "Medical costs", "Travel"],
  business: ["Working capital", "Equipment", "Expansion"],
  vehicle: ["New car", "Pre-owned car", "Two-wheeler", "Commercial vehicle"],
  "loan-against-property": ["Business needs", "Large personal expenses", "Debt restructuring"],
};

const beforeYouBorrow = [
  { title: "Purpose", text: "Be specific about what the money is for — it decides which type of loan fits and how a lender views it." },
  { title: "Affordability", text: "Work out an instalment you can carry every month alongside essentials, savings and existing EMIs." },
  { title: "Credit history", text: "Check your credit report for errors or overdue accounts before a lender looks at it." },
  { title: "Documents", text: "Gather identity, income and purpose-specific papers early, so the application moves without gaps." },
];

const howWeHelp: ProcessStep[] = [
  { title: "Listen to the requirement", description: "We start with what you're planning — a home, a vehicle, a business need or a personal expense — and your current finances." },
  { title: "Point you to the right type of loan", description: "Secured or unsecured, term loan or working capital: we explain which category suits the purpose and why." },
  { title: "Explain what lenders look for", description: "We walk you through the eligibility factors relevant to your profile, so there are fewer surprises later." },
  { title: "Organise your paperwork", description: "You get a clear list of the documents to prepare, and help checking that they're complete and consistent." },
  { title: "Stay with you through the application", description: "We help you respond to lender queries and read the sanctioned terms before you commit." },
];

/* ------------------------------------------------------------------- page */

export default function LoansPage() {
  const loanFaqs = faqGroups.find((g) => g.id === "loans")?.items ?? [];

  return (
    <>
      {/* Hero — light, copy left, photo right */}
      <section className="bg-surface">
        <div className="container grid gap-10 pb-12 pt-6 lg:grid-cols-12 lg:items-center lg:gap-14 lg:pb-16 lg:pt-8">
          <div className="animate-fade-up lg:col-span-6">
            <Breadcrumbs items={[{ label: "Loans" }]} />
            <Kicker className="mt-8 lg:mt-12">Loan Services</Kicker>
            <h1 className="mt-4 text-display-lg text-navy">Finance for the Milestones You&apos;re Planning</h1>
            <p className="mt-5 max-w-measure text-lead text-ink-muted">
              A first home, a family car, a growing business, an expense that can&apos;t wait. Each milestone calls for a different kind of loan. We
              help you find the right type, understand what lenders expect and prepare well before you apply.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={enquireHref} size="lg" arrow>
                Discuss Your Requirement
              </ButtonLink>
              <ButtonLink href="#loan-services" size="lg" variant="outline">
                Browse Loan Services
              </ButtonLink>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:120ms] lg:col-span-6">
            <Photo photo="loansKeys" priority className="aspect-[16/10]" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Loan services — full-width list rows */}
      <section id="loan-services" className="section bg-canvas">
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
            <h2 className="text-display-md lg:col-span-6">Loan Services</h2>
            <p className="max-w-measure text-lead text-ink-muted lg:col-span-6">
              Six areas we can guide you through. Open a service for detail, or get in touch about the others.
            </p>
          </div>
          <ul className="mt-10 border-t border-line lg:mt-12">
            {loanCategories.map((l, i) => (
              <Reveal as="li" key={l.slug} delay={i * 40} className="border-b border-line">
                <Link
                  id={loanAnchor(l)}
                  href={l.hasPage ? loanHref(l) : "/contact?service=loans"}
                  className="group grid gap-4 py-6 transition-colors target:bg-green/5 sm:grid-cols-[3.5rem_1fr_auto] sm:items-center sm:gap-6 lg:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1fr)_auto] lg:gap-10 lg:py-7"
                >
                  <span className="icon-tile transition-colors group-hover:bg-green/15 group-hover:text-green-ink">
                    <Icon name={l.icon} className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-display text-title text-ink transition-colors group-hover:text-navy">{l.title}</span>
                    <span className="mt-1 block text-copy text-ink-muted">{l.summary}</span>
                  </span>
                  <span className="flex flex-wrap gap-2 sm:col-start-2 lg:col-start-auto" aria-label="Typically used for">
                    {(typicalUses[l.slug] ?? []).map((t) => (
                      <span key={t} className="rounded-full bg-surface px-3 py-1 text-sm text-ink-muted">
                        {t}
                      </span>
                    ))}
                  </span>
                  <span className="flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-navy sm:row-start-1 sm:col-start-3 lg:col-start-4">
                    <span className="sm:sr-only xl:not-sr-only">{l.hasPage ? "Explore" : "Enquire"}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong transition-colors group-hover:border-green-ink group-hover:bg-green-ink group-hover:text-white">
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Before you borrow — numbered strip */}
      <section className="section-sm bg-surface">
        <div className="container">
          <h2 className="text-display-sm lg:text-display-md">Before You Borrow</h2>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {beforeYouBorrow.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 60} className="bg-white p-6 lg:p-8">
                <span className="font-display text-[2rem] font-bold leading-none tracking-[-0.04em] text-green-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-title">{b.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{b.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* How we help — sticky heading + stacked steps */}
      <section className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h,5rem)+2rem)]">
              <h2 className="text-display-md">How We Help With Your Loan</h2>
              <p className="mt-4 max-w-measure text-lead text-ink-muted">
                We don&apos;t lend. Our role is to make sure you go to a lender with the right request, realistic expectations and a complete file.
              </p>
              <ButtonLink href={enquireHref} variant="outline" className="mt-8" arrow>
                Start a Conversation
              </ButtonLink>
            </div>
          </div>
          <Steps steps={howWeHelp} variant="stack" className="lg:col-span-7" />
        </div>
      </section>

      {/* FAQs + lender note */}
      <section id="faqs" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="text-display-md">Loan Questions</h2>
            <p className="mt-4 text-lead text-ink-muted">General answers that apply across loan types.</p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={loanFaqs} />
            <Note className="mt-8 bg-white">
              We do not quote interest rates or guarantee approval. Every decision on eligibility, amount, rate, tenure and terms is made by the lender.
            </Note>
          </div>
        </div>
      </section>

      <ClosingCTA
        variant="navy"
        title="Discuss Your Loan Requirement"
        description="Tell us what you're planning and where you stand today. We'll help you identify the right type of loan and what to prepare before you apply."
        primary={{ label: "Discuss Your Requirement", href: enquireHref }}
        secondary={{ label: "Browse Loan Services", href: "#loan-services" }}
      />
    </>
  );
}
