import type { IconName } from "@/components/ui/Icon";
import { financialServices } from "./financial";
import { insuranceCategories, insuranceHref } from "./insurance";
import { loanCategories, loanHref } from "./loans";

export type NavChild = { label: string; href: string; icon?: IconName; description?: string };

export type NavItem = {
  label: string;
  href: string;
  /** "mega" renders the insurance mega-menu; "list" renders a compact dropdown. */
  menu?: "mega" | "list";
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Insurance",
    href: "/insurance",
    menu: "mega",
    children: insuranceCategories.map((c) => ({ label: c.title, href: insuranceHref(c), icon: c.icon })),
  },
  {
    label: "Financial Services",
    href: "/financial-services",
    menu: "list",
    children: financialServices.slice(0, 6).map((s) => ({
      label: s.title,
      href: `/financial-services#${s.id}`,
      icon: s.icon,
    })),
  },
  {
    label: "Loans",
    href: "/loans",
    menu: "list",
    children: loanCategories.map((l) => ({ label: l.title, href: loanHref(l), icon: l.icon })),
  },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

/** Footer link columns. The Contact column is rendered from lib/site.ts. */
export const footerNav = [
  {
    title: "Insurance",
    links: [
      { label: "Life Insurance", href: "/insurance/life" },
      { label: "Health Insurance", href: "/insurance/health" },
      { label: "Motor Insurance", href: "/insurance/motor" },
      { label: "Home Insurance", href: "/insurance/home" },
      { label: "Travel Insurance", href: "/insurance/travel" },
      { label: "Business Insurance", href: "/insurance/business" },
    ],
  },
  {
    title: "Financial Services",
    links: [
      { label: "Financial Planning", href: "/financial-services#financial-planning" },
      { label: "Investment Planning", href: "/financial-services#investment-planning" },
      { label: "Retirement Planning", href: "/financial-services#retirement-planning" },
      { label: "Goal-based Planning", href: "/financial-services#goal-based-planning" },
    ],
  },
  {
    title: "Loans",
    links: [
      { label: "Home Loans", href: "/loans/home" },
      { label: "Personal Loans", href: "/loans/personal" },
      { label: "Business Loans", href: "/loans/business" },
      { label: "Vehicle Loans", href: "/loans/vehicle" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Claims & Assistance", href: "/claims" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides", href: "/resources#guides" },
      { label: "FAQs", href: "/resources#faqs" },
    ],
  },
];
