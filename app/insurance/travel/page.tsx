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
import { CheckList } from "@/components/sections/CheckList";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Note } from "@/components/sections/Note";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { TravelChecklist, type ChecklistItem } from "./TravelChecklist";

const travel = getInsuranceCategory("travel")!;
const sub = (id: string) => travel.subcategories.find((s) => s.id === id)!;

export const metadata = buildMetadata({
  title: travel.seo!.title,
  description: travel.seo!.description,
  path: "/insurance/travel",
});

const enquireHref = "/contact?service=insurance";

/* ---------------------------------------------------------------- content */

const tripTypes: { id: string; icon: IconName; label: string; intro: string; points: string[]; note?: string }[] = [
  {
    id: "domestic",
    icon: "map",
    label: "Within India",
    intro: sub("domestic").description + " Usually optional, and useful when a trip involves several bookings or long distances.",
    points: [
      "Hospitalisation following an accident or sudden illness on the trip",
      "Delay or loss of checked-in baggage on domestic flights",
      "Cancellation or curtailment for reasons listed in the policy",
      "Short, single-trip durations matched to your itinerary",
    ],
  },
  {
    id: "international",
    icon: "globe",
    label: "Overseas",
    intro: sub("international").description + " Medical treatment abroad is the main reason most travellers buy it.",
    points: [
      "Emergency medical treatment and evacuation, up to the sum insured",
      "Loss of passport and the cost of obtaining replacement documents",
      "Flight delays, missed connections and baggage issues",
      "Personal liability for accidental damage or injury to others, where included",
    ],
    note: "Some countries — including Schengen-area states — ask for proof of travel medical cover with the visa application, often with a minimum cover amount. Check the current rules for your destination.",
  },
];

const journey: { icon: IconName; stage: string; risks: string[] }[] = [
  { icon: "planeTakeoff", stage: "Before departure", risks: ["Trip cancelled for a covered reason", "Illness or injury before you leave"] },
  { icon: "luggage", stage: "In transit", risks: ["Flight delays", "Missed connections", "Delayed or lost checked-in baggage"] },
  { icon: "map", stage: "At your destination", risks: ["A medical emergency far from home", "Lost or stolen passport"] },
  { icon: "planeLanding", stage: "Coming home", risks: ["Return delayed by illness or disruption", "Extra stay and rebooking costs"] },
];

const protection: { icon: IconName; title: string; text: string }[] = [
  { icon: "stethoscope", title: "Medical", text: "Emergency treatment, hospitalisation and, in serious cases, medical evacuation while travelling." },
  { icon: "luggage", title: "Baggage", text: "Compensation for checked-in baggage that is delayed beyond a set time or lost by the carrier." },
  { icon: "idCard", title: "Documents", text: "Costs linked to replacing a lost passport or other essential travel documents." },
  { icon: "calendar", title: "Trip disruption", text: "Cancellation, curtailment, delays and missed connections for reasons the policy names." },
  { icon: "scale", title: "Personal liability", text: "Claims from third parties for accidental injury or damage to their property, mainly abroad." },
];

const travellers: { id?: string; icon: IconName; title: string; text: string }[] = [
  { icon: "sunset", title: "Leisure travellers", text: "Holidays where prepaid bookings and medical costs abroad are the main exposure." },
  { icon: "briefcase", title: "Business travellers", text: "Work trips, sometimes with equipment to carry and tight schedules to keep." },
  { id: "student", icon: "graduation", title: "Students abroad", text: sub("student").description },
  { id: "family", icon: "users", title: "Families", text: sub("family").description },
  { icon: "heartHandshake", title: "Senior travellers", text: "Age limits, medical declarations and cover levels deserve closer attention." },
  { icon: "repeat", title: "Frequent flyers", text: "Annual multi-trip plans can cover several journeys, each within a maximum trip length." },
];

