import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Kicker } from "@/components/ui/SectionHeading";

const destinations: { label: string; href: string; icon: IconName }[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Insurance", href: "/insurance", icon: "shield" },
  { label: "Loans", href: "/loans", icon: "landmark" },
  { label: "Contact", href: "/contact", icon: "message" },
];

export default function NotFound() {
  return (
    <section className="section bg-canvas">
      <div className="container max-w-[48rem]">
        <Kicker>Page not found</Kicker>
        <h1 className="mt-4 text-display-lg text-navy">We couldn&apos;t find that page.</h1>
        <p className="mt-5 max-w-measure text-lead text-ink-muted">The page may have moved, or the address may be incorrect. These links may help you find what you were looking for.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="outline">
            Contact Us
          </ButtonLink>
        </div>
        <ul className="mt-12 grid border-t border-line sm:grid-cols-2">
          {destinations.map((d) => (
            <li key={d.href} className="border-b border-line">
              <Link href={d.href} className="group flex items-center gap-4 py-4 font-display text-base font-semibold text-navy hover:text-green-ink sm:pr-6">
                <span className="icon-tile h-10 w-10">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                {d.label}
                <Icon name="arrowRight" className="ml-auto h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
