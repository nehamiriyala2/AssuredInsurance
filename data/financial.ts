import type { IconItem } from "@/lib/types";

/**
 * Financial planning service areas. Described in general terms only —
 * no specific investment products are named.
 */
export const financialServices: (IconItem & { id: string })[] = [
  { id: "financial-planning", icon: "compass", title: "Financial Planning", description: "A structured view of your income, expenses, protection and goals — and how they fit together." },
  { id: "investment-planning", icon: "chart", title: "Investment Planning", description: "Guidance on aligning investment decisions with your goals, time horizon and comfort with risk." },
  { id: "wealth-planning", icon: "layers", title: "Wealth Planning", description: "Thoughtful planning for building, protecting and eventually passing on wealth." },
  { id: "retirement-planning", icon: "sunset", title: "Retirement Planning", description: "Planning for the income and lifestyle you'd like in the years after work." },
  { id: "tax-efficient-planning", icon: "calculator", title: "Tax-efficient Planning", description: "Understanding how planning decisions may interact with tax, within applicable rules." },
  { id: "goal-based-planning", icon: "target", title: "Goal-based Planning", description: "Plans built around specific milestones — a home, education, travel or independence." },
  { id: "family-planning", icon: "heartHandshake", title: "Family Financial Planning", description: "Planning that considers every generation — children, partners and parents." },
  { id: "business-planning", icon: "building", title: "Business Financial Planning", description: "Helping business owners connect business finances with personal and family goals." },
];

export const planningPillars = [
  { title: "Protection", description: "Make sure the essentials are covered first." },
  { title: "Savings", description: "Build a buffer for the expected and the unexpected." },
  { title: "Long-term goals", description: "Give each goal a timeline and a plan." },
];