const checklist: ChecklistItem[] = [
  { id: "buy-early", title: "Buy cover before you depart", detail: "Most policies can't be bought once the trip has started, and early purchase helps with cancellation cover." },
  { id: "visa", title: "Check visa insurance rules", detail: "Confirm whether your destination needs proof of cover and any minimum amount." },
  { id: "declare", title: "Declare pre-existing conditions", detail: "Undisclosed conditions can lead to a related claim being declined." },
  { id: "activities", title: "Check activity exclusions", detail: "Trekking, skiing or diving may need an add-on or be excluded altogether." },
  { id: "offline", title: "Save policy and helpline details offline", detail: "Keep the policy number and assistance contact where you can reach them without data." },
  { id: "copies", title: "Carry copies of your documents", detail: "Paper and digital copies of passport, visa and tickets make replacements easier." },
  { id: "claims", title: "Know the claim process", detail: "Note what to report, to whom, and which receipts and reports to collect on the spot." },
  { id: "dates", title: "Check your trip dates match", detail: "The policy period should cover the full journey, including the day you return." },
];

const process: ProcessStep[] = [
  { title: "Share your itinerary", description: "Destinations, dates, who's travelling and what you'll be doing — the details that shape the cover." },
  { title: "Compare cover levels", description: "Look at medical sums insured, baggage and disruption limits, deductibles and exclusions side by side." },
  { title: "Buy before you fly", description: "Complete the proposal accurately, declare health conditions and keep the policy documents handy." },
  { title: "Support if plans go wrong", description: "If something happens on the trip, we help you understand the insurer's claim steps and paperwork." },
];

/* ------------------------------------------------------------------- page */

