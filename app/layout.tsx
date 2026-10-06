import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollAids } from "@/components/layout/ScrollAids";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["600", "700", "800"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Insurance, Financial Planning & Loans`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    images: [{ url: "/brand/logo-original.png", width: 1080, height: 1080, alt: `${site.name} logo` }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1565",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo-original.png`,
  description: site.description,
  ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
  ...(site.contact.email ? { email: site.contact.email } : {}),
  ...(site.contact.address ? { address: site.contact.address } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <ScrollAids />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
