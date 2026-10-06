"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { serviceOptions, isServiceValue } from "@/data/contact";
import { cn } from "@/lib/cn";
import { validateContact, type ContactErrors, type ContactPayload } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const empty: ContactPayload = { name: "", email: "", phone: "", service: "", message: "", consent: false };
const fieldOrder: (keyof ContactPayload)[] = ["name", "email", "phone", "service", "message", "consent"];

const inputClass =
  "block w-full rounded-[10px] border bg-white px-4 text-base text-ink placeholder:text-ink-soft/80 transition-[border-color,box-shadow] duration-200 focus:border-navy focus:outline-none focus:ring-4 focus:ring-green/20";

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Pre-select a service from ?service=… (e.g. links from loan or insurance pages).
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("service");
    if (isServiceValue(s)) setValues((v) => ({ ...v, service: s }));
  }, []);

  const set = <K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    const first = fieldOrder.find((k) => found[k]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setServerMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerMessage("We couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-start rounded-panel border border-line bg-white p-8 shadow-lift sm:p-12">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-ink text-white">
          <Icon name="check" className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 text-display-sm">Thank you, {values.name.split(" ")[0]}.</h3>
        <p className="mt-3 max-w-md text-ink-muted">
          Your consultation request has been received. A member of our team will be in touch using the details you provided.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => {
            setValues(empty);
            setStatus("idle");
          }}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="rounded-panel border border-line bg-white p-6 shadow-lift sm:p-10 xl:p-12" aria-describedby="form-note">
      <div className="mb-8 border-b border-line pb-7">
        <h2 className="font-display text-display-sm">Tell us how we can help</h2>
        <p className="mt-2 text-copy text-ink-muted">Share a few details and choose the service you&apos;re interested in.</p>
      </div>
      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputClass, "h-[3.25rem] lg:h-14", errors.name ? "border-danger" : "border-line-strong")}
            placeholder="Your name"
          />
        </Field>
        <Field id="email" label="Email address" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputClass, "h-[3.25rem] lg:h-14", errors.email ? "border-danger" : "border-line-strong")}
            placeholder="you@example.com"
          />
        </Field>
        <Field id="phone" label="Phone number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(inputClass, "h-[3.25rem] lg:h-14", errors.phone ? "border-danger" : "border-line-strong")}
            placeholder="Your mobile number"
          />
        </Field>
        <Field id="service" label="Service interested in" error={errors.service}>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={(e) => set("service", e.target.value)}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
              className={cn(inputClass, "h-[3.25rem] appearance-none pr-10 lg:h-14", !values.service && "text-ink-soft", errors.service ? "border-danger" : "border-line-strong")}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value} className="text-ink">
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          </div>
        </Field>
        <Field id="message" label="Message" optional error={errors.message} className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(inputClass, "resize-y py-3", errors.message ? "border-danger" : "border-line-strong")}
            placeholder="Tell us briefly what you'd like help with"
          />
        </Field>
      </div>

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-muted">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-line-strong accent-[rgb(var(--brand-green-ink))]"
          />
          <span>
            I agree to be contacted about my enquiry. See our{" "}
            <Link href="/privacy-policy" className="font-medium text-navy underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-sm text-danger">
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-lg border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger">
          {serverMessage}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-xs text-ink-soft">
          All fields are required unless marked optional.
        </p>
        <Button type="submit" size="lg" arrow disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Sending…" : "Request a Consultation"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  optional,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2.5 flex items-baseline justify-between font-display text-[0.9375rem] font-semibold text-ink">
        {label}
        {optional && <span className="text-xs font-normal text-ink-soft">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
