import { buildMetadata } from "@/lib/seo";
import { getInsuranceCategory } from "@/data/insurance";
import type { ProcessStep } from "@/lib/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionNav } from "@/components/sections/SectionNav";
import { Steps } from "@/components/sections/Steps";
import { CompareTable } from "@/components/sections/CompareTable";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Note } from "@/components/sections/Note";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

const business = getInsuranceCategory("business")!;
const sub = (id: string) => business.subcategories.find((s) => s.id === id)!;

export const metadata = buildMetadata({
  title: business.seo!.title,
  description: business.seo!.description,
  path: "/insurance/business",
});

const enquireHref = "/contact?service=business";

/* ---------------------------------------------------------------- content */

type PillarItem = { id?: string; title: string; text: string };

const pillars: { icon: IconName; title: string; intro: string; items: PillarItem[] }[] = [
  {
    icon: "building",
    title: "Property",
    intro: "The physical things the business depends on.",
    items: [
      { id: "commercial-property", title: sub("commercial-property").title, text: sub("commercial-property").description },
      { id: "shop", title: sub("shop").title, text: sub("shop").description },
      { id: "office", title: sub("office").title, text: sub("office").description },
    ],
  },
  {
    icon: "scale",
    title: "Liability",
    intro: "What you could owe others if something goes wrong.",
    items: [
      { id: "professional-liability", title: sub("professional-liability").title, text: sub("professional-liability").description },
      { title: "Public liability", text: "Claims from visitors, customers or the public for injury or property damage linked to your business." },
    ],
  },
  {
    icon: "users",
    title: "People",
    intro: "The team that keeps the business running.",
    items: [
      { id: "group-protection", title: sub("group-protection").title, text: sub("group-protection").description },
      { title: "Employee accident cover", text: "Support for staff injured at work or while travelling on business, subject to policy terms." },
    ],
  },
  {
    icon: "route",
    title: "Continuity",
    intro: "Keeping going after an insured event.",
    items: [
      { id: "sme", title: sub("sme").title, text: sub("sme").description },
      { title: "Business interruption", text: "Cover that may help with lost income and fixed costs after damage halts trading, where added to a property policy." },
    ],
  },
];

const often = "Often";
const sometimes = "Depends on work";

const typeColumns = [
  { label: "Shop & retail", sublabel: "Stores, showrooms, outlets" },
  { label: "Offices & firms", sublabel: "Professional practices" },
  { label: "SMEs & manufacturing", sublabel: "Units, workshops, warehouses" },
  { label: "Consultants", sublabel: "Independent professionals" },
];

const typeRows = [
  { label: "Premises & contents", values: [true, true, true, "If you rent an office"] },
  { label: "Stock & goods", values: [true, false, true, false] },
  { label: "Public liability", values: [true, often, true, sometimes] },
  { label: "Professional indemnity", values: [false, true, sometimes, true] },
  { label: "Group employee cover", values: [often, true, true, false] },
];

const risks: { icon: IconName; title: string; text: string }[] = [
  { icon: "fire", title: "Fire & property damage", text: "Fire, storm, flood or burst pipes damaging premises, machinery or stock." },
  { icon: "lock", title: "Theft & burglary", text: "Break-ins and theft of stock, equipment or cash, subject to security conditions." },
  { icon: "users", title: "Third-party claims", text: "A customer or member of the public injured on your premises or by your products." },
  { icon: "file", title: "Professional errors", text: "A client alleging financial loss from your advice, design or service." },
  { icon: "health", title: "Employee health", text: "Illness or injury among staff, and the cost of treatment and time away." },
  { icon: "timer", title: "Disruption", text: "An insured event forcing you to pause trading while fixed costs keep running." },
];

const smeSteps: ProcessStep[] = [
  { title: "Insure assets at realistic values", description: "Under-valuing buildings, machinery or stock can mean a claim is reduced proportionately. Revisit values as prices change." },
  { title: "Check contract and statutory requirements", description: "Leases, client contracts, tenders and some regulators ask for specific cover or minimum limits. Note them before choosing." },
  { title: "Disclose your operations fully", description: "What you make, sell or advise on, where you work and how stock is stored all shape the policy. Gaps in disclosure create gaps in cover." },
  { title: "Read the conditions, not just the cover", description: "Security requirements, warranties and excesses decide how a claim is handled as much as the headline cover does." },
];

