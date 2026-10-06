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
import { CompareTable } from "@/components/sections/CompareTable";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Note } from "@/components/sections/Note";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

const loan = getLoanCategory("business")!;

export const metadata = buildMetadata({
  title: loan.seo!.title,
  description: loan.seo!.description,
  path: "/loans/business",
});

const enquireHref = "/contact?service=business";

/* ---------------------------------------------------------------- content */

const financeColumns = [
  { label: "Working capital", sublabel: "Day-to-day operations" },
  { label: "Equipment & assets", sublabel: "Machinery, vehicles, technology" },
  { label: "Expansion", sublabel: "New capacity or locations" },
];

const financeRows = [
  {
    label: "Typical use",
    values: [
      "Buying stock, paying suppliers and bridging the gap until customers pay",
      "Purchasing or upgrading machinery, tools, IT systems or commercial vehicles",
      "A new branch, larger premises, a production line or a new product range",
    ],
  },
  {
    label: "What lenders may ask to see",
    values: [
      "Bank statements, GST returns and a picture of receivables and payables",
      "Supplier quotation or proforma invoice, plus recent financials",
      "A project plan or projections, along with past financial statements",
    ],
  },
  {
    label: "How repayment is commonly structured",
    values: [
      "Often a revolving limit reviewed periodically, or a short-term loan",
      "Usually a term loan repaid in instalments over the asset's useful life",
      "Generally a term loan, sometimes with a period before full repayments begin",
    ],
  },
  {
    label: "Security",
    values: [
      "Varies — may be against stock and receivables, or unsecured for some profiles",
      "Varies — the equipment itself is often the primary security",
      "Varies — lenders may ask for property or other collateral",
    ],
  },
];

const assessIcons: IconName[] = ["calendarCheck", "trendingUp", "gauge", "layers", "landmark"];

const applicationTabs: { id: string; label: string; icon: IconName; intro: string; items: string[] }[] = [
  {
    id: "business-docs",
    label: "Business documents",
    icon: "building",
    intro: "Proof that the business exists, is registered and operates from where it says.",
    items: [
      ...(loan.documents?.find((d) => d.group === "Business")?.items ?? []),
      "Partnership deed, MOA/AOA or proprietorship proof, as applicable",
      "Licences specific to your trade, where relevant",
    ],
  },
  {
    id: "financials",
    label: "Financials",
    icon: "chart",
    intro: "How the business has performed and what it already owes.",
    items: [
      ...(loan.documents?.find((d) => d.group === "Financials")?.items ?? []),
      "Profit & loss and balance sheet, audited where required",
      "Debtor and creditor summaries for working capital requests",
    ],
  },
  {
    id: "promoter-kyc",
    label: "Promoter KYC",
    icon: "idCard",
    intro: "Identity and address details for proprietors, partners or directors.",
    items: [...(loan.documents?.find((d) => d.group.startsWith("Identity"))?.items ?? []), "Personal income tax returns, where requested"],
  },
];

const readiness = [
  "A clear, one-paragraph purpose for the funds",
  "Filed tax returns and GST returns up to date",
  "Bank statements that match your reported turnover",
  "A list of every existing loan and its repayment",
  "Promoter credit reports checked for errors",
  "A realistic view of how repayments fit your cash cycle",
];

const process: ProcessStep[] = [
  { title: "Define the need", description: "Pin down what the money is for, how much the business genuinely needs and when." },
  { title: "Match the facility", description: "Decide whether a working capital limit, equipment finance or a term loan fits that need." },
  { title: "Assemble the file", description: "Put together registration papers, financials and promoter KYC in one organised set." },
  { title: "Lender assessment", description: "The lender reviews the business, may visit the premises and raise queries for you to answer." },
  { title: "Review the sanction", description: "Read the sanctioned terms, security and covenants carefully before you sign." },
];

const faqs: FAQ[] = [
  ...(loan.faqs ?? []),
  {
    question: "Can a new business apply for a loan?",
    answer:
      "Some lenders consider newer businesses, but many look for a track record of operations and filed returns. The promoter's own credit history and any security offered often matter more in the early years.",
  },
  {
    question: "Does my personal credit history matter for a business loan?",
    answer:
      "Often, yes. For proprietorships, partnerships and many smaller companies, lenders review the credit history of the promoters alongside the business itself.",
  },
];

/* ------------------------------------------------------------------- page */

