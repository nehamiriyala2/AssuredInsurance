import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { LegalPage, type LegalSection } from "@/components/templates/LegalPage";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal information shared through this website.`,
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>When you submit an enquiry or consultation request, we may collect details you provide, such as:</p>
        <ul>
          <li>Your name, email address and phone number</li>
          <li>The service you are interested in</li>
          <li>Any information you include in your message</li>
        </ul>
        <p>We may also collect basic technical information, such as browser type and pages visited, to help improve the website.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    content: (
      <ul>
        <li>To respond to your enquiry and arrange a consultation</li>
        <li>To provide information about services you have asked about</li>
        <li>To meet legal and regulatory obligations that apply to us</li>
        <li>To improve the website and our services</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Sharing your information",
    content: (
      <p>
        Where you ask us to help you explore a product, relevant details may need to be shared with the relevant provider — for example an
        insurer or lender — so they can assess your request. We do not sell your personal information.
      </p>
    ),
  },
  {
    id: "security-retention",
    title: "Data security and retention",
    content: (
      <p>
        We take reasonable measures to protect personal information against unauthorised access, and retain it only for as long as necessary
        for the purposes described here or as required by law.
      </p>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices",
    content: (
      <p>
        You may ask to access, correct or delete the personal information we hold about you, or ask us to stop contacting you, using the
        details on our Contact page.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: <p>For any questions about this policy, please reach us through the Contact page.</p>,
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" intro={`How ${site.name} collects, uses and protects the information you share with us.`} sections={sections} />;
}
