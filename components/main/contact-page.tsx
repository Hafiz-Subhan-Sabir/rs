'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

import { CONTACT_EMAIL, PROJECTS, WHATSAPP_URL } from '@/constants';
import { MotionIn } from '@/components/motion/MotionIn';
import { MeetingScheduler } from '@/components/pages/meeting-scheduler';
import { API_BASE_URL, apiUrl } from '@/lib/api';

const CONTACT_REQUEST_TIMEOUT_MS = 70000;
const BACKEND_WARMUP_TIMEOUT_MS = 20000;

function toReadableError(value: unknown): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return value
      .map((item) => toReadableError(item))
      .filter(Boolean)
      .join('; ');
  }
  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    if (typeof obj.detail === 'string') return obj.detail;
    if (typeof obj.message === 'string') return obj.message;
    if (Array.isArray(obj.detail)) {
      return toReadableError(obj.detail);
    }
    return Object.entries(obj)
      .map(([k, v]) => `${k}: ${toReadableError(v) || String(v)}`)
      .join(', ');
  }
  return String(value);
}

function buildMailto({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const params = new URLSearchParams();
  params.set('subject', subject);
  params.set('body', body);
  return `mailto:${to}?${params.toString()}`;
}

export function ContactPage() {
  const searchParams = useSearchParams();
  const qpProject = searchParams?.get('project') ?? undefined;
  const qpPromo = searchParams?.get('promo') ?? undefined;

  const projectOptions = useMemo(() => {
    const set = new Set(PROJECTS.map((p) => p.title));
    return ['General', 'Free 3 Months Promo + Plan Demo', ...Array.from(set)];
  }, []);

  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [project, setProject] = useState(
    qpPromo === 'free3months' ? 'Free 3 Months Promo + Plan Demo' : (qpProject ?? 'General'),
  );
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const [message, setMessage] = useState(
    qpPromo === 'free3months'
      ? 'I want to claim the Free 3 Months Maintenance, Hosting & Consultancy offer and book a plan demo.'
      : '',
  );
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const projectMenuRef = useRef<HTMLDivElement | null>(null);

  const messageTemplates = useMemo(
    () => [
      'We need a business site with sales hooks and room to grow in search.',
      'Looking for bespoke software or CRM links tied to tools we already use.',
      'We want a custom chat helper on our website for FAQs and lead capture.',
      'Want advice on search, campaigns, and what to tackle first in the next ninety days.',
    ],
    []
  );

  const mailto = useMemo(() => {
    const subject =
      project && project !== 'General' ? `RS Dev inquiry: ${project}` : 'RS Dev call request';
    const body =
      `Hi RS Dev,\n\n` +
      (project && project !== 'General' ? `Context / reference project: ${project}\n\n` : '') +
      `Name: ${name || '(your name)'}\n` +
      `Email: ${fromEmail || '(your email)'}\n\n` +
      `Message:\n${message || '(write your message here)'}\n\n` +
      `Sent from the RS Dev website`;

    return buildMailto({
      to: CONTACT_EMAIL,
      subject,
      body,
    });
  }, [fromEmail, message, name, project]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (projectMenuRef.current && !projectMenuRef.current.contains(target)) {
        setProjectMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProjectMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    // Warm up free-tier backend so first submit is less likely to timeout.
    const endpoint = apiUrl('/health');
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), BACKEND_WARMUP_TIMEOUT_MS);
    fetch(endpoint, {
      method: 'GET',
      signal: controller.signal,
      cache: 'no-store',
    })
      .catch(() => {
        // Ignore warmup failures; submit flow still handles user-facing errors.
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
      });
    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, []);

  const handleSubmit = async () => {
    const trimmedName = name.trim();
    const trimmedEmail = fromEmail.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setSubmitState('error');
      setSubmitMessage('Please fill in name, email, and message.');
      return;
    }

    setSubmitting(true);
    setSubmitState('idle');
    setSubmitMessage('');
    try {
      const endpoint = apiUrl('/api/contact');
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), CONTACT_REQUEST_TIMEOUT_MS);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          project,
          message: trimmedMessage,
        }),
      });
      window.clearTimeout(timeoutId);
      const contentType = res.headers.get('content-type') || '';
      const raw = await res.text();
      let data: { ok?: boolean; message?: string; detail?: string } = {};
      if (contentType.includes('application/json')) {
        data = JSON.parse(raw) as { ok?: boolean; message?: string; detail?: string };
      } else {
        // Most common case: endpoint returns HTML (wrong base URL / reverse-proxy page / frontend route).
        const looksHtml = raw.trim().startsWith('<!DOCTYPE') || raw.trim().startsWith('<html');
        if (res.status === 404) {
          throw new Error(
            `Endpoint not found at ${endpoint} (404). Another app may be running on this port, or FastAPI is not serving /api/contact.`
          );
        }
        if (looksHtml) {
          throw new Error(
            `Received HTML instead of JSON from ${endpoint}. Check NEXT_PUBLIC_API_BASE_URL and ensure it points to FastAPI.`
          );
        }
        throw new Error(`Unexpected non-JSON response from ${endpoint}.`);
      }
      if (!res.ok || !data.ok) {
        const readable = toReadableError(data.detail) || toReadableError(data.message);
        throw new Error(readable || 'Unable to send right now.');
      }
      setSubmitState('success');
      setSubmitMessage('Message sent successfully. I will get back to you soon.');
      setMessage('');
    } catch (err) {
      const msg = err instanceof Error ? err.message : '';
      const isBackendDown = msg.toLowerCase().includes('failed to fetch');
      const isAborted = err instanceof DOMException && err.name === 'AbortError';
      const isSmtpMissing = msg.toLowerCase().includes('smtp credentials are missing');
      setSubmitState('error');
      if (isAborted) {
        setSubmitMessage(
          `Request timed out after ${Math.round(
            CONTACT_REQUEST_TIMEOUT_MS / 1000
          )}s. Render free backend may be cold-starting. Please wait 10-20 seconds and try again.`
        );
      } else if (isBackendDown) {
        setSubmitMessage(`Backend is not reachable at ${API_BASE_URL}. Check NEXT_PUBLIC_API_BASE_URL.`);
      } else if (isSmtpMissing) {
        setSubmitMessage('Backend is running but SMTP is not configured. Set SMTP_USER and SMTP_PASSWORD in backend environment.');
      } else if (msg) {
        setSubmitMessage(`Could not send right now: ${msg}`);
      } else {
        setSubmitMessage('Could not send from server right now. Use the email fallback below.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="w-full">
      <section className="relative overflow-hidden pt-[88px] pb-20 min-h-[calc(100vh-80px)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-[10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute top-40 right-[-80px] h-[380px] w-[380px] rounded-full bg-emerald-400/15 blur-[90px]" />
          <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-sky-400/12 blur-[80px]" />
        </div>

        <div className="mx-auto w-[90vw] max-w-[90vw] mt-8">
          <MotionIn>
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.1rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.08]">
                Let&apos;s Fix What&apos;s Blocking Your Business.
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
                Tell RS Dev what is broken — website, software, search, or daily tools. We reply within
                a day with a plain plan. Claim the free 3-month offer when you book a plan demo.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="cta-glow-zoom btn-cta-float inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold brand-button"
                >
                  Start The Form →
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-500/50 bg-emerald-50 px-6 py-3.5 text-sm font-bold text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </MotionIn>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8">
            <MotionIn delay={0.05}>
              <div
                id="contact-form"
                className="scroll-mt-28 rounded-2xl border-2 border-accent/30 bg-white/95 p-6 sm:p-8 shadow-[0_16px_48px_rgba(28,25,23,0.07)] dark:border-accent/35 dark:bg-stone-950/90"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-white">
                      Send Your Brief
                    </h2>
                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">
                      Name the problem. We send next steps — and confirm your free 3 months if you want the offer.
                    </p>
                  </div>
                  <Link
                    href="/about"
                    className="text-sm font-bold text-accent hover:underline"
                  >
                    Meet The Crew →
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-stone-700 dark:text-stone-200">Your name</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ali Khan"
                      className="h-12 rounded-xl border-2 border-stone-200 bg-white px-4 text-stone-900 outline-none focus:border-accent dark:border-white/10 dark:bg-black/20 dark:text-white"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-stone-700 dark:text-stone-200">Your email</span>
                    <input
                      value={fromEmail}
                      onChange={(e) => setFromEmail(e.target.value)}
                      placeholder="e.g. you@email.com"
                      inputMode="email"
                      className="h-12 rounded-xl border-2 border-stone-200 bg-white px-4 text-stone-900 outline-none focus:border-accent dark:border-white/10 dark:bg-black/20 dark:text-white"
                    />
                  </label>
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="text-sm font-semibold text-stone-700 dark:text-stone-200">Topic</span>
                    <div ref={projectMenuRef} className="relative">
                      <button
                        type="button"
                        onClick={() => setProjectMenuOpen((v) => !v)}
                        className="h-12 w-full rounded-xl border-2 border-stone-200 bg-white px-4 text-left text-stone-900 outline-none focus:border-accent dark:border-white/10 dark:bg-black/20 dark:text-white"
                      >
                        <span className="truncate block pr-6">{project}</span>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-500">▼</span>
                      </button>
                      {projectMenuOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.16 }}
                          className="absolute z-20 mt-2 w-full max-h-64 overflow-auto rounded-xl border-2 border-stone-200 bg-white shadow-xl dark:border-white/10 dark:bg-stone-950"
                        >
                          {projectOptions.map((p) => {
                            const isActive = p === project;
                            return (
                              <button
                                key={p}
                                type="button"
                                onClick={() => {
                                  setProject(p);
                                  setProjectMenuOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-left text-sm transition ${
                                  isActive
                                    ? 'bg-accent/15 text-accent font-semibold'
                                    : 'text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-white/10'
                                }`}
                              >
                                {p}
                              </button>
                            );
                          })}
                        </motion.div>
                      ) : null}
                    </div>
                  </label>
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="text-sm font-semibold text-stone-700 dark:text-stone-200">Message</span>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What is broken? What does good look like in 30–90 days? Any site URL or deadline?"
                      rows={6}
                      className="resize-none rounded-xl border-2 border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none focus:border-accent dark:border-white/10 dark:bg-black/20 dark:text-white"
                    />
                    <div className="flex flex-wrap gap-2">
                      {messageTemplates.map((template) => (
                        <button
                          key={template}
                          type="button"
                          onClick={() => setMessage(template)}
                          className="rounded-lg border-2 border-accent/35 px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent/10"
                        >
                          Use tip
                        </button>
                      ))}
                    </div>
                  </label>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="cta-glow-zoom btn-cta-float inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold brand-button disabled:opacity-70"
                  >
                    {submitting ? 'Sending...' : 'Send Message →'}
                  </button>
                  <a
                    href={mailto}
                    className="inline-flex items-center justify-center rounded-xl border-2 border-stone-300 bg-white px-5 py-3.5 text-sm font-bold text-stone-800 dark:border-white/15 dark:bg-white/5 dark:text-white"
                  >
                    Open Email App
                  </a>
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(CONTACT_EMAIL);
                        setCopied(true);
                        window.setTimeout(() => setCopied(false), 1400);
                      } catch {
                        setCopied(false);
                      }
                    }}
                    className="inline-flex items-center justify-center rounded-xl border-2 border-stone-300 bg-white px-5 py-3.5 text-sm font-bold text-stone-800 dark:border-white/15 dark:bg-white/5 dark:text-white"
                  >
                    {copied ? 'Copied!' : 'Copy Email'}
                  </button>
                </div>
                {submitState !== 'idle' ? (
                  <div
                    className={`mt-4 rounded-xl border-2 px-4 py-3 text-sm font-medium ${
                      submitState === 'success'
                        ? 'border-emerald-500/40 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'
                        : 'border-rose-400/40 bg-rose-500/10 text-rose-700 dark:text-rose-300'
                    }`}
                  >
                    {submitMessage}
                  </div>
                ) : null}
              </div>
            </MotionIn>

            <div className="space-y-5">
              <MotionIn delay={0.08}>
                <div className="rounded-2xl border-2 border-emerald-500/35 bg-gradient-to-br from-emerald-50 to-white p-6 dark:from-emerald-950/40 dark:to-stone-950 dark:border-emerald-400/30">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                    Why Contact Now
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-stone-700 dark:text-stone-300">
                    <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Free 3 months maintenance + hosting + consultancy</li>
                    <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Plan demo with a clear written next step</li>
                    <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Reply usually within 24 hours</li>
                    <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Same crew from first call to go-live</li>
                  </ul>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Claim Free 3 Months + Plan Demo')}`}
                    className="cta-glow-zoom mt-5 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_0_28px_rgba(5,150,105,0.35)]"
                  >
                    Claim Offer By Email →
                  </a>
                </div>
              </MotionIn>

              <MotionIn delay={0.12}>
                <div className="rounded-2xl border-2 border-stone-200 bg-white p-6 dark:border-white/12 dark:bg-stone-950">
                  <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-white">Direct Email</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-3 block break-all rounded-xl border-2 border-accent/25 bg-orange-50/80 px-4 py-3 text-sm font-bold text-accent dark:bg-orange-950/30"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-flex text-sm font-bold text-emerald-700 hover:underline dark:text-emerald-300"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </MotionIn>
            </div>
          </div>

          <div id="meeting" className="mt-14 scroll-mt-28">
            <div className="mb-6 text-center max-w-2xl mx-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-white">
                Book A 45 Minute Meeting
              </h2>
              <p className="mt-2 text-stone-600 dark:text-stone-400">
                Pick a time for your plan demo — perfect if you want the free 3-month package.
              </p>
            </div>
            <MeetingScheduler />
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: '1) Tell Us The Goal', text: 'What is broken, when you need it fixed, and any useful links.' },
              { title: '2) Get A Plain Plan', text: 'Written next steps, timing, and an honest fit call — plus the promo if you claim it.' },
              { title: '3) Build And Care', text: 'We ship, then keep maintenance and hosting healthy for your free 3 months.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-stone-200 bg-white p-6 transition hover:-translate-y-1 dark:border-white/12 dark:bg-stone-950"
              >
                <div className="font-display text-base font-semibold text-accent">{item.title}</div>
                <div className="mt-2 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