export default function BusinessLoansPage() {
  return (
    <>
      {/* Hero — large photograph left, copy right */}
      <section className="bg-canvas">
        <div className="container pb-12 pt-6 lg:pb-16 lg:pt-8">
          <Breadcrumbs items={[{ label: "Loans", href: "/loans" }, { label: "Business Loans" }]} />
          <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="animate-fade-up order-2 lg:order-1 lg:col-span-6">
              <Photo photo="businessShop" priority className="aspect-[4/3] lg:aspect-[1/1] xl:aspect-[6/5]" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="animate-fade-up order-1 [animation-delay:120ms] lg:order-2 lg:col-span-6">
              <Kicker>Business Loans</Kicker>
              <h1 className="mt-4 text-display-lg text-navy">Finance That Supports How Your Business Grows</h1>
              <p className="mt-5 max-w-measure text-lead text-ink-muted">
                Stock for a busy season, a new machine, a second outlet — each calls for a different kind of finance. We help you match the facility
                to the need and put together an application a lender can assess clearly.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={enquireHref} size="lg" arrow>
                  Discuss Business Finance
                </ButtonLink>
                <ButtonLink href="#finance-needs" size="lg" variant="outline">
                  Match Finance to the Need
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "finance-needs", label: "Finance needs" },
          { id: "eligibility", label: "Eligibility" },
          { id: "application", label: "Application" },
          { id: "process", label: "Process" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Finance needs — comparison table */}
      <section id="finance-needs" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Match Finance to the Need"
            description="Three common business needs and how lenders generally approach each. Actual structures vary by lender and by business."
          />
          <Reveal className="mt-10 lg:mt-12">
            <CompareTable columns={financeColumns} rows={financeRows} caption="How common types of business finance compare" />
          </Reveal>
        </div>
      </section>

      {/* What lenders assess */}
      <section id="eligibility" className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-display-md">What Lenders Assess</h2>
            <p className="mt-4 text-lead text-ink-muted">
              A business lender is asking one question: can this business service the debt from its own cash flow? These are the signals they read.
            </p>
            <p className="mt-4 text-copy text-ink-muted">
              Weight given to each factor differs between lenders and facility types — a working capital limit leans on turnover and cash cycle,
              while a long-term loan leans more on profitability and security.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line lg:col-span-7">
            {(loan.eligibility ?? []).map((e, i) => (
              <Reveal as="li" key={e} delay={i * 50} className="flex items-center gap-5 py-5">
                <span className="icon-tile">
                  <Icon name={assessIcons[i] ?? "checkCircle"} className="h-6 w-6" />
                </span>
                <span className="font-display text-title text-ink">{e}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Application readiness */}
      <section id="application" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Preparing a Strong Application"
            description="A complete, consistent file lets the lender assess your business on its merits rather than chasing missing papers."
          />
          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <Tabs
                label="Application documents"
                variant="pill"
                items={applicationTabs.map((t) => ({
                  id: t.id,
                  label: t.label,
                  icon: t.icon,
                  content: (
                    <div className="rounded-panel border border-line bg-white p-7 sm:p-9">
                      <p className="text-copy text-ink-muted">{t.intro}</p>
                      <CheckList items={t.items} columns={2} className="mt-6 gap-y-4" />
                    </div>
                  ),
                }))}
              />
            </div>
            <Reveal delay={80} className="lg:col-span-4">
              <div className="h-full rounded-panel border border-line border-t-4 border-t-green bg-white p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <Icon name="clipboardCheck" className="h-6 w-6 text-green-ink" />
                  <h3 className="font-display text-title">Readiness check</h3>
                </div>
                <p className="mt-2 text-[0.9375rem] text-ink-muted">Tick these off before you approach a lender.</p>
                <ul className="mt-6 grid gap-4">
                  {readiness.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-copy leading-relaxed text-ink">
                      <span aria-hidden="true" className="mt-[0.3em] h-4 w-4 shrink-0 rounded-[4px] border-2 border-line-strong" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section bg-canvas">
        <div className="container">
          <SectionHeading title="From Requirement to Sanction" description="The path most business finance applications follow." />
          <Steps steps={process} variant="rail" className="mt-12 lg:mt-14" />
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="text-display-md">Business Finance Questions</h2>
            <Note className="mt-6 bg-white">Every lender applies its own credit policy. We help you prepare — the lending decision is theirs.</Note>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Also worth exploring"
        items={[
          { label: "Business Insurance", href: "/insurance/business", icon: "shield" },
          { label: "Vehicle Loans", href: "/loans/vehicle", icon: "truck" },
          { label: "All Loan Services", href: "/loans", icon: "landmark" },
        ]}
      />

      <ClosingCTA
        variant="navy"
        title="Discuss Your Business Finance"
        description="Tell us what the business needs funding for and where it stands today. We'll help you identify the right type of facility and get your paperwork in order."
        primary={{ label: "Discuss Business Finance", href: enquireHref }}
        secondary={{ label: "All Loan Services", href: "/loans" }}
        note="Approval, limits, interest rates, security and all other terms are decided solely by the lender."
      />
    </>
  );
}