const process: ProcessStep[] = [
  { title: "Risk review", description: "Walk through your premises, operations, contracts and people to see what could interrupt the business." },
  { title: "Valuation", description: "Arrive at sensible values for buildings, plant, stock and contents, and decide on liability limits." },
  { title: "Options", description: "Compare packaged and tailored policies, and how cover, exclusions and excesses differ." },
  { title: "Placement", description: "Complete proposals accurately and put cover in place, with documents filed where you can find them." },
  { title: "Annual review", description: "Revisit cover at renewal as turnover, headcount, premises or contracts change." },
];

/* ------------------------------------------------------------------- page */

export default function BusinessInsurancePage() {
  return (
    <>
      {/* Hero — the page's single navy area */}
      <section className="bg-navy text-white">
        <div className="container grid gap-10 pb-12 pt-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-16 lg:pt-8">
          <div className="animate-fade-up lg:col-span-6">
            <Breadcrumbs tone="inverse" items={[{ label: "Insurance", href: "/insurance" }, { label: "Business Insurance" }]} />
            <h1 className="mt-8 text-display-lg text-white lg:mt-10">Protection Built Around How Your Business Runs</h1>
            <p className="mt-5 max-w-[38rem] text-lead text-white/75">
              Premises, stock, liabilities and people each carry their own risks. We help owners and managers map those risks and put together
              cover that reflects the way the business actually operates.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={enquireHref} size="lg" variant="light" arrow>
                Talk About Your Business
              </ButtonLink>
              <ButtonLink href="#protection-areas" size="lg" variant="outlineLight">
                See Protection Areas
              </ButtonLink>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:120ms] lg:col-span-6">
            <Photo photo="businessTeam" priority className="aspect-[16/10]" />
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "protection-areas", label: "Protection areas" },
          { id: "by-type", label: "By business type" },
          { id: "risk-areas", label: "Risk areas" },
          { id: "sme-considerations", label: "SME considerations" },
          { id: "process", label: "Process" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Four pillars */}
      <section id="protection-areas" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Four Areas of Business Protection"
            description="Most business cover falls into one of these areas. A sound programme usually draws on more than one."
          />
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="border-t-2 border-green pt-6">
                <div className="flex items-center gap-3">
                  <Icon name={p.icon} className="h-6 w-6 text-navy" />
                  <h3 className="font-display text-display-sm">{p.title}</h3>
                </div>
                <p className="mt-2 text-[0.9375rem] text-ink-muted">{p.intro}</p>
                <ul className="mt-6 space-y-5">
                  {p.items.map((item) => (
                    <li key={item.title} id={item.id} className="scroll-mt-40">
                      <p className="font-display text-base font-bold text-ink">{item.title}</p>
                      <p className="mt-1 text-[0.9375rem] text-ink-muted">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* By business type */}
      <section id="by-type" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="What Different Businesses Typically Discuss"
            description="An indicative starting point only. Your activities, premises, contracts and team size decide what is actually relevant."
          />
          <CompareTable
            className="mt-10 lg:mt-12"
            caption="Protection areas commonly discussed by type of business (indicative)"
            columns={typeColumns}
            rows={typeRows}
          />
          <Note className="mt-6 bg-white">
            Indicative only — a tick means the area is commonly discussed for that kind of business, not that it is required or recommended for yours.
          </Note>
        </div>
      </section>

      {/* Risk tiles */}
      <section id="risk-areas" className="section bg-canvas">
        <div className="container">
          <SectionHeading title="Risk Areas to Think Through" description="Six common sources of loss. Not every business faces all of them, but most face several." />
          <div className="mt-10 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {risks.map((r) => (
              <div key={r.title} className="bg-white p-7 lg:p-8">
                <span className="icon-tile">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-title">{r.title}</h3>
                <p className="mt-2 text-copy text-ink-muted">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SME considerations */}
      <section id="sme-considerations" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-40">
              <SectionHeading
                title="Considerations for SMEs"
                description="Smaller businesses often buy cover quickly and rarely revisit it. These four points tend to matter most when a claim arrives."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Steps steps={smeSteps} variant="stack" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="How Businesses Explore Protection"
            description="A structured path from understanding risk to keeping cover current year after year."
          />
          <Steps steps={process} variant="rail" className="mt-12 lg:mt-14" />
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Business Insurance FAQs" description="Common questions from owners and managers. Ask us about anything specific to your sector." />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={business.faqs ?? []} />
          </div>
        </div>
      </section>

      <ClosingCTA
        variant="panel"
        title="Discuss Business Protection"
        description="Tell us what your business does, where it operates and who works in it. We'll help you see which protection areas apply and how to approach them."
        primary={{ label: "Talk About Your Business", href: enquireHref }}
        secondary={{ label: "All Insurance", href: "/insurance" }}
        note="Cover and terms are set by the insurer and subject to policy wording."
      />
    </>
  );
}
