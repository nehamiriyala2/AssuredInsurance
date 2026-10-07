import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { placeholderLabel, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { ValueOrPlaceholder } from "@/components/ui/Placeholder";

/** Site footer — brand navy (the exact logo navy), green used only as an accent. */
export function Footer() {
  const { phone, email, address } = site.contact;
  return (
    <footer className="bg-navy text-white">
      <div className="container pb-8 pt-14 lg:pt-16">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-10 md:flex-row md:items-center md:justify-between">
          <Logo tone="inverse" />
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-white/70">
            Insurance, financial planning and loan guidance for individuals, families and businesses.
          </p>
        </div>

        {/* One column per link group + Contact (the Resources group is optional — see lib/site.ts). */}
        <div className={cn("grid grid-cols-2 gap-x-6 gap-y-10 pt-10 sm:grid-cols-3", footerNav.length > 4 ? "lg:grid-cols-6" : "lg:grid-cols-5")}>
          {footerNav.map((col) => (
            <div key={col.title}>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[0.9375rem] text-white/70 transition-colors hover:text-green">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-[0.9375rem] text-white/75">
              <li className="flex items-start gap-2.5">
                <Icon name="phone" className="mt-1 h-4 w-4 shrink-0 text-green" />
                <ValueOrPlaceholder value={phone} href={phone ? `tel:${phone.replace(/\s/g, "")}` : undefined} placeholder={placeholderLabel.phone} tone="inverse" />
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mail" className="mt-1 h-4 w-4 shrink-0 text-green" />
                <ValueOrPlaceholder value={email} href={email ? `mailto:${email}` : undefined} placeholder={placeholderLabel.email} tone="inverse" />
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-1 h-4 w-4 shrink-0 text-green" />
                <ValueOrPlaceholder value={address} placeholder={placeholderLabel.address} tone="inverse" />
              </li>
              <li>
                <Link href="/contact" className="inline-flex items-center gap-1.5 font-display font-semibold text-white hover:text-green">
                  Contact page <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-7">
          {/* TODO(client): replace with legally reviewed disclosures and any applicable registration details. */}
          <p className="max-w-5xl text-[0.8125rem] leading-relaxed text-white/60">
            Information on this website is provided for general awareness only and does not constitute an offer, recommendation or advice for
            any specific product. Insurance, investment and loan products are subject to the terms, conditions, eligibility criteria and
            approval of the respective provider. Please read all product documents carefully before making a decision.
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            {site.social.length > 0 && (
              <div className="flex items-center gap-6">
                {site.social.map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Space for the mobile sticky action bar */}
      <div className="h-[calc(4.5rem+env(safe-area-inset-bottom))] xl:hidden" aria-hidden="true" />
    </footer>
  );
}
