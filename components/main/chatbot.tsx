"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/constants";
import { FaWhatsapp, FaRobot } from "react-icons/fa";
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

type Msg = { role: "user" | "bot"; text: string };

const QUICK_TOPICS = [
  "What is RS Dev?",
  "Who is on the crew?",
  "What services do you offer?",
  "Tell me about The Syndicate",
  "Do you handle SEO AI optimization?",
  "Enterprise system design?",
  "How do you estimate project cost?",
  "How can we start working together?",
] as const;

const FALLBACK_TEXT =
  "RS Bot here — WhatsApp us, email intelligence@the-rsdev.com, or send a note on the contact page and the crew will reply with fit and next steps.";

const containsAny = (q: string, terms: string[]): boolean => terms.some((t) => q.includes(t));

function getCustomReply(question: string): string {
  const q = question.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();

  if (containsAny(q, ["rs bot", "your name", "who are you", "what are you"])) {
    return "I'm RS Bot — the RS Dev assistant. I can brief you on our six-person crew, services, flagship projects, SEO AI work, and how to start. Prefer WhatsApp or email intelligence@the-rsdev.com for a human reply.";
  }
  if (containsAny(q, ["crew", "team", "members", "who is on", "specialist", "ayesha", "omar", "maria", "layla", "bilal", "daniyal"])) {
    return "Our crew of six: Hafiz Subhan (Full Stack Engineer), Ayesha Rahman (System Architect Designing Expert), Omar Farooq (DevOps & Automation Expert), Maria Hassan (App Developer Expert), Bilal Siddiqui (SEO AI Optimization Expert), and Daniyal Sheikh (Cloud Solution Expert).";
  }
  if (containsAny(q, ["ninety day", "90 day", "revenue loop", "flagship", "packaged", "digital fix"])) {
    return "We offer a ninety day digital fix plan: product, SEO AI and traffic, then pipeline and day-to-day tools under one written plan. Book a 45-minute meeting on the contact page or email intelligence@the-rsdev.com.";
  }
  if (containsAny(q, ["what is rs dev", "rs dev", "about you", "introduce", "briefly introduce", "intro"])) {
    return "RS Dev is a six-person studio led by Hafiz Subhan. We design enterprise systems, ship apps, run DevOps & automation, cloud solutions, and SEO AI optimization so teams can focus on real work.";
  }
  if (containsAny(q, ["hafiz", "subhan", "founder"])) {
    return "Hafiz Subhan Sabir is Founder and Full Stack Engineer at RS Dev. Book a 45-minute meeting on Contact, WhatsApp, or email intelligence@the-rsdev.com.";
  }
  if (containsAny(q, ["whatsapp", "phone", "call", "number"])) {
    return "WhatsApp us at 03221723864 — or email intelligence@the-rsdev.com. You can also book a 45-minute meeting with Hafiz Subhan Sabir on the contact page.";
  }
  if (containsAny(q, ["email", "mail", "intelligence"])) {
    return "Reach us at intelligence@the-rsdev.com — we usually reply within a day.";
  }
  if (containsAny(q, ["syndicate"])) {
    return "The Syndicate is our membership web app: AI automations, strong system architecture, Cloudflare delivery, YouTube-style course video segments, AI-generated articles, role-based access, secure login, and payment validation with IP-aware GBP/USD charging. See About for the full list.";
  }
  if (containsAny(q, ["affiliate", "commission"])) {
    return "We design growth and ops control surfaces when scope calls for it. Our current MVP flagships are The Syndicate cloud enterprise web app and the AI proctoring online quiz exam app — see About for details.";
  }
  if (containsAny(q, ["inteliquiz", "quiz", "proctor", "exam"])) {
    return "Our AI Proctoring Online Quiz Exam App covers teacher/student roles, quiz builder, webcam face detection, tab/fullscreen warnings, results and cheating logs. See About for the full list.";
  }
  if (containsAny(q, ["enterprise", "architect", "system design", "full system", "syndicate", "blockchain"])) {
    return "Yes. Flagship example: The Syndicate — a cloud-based enterprise web app with a blockchain roadmap. Contact us for scope.";
  }
  if (containsAny(q, ["experience", "how many years", "years of experience", "how long have you", "exp"])) {
    return "Multi-year experience shipping web products, enterprise designs, AI automation, and SEO systems with startups and growth teams.";
  }
  if (containsAny(q, ["service", "offer", "what do you do", "what can you do"])) {
    return "Sites and apps, enterprise system design, AI automation, SEO AI optimization, CRM/integrations, website chat, and business development support — end to end or one slice.";
  }
  if (containsAny(q, ["crm", "salesforce", "hubspot", "pipeline"])) {
    return "Yes. We help pick, set up, and tune sales boards with pipelines, reports, and live links so marketing and sales see the same numbers.";
  }
  if (containsAny(q, ["seo", "ranking", "google", "search console", "organic", "seo ai"])) {
    return "Yes — Bilal leads SEO AI Optimization. We fix structure, speed, and intent, then layer AI-assisted content systems. No fake page-one overnight promises.";
  }
  if (containsAny(q, ["marketing", "ads", "campaign", "social media"])) {
    return "We help with channel picks, ad structure, tracking, and messages that match what you sell — execution or advice only.";
  }
  if (containsAny(q, ["chatbot", "chat bot", "website chat", "site chat", "ai bot", "live chat", "rs bot"])) {
    return "You're talking to RS Bot. We also build custom chat for business websites — FAQ answers, lead capture, and routing. Ask on the contact page with your site URL.";
  }
  if (containsAny(q, ["automation", "workflow", "integrate", "integration", "devops", "ci cd", "pipeline"])) {
    return "Yes. Omar leads DevOps & Automation — pipelines, environments, and workflow systems so teams spend less time on repeat ops work.";
  }
  if (containsAny(q, ["app", "mobile", "dashboard", "portal"])) {
    return "Maria leads app development. We ship polished web and member portals, dashboards, and product UX that feel fast and clear.";
  }
  if (containsAny(q, ["business", "partnership", "bd", "cloud", "hosting", "aws", "azure"])) {
    return "Daniyal leads Cloud Solutions — hosting, environments, and scale paths so products stay fast, secure, and ready to grow.";
  }
  if (containsAny(q, ["skill", "tech stack", "technology", "stack", "react", "next", "python", "fastapi", "typescript"])) {
    return "Typical stacks: React, Next.js, TypeScript, Tailwind, Python, FastAPI/Django, OpenAI, plus SEO and integration patterns matched to the job.";
  }
  if (containsAny(q, ["budget", "cost", "price", "charges", "pricing", "rate"])) {
    return "Cost depends on scope and timeline. After a short brief, we reply with fit, a practical plan, and a clear estimate band.";
  }
  if (containsAny(q, ["timeline", "how long", "delivery", "take", "deadline", "duration"])) {
    return "Timelines vary: a landing refresh is different from an enterprise system. You get a realistic schedule once we understand constraints.";
  }
  if (containsAny(q, ["solo", "collaborat", "independent"])) {
    return "We work as a six-person crew with founders and internal teams — embedded for sprints or fixed phases — and can align with vendors you already use.";
  }
  if (containsAny(q, ["redesign", "existing website", "improve my website", "revamp", "ui ux"])) {
    return "Yes. We can redesign or rebuild your site for performance, conversion, SEO foundations, and a UI system your team can extend.";
  }
  if (containsAny(q, ["consultancy", "advisory", "roadmap", "strategy only"])) {
    return "Yes. Advisory covers architecture, SEO AI, sales tools, or campaign roadmaps you can run internally or hand back for build.";
  }
  if (containsAny(q, ["full stack", "fullstack", "backend", "api", "database", "authentication"])) {
    return "Yes. Hafiz leads full-stack delivery: frontends, APIs, authentication, data workflows, and production-minded deployment.";
  }
  if (containsAny(q, ["deploy", "deployment", "vercel", "production", "server"])) {
    return "Yes. We support deployment and go-live readiness, including monitoring hooks and handoff notes.";
  }
  if (containsAny(q, ["hosting", "maintenan", "support", "after launch", "bug fix"])) {
    return "Yes. Light retainers or agreed support windows are available for updates, tuning, and fixes after launch.";
  }
  if (containsAny(q, ["revision", "changes", "update", "edits"])) {
    return "Revisions are part of healthy delivery. We keep feedback loops clear so the final result matches agreed scope.";
  }
  if (containsAny(q, ["communication", "update frequency", "progress", "milestone", "report"])) {
    return "Expect clear milestones, demos when useful, and straightforward written updates from the same crew building the work.";
  }
  if (containsAny(q, ["start", "hire", "work together", "contact", "begin", "onboard"])) {
    return "Use the contact page: share outcomes, timeline, tools you use, and budget band. The crew replies with fit and next steps.";
  }
  if (containsAny(q, ["project", "portfolio", "case study", "selected work", "work"])) {
    return "Flagship MVP work: The Syndicate cloud enterprise web app (blockchain roadmap) and the AI Proctoring Online Quiz Exam App. Open /about for details.";
  }
  return FALLBACK_TEXT;
}

