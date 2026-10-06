import type { FAQ } from "@/lib/types";

export type FAQGroup = { id: string; label: string; items: FAQ[] };

export const faqGroups: FAQGroup[] = [
  {
    id: "insurance",
    label: "Insurance",
    items: [
      { question: "What type of insurance should I consider?", answer: "It depends on your stage of life and responsibilities. Many people start with health insurance and, if others depend on their income, life cover. Motor insurance is required for vehicles on the road, and home, travel or business cover may be relevant depending on your circumstances. An advisor can help you prioritise." },
      { question: "What factors should I consider before choosing insurance?", answer: "Consider what you need to protect, the level of cover required, your budget, the policy's exclusions and waiting periods, and how claims work. Reading the policy wording — not just the summary — is always worthwhile." },
      { question: "What documents may be required?", answer: "Commonly identity proof, address proof, age proof and details relevant to the cover, such as health history or vehicle registration. Requirements vary by insurer and product." },
      { question: "How can I speak with an advisor?", answer: "Use the consultation form on our Contact page and choose the service you're interested in. Our team will reach out to arrange a conversation at a convenient time." },
    ],
  },
  {
    id: "health",
    label: "Health Insurance",
    items: [
      { question: "How does health insurance work?", answer: "You pay a premium for cover against eligible medical expenses up to the sum insured, subject to the policy terms. Claims may be settled cashless at network hospitals or by reimbursement." },
      { question: "What is a family floater policy?", answer: "A floater policy covers multiple family members under one shared sum insured, rather than separate cover for each person." },
      { question: "Are pre-existing conditions covered?", answer: "Usually after a waiting period specified in the policy. You must disclose existing conditions when applying." },
    ],
  },
  {
    id: "motor",
    label: "Motor Insurance",
    items: [
      { question: "What's the difference between third-party and comprehensive cover?", answer: "Third-party cover protects against liability to others and is legally required. Comprehensive cover also includes damage to your own vehicle." },
      { question: "What happens if my policy lapses?", answer: "Driving without valid third-party cover is not permitted. A lapse may also affect accumulated benefits and may require a vehicle inspection before renewal." },
      { question: "What are add-ons?", answer: "Optional covers you can attach to a comprehensive policy, such as zero depreciation or roadside assistance. Availability depends on the insurer and vehicle." },
    ],
  },
  {
    id: "loans",
    label: "Loans",
    items: [
      { question: "Who decides whether my loan is approved?", answer: "The lender makes all decisions on approval, amount, interest rate and terms. We help you understand the process and prepare." },
      { question: "What documents are usually requested?", answer: "Typically identity and address proof, income documents and bank statements, plus documents specific to the loan type — such as property papers for a home loan." },
      { question: "How does my credit history affect a loan?", answer: "Lenders use credit history to assess repayment behaviour. A healthy history may support eligibility, while missed payments may affect it." },
    ],
  },
  {
    id: "planning",
    label: "Financial Planning",
    items: [
      { question: "What is financial planning?", answer: "It's the process of looking at your income, expenses, protection, savings and goals together, and creating a structured plan to work toward those goals." },
      { question: "When should I start planning?", answer: "Earlier planning often gives more flexibility, but it's useful at any stage — particularly at major life events such as marriage, a new child, a home purchase or approaching retirement." },
      { question: "Do I need a large amount of money to start?", answer: "No. Planning is about clarity and structure, whatever your starting point." },
    ],
  },
];
