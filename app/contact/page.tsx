import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { placeholderLabel, site } from "@/lib/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ValueOrPlaceholder } from "@/components/ui/Placeholder";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = buildMetadata({
  title: "Contact Us — Request a Consultation",
  description:
    "Request a consultation with Assured & Insured Financial Services about insurance, financial planning, loans or business solutions.",
  path: "/contact",
});

/* ---------------------------------------------------------------- content */

const nextSteps = [
  { title: "We read your request", text: "We note the service you chose and anything you've told us in your message." },
  { title: "An advisor gets in touch", text: "They'll contact you on the details you provide to understand what you need." },
  { title: "We talk it through", text: "A conversation at a time that suits you, focused on your situation and the options worth exploring." },
];

/* ------------------------------------------------------------------- page */

export default function ContactPage() {
  const { phone, email, address, hours } = site.contact;
  const details: { icon: IconName; label: string; value: string | null; placeholder: string; href?: string }[] = [
    { icon: "phone", label: "Phone", value: phone, placeholder: placeholderLabel.phone, href: phone ? `tel:${phone.replace(/\s/g, "")}` : undefined },
    { icon: "mail", label: "Email", value: email, placeholder: placeholderLabel.email, href: email ? `mailto:${email}` : undefined },
    { icon: "pin", label: "Office", value: address, placeholder: placeholderLabel.address },
    { icon: "clock", label: "Business hours", value: hours, placeholder: placeholderLabel.hours },
  ];

  return (
    <section className="bg-surface">
      {/* Mobile order: heading → form → details. Desktop: heading + details left (5 cols), form right (7 cols). */}
      <div className="container grid gap-10 pb-14 pt-6 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-10 lg:pb-20 lg:pt-8 xl:gap-x-16">
        <div className="animate-fade-up lg:col-span-5 lg:row-start-1">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="mt-8 text-display-lg text-navy lg:mt-12">Request a Consultation</h1>
          <p className="mt-4 text-lead text-ink-muted">Tell us what you need help with and an advisor will be in touch to talk it through.</p>
        </div>

        <div className="animate-fade-up [animation-delay:100ms] lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:pt-10">
          <ContactForm />
        </div>

        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
          <h2 className="font-display text-title">Contact details</h2>
          <ul id="contact-details" className="mt-4 divide-y divide-line border-y border-line">
            {details.map((d) => (
              <li key={d.label} className="flex items-start gap-4 py-4">
                <span className="icon-tile h-10 w-10 bg-white">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink-soft">{d.label}</p>
                  <div className="mt-0.5 break-words text-copy font-medium text-ink">
                    <ValueOrPlaceholder value={d.value} placeholder={d.placeholder} href={d.href} />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-title">What happens next</h2>
          <ol className="mt-5 space-y-5">
            {nextSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong bg-white font-display text-sm font-bold text-green-ink">
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <p className="font-display text-base font-bold text-ink">{s.title}</p>
                  <p className="mt-1 text-[0.9375rem] text-ink-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex items-start gap-4 rounded-card border border-line bg-white p-5">
            <Icon name="lifebuoy" className="mt-0.5 h-5 w-5 shrink-0 text-green-ink" />
            <p className="text-[0.9375rem] text-ink-muted">
              Dealing with an existing claim?{" "}
              <Link href="/claims" className="font-semibold text-navy underline underline-offset-2 hover:text-green-ink">
                See Claims &amp; Assistance
              </Link>{" "}
              for what to do first and how we can help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
