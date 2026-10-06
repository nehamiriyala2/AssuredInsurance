import { buildMetadata } from "@/lib/seo";
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
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Note } from "@/components/sections/Note";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

const category = getInsuranceCategory("home")!;

export const metadata = buildMetadata({
  title: category.seo!.title,
  description: category.seo!.description,
  path: "/insurance/home",
});

const enquireHref = "/contact?service=insurance";

/* ---------------------------------------------------------------- content */

const sub = (id: string) => category.subcategories.find((s) => s.id === id);

const structurePoints = [
  "Walls, roof, floors and the permanent fabric of the house or apartment",
  "Fixed fittings such as built-in wardrobes, plumbing and wiring",
  "Damage from the events your policy names, such as fire or storm",
  "Rebuilding or repair cost, rather than the property's market price",
];

const belongings: { icon: IconName; title: string; text: string }[] = [
  { icon: "sofa", title: "Furniture", text: "Sofas, beds, tables and storage" },
  { icon: "package", title: "Appliances", text: "Refrigerator, washing machine, air conditioners" },
  { icon: "laptop", title: "Electronics", text: "Television, computers and home devices" },
  { icon: "home", title: "Kitchen items", text: "Cookware, utensils and kitchen appliances" },
  { icon: "gift", title: "Valuables", text: "Jewellery and art may need separate, declared cover" },
];

const personas: { icon: IconName; title: string; text: string }[] = [
  { icon: "key", title: "Homeowners", text: "Insure both the building and what's inside, whether it's a house or an apartment you live in." },
  { icon: "user", title: "Tenants", text: "You don't own the walls, but your furniture, appliances and electronics can still be protected." },
  { icon: "building", title: "Landlords of let-out property", text: "Protect a rented-out flat or house you own, subject to the policy's terms for let-out property." },
  { icon: "landmark", title: "Home loan borrowers", text: "Lenders may ask about cover for the property; it also protects the asset your loan is tied to." },
];

const perils: { icon: IconName; title: string; text: string }[] = [
  { icon: "fire", title: "Fire", text: "Including damage from fire and, typically, related events such as lightning." },
  { icon: "storm", title: "Storms & floods", text: "Cyclone, storm, flood and inundation, where named in the policy." },
  { icon: "waves", title: "Earthquake", text: "Some policies include it; others offer it as an add-on." },
  { icon: "lock", title: "Burglary & theft", text: "Loss of contents through forcible entry, subject to policy conditions." },
  { icon: "hammer", title: "Accidental damage", text: "Sudden, unforeseen damage to specified items, if the policy includes it." },
];

const considerations: { title: string; text: string }[] = [
  {
    title: "Reconstruction cost, not market value",
    text: "The building is usually insured for what it would cost to rebuild, which excludes land value and can differ sharply from what the home would sell for.",
  },
  {
    title: "Keep an inventory",
    text: "A simple list of major items with photographs and bills makes it far easier to establish what was lost and its value.",
  },
  {
    title: "Know the exclusions",
    text: "Gradual wear and tear, poor maintenance and some kinds of damage are commonly excluded. Read what the wording leaves out, not only what it includes.",
  },
  {
    title: "Declare high-value items",
    text: "Jewellery, artwork and collectibles often have limits under general contents cover and may need to be listed or insured separately.",
  },
  {
    title: "Insure for an appropriate value",
    text: "Under-insuring the structure or contents can reduce what you receive on a claim, even for partial damage.",
  },
  {
    title: "Review after changes",
    text: "Renovations, extensions or major new purchases change what needs covering. Update the policy when your home changes.",
  },
];

const process: ProcessStep[] = [
  { title: "Describe the property", description: "Tell us whether you own or rent, the type of home, its age and construction, and where it is." },
  { title: "Estimate values", description: "Work out an approximate rebuilding cost for the structure and a realistic value for your belongings." },
  { title: "Choose covered events and add-ons", description: "Check the named perils, decide on extras such as earthquake cover, and note any items needing separate cover." },
  { title: "Review the wording and keep records", description: "Read the exclusions before you buy, then store the policy alongside your contents inventory." },
];

const faqs: FAQ[] = [
  ...(category.faqs ?? []),
  {
    question: "Does home insurance cover jewellery and valuables?",
    answer:
      "Often only up to a limit, if at all. Many policies need high-value items such as jewellery or art to be declared individually or covered under a separate section. Check the contents limits in the wording.",
  },
];

/* ------------------------------------------------------------------- page */

