import { NextResponse } from "next/server";
import { validateContact, type ContactPayload } from "@/lib/validation";

/**
 * Consultation request endpoint.
 *
 * TODO(client): connect delivery. Set CONTACT_WEBHOOK_URL to any endpoint that
 * accepts JSON (a CRM, form service, Zapier/Make hook, or your own mail API).
 * Until it is configured, requests are rejected in production so visitors are
 * never told a message was sent when it wasn't.
 */
export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: String(body.name ?? "").slice(0, 120),
    email: String(body.email ?? "").slice(0, 200),
    phone: String(body.phone ?? "").slice(0, 30),
    service: String(body.service ?? ""),
    message: String(body.message ?? "").slice(0, 2000),
    consent: body.consent === true,
  };

  const errors = validateContact(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Received consultation request (no CONTACT_WEBHOOK_URL configured):", payload);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, error: "The enquiry form is not yet connected." }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Delivery failed", err);
    return NextResponse.json({ ok: false, error: "We couldn't send your request right now." }, { status: 502 });
  }
}
