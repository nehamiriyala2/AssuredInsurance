import type { IconName } from "./Icon";

/**
 * Photo registry — every photograph used on the site.
 * Files live in public/images/<group>/ (credits in public/images/CREDITS.md).
 * `icon` is shown by the branded fallback if a file ever fails to load.
 */
export const photos = {
  // General
  familyHome: { src: "/images/general/family-home.webp", alt: "A family of three sitting together outdoors, smiling", icon: "users" },
  advisorMeeting: { src: "/images/general/advisor-meeting.webp", alt: "A client smiling during a conversation with a financial advisor", icon: "message" },

  // Insurance
  lifeFamily: { src: "/images/insurance/life-family.webp", alt: "Parents and their daughter walking together along a tree-lined road", icon: "users" },
  healthConsultation: { src: "/images/insurance/health-consultation.webp", alt: "An older couple reviewing health information with a doctor", icon: "health" },
  motorCar: { src: "/images/insurance/motor-car.webp", alt: "A car driving along a winding hill road", icon: "car" },
  motorCarCity: { src: "/images/insurance/motor-car-city.webp", alt: "A private car driving on a city expressway — car insurance", icon: "car" },
  motorTwoWheeler: { src: "/images/insurance/motor-two-wheeler.webp", alt: "A rider on a scooter in city traffic — two-wheeler insurance", icon: "bike" },
  motorCommercial: { src: "/images/insurance/motor-commercial.webp", alt: "Goods trucks on a hill road — commercial vehicle insurance", icon: "truck" },
  homeInterior: { src: "/images/insurance/home-interior.webp", alt: "A bright living room with sofa, furniture and a garden view", icon: "sofa" },
  homeApartments: { src: "/images/insurance/home-apartments.webp", alt: "Residential apartment buildings surrounded by trees", icon: "building" },
  travelWing: { src: "/images/insurance/travel-wing.webp", alt: "View of an aircraft wing above the clouds", icon: "plane" },
  travelAirport: { src: "/images/insurance/travel-airport.webp", alt: "Travellers waiting at an airport gate beside large windows", icon: "luggage" },
  businessTeam: { src: "/images/insurance/business-team.webp", alt: "A business team meeting around a long conference table", icon: "briefcase" },

  // Loans
  homeloanCouple: { src: "/images/loans/homeloan-couple.webp", alt: "A couple sitting among moving boxes holding the keys to their new home", icon: "key" },
  homeConstruction: { src: "/images/loans/home-construction.webp", alt: "A residential building under construction", icon: "hammer" },
  loansKeys: { src: "/images/loans/loans-keys.webp", alt: "House keys held above a wallet and coins", icon: "landmark" },
  personalCouple: { src: "/images/loans/personal-couple.webp", alt: "A couple reviewing plans together on a laptop at home", icon: "wallet" },
  businessShop: { src: "/images/loans/business-shop.webp", alt: "A shopkeeper at the counter of a neighbourhood store", icon: "store" },
  vehicleShowroom: { src: "/images/loans/vehicle-showroom.webp", alt: "A car on display in a vehicle showroom", icon: "carFront" },
} as const satisfies Record<string, { src: string; alt: string; icon: IconName }>;

export type PhotoKey = keyof typeof photos;