export default function TravelInsurancePage() {
  return (
    <>
      {/* Hero — wide sky photograph with a white card over its lower edge */}
      <section className="bg-canvas">
        <div className="container pb-12 pt-6 lg:pb-16 lg:pt-8">
          <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "Travel Insurance" }]} />
          <div className="relative mt-6 animate-fade-up lg:mt-8">
            <Photo photo="travelWing" priority sizes="100vw" className="aspect-[4/3] sm:aspect-[16/8] lg:aspect-[21/8]" position="50% 40%" />
            <div className="relative mt-5 rounded-panel border border-line bg-white p-6 sm:mx-6 sm:-mt-16 sm:p-9 sm:shadow-lift lg:absolute lg:bottom-0 lg:left-10 lg:mx-0 lg:mt-0 lg:w-[min(36rem,52%)] lg:translate-y-1/3 lg:p-10 xl:left-12">
              <h1 className="text-display-lg text-navy">Travel With Cover That Goes Where You Go</h1>
              <p className="mt-4 text-lead text-ink-muted">
                From a weekend trip within India to a semester overseas, the right travel policy follows your itinerary — medical help, lost bags and
                disrupted plans included.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={enquireHref} size="lg" arrow>
                  Plan Your Travel Cover
                </ButtonLink>
                <ButtonLink href="#checklist" size="lg" variant="outline">
                  Before-You-Travel Checklist
                </ButtonLink>
              </div>
            </div>
          </div>
          {/* Space for the overlapping card on desktop */}
          <div aria-hidden="true" className="hidden lg:block lg:h-36 xl:h-32" />
        </div>
      </section>

      <SectionNav
        items={[
          { id: "trip-type", label: "Domestic & international" },
          { id: "risks", label: "Travel risks" },
          { id: "protection", label: "Protection" },
          { id: "who", label: "Who it's for" },
          { id: "checklist", label: "Checklist" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Domestic vs international */}
      <section id="trip-type" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Domestic or International?"
            description="Where you're going changes what matters most. Here is what each type of policy typically focuses on."
          />
          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
            {tripTypes.map((t, i) => (
              <Reveal key={t.id} delay={i * 80} className="h-full">
                <article id={t.id} className="flex h-full scroll-mt-40 flex-col rounded-panel border border-line bg-white p-7 lg:p-9">
                  <div className="flex items-center gap-4">
                    <span className="icon-tile">
                      <Icon name={t.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-soft">{t.label}</p>
                      <h3 className="font-display text-display-sm">{sub(t.id).title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-copy text-ink-muted">{t.intro}</p>
                  <p className="mt-6 font-display text-base font-bold text-ink">What&apos;s typically covered</p>
                  <CheckList items={t.points} className="mt-4" />
                  {t.note && <Note className="mt-7">{t.note}</Note>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section id="risks" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="Common Travel Risks, Stage by Stage"
            description="Things rarely go wrong all at once. Following a trip from start to finish shows where a policy can step in."
          />
          <ol className="relative mt-12 grid gap-0 lg:mt-14 lg:grid-cols-4 lg:gap-8">
            <span aria-hidden="true" className="absolute left-7 right-7 top-7 hidden h-px bg-line-strong lg:block" />
            {journey.map((j, i) => {
              const last = i === journey.length - 1;
              return (
                <Reveal as="li" key={j.stage} delay={i * 80} className="relative flex gap-5 pb-9 last:pb-0 lg:block lg:pb-0">
                  {!last && <span aria-hidden="true" className="absolute bottom-0 left-7 top-14 w-px bg-line-strong lg:hidden" />}
                  <span
                    className={
                      "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full " +
                      (i === 0 ? "bg-green-ink text-white" : "border border-line-strong bg-white text-navy")
                    }
                  >
                    <Icon name={j.icon} className="h-6 w-6" />
                  </span>
                  <div className="pt-1 lg:pt-6">
                    <p className="text-sm font-bold uppercase tracking-[0.1em] text-green-ink">Stage {i + 1}</p>
                    <h3 className="mt-1 font-display text-title">{j.stage}</h3>
                    <ul className="mt-3 space-y-2">
                      {j.risks.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-copy text-ink-muted">
                          <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-green" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Protection categories */}
      <section id="protection" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Travel Protection Categories"
            description="Most travel policies are built from these five areas. Limits, deductibles and exclusions differ between plans."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5">
            {protection.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-line bg-white p-6">
                  <span className="icon-tile">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-title">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] text-ink-muted">{p.text}</p>
                  <p className="mt-5 text-sm font-semibold text-green-ink">As per policy</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who may consider it */}
      <section id="who" className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Who May Consider It" description="Almost anyone leaving home for a while — but the right plan looks different for each kind of traveller." />
          </div>
          <ul className="grid gap-x-10 border-t border-line sm:grid-cols-2 lg:col-span-8">
            {travellers.map((t) => (
              <li key={t.title} id={t.id} className="flex scroll-mt-40 gap-4 border-b border-line py-6">
                <span className="icon-tile h-11 w-11">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-base font-bold text-ink">{t.title}</span>
                  <span className="mt-1 block text-[0.9375rem] text-ink-muted">{t.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Checklist */}
      <section id="checklist" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading
              title="Before-You-Travel Checklist"
              description="Tick these off as you prepare. A few minutes now can save a lot of trouble at the airport or the hospital desk."
            />
            <div className="mt-8">
              <TravelChecklist items={checklist} />
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-40">
              <Photo photo="travelAirport" className="aspect-[4/3] lg:aspect-[4/5]" sizes="(min-width: 1024px) 40vw, 100vw" />
              <p className="mt-4 text-[0.9375rem] text-ink-muted">Your ticks aren&apos;t saved — they reset when you leave this page.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-canvas">
        <div className="container">
          <SectionHeading title="Arranging Travel Cover With Us" description="Four simple steps between booking your trip and boarding with the right policy." />
          <Steps steps={process} variant="columns" className="mt-10 lg:mt-12" />
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section border-t border-line bg-canvas">
        <div className="container max-w-[64rem]">
          <SectionHeading title="Travel Insurance FAQs" description="Quick answers to what travellers ask most often before they go." align="center" />
          <div className="mt-10">
            <FAQAccordion items={travel.faqs ?? []} />
          </div>
        </div>
      </section>

      <ClosingCTA
        variant="navy"
        title="Plan Your Travel Protection"
        description="Tell us where you're headed, when and with whom. We'll help you compare cover that fits the trip — and explain what to do if something goes wrong."
        primary={{ label: "Plan Your Travel Cover", href: enquireHref }}
        secondary={{ label: "All Insurance", href: "/insurance" }}
        note="Cover, exclusions and claim decisions are subject to the insurer's policy terms."
      />
    </>
  );
}
