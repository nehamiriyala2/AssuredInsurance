import { buildMetadata } from "@/lib/seo";
import { faqGroups } from "@/data/faqs";
import { articles, resourceCategories, resourceCategoryIcon } from "@/data/resources";
import type { Article } from "@/lib/types";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleBrowser } from "@/components/sections/ArticleBrowser";
import { FAQTabs } from "@/components/sections/FAQTabs";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata = buildMetadata({
  title: "Resources — Insurance Guides, Loans & Financial Planning",
  description:
    "Educational guides and FAQs on insurance, health insurance, motor insurance, life insurance, loans and financial planning.",
  path: "/resources",
});

/* ---------------------------------------------------------------- content */

const topicHref = (topic: string) => `/resources?topic=${encodeURIComponent(topic)}#guides`;

/** Lead guide plus two companions from different topics. */
const featured = articles[0];
const companions = [articles.find((a) => a.category === "Health"), articles.find((a) => a.category === "Loans")].filter(Boolean) as Article[];

/* ------------------------------------------------------------------- page */

function GuideStatus({ article }: { article: Article }) {
  return article.href ? (
    <TextLink href={article.href}>Read guide</TextLink>
  ) : (
    <span className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-ink-soft">
      <Icon name="clock" className="h-4 w-4" />
      Guide in preparation
    </span>
  );
}

function CategoryLabel({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-green-ink">
      <Icon name={resourceCategoryIcon[category] ?? "book"} className="h-4 w-4" />
      {category}
    </span>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* Hero — compact editorial masthead with topic pills */}
      <section className="border-b border-line bg-canvas">
        <div className="container pb-10 pt-6 lg:pb-14 lg:pt-8">
          <Breadcrumbs items={[{ label: "Resources" }]} />
          <div className="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:items-end lg:gap-12">
            <h1 className="animate-fade-up text-display-lg text-navy lg:col-span-7">Guides to Help You Decide With Confidence</h1>
            <p className="animate-fade-up text-lead text-ink-muted [animation-delay:80ms] lg:col-span-5">
              Plain-language explanations of insurance, loans and financial planning — written so you can ask sharper questions and weigh your
              options before you commit.
            </p>
          </div>
          <nav aria-label="Browse guides by topic" className="mt-8 animate-fade-up [animation-delay:140ms] lg:mt-10">
            <ul className="flex flex-wrap gap-2">
              {resourceCategories.map((c) => (
                <li key={c}>
                  <Link
                    href={topicHref(c)}
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-line-strong bg-white px-4 font-display text-[0.9375rem] font-semibold text-ink-muted transition-colors hover:border-navy hover:text-navy"
                  >
                    <Icon name={resourceCategoryIcon[c] ?? "book"} className="h-4 w-4" />
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Featured — one lead guide, two companions */}
      <section aria-labelledby="featured-title" className="section bg-surface">
        <div className="container">
          <h2 id="featured-title" className="text-display-sm">
            Start Here
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <Reveal className="flex flex-col rounded-panel border border-line bg-white p-7 sm:p-10 lg:col-span-7 xl:p-12">
              <CategoryLabel category={featured.category} />
              <h3 className="mt-5 max-w-[30ch] text-display-sm lg:text-display-md">{featured.title}</h3>
              <p className="mt-5 max-w-measure flex-1 text-lead text-ink-muted">{featured.excerpt}</p>
              <div className="mt-8 border-t border-line pt-5">
                <GuideStatus article={featured} />
              </div>
            </Reveal>
            <div className="grid gap-6 lg:col-span-5">
              {companions.map((a, i) => (
                <Reveal key={a.title} delay={(i + 1) * 70} className="flex flex-col rounded-panel border border-line bg-white p-7 lg:p-8">
                  <CategoryLabel category={a.category} />
                  <h3 className="mt-4 font-display text-title">{a.title}</h3>
                  <p className="mt-2 flex-1 text-copy text-ink-muted">{a.excerpt}</p>
                  <div className="mt-5">
                    <GuideStatus article={a} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All guides */}
      <section id="guides" className="section bg-canvas">
        <div className="container">
          <SectionHeading title="All Guides" description="Search by keyword or narrow the list by topic. New guides are added here as they are published." />
          <div className="mt-10">
            <ArticleBrowser articles={articles} categories={resourceCategories} />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section bg-surface">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading title="Frequently Asked Questions" description="Short answers to the questions people ask most often, grouped by topic." />
            <TextLink href="/contact" className="mt-7">
              Ask an advisor
            </TextLink>
          </div>
          <div className="lg:col-span-8">
            <FAQTabs groups={faqGroups} />
          </div>
        </div>
      </section>

      <ClosingCTA
        variant="panel"
        title="Prefer to Talk It Through?"
        description="Guides cover the general picture. An advisor can look at your own circumstances and help you work out which questions matter most for you."
        primary={{ label: "Request a Consultation", href: "/contact" }}
        secondary={{ label: "Read the FAQs", href: "#faqs" }}
      />
    </>
  );
}
