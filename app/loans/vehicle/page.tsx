import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getLoanCategory } from "@/data/loans";
import type { FAQ, ProcessStep } from "@/lib/types";
import { cn } from "@/lib/cn";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, SectionHeading } from "@/components/ui/SectionHeading";
import { SectionNav } from "@/components/sections/SectionNav";
import { Steps } from "@/components/sections/Steps";
import { CheckList } from "@/components/sections/CheckList";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

const loan = getLoanCategory("vehicle")!;

export const metadata = buildMetadata({
  title: loan.seo!.title,
  description: loan.seo!.description,
  path: "/loans/vehicle",
});

const enquireHref = "/contact?service=loans";

/* ---------------------------------------------------------------- content */

const vehicleTypes: { id: string; icon: IconName; title: string; text: string; notes: string[] }[] = [
  {
    id: "new-car",
    icon: "carFront",
    title: "New car",
    text: "Bought from a dealer against an on-road price quotation.",
    notes: ["The dealer's proforma invoice is the starting point", "On-road price includes registration and insurance", "Funds usually go directly to the dealer"],
  },
  {
    id: "pre-owned-car",
    icon: "car",
    title: "Pre-owned car",
    text: "A used car from a dealer or a private seller.",
    notes: ["Lenders may value the car independently", "Age and condition of the vehicle affect terms", "RC transfer and hypothecation need updating"],
  },
  {
    id: "two-wheeler",
    icon: "bike",
    title: "Two-wheeler",
    text: "A scooter or motorcycle for everyday commuting.",
    notes: ["Usually simpler paperwork than a car loan", "Often arranged at the dealership", "Check total cost, not just the low instalment"],
  },
  {
    id: "commercial-vehicle",
    icon: "truck",
    title: "Commercial vehicle",
    text: "A goods carrier, taxi or bus that earns income.",
    notes: ["Lenders look at expected earnings from the vehicle", "Permits and commercial registration apply", "Driving or transport experience may be considered"],
  },
];

/** Relative weights only — purely illustrative, deliberately unlabelled with figures. */
const costBlocks: { label: string; when: string; grow: number; swatch: string }[] = [
  { label: "Down payment", when: "Paid upfront, from your own funds", grow: 2, swatch: "bg-green" },
  { label: "Loan EMIs", when: "Monthly, through the loan tenure", grow: 6, swatch: "bg-navy" },
  { label: "Insurance", when: "At purchase, then every renewal", grow: 1.4, swatch: "bg-green/40" },
  { label: "Registration & road tax", when: "Mostly at purchase", grow: 1.2, swatch: "bg-surface-strong" },
  { label: "Fuel & maintenance", when: "Every month you drive", grow: 3, swatch: "bg-green/15" },
];

const process: ProcessStep[] = [
  { title: "Choose the vehicle", description: "Shortlist the model and get a written quotation that shows the full on-road price." },
  { title: "Settle the down payment", description: "Decide how much you'll pay yourself, keeping a buffer for insurance and registration." },
  { title: "Apply with documents", description: "Submit your KYC, income proof and the quotation or vehicle details to the lender." },
  { title: "Register and insure", description: "After sanction, the vehicle is registered with the lender's hypothecation and insured before delivery." },
];

const faqs: FAQ[] = [
  ...(loan.faqs ?? []),
  {
    question: "What is hypothecation on the RC?",
    answer:
      "While the loan is outstanding, the lender's interest in the vehicle is recorded on the registration certificate. Once you repay in full, you obtain a no-objection certificate from the lender and apply to have the hypothecation removed.",
  },
];

/* ------------------------------------------------------------------- page */

