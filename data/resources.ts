import type { Article } from "@/lib/types";
import type { IconName } from "@/components/ui/Icon";

export const resourceCategories = ["Insurance", "Health", "Life", "Motor", "Loans", "Financial Planning"] as const;

export const resourceCategoryIcon: Record<string, IconName> = {
  Insurance: "shield",
  Health: "health",
  Life: "users",
  Motor: "car",
  Loans: "landmark",
  "Financial Planning": "compass",
};

/**
 * Editable article placeholders. Titles describe planned educational topics.
 * Add an `href` once an article is published; until then the card shows
 * "Coming soon". No authors, dates or statistics are listed intentionally.
 */
export const articles: Article[] = [
  { category: "Insurance", title: "How to think about insurance at every stage of life", excerpt: "A simple framework for prioritising protection as your responsibilities change." },
  { category: "Insurance", title: "Reading a policy document: what to look for", excerpt: "Inclusions, exclusions, waiting periods and limits — explained in plain language." },
  { category: "Health", title: "Individual vs family floater health insurance", excerpt: "How the two structures differ, and questions to ask before you choose." },
  { category: "Health", title: "Understanding waiting periods in health insurance", excerpt: "What waiting periods are, why they exist and how they may affect a claim." },
  { category: "Motor", title: "Third-party vs comprehensive motor cover", excerpt: "What each covers, and how to decide which suits your vehicle and usage." },
  { category: "Motor", title: "A checklist for renewing your motor insurance", excerpt: "The details worth reviewing before you renew, from IDV to add-ons." },
  { category: "Life", title: "Term insurance explained", excerpt: "How term cover works and the factors to consider when deciding on cover." },
  { category: "Life", title: "Estimating how much life cover your family may need", excerpt: "A practical approach based on income, liabilities and future goals." },
  { category: "Loans", title: "Preparing your documents for a home loan", excerpt: "A checklist of documents lenders typically request, and how to organise them." },
  { category: "Loans", title: "How your credit history affects borrowing", excerpt: "Why credit history matters to lenders and habits that support a healthy profile." },
  { category: "Financial Planning", title: "Setting financial goals you can actually plan for", excerpt: "Turning broad intentions into goals with timelines and priorities." },
  { category: "Financial Planning", title: "Starting your retirement planning", excerpt: "Questions to ask yourself today about the lifestyle you want tomorrow." },
];
