import { isServiceValue } from "@/data/contact";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the client form and the API route so rules never drift apart. */
export function validateContact(data: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  if (data.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL.test(data.email.trim())) errors.email = "Please enter a valid email address.";
  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) errors.phone = "Please enter a valid phone number.";
  if (!isServiceValue(data.service)) errors.service = "Please choose the service you're interested in.";
  if (data.message.length > 2000) errors.message = "Please keep your message under 2,000 characters.";
  if (!data.consent) errors.consent = "Please confirm we may contact you about your enquiry.";
  return errors;
}
