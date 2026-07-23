"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
  "RS Bot here — send a short note on the contact page and the crew will reply with fit, approach, and next steps.";

const containsAny = (q: string, terms: string[]): boolean => terms.some((t) => q.includes(t));

function getCustomReply(question: string): string {
  const q = question.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();

  if (containsAny(q, ["rs bot", "your name", "who are you", "what are you"])) {
    return "I'm RS Bot — the RS Dev assistant. I can brief you on our six-person crew, services, flagship projects, SEO AI work, and how to start. For scoped quotes, use the contact page.";
  }
  if (containsAny(q, ["crew", "team", "members", "who is on", "specialist", "ayesha", "omar", "maria", "layla", "bilal", "daniyal"])) {
    return "Our crew of six: Hafiz Subhan (Full Stack Engineer), Ayesha Rahman (System Architect Designing Expert), Omar Farooq (AI Automation Expert), Maria Hassan (App Developer Expert), Bilal Siddiqui (SEO AI Optimization Expert), and Daniyal Sheikh (Business Development Expert).";
  }
  if (containsAny(q, ["ninety day", "90 day", "revenue loop", "flagship", "packaged", "digital fix"])) {
    return "We offer a ninety day digital fix plan: product, SEO AI and traffic, then pipeline and day-to-day tools under one written plan. Ask on the contact page.";
  }
  if (containsAny(q, ["what is rs dev", "rs dev", "about you", "introduce", "briefly introduce", "intro"])) {
    return "RS Dev is a six-person studio led by Hafiz Subhan. We design enterprise systems, ship apps, automate with AI, and run SEO AI optimization so teams can focus on real work.";
  }
  if (containsAny(q, ["hafiz", "subhan", "founder"])) {
    return "Hafiz Subhan is Founder and Full Stack Engineer at RS Dev. He leads delivery with a specialist crew — reach him via the contact page.";
  }
  if (containsAny(q, ["syndicate"])) {
    return "The Syndicate is a full web app we built: membership hub, AI mission agent, streaks, leaderboard, affiliate tracking, and Stripe onboarding — system-designed for scale. See it under Work.";
  }
  if (containsAny(q, ["transcript", "whisper", "video transcript"])) {
    return "Video Transcript Studio generates accurate transcripts, optional translation, Google Docs export, and a protected Sheet registry — built for ops teams. Ask on contact for a walkthrough.";
  }
  if (containsAny(q, ["filter", "filtering", "triage"])) {
    return "Filtering from Any App is our cross-app triage layer — pull records from scattered tools, apply smart rules, and surface only what teams need to act on.";
  }
  if (containsAny(q, ["enterprise", "architect", "system design", "full system"])) {
    return "Yes. Ayesha leads system architecture; we are actively building an enterprise-level full system covering portals, SEO AI, CRM links, automation, and multi-role admin. Contact us for scope.";
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
  if (containsAny(q, ["automation", "workflow", "integrate", "integration", "ai automation"])) {
    return "Yes. Omar leads AI Automation — we connect tools you already use and set up agents and workflows so teams spend less time on copy-paste work.";
  }
  if (containsAny(q, ["app", "mobile", "dashboard", "portal"])) {
    return "Maria leads app development. We ship polished web and member portals, dashboards, and product UX that feel fast and clear.";
  }
  if (containsAny(q, ["business", "partnership", "bd", "growth"])) {
    return "Daniyal leads Business Development — turning goals into clear scopes, partnerships, and delivery plans you can trust.";
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
    return "Flagship work includes Video Transcript Studio, Filtering from Any App, The Syndicate web app, and an enterprise full system in active development — plus earlier live builds. Open /work.";
  }
  return FALLBACK_TEXT;
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

  useEffect(() => {
    setMounted(true);
  }, []);

  const lastBot = useMemo(() => {
    const bots = messages.filter((m) => m.role === "bot");
    return (bots.length ? bots[bots.length - 1].text : "") ?? "";
  }, [messages]);

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

  // Avoid SSR/client attribute mismatch from Framer Motion + browser chrome.
  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70]">
      <AnimatePresence>
        {!open ? (
          <motion.button
            key="fab"
            type="button"
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(true)}
            className="rs-bot-fab group relative flex items-center gap-3 rounded-2xl border-2 border-accent/50 bg-stone-950 pl-2.5 pr-5 py-2.5 text-left shadow-[0_0_28px_rgba(var(--accent)/0.45)] dark:bg-stone-900"
            aria-label="Open RS Bot"
          >
            <span className="rs-bot-pulse absolute inset-0 rounded-2xl" aria-hidden />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-soft font-display text-sm font-bold text-white shadow-[0_0_18px_rgba(var(--accent)/0.55)] dark:text-stone-950">
              RS
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-stone-950 bg-emerald-400" />
            </span>
            <span className="relative">
              <span className="block text-sm font-semibold text-white">RS Bot</span>
              <span className="block text-[11px] text-orange-200/80">Ask the crew · Online</span>
            </span>
          </motion.button>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="rs-bot-panel absolute bottom-0 right-0 flex h-[min(78vh,640px)] w-[min(94vw,420px)] flex-col overflow-hidden rounded-2xl border-2 border-accent/45 bg-white shadow-[0_0_48px_rgba(var(--accent)/0.35),0_24px_48px_rgba(0,0,0,0.18)] dark:bg-[#1c1917]"
          >
            {/* Header */}
            <div className="relative shrink-0 overflow-hidden border-b-2 border-accent/25 bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950 px-4 py-4">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 left-8 h-24 w-24 rounded-full bg-accent-soft/20 blur-2xl" />
              <div className="relative flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-accent/50 bg-gradient-to-br from-accent to-accent-soft font-display text-base font-bold text-white shadow-[0_0_20px_rgba(var(--accent)/0.5)] dark:text-stone-950">
                    RS
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-stone-950 bg-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-base font-semibold text-white tracking-tight">
                      RS Bot
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-orange-100/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Crew assistant · replies instantly
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close RS Bot"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="rs-bot-scroll flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin">
              {messages.map((m, i) => (
                <motion.div
                  key={`${m.role}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "bot" ? (
                    <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-accent/40 bg-accent/15 font-display text-[10px] font-bold text-accent">
                      RS
                    </div>
                  ) : null}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-md bg-accent text-white shadow-[0_0_16px_rgba(var(--accent)/0.35)] dark:text-stone-900"
                        : "rounded-bl-md border-2 border-accent/20 bg-stone-50 text-stone-800 dark:border-accent/25 dark:bg-white/[0.06] dark:text-stone-100"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing ? (
                <div className="flex justify-start items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border-2 border-accent/40 bg-accent/15 font-display text-[10px] font-bold text-accent">
                    RS
                  </div>
                  <div className="flex gap-1 rounded-2xl border-2 border-accent/20 bg-stone-50 px-3.5 py-3 dark:bg-white/[0.06]">
                    <span className="rs-bot-dot h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="rs-bot-dot h-1.5 w-1.5 rounded-full bg-accent [animation-delay:120ms]" />
                    <span className="rs-bot-dot h-1.5 w-1.5 rounded-full bg-accent [animation-delay:240ms]" />
                  </div>
                </div>
              ) : null}
              <div ref={messagesEndRef} />
            </div>

            {/* Composer */}
            <div className="shrink-0 border-t-2 border-accent/20 bg-gradient-to-t from-orange-50/50 to-white p-3 dark:from-orange-950/20 dark:to-[#1c1917]">
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                {QUICK_TOPICS.slice(0, 6).map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => send(topic)}
                    disabled={typing}
                    className="rounded-full border-2 border-accent/25 bg-white px-2.5 py-1 text-[10px] font-semibold text-stone-700 shadow-[0_0_10px_rgba(var(--accent)/0.08)] transition hover:border-accent/60 hover:shadow-[0_0_16px_rgba(var(--accent)/0.28)] disabled:opacity-50 dark:border-accent/30 dark:bg-white/5 dark:text-stone-200"
                  >
                    {topic}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") send();
                  }}
                  placeholder="Ask RS Bot…"
                  disabled={typing}
                  className="flex-1 rounded-xl border-2 border-accent/25 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none transition focus:border-accent focus:shadow-[0_0_18px_rgba(var(--accent)/0.25)] disabled:opacity-60 dark:border-accent/30 dark:bg-black/30 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => send()}
                  disabled={typing || !input.trim()}
                  className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_18px_rgba(var(--accent)/0.4)] transition hover:bg-accent-soft disabled:opacity-50 dark:text-stone-900"
                >
                  Send
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between gap-2">
                <p className="text-[10px] text-stone-500 dark:text-stone-400 line-clamp-1 flex-1">
                  {lastBot}
                </p>
                <Link
                  href="/contact"
                  className="shrink-0 text-xs font-semibold text-accent hover:underline"
                >
                  Contact →
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
