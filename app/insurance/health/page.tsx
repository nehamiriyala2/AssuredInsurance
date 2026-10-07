import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { faqsHref } from "@/lib/site";
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
import { CheckList } from "@/components/sections/CheckList";
import { CompareTable } from "@/components/sections/CompareTable";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Note } from "@/components/sections/Note";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

const category = getInsuranceCategory("health")!;

export const metadata = buildMetadata({
  title: category.seo!.title,
  description: category.seo!.description,
  path: "/insurance/health",
});

const enquireHref = "/contact?service=insurance";

/* ---------------------------------------------------------------- content */

const whoMayConsider: { icon: IconName; title: string; text: string }[] = [
  { icon: "user", title: "Without employer cover", text: "Self-employed people, freelancers and anyone not covered at work." },
  { icon: "briefcase", title: "With group cover only", text: "Employees whose workplace policy ends if they change jobs." },
  { icon: "users", title: "Young families", text: "Couples planning for children and the costs that come with them." },
  { icon: "heartHandshake", title: "Caring for parents", text: "Families arranging cover for older relatives." },
  { icon: "sunset", title: "Approaching retirement", text: "People planning for healthcare costs beyond working years." },
];

const typeIcons: Record<string, IconName> = {
  individual: "user",
  family: "users",
  "senior-citizen": "sunset",
  "critical-illness": "health",
  "personal-accident": "ambulance",
  maternity: "baby",
};

const oftenLimited = [
  "Pre-existing conditions — usually only after a waiting period",
  "Specific treatments with their own waiting periods",
  "Room rent caps and other sub-limits",
  "Co-payment, where you share part of each claim",
  "Non-medical items and consumables, depending on the policy",
];

const checks: { title: string; text: string }[] = [
  ...(category.considerations ?? []).map((c) => ({ title: c.title, text: c.description })),
  { title: "Honest disclosure", text: "Declare existing conditions and history in full when applying, so the policy responds as expected at claim time." },
  { title: "Renewals and portability", text: "Understand how the policy renews as you age, and the rules for moving to another insurer later." },
];

const process: ProcessStep[] = [
  { title: "Share who needs cover", description: "Who should be covered, their ages, any existing conditions and whether there is cover through work already." },
  {
    title: "Choose the structure and sum insured",
    description: "Individual or floater, a sum insured that reflects likely costs where you live, and any add-ons worth considering.",
  },
  { title: "Read the policy wording", description: "Waiting periods, sub-limits, co-payment and exclusions — the details that decide what a claim pays." },
  { title: "Apply with full disclosure", description: "Complete the proposal accurately. Depending on age and cover, the insurer may ask for a pre-policy check-up." },
  { title: "Renew and claim with support", description: "Renew on time to keep continuity benefits, and get help understanding the cashless or reimbursement process." },
];

const documents: { title: string; icon: IconName; items: string[] }[] = [
  { title: "For each person covered", icon: "idCard", items: ["Identity proof", "Age proof", "Address proof", "Recent photograph"] },
  {
    title: "Health information",
    icon: "stethoscope",
    items: ["Details of existing conditions and ongoing medication", "Past hospitalisation or surgery, if any", "Medical reports, where the insurer asks for them"],
  },
  { title: "If switching or adding cover", icon: "repeat", items: ["Current policy schedule", "Details of any employer group cover", "Previous renewal and claim history"] },
];

const faqs: FAQ[] = [
  ...(category.faqs ?? []),
  {
    question: "What is the difference between cashless and reimbursement claims?",
    answer:
      "With a cashless claim, the insurer settles eligible bills directly with a network hospital after approving the request. With reimbursement, you pay the hospital first and then submit bills and documents to the insurer for eligible expenses.",
  },
];

/* ------------------------------------------------------------------- page */

