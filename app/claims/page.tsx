import { buildMetadata } from "@/lib/seo";
import { claimsSteps } from "@/data/home";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { SectionNav } from "@/components/sections/SectionNav";
import { Steps } from "@/components/sections/Steps";
import { CheckList } from "@/components/sections/CheckList";
import { Note } from "@/components/sections/Note";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata = buildMetadata({
  title: "Claims & Assistance",
  description:
    "Need help with an insurance claim? Our team can help guide you through the next steps, documents and follow-up with your insurer.",
  path: "/claims",
});

const assistHref = "/contact?service=claims";

/* ---------------------------------------------------------------- content */

const firstThings = [
  "Inform your insurer as soon as you can",
  "Keep bills, reports and photographs safe",
  "Check your policy's claim procedure",
  "Ask before starting repairs or disposing of anything",
];

const guidance: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "clock",
    title: "Intimate the claim early",
    text: "Most policies set a time limit for telling the insurer about a claim, and some events — hospitalisation, theft, an accident — have specific notification rules. Early intimation keeps your options open.",
  },
  {
    icon: "camera",
    title: "Keep a clear record",
    text: "Hold on to original bills, medical reports, receipts and correspondence, and photograph any damage before anything is moved or cleaned up. Note dates, times and who you spoke to.",
  },
  {
    icon: "search",
    title: "Read the relevant policy sections",
    text: "Look at what is covered, the limits and deductibles that apply, any exclusions and the documented claim procedure. These shape what the insurer will ask for.",
  },
  {
    icon: "message",
    title: "Check before you act",
    text: "For motor and property claims, the insurer may want to inspect the damage first. Starting repairs or discarding damaged items too early can complicate the assessment.",
  },
];

const documentGroups: { id: string; icon: IconName; title: string; intro: string; items: string[] }[] = [
  {
    id: "health",
    icon: "health",
    title: "Health",
    intro: "For cashless or reimbursement claims following treatment or hospitalisation.",
    items: ["Policy details and health card", "Hospital bills and discharge summary", "Prescriptions and investigation reports", "Identity proof"],
  },
  {
    id: "motor",
    icon: "car",
    title: "Motor",
    intro: "For accidental damage, theft or third-party incidents involving your vehicle.",
    items: ["Policy copy and registration certificate", "Driving licence", "Photographs of damage", "Police report, where applicable"],
  },
  {
    id: "property",
    icon: "home",
    title: "Home & Property",
    intro: "For loss or damage to your home, its contents or other insured property.",
    items: ["Policy copy", "Photographs and list of damaged items", "Purchase receipts or valuations", "Police report for theft, where applicable"],
  },
  {
    id: "travel",
    icon: "plane",
    title: "Travel",
    intro: "For medical emergencies, baggage issues or disruption while travelling.",
    items: ["Policy copy and travel tickets", "Medical reports and bills", "Property irregularity report for baggage", "Passport copy"],
  },
];

/* ------------------------------------------------------------------- page */

export default function ClaimsPage() {
  return (
    <>
      {/* Hero — reassurance left, "first things to do" checklist right */}
      <section className="bg-canvas">
        <div className="container grid gap-10 pb-12 pt-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-16 lg:pt-8 xl:gap-16">
          <div className="animate-fade-up lg:col-span-7">
            <Breadcrumbs items={[{ label: "Claims & Assistance" }]} />
            <h1 className="mt-8 text-display-lg text-navy lg:mt-12">Need Help With a Claim?</h1>
            <p className="mt-5 max-w-[38rem] text-lead text-ink-muted">
              Making a claim often comes at a difficult moment. We can help you understand what to do next, what to prepare and how to keep
              things moving with your insurer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={assistHref} size="lg" arrow>
                Request Claims Assistance
              </ButtonLink>
              <ButtonLink href="#first-steps" size="lg" variant="outline">
                What To Do First
              </ButtonLink>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms] lg:col-span-5">
            <div className="rounded-panel border border-line bg-white p-7 shadow-card sm:p-8">
              <p className="flex items-center gap-2.5 font-display text-title text-navy">
                <Icon name="listChecks" className="h-5 w-5 text-green-ink" />
                First things to do
              </p>
              <ol className="mt-5 divide-y divide-line border-t border-line">
                {firstThings.map((t, i) => (
                  <li key={t} className="flex items-start gap-4 py-4 last:pb-0">
                    <span className="w-6 shrink-0 font-display text-lg font-bold leading-snug text-green-ink">{i + 1}</span>
                    <span className="text-copy text-ink">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "first-steps", label: "First steps" },
          { id: "assist", label: "How we assist" },
          { id: "documents", label: "Documents" },
          { id: "important", label: "Important" },
        ]}
      />

      {/* General guidance */}
      <section id="first-steps" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              title="General Claims Guidance"
              description="Good habits that help across most types of claim. Your policy document sets out the exact process to follow."
            />
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {guidance.map((g, i) => (
              <Reveal key={g.title} delay={i * 60} className="flex gap-5 border-t border-line py-7">
                <span className="icon-tile bg-white">
                  <Icon name={g.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-title">{g.title}</h3>
                  <p className="mt-2 text-copy text-ink-muted">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we assist */}
      <section id="assist" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="How We Can Assist"
            description="From the first conversation to following up with your insurer, we help you understand each step and what it needs from you."
          />
          <Steps steps={claimsSteps} variant="rail" className="mt-12 lg:mt-14" />
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Documents That May Be Requested"
            description="Choose the type of claim to see the papers insurers commonly ask for. Lists are indicative — requirements vary by insurer, policy and claim."
          />
          <Tabs
            label="Claim types"
            variant="pill"
            className="mt-10"
            items={documentGroups.map((d) => ({
              id: d.id,
              label: d.title,
              icon: d.icon,
              content: (
                <div className="grid gap-8 rounded-panel border border-line bg-white p-7 sm:p-9 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-4">
                    <span className="icon-tile">
                      <Icon name={d.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-title">{d.title} claims</h3>
                    <p className="mt-2 text-copy text-ink-muted">{d.intro}</p>
                  </div>
                  <CheckList items={d.items} columns={2} className="gap-y-4 lg:col-span-8 lg:self-center" />
                </div>
              ),
            }))}
          />
          <Note className="mt-6 bg-white">Your insurer may ask for additional documents depending on the circumstances. We can help you check what applies.</Note>
        </div>
      </section>

      {/* Important */}
      <section id="important" className="section-sm bg-canvas">
        <div className="container">
          <div className="flex flex-col gap-5 rounded-panel border border-line p-7 sm:flex-row sm:items-start sm:gap-6 sm:p-9">
            <span className="icon-tile">
              <Icon name="info" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-title">Important</h2>
              <p className="mt-2 max-w-measure text-body text-ink-muted">
                Claims are assessed and settled by the insurer in line with the policy terms and conditions. Our role is to help you
                understand the process and support you through it — the decision on any claim rests with the insurer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        variant="navy"
        title="We're Here to Help You Through It"
        description="Tell us what has happened and which policy it relates to. We'll help you work out the next steps and what to have ready."
        primary={{ label: "Request Claims Assistance", href: assistHref }}
        secondary={{ label: "Read FAQs", href: "/resources#faqs" }}
      />
    </>
  );
}
