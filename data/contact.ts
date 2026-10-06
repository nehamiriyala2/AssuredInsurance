export const serviceOptions = [
  { value: "insurance", label: "Insurance" },
  { value: "financial-planning", label: "Financial Planning" },
  { value: "loans", label: "Loans" },
  { value: "business", label: "Business Solutions" },
  { value: "claims", label: "Claims Assistance" },
  { value: "other", label: "Other" },
] as const;

export type ServiceValue = (typeof serviceOptions)[number]["value"];

export const isServiceValue = (v: unknown): v is ServiceValue => serviceOptions.some((o) => o.value === v);
