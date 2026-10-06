import type { LoanCategory } from "@/lib/types";

/**
 * Loan service categories.
 *
 * No interest rates, loan amounts, lender names or approval timelines are
 * stated anywhere — eligibility and terms are always set by the lender.
 * Edit this file to match the loan services the client actually supports.
 */
const commonIdentity = {
  group: "Identity & address",
  items: ["PAN card", "Aadhaar or other government-issued ID", "Recent address proof", "Passport-size photographs"],
};

export const loanCategories: LoanCategory[] = [
  {
    slug: "home",
    hasPage: true,
    title: "Home Loans",
    icon: "home",
    summary: "Guidance on financing a home purchase, construction or renovation.",
    hero: {
      heading: "Home Loans",
      description:
        "Buying or building a home is one of the most significant financial decisions you'll make. We help you understand the home loan process, prepare your documents and explore options suited to your situation.",
    },
    why: [
      { icon: "key", title: "Own your home sooner", description: "Spread the cost of a property over a repayment term that suits your income." },
      { icon: "calculator", title: "Plan your repayments", description: "Understand how loan amount, tenure and rate influence your monthly instalment." },
      { icon: "layers", title: "Purchase, build or improve", description: "Home finance may be available for buying, constructing or renovating, as per lender policy." },
      { icon: "compass", title: "Guidance throughout", description: "Support from document preparation through to disbursement." },
    ],
    eligibility: [
      "Age, income stability and employment type",
      "Credit history and existing repayment obligations",
      "Value, location and legal status of the property",
      "Down payment / own contribution available",
      "Co-applicant details, where applicable",
    ],
    documents: [
      commonIdentity,
      { group: "Income", items: ["Salary slips and Form 16 (salaried)", "ITR and financial statements (self-employed)", "Bank statements for recent months"] },
      { group: "Property", items: ["Sale agreement or allotment letter", "Title documents and approvals", "Cost estimate (for construction or renovation)"] },
    ],
    faqs: [
      { question: "How much home loan could I be eligible for?", answer: "Eligibility is determined by the lender and typically depends on income, age, existing obligations, credit history and the property's value. We can help you understand the factors involved before you apply." },
      { question: "What is the difference between fixed and floating rates?", answer: "A fixed rate stays the same for an agreed period, while a floating rate can change with the lender's benchmark. Each has trade-offs, and lenders' offerings vary." },
      { question: "Can I apply with a co-applicant?", answer: "Many lenders allow co-applicants, such as a spouse or parent, which may affect eligibility. Requirements differ between lenders." },
      { question: "Is home insurance required with a home loan?", answer: "Some lenders may require or recommend property insurance. It's worth reviewing both the loan and the insurance terms carefully." },
    ],
    seo: {
      title: "Home Loan Services & Guidance",
      description: "Understand the home loan process, eligibility considerations and documents, with guidance from Assured & Insured Financial Services.",
    },
  },
  {
    slug: "housing",
    hasPage: false,
    title: "Housing Loans",
    icon: "building",
    summary: "Support for plot purchase, construction and home improvement finance.",
  },
  {
    slug: "personal",
    hasPage: true,
    title: "Personal Loans",
    icon: "wallet",
    summary: "Help exploring unsecured finance for planned or unexpected personal expenses.",
    hero: {
      heading: "Personal Loans",
      description:
        "A personal loan can help with planned expenses such as education, a wedding or home improvements, or unexpected costs. We help you understand what lenders typically look for and whether a loan is the right step.",
    },
    why: [
      { icon: "layers", title: "Flexible use", description: "Can be used for a range of personal needs, subject to lender policy." },
      { icon: "lock", title: "Usually unsecured", description: "Generally does not require collateral, though eligibility criteria apply." },
      { icon: "calendar", title: "Defined repayment", description: "Fixed instalments over an agreed tenure make planning easier." },
      { icon: "scale", title: "Borrow responsibly", description: "We help you weigh the cost of borrowing against your budget." },
    ],
    eligibility: [
      "Age and nationality requirements set by the lender",
      "Regular income from employment or business",
      "Credit score and repayment history",
      "Existing EMIs and debt-to-income ratio",
      "Employer profile or business vintage",
    ],
    documents: [
      commonIdentity,
      { group: "Income", items: ["Recent salary slips (salaried)", "ITR and business proof (self-employed)", "Bank statements for recent months"] },
    ],
    faqs: [
      { question: "What affects personal loan eligibility?", answer: "Lenders commonly consider income, employment stability, credit history and existing debts. Each lender applies its own criteria." },
      { question: "Does applying affect my credit score?", answer: "Loan applications may result in a credit enquiry. Multiple applications in a short period can affect your credit profile, so it helps to apply thoughtfully." },
      { question: "Can I repay a personal loan early?", answer: "Many lenders allow prepayment or foreclosure, sometimes with charges. Check the terms in your loan agreement." },
    ],
    seo: {
      title: "Personal Loan Services & Guidance",
      description: "Explore personal loan options, eligibility considerations and documents typically requested, with clear guidance.",
    },
  },
  {
    slug: "business",
    hasPage: true,
    title: "Business Loans",
    icon: "briefcase",
    summary: "Finance guidance for working capital, expansion and equipment needs.",
    hero: {
      heading: "Business Loans",
      description:
        "Whether you're managing working capital, investing in equipment or planning expansion, the right finance can support your business goals. We help you understand the options and prepare a strong application.",
    },
    why: [
      { icon: "chart", title: "Support growth", description: "Fund expansion, new locations or new product lines." },
      { icon: "banknote", title: "Working capital", description: "Help manage cash flow and day-to-day operating needs." },
      { icon: "building", title: "Equipment and assets", description: "Finance machinery, technology or other business assets." },
      { icon: "clipboard", title: "Application readiness", description: "We help organise financials and documents lenders typically request." },
    ],
    eligibility: [
      "Business vintage and registration",
      "Turnover, profitability and cash flow",
      "Business and promoter credit history",
      "Existing borrowings and obligations",
      "Collateral, where required by the lender",
    ],
    documents: [
      commonIdentity,
      { group: "Business", items: ["Business registration / incorporation documents", "GST registration and returns, where applicable", "Business address proof"] },
      { group: "Financials", items: ["ITR and audited financial statements", "Bank statements for recent months", "Details of existing loans, if any"] },
    ],
    faqs: [
      { question: "What types of business finance are there?", answer: "Common types include term loans, working capital facilities and equipment finance. Availability and structure depend on the lender and your business profile." },
      { question: "Do business loans require collateral?", answer: "Some do and some don't. It depends on the loan type, amount and lender policy." },
      { question: "How can I improve my chances of approval?", answer: "Keeping financial records up to date, maintaining a healthy credit history and presenting a clear purpose for the loan can help. Final decisions rest with the lender." },
    ],
    seo: {
      title: "Business Loan Services & Guidance",
      description: "Understand business loan options for working capital, equipment and expansion, with guidance on documents and eligibility.",
    },
  },
  {
    slug: "vehicle",
    hasPage: true,
    title: "Vehicle Loans",
    icon: "car",
    summary: "Guidance on financing new or pre-owned cars, two-wheelers and commercial vehicles.",
    hero: {
      heading: "Vehicle Loans",
      description:
        "From a family car to a two-wheeler or a commercial vehicle for your business, a vehicle loan can help spread the cost. We help you understand the process and the documents involved.",
    },
    why: [
      { icon: "car", title: "Drive sooner", description: "Spread the cost of your vehicle over a manageable tenure." },
      { icon: "truck", title: "Personal or commercial", description: "Finance may be available for private and commercial vehicles." },
      { icon: "calculator", title: "Plan the full cost", description: "Factor in insurance, registration and running costs alongside EMIs." },
      { icon: "shield", title: "Pair with insurance", description: "We can also help you explore suitable motor insurance." },
    ],
    eligibility: [
      "Age and income criteria set by the lender",
      "Credit history and existing obligations",
      "Type of vehicle — new, pre-owned or commercial",
      "Down payment available",
      "Employment or business stability",
    ],
    documents: [
      commonIdentity,
      { group: "Income", items: ["Salary slips or ITR", "Bank statements for recent months"] },
      { group: "Vehicle", items: ["Proforma invoice or quotation", "Vehicle details for pre-owned purchases"] },
    ],
    faqs: [
      { question: "Can I get a loan for a pre-owned vehicle?", answer: "Many lenders offer finance for pre-owned vehicles, though terms may differ from new vehicle loans. Eligibility depends on the lender and the vehicle." },
      { question: "Is insurance required for a financed vehicle?", answer: "Motor insurance is required by law, and lenders typically require the vehicle to be insured for the duration of the loan." },
      { question: "What is a down payment?", answer: "It's the portion of the vehicle's price you pay upfront. The remaining amount may be financed, subject to lender approval." },
    ],
    seo: {
      title: "Vehicle Loan Services & Guidance",
      description: "Explore loans for cars, two-wheelers and commercial vehicles, with guidance on eligibility and documents.",
    },
  },
  {
    slug: "loan-against-property",
    hasPage: false,
    title: "Loan Against Property",
    icon: "landmark",
    summary: "Understand how property you own may be used to raise secured finance.",
  },
];

export const loanPages = loanCategories.filter((l) => l.hasPage);

/** The four headline loan services shown on the homepage. */
export const featuredLoans = ["home", "personal", "business", "vehicle"]
  .map((slug) => loanCategories.find((l) => l.slug === slug))
  .filter((l): l is LoanCategory => Boolean(l));

export const getLoanCategory = (slug: string) => loanCategories.find((l) => l.slug === slug && l.hasPage);

/** Anchor id of a loan's row on the /loans overview. */
export const loanAnchor = (l: LoanCategory) => `loan-${l.slug}`;

/** Loans with a page link to it; others link to their description on the overview (which has the enquiry action). */
export const loanHref = (l: LoanCategory) => (l.hasPage ? `/loans/${l.slug}` : `/loans#${loanAnchor(l)}`);