const RS_BOT_OPEN_EVENT = "rsdev:open-rs-bot";

/** Open the RS Bot panel from the navbar (or anywhere). */
export function openRsBot() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(RS_BOT_OPEN_EVENT));
}

export function ChatBot() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hey — I'm RS Bot. Ask about our six-person crew, enterprise systems, SEO AI, The Syndicate, or how to start. For scoped quotes, hit Contact.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const showSuggestions = messages.length <= 1 && !typing;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(RS_BOT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(RS_BOT_OPEN_EVENT, onOpen);
  }, []);

  const send = (forcedText?: string) => {
    const text = (forcedText ?? input).trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      const reply = getCustomReply(text);
      setMessages((m) => [...m, { role: "bot", text: reply }]);
      setTyping(false);
    }, 420 + Math.min(480, text.length * 8));
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 180);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed top-[88px] right-3 sm:right-5 z-[70] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {open ? (
          <motion.div
              key="panel"
              initial={{ opacity: 0, y: -18, scale: 0.94, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, scale: 0.96, filter: "blur(4px)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="rs-bot-panel pointer-events-auto relative flex h-[min(82vh,680px)] w-[min(94vw,420px)] flex-col overflow-hidden rounded-[1.75rem] border border-white/20 bg-stone-50/95 shadow-[0_0_0_1px_rgba(194,65,12,0.2),0_0_60px_rgba(194,65,12,0.28),0_32px_64px_rgba(0,0,0,0.22)] backdrop-blur-xl dark:border-white/10 dark:bg-[#141110]/95"
            >
              {/* Ambient mesh */}
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-accent/25 blur-[70px]" />
                <div className="absolute top-1/3 -left-16 h-40 w-40 rounded-full bg-amber-400/15 blur-[60px]" />
                <div className="absolute bottom-0 right-1/4 h-36 w-36 rounded-full bg-sky-500/10 blur-[50px]" />
              </div>

              {/* Header */}
              <div className="relative shrink-0 overflow-hidden px-4 pb-4 pt-4">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c1410] via-[#2a1810] to-[#C2410C]" />
                <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-amber-400/30 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-1/3 h-20 w-40 bg-gradient-to-t from-black/30 to-transparent" />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative">
                      <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-gradient-to-br from-amber-400 via-accent to-orange-700 text-white shadow-[0_0_28px_rgba(251,191,36,0.45)]"
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaRobot className="h-6 w-6" />
                      </motion.div>
                      <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#1c1410] bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="font-display text-lg font-semibold tracking-tight text-white">
                          RS Bot
                        </h2>
                        <span className="rounded-full border border-amber-300/40 bg-amber-400/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-200">
                          Live
                        </span>
                      </div>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-orange-100/80">
                        <SparklesIcon className="h-3 w-3 text-amber-300" />
                        Crew assistant · instant replies
                      </p>
                    </div>
                  </div>
              <button
                type="button"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white/90 backdrop-blur transition hover:bg-white/20 hover:text-white"
                onClick={() => setOpen(false)}
                    aria-label="Close RS Bot"
              >
                    <XMarkIcon className="h-5 w-5" />
              </button>
                </div>
            </div>

              {/* Messages */}
              <div className="rs-bot-scroll relative flex-1 overflow-y-auto px-3.5 py-4 space-y-3.5 scrollbar-thin">
                {messages.map((m, i) => {
                  const isBot = m.role === "bot";
                  const isFirst = i === 0 && isBot;
                  return (
                    <motion.div
                  key={`${m.role}-${i}`}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.22 }}
                      className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                    >
                      {isBot ? (
                        <div className="mr-2 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-orange-700 text-white shadow-[0_0_14px_rgba(194,65,12,0.35)]">
                          <FaRobot className="h-3.5 w-3.5" />
                        </div>
                      ) : null}
                      <div
                        className={`max-w-[84%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                          isBot
                            ? isFirst
                              ? "rounded-2xl rounded-tl-md border border-accent/25 bg-white text-stone-800 shadow-[0_8px_24px_rgba(28,25,23,0.06)] dark:border-accent/30 dark:bg-white/[0.08] dark:text-stone-100"
                              : "rounded-2xl rounded-tl-md border border-stone-200/80 bg-white text-stone-800 shadow-sm dark:border-white/10 dark:bg-white/[0.07] dark:text-stone-100"
                            : "rounded-2xl rounded-tr-md bg-gradient-to-br from-accent to-orange-700 text-white shadow-[0_8px_22px_rgba(194,65,12,0.35)]"
                        }`}
                      >
                        {isFirst ? (
                          <span className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent dark:bg-accent/20">
                            <SparklesIcon className="h-3 w-3" />
                            Welcome
                          </span>
                        ) : null}
                        <p className={isFirst ? "mt-1" : undefined}>{m.text}</p>
                      </div>
                    </motion.div>
                  );
                })}

                {typing ? (
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-orange-700 text-white">
                      <FaRobot className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-stone-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.07]">
                      <span className="rs-bot-dot h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="rs-bot-dot h-1.5 w-1.5 rounded-full bg-accent [animation-delay:120ms]" />
                      <span className="rs-bot-dot h-1.5 w-1.5 rounded-full bg-accent [animation-delay:240ms]" />
                    </div>
                  </div>
                ) : null}
              <div ref={messagesEndRef} />
            </div>

              {/* Composer */}
              <div className="relative shrink-0 border-t border-stone-200/80 bg-white/90 px-3.5 pb-3.5 pt-3 backdrop-blur-md dark:border-white/10 dark:bg-[#1a1512]/95">
                <AnimatePresence>
                  {showSuggestions ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-3 overflow-hidden"
                    >
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-stone-400">
                        Try asking
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {QUICK_TOPICS.slice(0, 6).map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => send(topic)}
                            disabled={typing}
                            className="shrink-0 rounded-full border border-accent/30 bg-gradient-to-b from-white to-orange-50/80 px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm transition hover:border-accent hover:shadow-[0_0_16px_rgba(194,65,12,0.2)] disabled:opacity-50 dark:from-white/10 dark:to-orange-950/30 dark:text-stone-200 dark:border-accent/35"
                  >
                    {topic}
                  </button>
                ))}
              </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div className="flex items-center gap-2 rounded-2xl border-2 border-accent/30 bg-stone-50 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition focus-within:border-accent focus-within:shadow-[0_0_0_3px_rgba(194,65,12,0.12)] dark:border-accent/35 dark:bg-black/30 dark:focus-within:shadow-[0_0_0_3px_rgba(194,65,12,0.2)]">
                <input
                    ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") send();
                  }}
                    placeholder="Ask RS Bot…"
                    disabled={typing}
                    className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-stone-900 outline-none placeholder:text-stone-400 disabled:opacity-60 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => send()}
                    disabled={typing || !input.trim()}
                    className="cta-glow-zoom flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-orange-700 text-white shadow-[0_0_20px_rgba(194,65,12,0.4)] transition disabled:opacity-40 disabled:animate-none"
                    aria-label="Send message"
                >
                    <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-50 px-2 py-2 text-[11px] font-bold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300"
                  >
                    <FaWhatsapp className="h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-accent/30 bg-orange-50 px-2 py-2 text-[11px] font-bold text-accent transition hover:bg-orange-100 dark:bg-orange-950/40"
                  >
                    <EnvelopeIcon className="h-3.5 w-3.5" />
                    Email
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-sky-500/30 bg-sky-50 px-2 py-2 text-[11px] font-bold text-sky-700 transition hover:bg-sky-100 dark:bg-sky-950/40 dark:text-sky-300"
                  >
                    <CalendarDaysIcon className="h-3.5 w-3.5" />
                    Book
              </Link>
                </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>

      {/* WhatsApp + Email — bottom right */}
      <div className="fixed bottom-[10px] right-3 sm:right-5 z-[70] flex flex-row items-center gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="contact-glow-wa flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400/70 bg-[#25D366] text-white transition"
          aria-label="Chat on WhatsApp 03221723864"
          title="WhatsApp 03221723864"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="contact-glow-mail flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/60 bg-white text-accent transition dark:bg-stone-950"
          aria-label={`Email ${CONTACT_EMAIL}`}
          title={CONTACT_EMAIL}
        >
          <EnvelopeIcon className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}