export default function VehicleLoansPage() {
  return (
    <>
      {/* Hero — copy with vehicle-type selector, showroom photo right */}
      <section className="bg-canvas">
        <div className="container grid gap-10 pb-12 pt-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-16 lg:pt-8">
          <div className="animate-fade-up lg:col-span-7">
            <Breadcrumbs items={[{ label: "Loans", href: "/loans" }, { label: "Vehicle Loans" }]} />
            <Kicker className="mt-8 lg:mt-12">Vehicle Loans</Kicker>
            <h1 className="mt-4 text-display-lg text-navy">Drive Home Your Next Vehicle With a Clear Plan</h1>
            <p className="mt-5 max-w-measure text-lead text-ink-muted">
              The showroom price is only where the cost begins. We help you plan the down payment, the instalments and the running costs — and get
              your papers ready — so the loan fits the vehicle and your budget.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={enquireHref} size="lg" arrow>
                Discuss Your Vehicle Loan
              </ButtonLink>
            </div>
            <div className="mt-8 border-t border-line pt-6">
              <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-ink-soft">What are you financing?</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {vehicleTypes.map((v) => (
                  <li key={v.id}>
                    <Link
                      href={`#${v.id}`}
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-white px-4 text-[0.9375rem] font-medium text-ink transition-colors hover:border-navy hover:text-navy"
                    >
                      <Icon name={v.icon} className="h-4 w-4 text-green-ink" />
                      {v.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:120ms] lg:col-span-5">
            <Photo photo="vehicleShowroom" priority className="aspect-[4/3] lg:aspect-[5/6]" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "vehicle-types", label: "Vehicle types" },
          { id: "full-cost", label: "Full cost" },
          { id: "eligibility", label: "Eligibility & documents" },
          { id: "insurance", label: "Insurance" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Vehicle types — four columns */}
      <section id="vehicle-types" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Finance by Vehicle Type"
            description="What changes from one kind of vehicle loan to another — and what to keep in mind for each."
          />
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {vehicleTypes.map((v, i) => (
              <Reveal key={v.id} delay={i * 60}>
                <article id={v.id} className="flex h-full flex-col border-t-2 border-navy pt-6">
                  <span className="icon-tile">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-title">{v.title}</h3>
                  <p className="mt-2 text-[0.9375rem] text-ink-muted">{v.text}</p>
                  <ul className="mt-5 grid gap-3 border-t border-line pt-5">
                    {v.notes.map((n) => (
                      <li key={n} className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-ink">
                        <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-green" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full cost of ownership — stacked cost blocks */}
      <section id="full-cost" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="text-display-md">Plan the Full Cost of Ownership</h2>
            <p className="mt-4 text-lead text-ink-muted">
              A comfortable EMI can hide how much a vehicle really costs to own. Budget for every block, not just the loan.
            </p>
            <p className="mt-4 text-copy text-ink-muted">
              A larger down payment shrinks what you borrow. A longer tenure lowers each EMI but stretches the interest. Insurance renews every
              year, and fuel and servicing continue long after the last instalment.
            </p>
          </div>
          <Reveal delay={80} className="lg:col-span-7">
            <div className="rounded-panel border border-line bg-white p-6 sm:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-ink-soft">What owning a vehicle adds up to</p>
              <div className="mt-5 flex h-16 gap-1 overflow-hidden rounded-card sm:h-20" aria-hidden="true">
                {costBlocks.map((b) => (
                  <span key={b.label} className={cn("block h-full", b.swatch, b.label === "Fuel & maintenance" && "border border-green/30")} style={{ flexGrow: b.grow, flexBasis: 0 }} />
                ))}
              </div>
              <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {costBlocks.map((b) => (
                  <li key={b.label} className="flex items-start gap-3">
                    <span aria-hidden="true" className={cn("mt-1 h-4 w-4 shrink-0 rounded-[4px]", b.swatch, b.label === "Fuel & maintenance" && "border border-green/30")} />
                    <span>
                      <span className="block font-display text-base font-bold text-ink">{b.label}</span>
                      <span className="block text-[0.9375rem] text-ink-muted">{b.when}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-4 text-sm text-ink-soft">Illustrative proportions only. Actual costs depend on the vehicle, the lender, your city and how much you drive.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Eligibility & documents — side by side */}
      <section id="eligibility" className="section bg-canvas">
        <div className="container">
          <SectionHeading title="Eligibility & Documents" description="What lenders typically consider, and the papers they usually request for a vehicle loan." />
          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
            <Reveal className="rounded-panel bg-surface p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <Icon name="userCheck" className="h-6 w-6 text-navy" />
                <h3 className="font-display text-display-sm">What lenders consider</h3>
              </div>
              <CheckList items={loan.eligibility ?? []} className="mt-6 gap-y-4" />
            </Reveal>
            <Reveal delay={80} className="rounded-panel border border-line bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <Icon name="file" className="h-6 w-6 text-navy" />
                <h3 className="font-display text-display-sm">Documents usually requested</h3>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {(loan.documents ?? []).map((d) => (
                  <div key={d.group} className={cn(d.group.startsWith("Identity") && "sm:col-span-2")}>
                    <h4 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-ink-soft">{d.group}</h4>
                    <CheckList items={d.items} columns={d.group.startsWith("Identity") ? 2 : 1} className="mt-3" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Motor insurance panel */}
      <section id="insurance" className="section bg-surface">
        <div className="container">
          <Reveal className="grid overflow-hidden rounded-panel border border-line bg-white lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Photo photo="motorTwoWheeler" className="aspect-[16/10] h-full rounded-none lg:aspect-auto lg:min-h-[22rem]" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <div className="p-7 sm:p-10 lg:col-span-7 lg:p-12">
              <h2 className="text-display-sm lg:text-display-md">Pair It With Motor Insurance</h2>
              <p className="mt-4 max-w-measure text-body text-ink-muted">
                Third-party motor insurance is required by law for every vehicle on Indian roads, and lenders typically require the financed vehicle
                to stay insured for the full duration of the loan — usually with the lender noted on the policy.
              </p>
              <p className="mt-3 max-w-measure text-body text-ink-muted">
                Choosing cover alongside the loan, rather than accepting whatever is bundled, lets you compare add-ons and protect the asset you&apos;re
                still paying for.
              </p>
              <div className="mt-7">
                <TextLink href="/insurance/motor">Explore motor insurance</TextLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-canvas">
        <div className="container">
          <SectionHeading title="From Showroom to Keys" description="Four steps most vehicle loans follow." />
          <Steps steps={process} variant="columns" className="mt-10 lg:mt-12" />
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section bg-surface">
        <div className="container max-w-[64rem]">
          <h2 className="text-display-md">Vehicle Loan Questions</h2>
          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Also worth exploring"
        items={[
          { label: "Motor Insurance", href: "/insurance/motor", icon: "car" },
          { label: "Business Loans", href: "/loans/business", icon: "briefcase" },
          { label: "All Loan Services", href: "/loans", icon: "landmark" },
        ]}
      />

      <ClosingCTA
        variant="panel"
        title="Discuss Your Vehicle Loan"
        description="Tell us which vehicle you have in mind and how you'd like to pay for it. We'll help you plan the full cost and prepare your documents."
        primary={{ label: "Discuss Your Vehicle Loan", href: enquireHref }}
        note="Loan approval and all terms are decided by the lender."
      />
    </>
  );
}
