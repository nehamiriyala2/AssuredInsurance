import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getInsuranceCategory } from "@/data/insurance";
import type { FAQ, ProcessStep } from "@/lib/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Photo, type PhotoKey } from "@/components/ui/Photo";
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

const category = getInsuranceCategory("motor")!;

export const metadata = buildMetadata({
  title: category.seo!.title,
  description: category.seo!.description,
  path: "/insurance/motor",
});

const enquireHref = "/contact?service=insurance";

/* ---------------------------------------------------------------- content */

/** Each vehicle card has its own photograph (the hero uses a different car shot). */
const vehiclePhotos: Record<string, PhotoKey> = {
  car: "motorCarCity",
  "two-wheeler": "motorTwoWheeler",
  "commercial-vehicle": "motorCommercial",
};

const vehicleIcons: Record<string, IconName> = { car: "car", "two-wheeler": "bike", "commercial-vehicle": "truck" };

const vehicleLabels: Record<string, string> = { car: "Car", "two-wheeler": "Two-wheeler", "commercial-vehicle": "Commercial vehicle" };

const vehiclePoints: Record<string, string[]> = {
  car: [
    "Whether third-party only or comprehensive cover suits the car's age and value",
    "Add-ons such as zero depreciation, which may matter more for newer cars",
    "The IDV and how it changes as the car gets older",
    "Any CNG/LPG kit or accessories fitted after purchase, which may need declaring",
  ],
  "two-wheeler": [
    "Third-party cover is the legal minimum for every motorcycle and scooter on the road",
    "Long-term or multi-year policy options, where offered",
    "Theft exposure, especially in busy urban parking",
    "Renewing on time — two-wheeler policies are easy to let lapse",
  ],
  "commercial-vehicle": [
    "The vehicle class — goods carrier, passenger carrier or special-purpose vehicle",
    "Liability for passengers, cargo-related risks or paid drivers, as applicable",
    "Permitted use and route details declared to the insurer",
    "Managing renewals across several vehicles in a fleet",
  ],
};

const protects: { icon: IconName; text: string }[] = [
  { icon: "scale", text: "Liability for third-party injury or property damage" },
  { icon: "wrench", text: "Damage to your own vehicle, under comprehensive cover" },
  { icon: "lock", text: "Theft of the vehicle" },
  { icon: "fire", text: "Fire and specified natural events" },
  { icon: "userCheck", text: "Personal accident cover for the owner-driver" },
];

const addOns = ["Zero depreciation", "Engine protection", "Roadside assistance", "Return to invoice", "Consumables cover"];

const considerations: { title: string; text: string }[] = [
  {
    title: "Insured Declared Value (IDV)",
    text: "Broadly the vehicle's current market value as agreed with the insurer. It sets the payout for total loss or theft, so a very low IDV can leave a shortfall.",
  },
  {
    title: "No Claim Bonus",
    text: "A discount on the own-damage premium for claim-free years. It usually belongs to you, not the vehicle, and may be transferable when you change vehicles.",
  },
  {
    title: "Add-ons",
    text: "Extras widen protection but add to the premium. Pick those that match how old the vehicle is and how you actually use it.",
  },
  {
    title: "Renewal timing",
    text: "Renewing before expiry keeps cover continuous. After a lapse, accumulated benefits may be lost and an inspection may be needed.",
  },
  {
    title: "Accurate details",
    text: "Registration, usage, modifications and previous claims should be declared correctly — errors can complicate a claim later.",
  },
];

const beforeRenewal = [
  "Check the expiry date and set a reminder well ahead",
  "Review whether the IDV still reflects the vehicle's value",
  "Confirm your No Claim Bonus status from the previous policy",
  "Decide which add-ons you still need — and drop those you don't",
  "Update any change in address, usage or fitted accessories",
];

const afterAccident: ProcessStep[] = [
  { title: "Make sure everyone is safe", description: "Move to safety and seek medical help for anyone injured before anything else." },
  { title: "Record the details", description: "Note the time, place, vehicles involved and take photographs of the scene and damage." },
  { title: "Inform your insurer promptly", description: "Report the incident as soon as you can, following the insurer's claim intimation process." },
  { title: "Avoid unauthorised repairs", description: "Wait for the insurer's survey or approval before repairs begin, unless told otherwise." },
  { title: "File a police report where applicable", description: "Usually needed for theft, third-party injury or significant third-party damage." },
];

const documents: { title: string; icon: IconName; items: string[] }[] = [
  {
    title: "For purchase or renewal",
    icon: "fileCheck",
    items: ["Vehicle registration certificate (RC)", "Previous policy details, for renewal", "Owner's identity and address proof", "Details of add-ons and accessories, if any"],
  },
  {
    title: "For a claim",
    icon: "clipboardCheck",
    items: ["Policy document and claim reference", "Driving licence of the person driving", "Registration certificate", "Police report, where applicable", "Repair estimate and photographs of the damage"],
  },
];

