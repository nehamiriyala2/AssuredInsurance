import { buildMetadata } from "@/lib/seo";
import { getLoanCategory } from "@/data/loans";
import type { FAQ, ProcessStep } from "@/lib/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { SectionNav } from "@/components/sections/SectionNav";
import { Steps } from "@/components/sections/Steps";
import { CheckList } from "@/components/sections/CheckList";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Note } from "@/components/sections/Note";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

const loan = getLoanCategory("home")!;

export const metadata = buildMetadata({
  title: loan.seo!.title,
  description: loan.seo!.description,
  path: "/loans/home",
});

const enquireHref = "/contact?service=loans";

/* ---------------------------------------------------------------- content */

const journey: ProcessStep[] = [
  { title: "Explore your requirement", description: "Clarify the property, its likely cost, the amount you can contribute yourself and the timeline you're working to." },
  { title: "Understand available options", description: "See how loan amount, tenure and repayment structure interact, and what lenders typically look at for a profile like yours." },
  { title: "Prepare documents", description: "Gather identity, income and property papers early so the application isn't held up later." },
  { title: "Complete the application", description: "Apply with the lender, respond to queries and support the legal and technical checks on the property." },
  { title: "Move towards your purchase", description: "Review the sanctioned terms carefully before disbursement and the remaining steps of buying or building." },
];

const purposes: { icon: IconName; title: string; text: string }[] = [
  { icon: "key", title: "Buying a ready home", text: "A completed house or apartment you can move into." },
  { icon: "building", title: "Buying under construction", text: "A home booked with a builder, paid for as the project progresses." },
  { icon: "landPlot", title: "Building on your plot", text: "Constructing a home on land you already own." },
  { icon: "paintbrush", title: "Extending or renovating", text: "Improving or adding to a home you live in." },
];

const considerations: { icon: IconName; title: string; text: string; points: string[] }[] = [
  {
    icon: "userCheck",
    title: "Eligibility",
    text: "Each lender sets its own criteria. These are the factors most commonly looked at.",
    points: loan.eligibility ?? [],
  },
  {
    icon: "calculator",
    title: "Repayment considerations",
    text: "A home loan can run for many years, so the instalment has to sit comfortably alongside everything else.",
    points: [
      "An EMI you can sustain, with room for other goals",
      "Longer tenures lower the EMI but usually raise the total interest paid",
      "Fixed and floating rate structures behave differently over time",
      "Prepayment and part-payment terms in the loan agreement",
    ],
  },
  {
    icon: "file",
    title: "Property-related information",
    text: "The property is assessed alongside you. Clear paperwork helps the lender's legal and technical review.",
    points: ["Clear title and ownership history", "Approved building plans and local approvals", "Project and builder details for under-construction homes", "The lender's own valuation of the property"],
  },
];

const documentTabs: { id: string; label: string; icon: IconName; intro: string; items: string[] }[] = [
  {
    id: "identity",
    label: "Identity & address",
    icon: "idCard",
    intro: "Usually requested from every applicant and co-applicant.",
    items: ["PAN card", "Aadhaar or another government-issued photo ID", "Recent address proof", "Passport-size photographs"],
  },
  {
    id: "salaried",
    label: "Salaried income",
    icon: "briefcase",
    intro: "For applicants with income from employment.",
    items: ["Salary slips for recent months", "Form 16 from your employer", "Bank statements showing salary credits", "Employment details, where requested"],
  },
  {
    id: "self-employed",
    label: "Self-employed income",
    icon: "store",
    intro: "For business owners and self-employed professionals.",
    items: ["Income tax returns for recent years", "Financial statements — profit & loss and balance sheet", "Business registration or GST details", "Business and personal bank statements"],
  },
  {
    id: "property",
    label: "Property papers",
    icon: "home",
    intro: "Depends on whether you are buying, booking or building.",
    items: [
      "Sale agreement or builder allotment letter",
      "Title documents and previous ownership chain",
      "Approved building plan and local approvals",
      "Cost estimate for construction or renovation",
    ],
  },
];

const faqs: FAQ[] = [
  ...(loan.faqs ?? []),
  {
    question: "What do 'sanction' and 'disbursement' mean?",
    answer:
      "Sanction is the lender's approval of your loan, usually setting out the amount and key terms. Disbursement is when the funds are actually released. For under-construction property, lenders commonly release funds in stages linked to construction progress.",
  },
];

/* ------------------------------------------------------------------- page */

