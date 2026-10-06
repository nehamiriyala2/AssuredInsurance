import type { InsuranceCategory } from "@/lib/types";

/**
 * Insurance solution categories.
 *
 * These describe the TYPES of protection a visitor can explore and discuss
 * with an advisor. They are not statements of specific products, insurers,
 * premiums or coverage amounts. The client should add, edit or remove
 * categories here to reflect the solutions they actually arrange — every
 * menu, card, page and sitemap entry is generated from this file.
 */
export const insuranceCategories: InsuranceCategory[] = [
  {
    slug: "life",
    hasPage: true,
    title: "Life Insurance",
    shortTitle: "Life",
    icon: "users",
    summary: "Financial protection that can help your family stay on course if the unexpected happens.",
    hero: {
      heading: "Life Insurance",
      description:
        "Life cover is designed to provide financial support to the people who depend on you. We help you understand the options and choose cover that reflects your family's needs and long-term plans.",
    },
    subcategories: [
      { id: "term", title: "Term Insurance", description: "Pure protection for a chosen period, typically offering a higher level of cover for a lower cost than other life plans." },
      { id: "family-protection", title: "Family Protection", description: "Cover structured around household responsibilities such as everyday expenses, liabilities and dependants." },
      { id: "child-future", title: "Child / Future Planning", description: "Plans that may help secure milestones such as education, even if you are not there to provide for them." },
      { id: "retirement-protection", title: "Retirement-oriented Protection", description: "Options that combine protection with planning for income in later life, subject to plan terms." },
    ],
    why: [
      { icon: "users", title: "Support for your dependants", description: "A payout can help your family manage day-to-day costs and maintain their lifestyle." },
      { icon: "home", title: "Cover for liabilities", description: "Cover may help settle outstanding loans so they don't pass to your family." },
      { icon: "target", title: "Protect future goals", description: "Keep plans such as a child's education on track, whatever happens." },
      { icon: "calendar", title: "Early planning can help", description: "Cost is generally linked to age and health, so reviewing cover early is often worthwhile." },
    ],
    protects: [
      "Household income your family relies on",
      "Outstanding home or personal loans",
      "Children's education and future milestones",
      "Long-term goals and retirement plans",
      "Final expenses and immediate costs",
    ],
    suitableFor: [
      "Earning members with financial dependants",
      "Parents planning for their children's future",
      "Individuals with home loans or other liabilities",
      "Self-employed professionals and business owners",
      "Anyone reviewing their family's financial security",
    ],
    considerations: [
      { title: "How much cover you need", description: "Consider income, liabilities, dependants and future goals rather than relying on a rule of thumb." },
      { title: "Policy term", description: "Choose a term that matches the years your family would need financial support." },
      { title: "Accurate disclosure", description: "Share complete health and lifestyle information so the policy works as intended when it matters." },
      { title: "Riders and exclusions", description: "Optional add-ons and exclusions vary between plans — read the policy wording carefully." },
    ],
    faqs: [
      { question: "What is term insurance?", answer: "Term insurance is a type of life cover that provides a payout to your nominees if you pass away during the policy term. It is generally designed for protection only, without a savings or investment component. Exact features depend on the plan and insurer." },
      { question: "How much life cover should I consider?", answer: "There is no single answer. A useful starting point is to consider your income, existing liabilities, the number of dependants and future goals. An advisor can help you work through these factors." },
      { question: "Can I have more than one life insurance policy?", answer: "In many cases, yes. You will usually need to disclose existing cover when applying for a new policy. Your advisor can explain how this works for your situation." },
      { question: "What information is usually needed to apply?", answer: "Typically identity and address proof, income details, and health and lifestyle information. Some applications may require a medical check-up depending on the insurer's requirements." },
    ],
    seo: {
      title: "Life Insurance & Term Insurance Guidance",
      description: "Explore life insurance, term insurance and family protection options with guidance from Assured & Insured Financial Services.",
    },
  },
  {
    slug: "health",
    hasPage: true,
    title: "Health Insurance",
    shortTitle: "Health",
    icon: "health",
    summary: "Cover that can help manage the cost of hospitalisation and medical care for you and your family.",
    hero: {
      heading: "Health Insurance",
      description:
        "Medical costs can be significant and unexpected. Health insurance can help manage hospitalisation and treatment expenses. We help you compare the options and understand what a policy does — and doesn't — include.",
    },
    subcategories: [
      { id: "individual", title: "Individual Health Insurance", description: "A policy dedicated to one person, with cover set according to their individual needs." },
      { id: "family", title: "Family Health Insurance", description: "Family floater-style options where a shared sum insured covers multiple family members." },
      { id: "senior-citizen", title: "Senior Citizen Health Insurance", description: "Options designed around the healthcare needs of older family members." },
      { id: "critical-illness", title: "Critical Illness Insurance", description: "Cover that may provide a lump-sum benefit on diagnosis of specified serious illnesses." },
      { id: "personal-accident", title: "Personal Accident Cover", description: "Protection related to accidental injury, disability or death, as defined in the policy." },
      { id: "maternity", title: "Maternity-related Cover", description: "Some plans include or offer add-ons for maternity-related expenses, usually after a waiting period." },
    ],
    why: [
      { icon: "stethoscope", title: "Manage medical costs", description: "Helps reduce the financial impact of hospitalisation and treatment." },
      { icon: "wallet", title: "Protect your savings", description: "Avoid drawing down savings meant for other goals when health needs arise." },
      { icon: "users", title: "Cover for the whole family", description: "Options exist to cover individuals, couples, children and parents." },
      { icon: "shieldPlus", title: "Access to care", description: "Many policies offer cashless treatment at network hospitals, subject to terms." },
    ],
    protects: [
      "In-patient hospitalisation expenses",
      "Pre- and post-hospitalisation costs (as per policy)",
      "Day-care procedures listed in the policy",
      "Ambulance charges, subject to limits",
      "Specified illnesses under critical illness cover",
    ],
    suitableFor: [
      "Individuals without employer health cover",
      "Families wanting a shared floater policy",
      "Parents and senior citizens",
      "Employees wanting cover beyond a group policy",
      "Self-employed professionals",
    ],
    considerations: [
      { title: "Sum insured", description: "Consider medical costs in your city and family size when deciding the level of cover." },
      { title: "Waiting periods", description: "Pre-existing conditions and certain treatments are usually covered only after a waiting period." },
      { title: "Sub-limits and co-payment", description: "Room rent limits, co-pay clauses and caps can affect what you receive at claim time." },
      { title: "Network hospitals", description: "Check whether hospitals you'd prefer to use are part of the insurer's cashless network." },
    ],
    faqs: [
      { question: "How does health insurance work?", answer: "You pay a premium for a policy that covers eligible medical expenses up to the sum insured, subject to the policy terms. Claims are typically settled either on a cashless basis at network hospitals or by reimbursement after you submit bills." },
      { question: "What is a waiting period?", answer: "A waiting period is a set time after the policy starts during which certain conditions or treatments are not covered. Common examples include an initial waiting period and waiting periods for pre-existing conditions. Durations vary by policy." },
      { question: "Is my employer's group cover enough?", answer: "Group cover is valuable but usually ends when you leave the job, and the cover amount may be limited. Many people consider a personal policy alongside it. An advisor can help you assess the gap." },
      { question: "What documents may be required to buy a policy?", answer: "Generally identity proof, address proof, age proof and details of any medical history. Some insurers may ask for a pre-policy medical check-up, depending on age and cover amount." },
    ],
    seo: {
      title: "Health Insurance for Individuals, Families & Seniors",
      description: "Understand health insurance options for individuals, families and senior citizens, including critical illness and personal accident cover.",
    },
  },
  {
    slug: "motor",
    hasPage: true,
    title: "Motor Insurance",
    shortTitle: "Motor",
    icon: "car",
    summary: "Cover for your car, two-wheeler or commercial vehicle, including mandatory third-party protection.",
    hero: {
      heading: "Motor Insurance",
      description:
        "Motor insurance helps protect you against financial loss from accidents, damage or theft, and third-party liability cover is a legal requirement for vehicles on the road. We help you understand your options and renew with confidence.",
    },
    subcategories: [
      { id: "car", title: "Car Insurance", description: "Third-party or comprehensive cover for private cars, with optional add-ons." },
      { id: "two-wheeler", title: "Two-Wheeler Insurance", description: "Cover for motorcycles and scooters, including third-party liability." },
      { id: "commercial-vehicle", title: "Commercial Vehicle Insurance", description: "Protection for goods carriers, passenger vehicles and fleets used for business." },
    ],
    why: [
      { icon: "scale", title: "Meet legal requirements", description: "Third-party liability cover is mandatory for vehicles driven on public roads." },
      { icon: "car", title: "Protect your vehicle", description: "Comprehensive cover can help with repair costs after an accident or damage." },
      { icon: "lock", title: "Theft and damage", description: "Cover may extend to theft, fire and certain natural events, as per policy." },
      { icon: "lifebuoy", title: "Support when needed", description: "Many policies offer add-ons such as roadside assistance." },
    ],
    protects: [
      "Liability for third-party injury or property damage",
      "Damage to your own vehicle (comprehensive cover)",
      "Theft of the vehicle",
      "Damage from fire and certain natural events",
      "Personal accident cover for the owner-driver",
    ],
    suitableFor: [
      "Private car owners",
      "Two-wheeler riders",
      "Businesses operating commercial vehicles",
      "Owners of new or recently purchased vehicles",
      "Anyone with an upcoming policy renewal",
    ],
    considerations: [
      { title: "Third-party vs comprehensive", description: "Third-party cover meets the legal minimum; comprehensive cover also protects your own vehicle." },
      { title: "Insured declared value (IDV)", description: "The IDV affects both premium and the amount payable for total loss or theft." },
      { title: "Add-ons", description: "Options such as zero depreciation or engine protection vary — choose what fits your use." },
      { title: "Renew on time", description: "A lapse can mean losing accumulated benefits and may require a vehicle inspection." },
    ],
    faqs: [
      { question: "Is motor insurance mandatory?", answer: "Third-party liability insurance is a legal requirement for vehicles driven on public roads in India. Comprehensive cover, which also protects your own vehicle, is optional but widely chosen." },
      { question: "What is a No Claim Bonus?", answer: "A No Claim Bonus is a discount on your own-damage premium for claim-free policy years. It generally belongs to the policyholder rather than the vehicle and may be transferable, subject to insurer rules." },
      { question: "What should I do after an accident?", answer: "Ensure everyone is safe, note details of the incident, inform your insurer as soon as possible and avoid unauthorised repairs before the insurer's process is followed. Our team can help guide you through the next steps." },
      { question: "What documents may be required to renew?", answer: "Usually your previous policy details, vehicle registration certificate and owner identification. Requirements can vary by insurer and situation." },
    ],
    seo: {
      title: "Motor Insurance — Car, Two-Wheeler & Commercial Vehicles",
      description: "Explore car insurance, two-wheeler insurance and commercial vehicle insurance with clear, practical guidance.",
    },
  },
  {
    slug: "home",
    hasPage: true,
    title: "Home & Property Insurance",
    shortTitle: "Home",
    icon: "home",
    summary: "Protection for the structure of your home and the belongings inside it.",
    hero: {
      heading: "Home & Property Insurance",
      description:
        "Your home is often your most valuable asset. Home insurance can help protect the building and its contents against events such as fire, natural calamities and burglary, depending on the policy.",
    },
    subcategories: [
      { id: "home", title: "Home Insurance", description: "Cover for the structure of your house or apartment against specified risks." },
      { id: "property", title: "Property Protection", description: "Protection for residential property you own, including let-out property, subject to terms." },
      { id: "contents", title: "Contents Protection", description: "Cover for household items such as furniture, appliances and electronics." },
    ],
    why: [
      { icon: "home", title: "Protect a major asset", description: "Helps safeguard the investment you've made in your home." },
      { icon: "sofa", title: "Cover your belongings", description: "Contents cover can help replace or repair household items." },
      { icon: "umbrella", title: "Natural events", description: "Many policies cover damage from events like fire, flood or storm, as specified." },
      { icon: "key", title: "Owners and tenants", description: "Options may be available for both homeowners and those renting." },
    ],
    protects: [
      "The building structure",
      "Furniture, appliances and household contents",
      "Loss from burglary or theft (as per policy)",
      "Damage from fire and specified natural events",
      "Certain liabilities, where included",
    ],
    suitableFor: [
      "Homeowners and apartment owners",
      "Tenants wishing to protect belongings",
      "Owners of let-out residential property",
      "Home loan borrowers",
      "Families with high-value household items",
    ],
    considerations: [
      { title: "Value of structure and contents", description: "Insure for an appropriate value to avoid under-insurance at claim time." },
      { title: "Covered events", description: "Check which perils are included, and which require add-ons." },
      { title: "Inventory your contents", description: "Keeping a record of major items and receipts can simplify any future claim." },
      { title: "Exclusions", description: "Wear and tear, and certain high-value items, may be excluded or need separate cover." },
    ],
    faqs: [
      { question: "Is home insurance only for homeowners?", answer: "Not necessarily. Tenants can often insure their belongings through contents cover, while owners can insure both the structure and the contents. Availability depends on the insurer and policy." },
      { question: "Does home insurance cover natural disasters?", answer: "Many home policies cover specified natural events such as fire, storm or flood. The exact list of covered perils varies by policy, so it's important to review the wording." },
      { question: "How is the sum insured decided?", answer: "For the structure, it is commonly based on reconstruction cost rather than market value. For contents, it is based on the value of your belongings. An advisor can help you estimate an appropriate amount." },
    ],
    seo: {
      title: "Home & Property Insurance",
      description: "Learn how home insurance, property protection and contents cover can help protect your home and belongings.",
    },
  },
  {
    slug: "travel",
    hasPage: true,
    title: "Travel Insurance",
    shortTitle: "Travel",
    icon: "plane",
    summary: "Cover for medical emergencies and travel disruptions, for trips within India and abroad.",
    hero: {
      heading: "Travel Insurance",
      description:
        "Whether you're travelling for work, study or leisure, travel insurance can help with medical emergencies and disruptions away from home. We help you choose cover that suits your destination and itinerary.",
    },
    subcategories: [
      { id: "domestic", title: "Domestic Travel Insurance", description: "Cover for trips within India, subject to policy terms." },
      { id: "international", title: "International Travel Insurance", description: "Cover for overseas trips, which may be required for some visas." },
      { id: "student", title: "Student Travel Insurance", description: "Cover designed for students studying abroad, often for longer durations." },
      { id: "family", title: "Family Travel Insurance", description: "A single policy covering family members travelling together." },
    ],
    why: [
      { icon: "stethoscope", title: "Medical emergencies abroad", description: "Overseas medical costs can be high; cover can help manage them." },
      { icon: "luggage", title: "Baggage and documents", description: "Policies may cover loss or delay of baggage and passports." },
      { icon: "calendar", title: "Trip disruptions", description: "Cover may apply to cancellations, delays or missed connections." },
      { icon: "globe", title: "Visa requirements", description: "Some countries require travel insurance as part of the visa process." },
    ],
    protects: [
      "Emergency medical treatment while travelling",
      "Loss or delay of checked-in baggage",
      "Loss of passport and travel documents",
      "Trip cancellation or interruption (as per policy)",
      "Personal liability while abroad, where included",
    ],
    suitableFor: [
      "Leisure travellers and families",
      "Business travellers",
      "Students studying overseas",
      "Senior citizens travelling abroad",
      "Frequent travellers (multi-trip options)",
    ],
    considerations: [
      { title: "Destination and duration", description: "Cover requirements and costs vary by region and length of stay." },
      { title: "Pre-existing conditions", description: "Check how existing medical conditions are treated under the policy." },
      { title: "Activities", description: "Adventure sports and certain activities may be excluded unless added." },
      { title: "Buy before you travel", description: "Cover typically needs to be purchased before your journey begins." },
    ],
    faqs: [
      { question: "Do I need travel insurance for domestic trips?", answer: "It isn't usually mandatory, but domestic cover can help with medical emergencies, baggage issues or trip disruptions. Whether it's worthwhile depends on your plans." },
      { question: "Is travel insurance required for a visa?", answer: "Some countries require proof of travel medical insurance as part of the visa application. Requirements change, so always check the latest rules for your destination." },
      { question: "Can students get long-term cover?", answer: "Student travel insurance is designed for longer stays abroad and may be available for the duration of a course. Terms and eligibility depend on the insurer and the university's requirements." },
    ],
    seo: {
      title: "Travel Insurance — Domestic, International & Student",
      description: "Explore domestic, international, student and family travel insurance with practical guidance before you travel.",
    },
  },
  {
    slug: "business",
    hasPage: true,
    title: "Business Insurance",
    shortTitle: "Business",
    icon: "briefcase",
    summary: "Protection for your premises, people and liabilities, so your business can keep moving.",
    hero: {
      heading: "Business Insurance",
      description:
        "Every business faces risks — to property, stock, people and reputation. We help business owners understand the protection available and structure cover that reflects how their business actually operates.",
    },
    subcategories: [
      { id: "shop", title: "Shop Insurance", description: "Cover for retail premises, stock and fittings against specified risks." },
      { id: "office", title: "Office Insurance", description: "Protection for office premises, equipment and contents." },
      { id: "sme", title: "SME Insurance", description: "Packaged or tailored protection for small and medium enterprises." },
      { id: "professional-liability", title: "Professional Liability / Indemnity", description: "Cover for claims arising from professional advice or services, as per policy." },
      { id: "group-protection", title: "Employee / Group Protection", description: "Group health, life or accident cover that can support your team." },
      { id: "commercial-property", title: "Commercial Property Protection", description: "Cover for commercial buildings, plant, machinery and stock." },
    ],
    why: [
      { icon: "building", title: "Protect business assets", description: "Help safeguard premises, equipment and stock against specified events." },
      { icon: "users", title: "Support your people", description: "Group cover can be a valuable part of employee benefits." },
      { icon: "scale", title: "Manage liabilities", description: "Liability cover can help with legal claims from customers or third parties." },
      { icon: "route", title: "Continuity", description: "Appropriate protection can help a business recover after a disruption." },
    ],
    protects: [
      "Premises, fittings and equipment",
      "Stock and goods in storage",
      "Liability to customers and third parties",
      "Professional advice and services",
      "Employee health and wellbeing",
    ],
    suitableFor: [
      "Shop owners and retailers",
      "Offices and professional firms",
      "Small and medium enterprises",
      "Consultants and independent professionals",
      "Employers looking at group benefits",
    ],
    considerations: [
      { title: "Understand your risks", description: "Start with an honest review of what could disrupt your business." },
      { title: "Adequate valuation", description: "Insure assets and stock at appropriate values to avoid shortfalls." },
      { title: "Statutory requirements", description: "Some industries or contracts require specific cover — check what applies to you." },
      { title: "Review regularly", description: "As your business grows, your protection needs will change." },
    ],
    faqs: [
      { question: "What insurance does a small business typically consider?", answer: "Common considerations include cover for premises and contents, stock, public liability and, where relevant, professional indemnity and employee cover. The right combination depends on your industry and operations." },
      { question: "What is professional indemnity insurance?", answer: "Professional indemnity cover is designed to protect professionals against claims of negligence or errors in the advice or services they provide, subject to policy terms." },
      { question: "Can I insure my employees under one policy?", answer: "Group policies can cover employees under a single plan for health, life or accident protection. Eligibility, cover and terms depend on the insurer and group size." },
    ],
    seo: {
      title: "Business Insurance for Shops, Offices & SMEs",
      description: "Explore business insurance including shop, office, SME, professional indemnity and group employee protection.",
    },
  },
  {
    slug: "other-protection",
    hasPage: false,
    title: "Other Protection",
    shortTitle: "Other",
    icon: "shield",
    summary: "Specialised cover for specific risks, from personal accident to cyber-related protection.",
    hero: {
      heading: "Other Protection",
      description: "Specialised protection for particular risks and circumstances.",
    },
    subcategories: [
      { id: "personal-accident", title: "Personal Accident", description: "Cover related to accidental injury, disability or death." },
      { id: "liability", title: "Liability Protection", description: "Protection against legal liability to others, as per policy terms." },
      { id: "cyber", title: "Cyber-related Protection", description: "Cover for certain digital and online risks, for individuals or businesses." },
      { id: "specialised", title: "Specialised Insurance Solutions", description: "Guidance on specific or less common protection needs." },
    ],
  },
];

export const insurancePages = insuranceCategories.filter((c) => c.hasPage);

export const getInsuranceCategory = (slug: string) => insuranceCategories.find((c) => c.slug === slug && c.hasPage);

export const insuranceHref = (c: InsuranceCategory) => (c.hasPage ? `/insurance/${c.slug}` : `/insurance#${c.slug}`);
