"use client";

import { useCallback, useEffect, useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SparklesIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

import { useMotionReady } from "@/lib/motion";

export const OPEN_CONSULTATION_EVENT = "rsdev:open-consultation";

export function openConsultationPopup() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_CONSULTATION_EVENT));
}

const DELAY_MS = 10_000;
const STORAGE_KEY = "rsdev-consult-popup-dismissed";
const DISMISS_DAYS = 7;

function wasDismissedRecently() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const ts = Number(raw);
    if (!Number.isFinite(ts)) return false;
    return Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

function markDismissed() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}

export function ConsultationPopup() {
  const pathname = usePathname();
  const ready = useMotionReady();
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const close = useCallback(() => {
    setOpen(false);
    markDismissed();
  }, []);

  const openNow = useCallback(() => {
    setOpen(true);
    setStatus("idle");
    setStatusMsg("");
  }, []);

  useEffect(() => {
    const onOpen = () => openNow();
    window.addEventListener(OPEN_CONSULTATION_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSULTATION_EVENT, onOpen);
  }, [openNow]);

  useEffect(() => {
    if (pathname === "/contact") return;
    if (wasDismissedRecently()) return;

    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setStatusMsg("Please fill in name, email, and message.");
      return;
    }

    setSubmitting(true);
    setStatus("idle");
    setStatusMsg("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          message: trimmedMessage,
          project: "Free consultation",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        detail?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.message || data.detail || "Unable to send");
      }
      setStatus("success");
      setStatusMsg(
        data.message ||
          "Got it — we received your details at intelligence@the-rsdev.com and will reply soon."
      );
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      window.setTimeout(() => close(), 2600);
    } catch (err) {
      setStatus("error");
      setStatusMsg(
        err instanceof Error
          ? err.message
          : "Could not send right now. Please try again — you stay on this site."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-6"
          initial={ready ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            aria-label="Close consultation dialog backdrop"
            className="absolute inset-0 bg-stone-950/55 backdrop-blur-md dark:bg-black/70"
            onClick={close}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={ready ? { opacity: 0, y: 36, scale: 0.96 } : false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[1] w-full max-w-[420px] overflow-hidden rounded-2xl border-2 border-accent/35 bg-white shadow-[0_24px_80px_rgba(28,25,23,0.28),0_0_40px_rgba(194,65,12,0.18)] dark:border-accent/40 dark:bg-stone-950"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />

            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-[2] flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white shadow-md transition hover:bg-accent dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-accent dark:hover:text-white"
              aria-label="Close"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>

            <div className="relative px-5 pb-5 pt-7 sm:px-6 sm:pb-6 sm:pt-8">
              <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-accent/30 bg-orange-50 px-3 py-1 text-[11px] font-bold text-accent dark:border-accent/40 dark:bg-orange-950/40">
                <SparklesIcon className="h-3.5 w-3.5" />
                Free consultation available
              </div>

              <h2
                id={titleId}
                className="mt-4 font-display text-2xl sm:text-[1.65rem] font-semibold tracking-tight text-stone-900 dark:text-white"
              >
                Tell us your{" "}
                <span className="bg-gradient-to-r from-accent to-sky-600 bg-clip-text text-transparent">
                  vision
                </span>
                .
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                Share your details — you stay on this site. We receive your message at{" "}
                <span className="font-semibold text-accent">intelligence@the-rsdev.com</span>.
              </p>

              <form onSubmit={onSubmit} className="mt-5 space-y-3.5">
                <label className="block">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-200">Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border-2 border-stone-200 bg-stone-50/80 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition focus:border-accent focus:bg-white dark:border-white/12 dark:bg-white/[0.04] dark:text-white dark:focus:border-accent"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-200">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border-2 border-stone-200 bg-stone-50/80 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition focus:border-accent focus:bg-white dark:border-white/12 dark:bg-white/[0.04] dark:text-white dark:focus:border-accent"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-200">Phone</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7700 900123"
                    autoComplete="tel"
                    className="mt-1.5 w-full rounded-xl border-2 border-stone-200 bg-stone-50/80 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition focus:border-accent focus:bg-white dark:border-white/12 dark:bg-white/[0.04] dark:text-white dark:focus:border-accent"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-200">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Tell us your requirement and what outcome you want to achieve…"
                    className="mt-1.5 w-full resize-none rounded-xl border-2 border-stone-200 bg-stone-50/80 px-3.5 py-2.5 text-sm text-stone-900 outline-none transition focus:border-accent focus:bg-white dark:border-white/12 dark:bg-white/[0.04] dark:text-white dark:focus:border-accent"
                  />
                </label>

                {statusMsg ? (
                  <p
                    className={`text-xs font-semibold ${
                      status === "error"
                        ? "text-rose-600 dark:text-rose-400"
                        : "text-emerald-700 dark:text-emerald-300"
                    }`}
                  >
                    {statusMsg}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-cta-float w-full rounded-xl px-4 py-3.5 text-sm font-bold brand-button shadow-[0_0_28px_rgba(194,65,12,0.35)] disabled:opacity-70"
                >
                  {submitting ? "Sending…" : "Book a free consultation"}
                </button>
              </form>

              <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] font-semibold text-stone-500 dark:text-stone-400">
                {["Stay on site", "No spam", "Direct reply"].map((item) => (
                  <li key={item} className="inline-flex items-center gap-1">
                    <CheckIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