export default function HomeLoansPage() {
  return (
    <>
      {/* Hero — copy left, layered home photography right */}
      <section className="bg-canvas">
        <div className="container grid gap-10 pb-12 pt-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-16 lg:pt-8 xl:gap-16">
          <div className="animate-fade-up lg:col-span-6">
            <Breadcrumbs items={[{ label: "Loans", href: "/loans" }, { label: "Home Loans" }]} />
            <Kicker className="mt-8 lg:mt-12">Home Loans</Kicker>
            <h1 className="mt-4 text-display-lg text-navy">Plan Your Path to Your Next Home</h1>
            <p className="mt-5 max-w-[38rem] text-lead text-ink-muted">
              Whether you&apos;re buying a ready home, booking one under construction, building on your own plot or renovating, a home loan is a
              long commitment. We help you understand each stage — so you approach the lender prepared.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={enquireHref} size="lg" arrow>
                Enquire About Home Loans
              </ButtonLink>
              <ButtonLink href="#journey" size="lg" variant="outline">
                Understand the Process
              </ButtonLink>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms] lg:col-span-6">
            <Photo photo="homeloanCouple" priority className="aspect-[4/3] lg:aspect-[5/4]" position="60% 50%" />
            <div className="absolute -bottom-6 -left-4 hidden w-[38%] overflow-hidden rounded-panel border-[6px] border-white shadow-lift sm:block lg:-left-10">
              <Photo photo="homeConstruction" className="aspect-[3/4] rounded-none" sizes="20vw" />
            </div>
            <span aria-hidden="true" className="absolute -right-2 -top-2 h-4 w-4 bg-green" />
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "journey", label: "The journey" },
          { id: "considerations", label: "What to consider" },
          { id: "documents", label: "Documents" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Journey */}
      <section id="journey" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Understanding the Home Loan Journey"
            description="Five stages most home loans move through. Knowing what comes next makes each one easier to plan for."
          />
          <Steps steps={journey} variant="rail" className="mt-12 lg:mt-14" />
        </div>
      </section>

      {/* Considerations — purpose block + three topic blocks */}
      <section id="considerations" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="What Should You Consider?"
            description="The questions worth working through before you apply — about the purpose, yourself, the repayments and the property."
          />

          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12">
            <Reveal className="flex flex-col overflow-hidden rounded-panel border border-line bg-white lg:col-span-5 lg:row-span-3">
              <Photo photo="homeApartments" className="aspect-[16/9] rounded-none" sizes="(min-width: 1024px) 40vw, 100vw" />
              <div className="flex flex-1 flex-col p-7 lg:p-8">
                <h3 className="font-display text-display-sm">Loan purpose</h3>
                <p className="mt-2 text-copy text-ink-muted">What the loan is for shapes how a lender looks at it — and how funds are released.</p>
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {purposes.map((p) => (
                    <li key={p.title} className="flex gap-4 py-4">
                      <span className="icon-tile h-10 w-10">
                        <Icon name={p.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-display text-base font-bold text-ink">{p.title}</span>
                        <span className="block text-[0.9375rem] text-ink-muted">{p.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.9375rem] text-ink-muted">For construction and under-construction homes, lenders commonly release funds in stages.</p>
              </div>
            </Reveal>

            {considerations.map((c, i) => (
              <Reveal key={c.title} delay={i * 60} className="lg:col-span-7">
                <div className="grid h-full gap-6 rounded-panel border border-line bg-white p-7 sm:grid-cols-[minmax(0,15rem)_1fr] lg:p-8">
                  <div>
                    <span className="icon-tile">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-title">{c.title}</h3>
                    <p className="mt-2 text-[0.9375rem] text-ink-muted">{c.text}</p>
                  </div>
                  <CheckList items={c.points} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Documents You May Need" description="Lenders set their own requirements, but these are the papers most often requested. Keeping them ready avoids delays." />
            <Note className="mt-8 bg-white">Requirements vary by lender, applicant profile and property type. We can help you check what applies to you.</Note>
          </div>
          <div className="lg:col-span-8">
            <Tabs
              label="Document groups"
              variant="underline"
              items={documentTabs.map((t) => ({
                id: t.id,
                label: t.label,
                icon: t.icon,
                content: (
                  <div className="rounded-panel bg-white p-7 sm:p-9">
                    <p className="text-copy text-ink-muted">{t.intro}</p>
                    <CheckList items={t.items} columns={2} className="mt-6 gap-y-4" />
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section bg-canvas">
        <div className="container max-w-[64rem]">
          <SectionHeading title="Frequently Asked Questions" description="Common questions about home loans. Your advisor can talk through anything specific to you." align="center" />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Also worth exploring"
        items={[
          { label: "Home Insurance", href: "/insurance/home", icon: "home" },
          { label: "Life Insurance", href: "/insurance/life", icon: "users" },
          { label: "All Loan Services", href: "/loans", icon: "landmark" },
        ]}
      />

      <ClosingCTA
        variant="navy"
        title="Discuss Your Home Loan"
        description="Tell us about the property and your timeline. We'll help you understand the process, the documents to prepare and what to expect from the lender."
        primary={{ label: "Enquire About Home Loans", href: enquireHref }}
        secondary={{ label: "All Loan Services", href: "/loans" }}
        note="Loan approval, amount, interest rate, tenure and all other terms are decided solely by the lender."
      />
    </>
  );
}
