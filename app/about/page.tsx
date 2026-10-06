import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import type { IconName } from "@/components/ui/Icon";
import { trustPoints } from "@/data/home";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, SectionHeading } from "@/components/ui/SectionHeading";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Assured & Insured Financial Services helps individuals, families and businesses with insurance, financial planning and loan guidance.",
  path: "/about",
});

/*
 * TODO(client): add verified company details here — history, founding year,
 * leadership/team, registrations and office locations. None are shown until supplied;
 * do not invent them.
 */

/* ---------------------------------------------------------------- content */

const principles = [
  { title: "Our purpose", text: "To help people protect what matters and plan for what lies ahead — with guidance that is clear, honest and personal." },
  { title: "Our approach", text: "We listen first. Recommendations follow from your circumstances and priorities, and we explain the reasoning behind each one." },
  { title: "Our commitment", text: "Support doesn't end once a decision is made. We stay available for reviews, renewals and the questions that come up later." },
];

const brandAreas: { icon: IconName; label: string }[] = [
  { icon: "shield", label: "Insurance" },
  { icon: "compass", label: "Financial planning" },
  { icon: "landmark", label: "Loans" },
];

const helpAreas: { icon: IconName; title: string; text: string; href: string }[] = [
  { icon: "shield", title: "Insurance", text: "Life, health, motor, home, travel and business cover, compared in plain terms.", href: "/insurance" },
  { icon: "compass", title: "Financial Planning", text: "Goals, savings and protection brought into one considered plan.", href: "/financial-services" },
  { icon: "landmark", title: "Loans", text: "Preparation and guidance before you approach a lender.", href: "/loans" },
  { icon: "lifebuoy", title: "Claims & Assistance", text: "Help understanding an insurer's claim process when you need it most.", href: "/claims" },
];

/* ------------------------------------------------------------------- page */

export default function AboutPage() {
  return (
    <>
      {/* Hero — editorial statement, no photograph */}
      <section className="bg-canvas">
        <div className="container pb-12 pt-6 lg:pb-16 lg:pt-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="animate-fade-up">
            <Kicker className="mt-8 lg:mt-12">About Us</Kicker>
            <h1 className="mt-5 max-w-[15ch] text-display-lg text-navy lg:max-w-none lg:pr-[16%]">Clarity and Trust in Every Financial Decision</h1>
          </div>
          <div className="mt-10 grid gap-6 border-t border-line pt-8 animate-fade-up [animation-delay:120ms] md:grid-cols-2 md:gap-10 lg:mt-14 lg:gap-16">
            <p className="max-w-measure text-lead text-ink">
              Assured &amp; Insured Financial Services brings insurance, financial planning and loan guidance together — so individuals,
              families and businesses can make decisions with confidence.
            </p>
            <p className="max-w-measure text-body text-ink-muted">
              We believe the right choice is usually the one you fully understand. So we spend time on the questions behind a decision — who
              depends on you, what you are working towards, what you could absorb if things went wrong — before talking about options.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are — copy + brand tile */}
      <section className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          <Reveal className="lg:col-span-7">
            <h2 className="text-display-md">One Place for Protection, Planning and Finance</h2>
            <div className="mt-6 max-w-measure space-y-5 text-body text-ink-muted">
              <p>
                Financial decisions are connected. The cover you need depends on your responsibilities; your plans depend on how well
                you&apos;re protected; and borrowing affects both. We help you see these pieces side by side.
              </p>
              <p>
                Whether you&apos;re choosing a first health policy, protecting a growing family, buying a home or running a business, our role
                is to explain the options clearly, help you weigh them sensibly, and remain available as your needs evolve.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5">
            <div className="relative rounded-panel border border-line bg-white p-8 sm:p-10">
              <span aria-hidden="true" className="absolute right-6 top-6 h-3 w-3 bg-green" />
              <div className="flex flex-col items-center text-center">
                <Image src="/brand/logo-mark.png" alt="Assured & Insured logo mark" width={350} height={304} className="h-auto w-32 sm:w-40" />
                <p className="mt-6 font-display text-display-sm text-navy">Assured &amp; Insured</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft">Financial Services</p>
              </div>
              <ul className="mt-8 grid grid-cols-3 divide-x divide-line border-t border-line pt-6">
                {brandAreas.map((a) => (
                  <li key={a.label} className="flex flex-col items-center gap-2 px-2 text-center text-sm font-medium text-ink-muted">
                    <Icon name={a.icon} className="h-5 w-5 text-green-ink" />
                    {a.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles — three ruled columns with large numerals */}
      <section id="approach" className="section bg-canvas">
        <div className="container">
          <SectionHeading
            title="What Guides Us"
            description="Three principles shape every conversation, whether it's about insurance, a financial plan or a loan."
          />
          <ol className="mt-10 grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0 lg:mt-12">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80} className="py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0 lg:px-10">
                <span className="block font-display text-[3.5rem] font-bold leading-none tracking-[-0.04em] text-green-ink lg:text-[4.5rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-display-sm">{p.title}</h3>
                <p className="mt-3 text-copy text-ink-muted">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* The way we work — sticky heading, two-column icon list */}
      <section className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading title="The Way We Work" description="The standards you can expect from every conversation with us, from a first enquiry to a renewal years later." />
            </div>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {trustPoints.map((t, i) => (
              <Reveal as="li" key={t.title} delay={(i % 2) * 70} className="flex gap-5 border-t border-line-strong py-7">
                <span className="icon-tile bg-white">
                  <Icon name={t.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-title">{t.title}</h3>
                  <p className="mt-1.5 text-copy text-ink-muted">{t.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What we help with — horizontal service navigation */}
      <section className="section bg-canvas">
        <div className="container">
          <SectionHeading title="What We Help With" description="Start with whichever area matters most to you right now." />
          <nav aria-label="Our services" className="mt-10 lg:mt-12">
            <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
              {helpAreas.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="group flex h-full flex-col border-t-2 border-line-strong py-6 transition-colors hover:border-green">
                    <span className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <Icon name={a.icon} className="h-6 w-6 text-green-ink" />
                        <span className="font-display text-title text-ink group-hover:text-navy">{a.title}</span>
                      </span>
                      <Icon name="arrowRight" className="h-5 w-5 text-navy transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="mt-3 text-copy text-ink-muted">{a.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <ClosingCTA
        variant="panel"
        title="Let's Talk About What Matters to You"
        description="Tell us a little about your situation. We'll listen, answer your questions and help you work out a sensible next step."
        primary={{ label: "Get a Consultation", href: "/contact" }}
        secondary={{ label: "Explore Insurance", href: "/insurance" }}
      />
    </>
  );
}
