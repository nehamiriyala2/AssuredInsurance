import type { IconItem, ProcessStep } from "@/lib/types";

export const quickSolutions: (IconItem & { href: string })[] = [
  { icon: "shield", title: "Insurance", description: "Life, health, motor, home, travel and business protection.", href: "/insurance" },
  { icon: "compass", title: "Financial Planning", description: "Organise goals, savings and long-term priorities.", href: "/financial-services" },
  { icon: "landmark", title: "Loans", description: "Guidance for home, personal, business and vehicle finance.", href: "/loans" },
  { icon: "briefcase", title: "Business Protection", description: "Cover for premises, people and professional liability.", href: "/insurance/business" },
];

/** Qualitative trust points only — no statistics until the client supplies verified figures. */
export const trustPoints: IconItem[] = [
  { icon: "user", title: "Personalised Guidance", description: "Recommendations shaped around your circumstances, not a one-size-fits-all script." },
  { icon: "message", title: "Clear Communication", description: "Plain language on what's covered, what isn't and what to consider." },
  { icon: "layers", title: "Multiple Financial Solutions", description: "Insurance, planning and loans — explored together in one conversation." },
  { icon: "heartHandshake", title: "Customer-first Approach", description: "Your priorities lead the conversation, at a pace that suits you." },
  { icon: "lifebuoy", title: "Long-term Support", description: "Help with renewals, reviews and next steps as your life changes." },
  { icon: "route", title: "Simplified Process", description: "Clear steps and checklists so paperwork never feels overwhelming." },
];

export const processSteps: ProcessStep[] = [
  { title: "Understand Your Needs", description: "A conversation about your situation, priorities and what you'd like to protect or achieve." },
  { title: "Explore Suitable Options", description: "We walk you through options that may fit, explaining the trade-offs in plain language." },
  { title: "Choose With Clarity", description: "You decide with a clear view of cover, costs, terms and exclusions." },
  { title: "Receive Ongoing Support", description: "Help with documents, renewals, reviews and next steps when you need it." },
];

export const claimsSteps: ProcessStep[] = [
  { title: "Contact Us", description: "Reach out as soon as possible and tell us briefly what has happened." },
  { title: "Share Policy Details", description: "Have your policy number and the insurer's details ready, if available." },
  { title: "Submit Required Documents", description: "We help you understand which documents are typically requested and how to organise them." },
  { title: "Track Assistance", description: "We help you follow up and understand the next steps in the insurer's process." },
];

export const loanProcess: ProcessStep[] = [
  { title: "Initial Discussion", description: "Share your requirement, timeline and financial background." },
  { title: "Eligibility Review", description: "Understand the factors lenders typically consider for your profile." },
  { title: "Document Preparation", description: "Organise the documents usually requested to support an application." },
  { title: "Application & Follow-up", description: "Guidance through the lender's process until a decision is made." },
];