export default function HealthInsurancePage() {
  return (
    <>
      {/* Hero — copy left; consultation photo with an overlapping "types of cover" card */}
      <section className="bg-canvas">
        <div className="container grid gap-12 pb-14 pt-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-20 lg:pt-8 xl:gap-16">
          <div className="animate-fade-up lg:col-span-6">
            <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "Health Insurance" }]} />
            <Kicker className="mt-8 lg:mt-12">Health Insurance</Kicker>
            <h1 className="mt-4 text-display-lg text-navy">Health Cover for You and the People You Care For</h1>
            <p className="mt-5 max-w-[38rem] text-lead text-ink-muted">
              A hospital stay can arrive without warning. Health insurance can help with the cost of treatment — and choosing well means
              understanding what a policy pays for, when, and with what limits. We help you work through it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={enquireHref} size="lg" arrow>
                Discuss Health Cover
              </ButtonLink>
              <ButtonLink href="#what-to-check" size="lg" variant="outline">
                What to Check
              </ButtonLink>
            </div>
          </div>

          <div className="relative animate-fade-up pb-0 [animation-delay:120ms] sm:pb-16 lg:col-span-6 lg:pb-12">
            <Photo photo="healthConsultation" priority className="aspect-[4/3]" position="40% 40%" />
            <div className="relative -mt-10 ml-4 mr-4 rounded-panel border border-line bg-white p-5 shadow-lift sm:absolute sm:-bottom-0 sm:left-auto sm:right-6 sm:m-0 sm:w-[22rem] lg:-left-10 lg:right-auto">
              <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-ink-soft">Common types of cover</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.subcategories.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="inline-flex items-center rounded-full bg-surface px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-green/15 hover:text-navy">
                      {s.title.replace(/ (Health )?Insurance$/, "").replace(/ Cover$/, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "who", label: "Who it's for" },
          { id: "types", label: "Types of cover" },
          { id: "coverage", label: "What's covered" },
          { id: "individual-vs-family", label: "Individual vs family" },
          { id: "what-to-check", label: "What to check" },
          { id: "process", label: "Process" },
          { id: "documents", label: "Documents" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Who may consider it — a single row of people, no boxes */}
      <section id="who" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Who May Consider Health Insurance" description="Almost everyone benefits from some health cover. These are the situations where it most often comes up." />
          </div>
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
            {whoMayConsider.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 50} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-green-ink shadow-card">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{w.title}</h3>
                  <p className="mt-1 text-copy text-ink-muted">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Types of health protection */}
      <section id="types" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Types of Health Protection"
            description="Different structures answer different needs. Many households combine more than one."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {category.subcategories.map((s, i) => (
              <Reveal as="li" key={s.id} delay={(i % 3) * 60} className="h-full">
                <div id={s.id} className="flex h-full scroll-mt-40 gap-5 rounded-card border border-line bg-white p-6 transition-colors target:border-green lg:p-7">
                  <span className="icon-tile">
                    <Icon name={typeIcons[s.id] ?? "health"} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-title">{s.title}</h3>
                    <p className="mt-2 text-copy text-ink-muted">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Coverage considerations — what's typically included vs commonly limited */}
      <section id="coverage" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Coverage Considerations"
            description="Two policies with the same sum insured can pay very differently. Look at both sides before you compare prices."
          />
          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
            <Reveal className="rounded-panel bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green/15 text-green-ink">
                  <Icon name="checkCircle" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-title">What a policy may cover</h3>
              </div>
              <CheckList items={category.protects ?? []} className="mt-6" />
            </Reveal>
            <Reveal delay={80} className="rounded-panel bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-strong text-navy">
                  <Icon name="info" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-title">Often limited or delayed</h3>
              </div>
              <ul className="mt-6 grid gap-y-3.5">
                {oftenLimited.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-copy leading-relaxed text-ink">
                    <Icon name="minus" className="mt-[0.3em] h-4 w-4 shrink-0 text-ink-soft" />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Note className="mt-6 bg-white">Cover, limits, waiting periods and exclusions vary by insurer and plan. The policy wording is what applies.</Note>
        </div>
      </section>

      {/* Individual vs family */}
      <section id="individual-vs-family" className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Individual or Family Floater?" description="The most common structural choice. Neither is better in general — it depends on who you're covering and their ages." />
          </div>
          <CompareTable
            className="lg:col-span-8"
            caption="Individual health insurance compared with a family floater"
            columns={[
              { label: "Individual", sublabel: "One policy, one person" },
              { label: "Family floater", sublabel: "One shared sum insured" },
            ]}
            rows={[
              { label: "Who it covers", values: ["One person per policy", "Several family members together"] },
              { label: "Sum insured", values: ["Dedicated to that person", "Shared — one claim reduces what's left for others that year"] },
              { label: "Often considered by", values: ["Older members, or anyone with specific health needs", "Younger families with children"] },
              { label: "Worth weighing", values: ["Separate policies to manage and renew", "Premium is usually based on the eldest member"] },
            ]}
          />
        </div>
      </section>

      {/* Important things to check */}
      <section id="what-to-check" className="section bg-surface">
        <div className="container">
          <SectionHeading title="Important Things to Check" description="The details that most often decide whether a policy works the way you expect." />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {checks.map((c, i) => (
              <li key={c.title} className="bg-white p-7 lg:p-8">
                <span className="font-display text-sm font-bold tracking-[0.1em] text-green-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-title">{c.title}</h3>
                <p className="mt-2 text-copy text-ink-muted">{c.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process — sticky heading beside a numbered stack */}
      <section id="process" className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+var(--subnav-h)+2rem)]">
              <SectionHeading title="How the Process Works" description="From the first conversation to your renewals — what to expect at each stage." />
              <ButtonLink href={enquireHref} variant="navy" arrow className="mt-8">
                Start the Conversation
              </ButtonLink>
            </div>
          </div>
          <Steps steps={process} variant="stack" className="lg:col-span-8" />
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className="section bg-surface">
        <div className="container">
          <SectionHeading title="Information Usually Needed" description="Insurers set their own requirements. Having these to hand makes the application quicker and more accurate." />
          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12">
            {documents.map((d, i) => (
              <Reveal key={d.title} delay={i * 60} className="rounded-panel bg-white p-7">
                <div className="flex items-center gap-3">
                  <Icon name={d.icon} className="h-6 w-6 text-green-ink" />
                  <h3 className="font-display text-title">{d.title}</h3>
                </div>
                <CheckList items={d.items} className="mt-5" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Health Insurance FAQs" />
            {faqsHref && (
              <p className="mt-4 text-copy text-ink-muted">More questions? Browse all our <Link className="font-semibold text-navy underline underline-offset-2 hover:text-green-ink" href={faqsHref}>FAQs</Link>.</p>
            )}
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Related protection"
        items={[
          { label: "Life Insurance", href: "/insurance/life", icon: "users" },
          { label: "Travel Insurance", href: "/insurance/travel", icon: "plane" },
          { label: "Claims & Assistance", href: "/claims", icon: "lifebuoy" },
        ]}
      />

      <ClosingCTA
        variant="panel"
        title="Discuss Your Health Protection Needs"
        description="Tell us who you'd like to cover and any cover you already have. We'll help you understand the structures, limits and waiting periods that matter."
        primary={{ label: "Discuss Health Cover", href: enquireHref }}
        secondary={{ label: "Claims Help", href: "/claims" }}
      />
    </>
  );
}
