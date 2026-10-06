import { buildMetadata } from "@/lib/seo";
import { getLoanCategory } from "@/data/loans";
import type { FAQ } from "@/lib/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, SectionHeading } from "@/components/ui/SectionHeading";
import { SectionNav } from "@/components/sections/SectionNav";
import { CheckList } from "@/components/sections/CheckList";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Note } from "@/components/sections/Note";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

const loan = getLoanCategory("personal")!;

export const metadata = buildMetadata({
  title: loan.seo!.title,
  description: loan.seo!.description,
  path: "/loans/personal",
});

const enquireHref = "/contact?service=loans";

/* ---------------------------------------------------------------- content */

const uses: { icon: IconName; title: string; text: string }[] = [
  { icon: "graduation", title: "Education", text: "Course fees, study materials or costs not covered by an education loan." },
  { icon: "heartHandshake", title: "Wedding", text: "Venue, ceremonies and family expenses around a wedding." },
  { icon: "stethoscope", title: "Medical costs", text: "Treatment or recovery expenses beyond what health cover pays." },
  { icon: "paintbrush", title: "Home improvement", text: "Repairs, repainting or upgrades to the home you live in." },
  { icon: "plane", title: "Travel", text: "A planned trip, booked with a clear idea of how it will be repaid." },
  { icon: "layers", title: "Consolidating existing debt", text: "Bringing several repayments together — worth comparing the total cost first." },
];

const makesSense = [
  "The expense is specific, planned and you know roughly what it will cost",
  "The EMI fits your monthly budget with room left for savings and essentials",
  "Your income is regular enough to cover every instalment through the tenure",
  "You have compared it with other routes — savings, a secured loan or an employer scheme",
  "You understand the total amount you will repay, not only the monthly figure",
];

const reconsider = [
  "The loan would mainly cover routine monthly spending",
  "You would need another loan to keep up with this one",
  "Your income is uncertain over the next few months",
  "Existing EMIs already take up a large share of your take-home pay",
  "You are applying with several lenders at once to see who says yes",
];

const lenderIcons: IconName[] = ["user", "banknote", "gauge", "scale", "briefcase"];

const costFactors: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "calculator",
    title: "Your EMI depends on three things",
    text: "The amount borrowed, the tenure and the interest rate the lender offers. A longer tenure lowers each instalment but usually increases the total interest you pay.",
  },
  {
    icon: "receipt",
    title: "Processing and other charges",
    text: "Lenders may levy processing fees, documentation charges and taxes on those fees. Ask for the full list of charges in writing before you accept an offer.",
  },
  {
    icon: "repeat",
    title: "Prepayment and foreclosure terms",
    text: "If you might repay early, check whether part-payments are allowed, whether a foreclosure charge applies and after how many instalments.",
  },
  {
    icon: "fileSearch",
    title: "Applications and your credit profile",
    text: "Each application can lead to a credit enquiry. Several in a short span can weigh on your credit profile, so it pays to apply where you are likely to fit.",
  },
];

const identityDocs = loan.documents?.find((d) => d.group.startsWith("Identity"))?.items ?? [];

const incomeDocs: { icon: IconName; title: string; text: string; items: string[] }[] = [
  {
    icon: "briefcase",
    title: "Salaried",
    text: "If you earn a monthly salary from an employer.",
    items: ["Salary slips for recent months", "Bank statements showing salary credits", "Form 16 or employment details, where requested"],
  },
  {
    icon: "store",
    title: "Self-employed",
    text: "If you run a business or practise a profession.",
    items: ["Income tax returns for recent years", "Proof of business — registration, GST or licence", "Business and personal bank statements"],
  },
];

const faqs: FAQ[] = [
  ...(loan.faqs ?? []),
  {
    question: "Do I need to give a reason for taking a personal loan?",
    answer:
      "Lenders usually ask for the purpose on the application. A personal loan can generally be used for a range of needs, but some uses may be excluded under the lender's policy, so it is worth stating the purpose accurately.",
  },
  {
    question: "Is a personal loan secured against anything?",
    answer:
      "Personal loans are usually unsecured, meaning no collateral is pledged. Because of that, lenders lean more heavily on your income, existing obligations and repayment history when deciding.",
  },
];

/* ------------------------------------------------------------------- page */

