import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { LegalPage, type LegalSection } from "@/components/templates/LegalPage";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.name} website.`,
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    id: "use-of-website",
    title: "Use of this website",
    content: (
      <p>
        By using this website you agree to these terms. If you do not agree, please do not use the website. We may update these terms from
        time to time, and the current version will always be available on this page.
      </p>
    ),
  },
  {
    id: "general-information",
    title: "General information only",
    content: (
      <p>
        Content on this website is provided for general information and awareness. It does not constitute an offer, solicitation,
        recommendation or professional advice for any specific product, and should not be relied upon as such. Please seek personalised
        guidance before making financial decisions.
      </p>
    ),
  },
  {
    id: "products-providers",
    title: "Products and providers",
    content: (
      <p>
        Insurance, investment and loan products are offered by their respective providers and are subject to the provider&apos;s terms,
        conditions, eligibility criteria and approval. Benefits, exclusions, premiums, interest rates and other terms are determined by the
        provider. Please read all product documents carefully.
      </p>
    ),
  },
  {
    id: "accuracy",
    title: "Accuracy",
    content: (
      <p>
        We aim to keep information accurate and current but make no warranty that it is complete or error-free. Rules, products and
        requirements can change.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <p>
        The website design, text, logo and other materials are the property of {site.name} unless stated otherwise and may not be reused
        without permission.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <p>
        To the extent permitted by law, {site.name} is not liable for any loss arising from reliance on information on this website or from
        the use of linked third-party websites.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: <p>These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the appropriate courts.</p>,
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" intro={`The terms that apply when you use the ${site.name} website.`} sections={sections} />;
}