export default function HomeInsurancePage() {
  return (
    <>
      {/* Hero — mirrored: photo left, copy right */}
      <section className="bg-canvas">
        <div className="container pb-12 pt-6 lg:pb-16 lg:pt-8">
          <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "Home Insurance" }]} />
          <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
            <div className="order-2 animate-fade-up [animation-delay:120ms] lg:order-1 lg:col-span-6">
              <Photo photo="homeInterior" priority className="aspect-[4/3] lg:aspect-[5/4]" />
            </div>
            <div className="order-1 animate-fade-up lg:order-2 lg:col-span-6">
              <Kicker>Home &amp; Property Insurance</Kicker>
              <h1 className="mt-4 text-display-lg text-navy">Protect Your Home — and Everything Inside It</h1>
              <p className="mt-5 max-w-[38rem] text-lead text-ink-muted">
                A home is two things to insure: the building itself and the belongings that make it yours. We help owners, tenants and landlords
                understand which events a policy names and how to set values that hold up at claim time.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={enquireHref} size="lg" arrow>
                  Explore Home Protection
                </ButtonLink>
                <ButtonLink href="#structure-contents" size="lg" variant="outline">
                  Structure &amp; Contents
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav
        items={[
          { id: "structure-contents", label: "Structure & contents" },
          { id: "who", label: "Who it's for" },
          { id: "events", label: "Covered events" },
          { id: "considerations", label: "Considerations" },
          { id: "process", label: "Process" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* Structure and contents — two halves */}
      <section id="structure-contents" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Structure and Contents"
            description="Most home policies separate the building from what's inside it. You can often insure one or both, depending on whether you own or rent."
          />
          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">
            <Reveal className="h-full">
              <article id="home" className="flex h-full flex-col overflow-hidden rounded-panel border border-line bg-white">
                <Photo photo="homeApartments" className="aspect-[16/9] rounded-none" sizes="(min-width: 1024px) 50vw, 100vw" />
                <div className="flex flex-1 flex-col p-7 lg:p-9">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-green-ink">Structure</p>
                  <h3 className="mt-2 font-display text-display-sm">The building</h3>
                  <p className="mt-3 text-copy text-ink-muted">{sub("home")?.description} Structure cover typically relates to:</p>
                  <CheckList items={structurePoints} className="mt-6" />
                </div>
              </article>
            </Reveal>

            <Reveal delay={80} className="h-full">
              <article id="contents" className="flex h-full flex-col rounded-panel border border-line bg-white p-7 lg:p-9">
                <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-green-ink">Contents</p>
                <h3 className="mt-2 font-display text-display-sm">Your belongings</h3>
                <p className="mt-3 text-copy text-ink-muted">
                  {sub("contents")?.description} Tenants can usually insure contents even without owning the property.
                </p>
                <ul className="mt-7 grid flex-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
                  {belongings.map((b) => (
                    <li key={b.title} className="flex gap-4 bg-white p-5 last:sm:col-span-2">
                      <span className="icon-tile h-10 w-10">
                        <Icon name={b.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-display text-base font-bold text-ink">{b.title}</span>
                        <span className="block text-[0.9375rem] text-ink-muted">{b.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          <Reveal className="mt-6">
            <div id="property" className="flex flex-col gap-4 rounded-panel border border-line bg-white p-6 sm:flex-row sm:items-center sm:gap-6 lg:p-7">
              <span className="icon-tile">
                <Icon name="building" className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-title">{sub("property")?.title}</h3>
                <p className="mt-1 text-copy text-ink-muted">{sub("property")?.description}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who — four personas */}
      <section id="who" className="section bg-canvas">
        <div className="container">
          <SectionHeading title="Who May Consider It" description="Home cover isn't only for owner-occupiers. Each of these situations calls for a slightly different policy." />
          <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {personas.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60} className="border-t-2 border-navy pt-6">
                <span className="icon-tile">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-title">{p.title}</h3>
                <p className="mt-2 text-copy text-ink-muted">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Events — perils grid */}
      <section id="events" className="section bg-surface">
        <div className="container">
          <SectionHeading
            title="Events a Policy May Cover"
            description="Home insurance pays only for the perils named in your policy. These are the ones most commonly listed."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5">
            {perils.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 50} className="rounded-card border border-line bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-green-ink">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-title">{p.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-ink-muted">{p.text}</p>
                <p className="mt-4 text-sm text-ink-soft">As named in your policy</p>
              </Reveal>
            ))}
          </ul>
          <Note className="mt-8 bg-white">Check exactly which perils your policy names; some need add-ons.</Note>
        </div>
      </section>

      {/* Considerations — numbered two-column list */}
      <section id="considerations" className="section bg-canvas">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Important Considerations" description="Where home claims most often fall short — and how to avoid it." />
          </div>
          <ol className="grid gap-x-12 border-t border-line sm:grid-cols-2 lg:col-span-8">
            {considerations.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 50} className="grid grid-cols-[2.75rem_1fr] gap-3 border-b border-line py-6">
                <span className="font-display text-title text-green-ink">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-title">{c.title}</h3>
                  <p className="mt-2 text-copy text-ink-muted">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Process — sticky heading + stacked steps */}
      <section id="process" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+var(--subnav-h)+2rem)]">
              <SectionHeading title="How to Arrange Home Cover" description="Four steps from describing your home to a policy you understand." />
              <ButtonLink href={enquireHref} variant="outline" className="mt-8" arrow>
                Talk to an Advisor
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Steps steps={process} variant="stack" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section bg-canvas">
        <div className="container max-w-[64rem]">
          <SectionHeading title="Frequently Asked Questions" description="Common questions about insuring a home and its contents." />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Also worth exploring"
        items={[
          { label: "Home Loans", href: "/loans/home", icon: "key" },
          { label: "Life Insurance", href: "/insurance/life", icon: "users" },
          { label: "Claims Assistance", href: "/claims", icon: "clipboardCheck" },
        ]}
      />

      <ClosingCTA
        variant="navy"
        title="Explore Home Protection"
        description="Tell us about your home — owned, rented or let out — and what's inside it. We'll help you understand cover for the structure, contents and the events that matter where you live."
        primary={{ label: "Explore Home Protection", href: enquireHref }}
        secondary={{ label: "All Insurance", href: "/insurance" }}
        note="Covered events, limits and claims are subject to the insurer's policy terms and conditions."
      />
    </>
  );
}
