import { NextResponse } from "next/server";

import { CONTACT_EMAIL } from "@/constants";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  project?: string;
};

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

async function sendViaResend(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
  project: string;
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;

  const to = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || "RS Dev <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `RS Dev — ${payload.project} from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || "—"}`,
        `Project: ${payload.project}`,
        "",
        payload.message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(detail || "Resend failed");
  }
  return true;
}

async function sendViaFormSubmit(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
  project: string;
}) {
  const to = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone || "—",
      project: payload.project,
      message: payload.message,
      _subject: `RS Dev — ${payload.project} from ${payload.name}`,
      _template: "table",
      _captcha: "false",
      _replyto: payload.email,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as { success?: string; message?: string };
  if (!res.ok) {
    throw new Error(data.message || "Unable to deliver message");
  }
  return true;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return bad("Invalid request body.");
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();
  const project = String(body.project || "Free consultation").trim();

  if (!name || !email || !message) {
    return bad("Please fill in name, email, and message.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return bad("Please enter a valid email address.");
  }

  const payload = { name, email, phone, message, project };

  try {
    const viaResend = await sendViaResend(payload);
    if (!viaResend) {
      await sendViaFormSubmit(payload);
    }
    return NextResponse.json({
      ok: true,
      message: "Got it — we will reply soon at intelligence@the-rsdev.com.",
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : "Send failed";
    return NextResponse.json(
      {
        ok: false,
        message: "Could not send right now. Please try again in a moment.",
        detail,
      },
      { status: 502 }
    );
  }
}