export default function PersonalLoansPage() {
  return (
    <>
      {/* Hero — wide copy column, portrait photo right */}
      <section className="bg-canvas">
        <div className="container grid gap-10 pb-12 pt-6 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-16 lg:pt-8">
          <div className="animate-fade-up lg:col-span-7 lg:pb-6">
            <Breadcrumbs items={[{ label: "Loans", href: "/loans" }, { label: "Personal Loans" }]} />
            <Kicker className="mt-8 lg:mt-12">Personal Loans</Kicker>
            <h1 className="mt-4 text-display-lg text-navy">Borrow for What Matters — With a Repayment Plan You Can Keep</h1>
            <p className="mt-5 max-w-measure text-lead text-ink-muted">
              A personal loan can bridge a planned expense or an unexpected one. Before you sign, it helps to be sure the instalments fit your month
              and that borrowing is genuinely the right call. We help you think it through.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={enquireHref} size="lg" arrow>
                Talk Through a Personal Loan
              </ButtonLink>
              <ButtonLink href="#right-step" size="lg" variant="outline">
                Is It the Right Step?
              </ButtonLink>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:120ms] lg:col-span-5">
            <Photo photo="personalCouple" priority className="aspect-[4/3] lg:aspect-[4/5]" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "uses", label: "Common uses" },
          { id: "right-step", label: "Right step?" },
          { id: "lenders", label: "What lenders look at" },
          { id: "cost", label: "Cost of borrowing" },
          { id: "documents", label: "Documents" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Common uses — compact icon tiles */}
      <section id="uses" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Common Reasons People Consider a Personal Loan"
            description="Because the funds aren't tied to a single asset, personal loans are used for many purposes — subject to each lender's policy."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {uses.map((u, i) => (
              <Reveal as="li" key={u.title} delay={(i % 3) * 60} className="flex items-start gap-4 rounded-card border border-line bg-white p-5 lg:p-6">
                <span className="icon-tile h-11 w-11 bg-green/10 text-green-ink">
                  <Icon name={u.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-title text-ink">{u.title}</span>
                  <span className="mt-1 block text-[0.9375rem] leading-relaxed text-ink-muted">{u.text}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Right step — contrast columns */}
      <section id="right-step" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Is a Personal Loan the Right Step?"
            description="Borrowing responsibly starts with an honest look at why you need the money and how you'll pay it back."
          />
          <div className="mt-10 grid overflow-hidden rounded-panel border border-line lg:mt-12 lg:grid-cols-2">
            <Reveal className="bg-white p-7 sm:p-9 lg:p-10">
              <h3 className="font-display text-display-sm text-ink">It may make sense when…</h3>
              <CheckList items={makesSense} className="mt-6 gap-y-4" />
            </Reveal>
            <Reveal delay={80} className="border-t border-line bg-surface p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <h3 className="font-display text-display-sm text-ink">Pause and reconsider if…</h3>
              <ul className="mt-6 grid gap-y-4">
                {reconsider.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-copy leading-relaxed text-ink">
                    <Icon name="warning" className="mt-[0.2em] h-5 w-5 shrink-0 text-ink-soft" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What lenders look at — horizontal row */}
      <section id="lenders" className="section bg-surface">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="text-display-md lg:col-span-6">What Lenders Typically Look At</h2>
            <p className="max-w-measure text-lead text-ink-muted lg:col-span-6">
              With no collateral involved, the lender&apos;s view of you as a borrower carries most of the weight. Each lender weighs these differently.
            </p>
          </div>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:mt-12 lg:grid-cols-5">
            {(loan.eligibility ?? []).map((e, i) => (
              <Reveal as="li" key={e} delay={i * 50} className="bg-white p-6 lg:p-7">
                <span className="icon-tile">
                  <Icon name={lenderIcons[i] ?? "checkCircle"} className="h-6 w-6" />
                </span>
                <p className="mt-5 text-copy font-medium leading-snug text-ink">{e}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Cost of borrowing — the page's navy band */}
      <section id="cost" className="section bg-navy text-white">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <span aria-hidden="true" className="block h-3 w-3 bg-green" />
            <h2 className="mt-6 text-display-md text-white">Understanding the Cost of Borrowing</h2>
            <p className="mt-4 text-lead text-white/75">The monthly instalment is only part of the picture. These are the terms worth reading closely in any offer.</p>
          </div>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {costFactors.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 60} className="border-t border-white/15 pt-6">
                <Icon name={c.icon} className="h-6 w-6 text-green" />
                <h3 className="mt-4 font-display text-title text-white">{c.title}</h3>
                <p className="mt-2 text-copy text-white/75">{c.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Documents Lenders Usually Ask For"
            description="Income papers depend on how you earn. Identity documents are needed either way."
          />
          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
            {incomeDocs.map((d, i) => (
              <Reveal key={d.title} delay={i * 60} className="rounded-panel border border-line bg-white p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="icon-tile">
                    <Icon name={d.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-title">{d.title}</h3>
                    <p className="text-[0.9375rem] text-ink-muted">{d.text}</p>
                  </div>
                </div>
                <CheckList items={d.items} className="mt-6" />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 flex flex-col gap-5 rounded-panel bg-surface p-7 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex shrink-0 items-center gap-3">
              <Icon name="idCard" className="h-6 w-6 text-navy" />
              <h3 className="font-display text-title">Identity &amp; address — for everyone</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {identityDocs.map((d) => (
                <li key={d} className="rounded-full border border-line-strong bg-white px-4 py-2 text-[0.9375rem] text-ink">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Note className="mt-6 border border-line bg-white">Lenders may ask for additional documents depending on your profile and the amount you apply for.</Note>
        </div>
      </section>

      {/* FAQs — heading left, accordion right */}
      <section id="faqs" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="text-display-md">Personal Loan Questions</h2>
            <p className="mt-4 text-lead text-ink-muted">Straight answers to what people ask most before borrowing.</p>
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
          { label: "Financial Services", href: "/financial-services", icon: "compass" },
          { label: "All Loan Services", href: "/loans", icon: "landmark" },
        ]}
      />

      <ClosingCTA
        variant="plain"
        title="Talk Through Your Personal Loan"
        description="Share what the money is for and what you can comfortably repay each month. We'll help you weigh it up and prepare before you approach a lender."
        primary={{ label: "Talk Through a Personal Loan", href: enquireHref }}
        secondary={{ label: "All Loan Services", href: "/loans" }}
        note="Approval, amount, interest rate and all loan terms are decided by the lender."
      />
    </>
  );
}