const process: ProcessStep[] = [
  { title: "Share your vehicle details", description: "Tell us the vehicle type, model, registration year and how it is used day to day." },
  { title: "Choose a cover type", description: "Decide between third-party, comprehensive or standalone own-damage based on your situation." },
  { title: "Review IDV and add-ons", description: "Check the declared value, your No Claim Bonus and which extras are worth paying for." },
  { title: "Buy or renew before expiry", description: "Complete the policy in time and keep a copy accessible — in the vehicle and on your phone." },
];

const faqs: FAQ[] = [
  ...(category.faqs ?? []),
  {
    question: "What is standalone own-damage cover?",
    answer:
      "It covers damage to your own vehicle only, and is meant for vehicles that already have a valid third-party policy in force — for example, a separate long-term third-party policy taken at purchase. It doesn't replace the legally required third-party cover.",
  },
];

/* ------------------------------------------------------------------- page */

export default function MotorInsurancePage() {
  return (
    <>
      {/* Hero — copy + vehicle photo, then a vehicle selector */}
      <section className="bg-canvas">
        <div className="container pb-12 pt-6 lg:pb-16 lg:pt-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
            <div className="animate-fade-up lg:col-span-6">
              <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "Motor Insurance" }]} />
              <Kicker className="mt-8 lg:mt-12">Motor Insurance</Kicker>
              <h1 className="mt-4 text-display-lg text-navy">Cover for Every Vehicle You Drive</h1>
              <p className="mt-5 max-w-[38rem] text-lead text-ink-muted">
                Third-party cover is the legal minimum on Indian roads; protecting your own vehicle is a choice worth making carefully. We help you
                pick the right cover type, sense-check the value and renew without gaps.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={enquireHref} size="lg" arrow>
                  Discuss Vehicle Cover
                </ButtonLink>
                <ButtonLink href="#cover-types" size="lg" variant="outline">
                  Compare Cover Types
                </ButtonLink>
              </div>
            </div>
            <div className="animate-fade-up [animation-delay:120ms] lg:col-span-6">
              <Photo photo="motorCar" priority className="aspect-[4/3] lg:aspect-[5/4]" />
            </div>
          </div>

          <div className="mt-10 animate-fade-up [animation-delay:200ms] lg:mt-12">
            <p className="font-display text-base font-bold text-ink">What are you insuring?</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3 lg:gap-5">
              {category.subcategories.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className="group flex items-center gap-4 rounded-card border border-line-strong bg-white p-4 transition-colors hover:border-navy sm:p-5"
                  >
                    <span className="icon-tile transition-colors group-hover:bg-green/15 group-hover:text-green-ink">
                      <Icon name={vehicleIcons[s.id] ?? "car"} className="h-6 w-6" />
                    </span>
                    <span className="flex-1 font-display text-title text-ink">{vehicleLabels[s.id] ?? s.title}</span>
                    <Icon name="arrowDown" className="h-5 w-5 text-ink-soft transition-colors group-hover:text-navy" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "vehicles", label: "Vehicles" },
          { id: "protects", label: "What it protects" },
          { id: "cover-types", label: "Cover types" },
          { id: "considerations", label: "Considerations" },
          { id: "renewal", label: "Renewal" },
          { id: "documents", label: "Documents" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Vehicle options */}
      <section id="vehicles" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Vehicle Options"
            description="The basics are similar across vehicles, but what deserves attention differs between a family car, a daily scooter and a business vehicle."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12">
            {category.subcategories.map((s, i) => (
              <Reveal key={s.id} delay={i * 60} className="h-full">
                <article id={s.id} className="flex h-full flex-col overflow-hidden rounded-panel border border-line bg-white">
                  <Photo
                    photo={vehiclePhotos[s.id] ?? "motorCarCity"}
                    className="aspect-[16/10] rounded-none"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    position={s.id === "two-wheeler" ? "50% 35%" : undefined}
                  />
                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <h3 className="font-display text-display-sm">{s.title}</h3>
                    <p className="mt-2 text-copy text-ink-muted">{s.description}</p>
                    <p className="mt-6 border-t border-line pt-5 font-display text-sm font-bold uppercase tracking-[0.1em] text-ink-soft">Worth checking</p>
                    <CheckList items={vehiclePoints[s.id] ?? []} className="mt-4" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What it protects — icon row */}
      <section id="protects" className="section-sm bg-canvas">
        <div className="container">
          <h2 className="text-display-md">What Motor Insurance Generally Helps Protect</h2>
          <ul className="mt-10 grid gap-y-0 border-y border-line sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-line">
            {protects.map((p, i) => (
              <Reveal
                as="li"
                key={p.text}
                delay={i * 50}
                className="flex items-start gap-4 border-b border-line py-6 last:border-b-0 sm:pr-6 lg:block lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="icon-tile">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <p className="text-copy font-medium text-ink lg:mt-5">{p.text}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-soft">What is actually covered depends on the cover type, add-ons and policy wording.</p>
        </div>
      </section>

      {/* Cover types */}
      <section id="cover-types" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Types of Cover"
            description="Three broad ways to insure a private vehicle. The right one depends on its age, its value and the cover it already has."
          />
          <CompareTable
            className="mt-10 lg:mt-12"
            caption="Comparison of third-party, comprehensive and standalone own-damage motor cover"
            highlight={1}
            columns={[
              { label: "Third-party", sublabel: "The legal minimum" },
              { label: "Comprehensive", sublabel: "Third-party plus own damage" },
              { label: "Standalone own-damage", sublabel: "For vehicles with separate valid third-party cover" },
            ]}
            rows={[
              { label: "Third-party liability", values: [true, true, false] },
              { label: "Damage to your own vehicle", values: [false, true, true] },
              { label: "Theft", values: [false, true, true] },
              { label: "Fire & specified natural events", values: [false, true, true] },
              { label: "Meets the legal minimum", values: ["Yes", "Includes it", "Needs separate TP"] },
              { label: "Add-ons available", values: ["Limited", "Yes, varies by insurer", "Yes, varies by insurer"] },
            ]}
          />
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            <p className="shrink-0 font-display text-base font-bold text-ink">Common add-ons</p>
            <ul className="flex flex-wrap gap-2">
              {addOns.map((a) => (
                <li key={a} className="inline-flex h-10 items-center gap-2 rounded-full border border-line-strong bg-white px-4 text-[0.9375rem] font-medium text-ink">
                  <Icon name="plus" className="h-4 w-4 text-green-ink" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-3 text-sm text-ink-soft">Availability varies by insurer and vehicle age.</p>
        </div>
      </section>

      {/* Considerations — numbered grid */}
      <section id="considerations" className="section bg-canvas">
        <div className="container">
          <SectionHeading title="Important Considerations" description="Five details that make the biggest difference to what you pay and what you receive." />
          <ol className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-6">
            {considerations.map((c, i) => (
              <Reveal
                as="li"
                key={c.title}
                delay={i * 50}
                className={`rounded-card border border-line bg-white p-6 lg:p-7 ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <span className="font-display text-[2rem] font-bold leading-none tracking-[-0.04em] text-green-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-title">{c.title}</h3>
                <p className="mt-2 text-copy text-ink-muted">{c.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Renewal & assistance — the page's one navy band */}
      <section id="renewal" className="section bg-navy text-white">
        <div className="container">
          <SectionHeading
            tone="inverse"
            title="Renewal & Assistance"
            description="Two moments that matter most: the weeks before your policy expires, and the hours after an accident."
          />
          <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="flex items-center gap-3">
                <Icon name="calendarCheck" className="h-6 w-6 text-green" />
                <h3 className="font-display text-display-sm text-white">Before you renew</h3>
              </div>
              <CheckList items={beforeRenewal} tone="inverse" className="mt-6" />
            </Reveal>
            <Reveal delay={80} className="lg:border-l lg:border-white/15 lg:pl-16">
              <div className="flex items-center gap-3">
                <Icon name="shieldAlert" className="h-6 w-6 text-green" />
                <h3 className="font-display text-display-sm text-white">After an accident</h3>
              </div>
              <ol className="mt-6 space-y-5">
                {afterAccident.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 font-display text-sm font-bold text-white">{i + 1}</span>
                    <div>
                      <p className="font-display text-base font-bold text-white">{s.title}</p>
                      <p className="mt-1 text-[0.9375rem] text-white/75">{s.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>
      <section id="documents" className="section-sm bg-canvas">
        <div className="container grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="text-display-md">Documents</h2>
            <p className="mt-4 text-lead text-ink-muted">Keep these handy — ideally a copy in the vehicle and one on your phone.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {documents.map((d) => (
              <Reveal key={d.title} className="rounded-card border border-line bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="icon-tile h-10 w-10">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-title">{d.title}</h3>
                </div>
                <CheckList items={d.items} className="mt-5" />
              </Reveal>
            ))}
            <Note className="sm:col-span-2">Requirements vary by insurer, vehicle type and the nature of the claim.</Note>
          </div>
        </div>
      </section>
      <section id="process" className="section bg-surface">
        <div className="container">
          <SectionHeading title="How We Help You Get Covered" description="From the vehicle details to a policy in force — four straightforward steps." />
          <Steps steps={process} variant="rail" className="mt-12 lg:mt-14" />
        </div>
      </section>
      <section id="faqs" className="section bg-canvas">
        <div className="container max-w-[56rem]">
          <SectionHeading title="Frequently Asked Questions" description="Quick answers on motor cover, renewals and claims." align="center" />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Also worth exploring"
        items={[
          { label: "Vehicle Loans", href: "/loans/vehicle", icon: "carFront" },
          { label: "Claims Assistance", href: "/claims", icon: "clipboardCheck" },
          { label: "All Insurance", href: "/insurance", icon: "shield" },
        ]}
      />

      <ClosingCTA
        variant="panel"
        title="Discuss Your Vehicle Protection"
        description="Share your vehicle and renewal date. We'll help you compare cover types, check the IDV and choose add-ons that make sense."
        primary={{ label: "Discuss Vehicle Cover", href: enquireHref }}
        secondary={{ label: "Compare Cover Types", href: "#cover-types" }}
        note="Cover, premiums and claims are subject to the insurer's terms."
      />
    </>
  );
}
