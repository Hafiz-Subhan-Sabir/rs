"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Msg = { role: "user" | "bot"; text: string };

const QUICK_TOPICS = [
  "What is RS Dev?",
  "What services do you offer?",
  "Do you build CRM and integrations?",
  "Do you handle SEO and digital marketing?",
  "What about AI agents and automation?",
  "How do you estimate project cost?",
  "How long does a project usually take?",
  "Do you work solo or with teams?",
  "Can you redesign an existing website?",
  "Do you provide consultancy only?",
  "How can we start working together?",
] as const;

const FALLBACK_TEXT =
  "Good question. Drop details on the contact page and we will answer with fit, approach, and next steps for your exact goal.";

const containsAny = (q: string, terms: string[]): boolean => terms.some((t) => q.includes(t));

function getCustomReply(question: string): string {
  const q = question.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();

  if (containsAny(q, ["ninety day", "90 day", "revenue loop", "flagship", "packaged", "digital fix"])) {
    return "RS Dev offers a ninety day digital fix plan: product, search and traffic, then pipeline and workflow tech under one written plan. Ask on the contact page with intent=growth.";
  }
  if (containsAny(q, ["what is rs dev", "rs dev", "who are you", "about you", "introduce", "briefly introduce", "intro"])) {
    return "RS Dev helps entrepreneurs solve digital problems with technology: websites, software, search, and workflows, so companies can focus on quality work.";
  }
  if (containsAny(q, ["your name", "what is your name", "hafiz", "subhan", "founder"])) {
    return "You are speaking with the RS Dev site assistant. RS Dev is led by Hafiz Subhan; use the contact page for a direct conversation.";
  }
  if (containsAny(q, ["experience", "how many years", "years of experience", "how long have you", "exp"])) {
    return "The team behind RS Dev has multi-year experience across web products, integrations, AI workflows, and delivery with startups and project teams.";
  }
  if (containsAny(q, ["service", "offer", "what do you do", "what can you do"])) {
    return "RS Dev offers sites and apps, bespoke software, sales record setups, search work, assistant bots, background routines, campaign help, and advice. End to end or one slice at a time.";
  }
  if (containsAny(q, ["crm", "salesforce", "hubspot", "pipeline"])) {
    return "Yes. We help pick, set up, and tune sales boards with pipelines, reports, and live links so marketing and sales see the same numbers.";
  }
  if (containsAny(q, ["seo", "ranking", "google", "search console", "organic"])) {
    return "Yes. We fix structure, speed, and page intent with practical content guidance. No fake promises about page one overnight.";
  }
  if (containsAny(q, ["marketing", "ads", "campaign", "social media"])) {
    return "We help with channel picks, ad structure, tracking, and messages that match what you sell. Execution or advice only.";
  }
  if (containsAny(q, ["ai agent", "ai bot", "automation", "workflow", "llm", "chatbot"])) {
    return "We wire assistant bots and background routines to your real tools with guardrails, logs, and human handoff when judgment matters.";
  }
  if (containsAny(q, ["skill", "tech stack", "technology", "stack", "react", "next", "python", "fastapi", "typescript"])) {
    return "Typical stacks include React, Next.js, TypeScript, Tailwind CSS, Python, and FastAPI, plus live links, sign in patterns, and assistant APIs matched to the job.";
  }
  if (containsAny(q, ["budget", "cost", "price", "charges", "pricing", "rate"])) {
    return "Investment depends on scope, channels (product vs SEO vs CRM), and timeline. After a short brief, RS Dev replies with fit, a practical plan, and a clear estimate band.";
  }
  if (containsAny(q, ["timeline", "how long", "delivery", "take", "deadline", "duration"])) {
    return "Timelines vary: landing refreshes differ from CRM rollouts or automation lanes. You get a realistic schedule after we understand constraints and success signals.";
  }
  if (containsAny(q, ["solo", "team", "collaborat", "independent"])) {
    return "We work with founders and internal teams, embedded for sprints or fixed phases, and can align with vendors you already use.";
  }
  if (containsAny(q, ["redesign", "existing website", "improve my website", "revamp", "ui ux"])) {
    return "Yes. RS Dev can redesign or rebuild your site for performance, conversion, SEO foundations, and a UI system your team can extend.";
  }
  if (containsAny(q, ["consultancy", "advisory", "roadmap", "strategy only"])) {
    return "Yes. Advisory slices cover architecture, search, sales tools, assistant feasibility, or campaign roadmaps you can run internally or hand back for build.";
  }
  if (containsAny(q, ["full stack", "fullstack", "backend", "api", "database", "authentication"])) {
    return "Yes. RS Dev builds full-stack applications: frontends, APIs, authentication, data workflows, and production-minded deployment patterns.";
  }
  if (containsAny(q, ["deploy", "deployment", "vercel", "production", "server"])) {
    return "Yes. RS Dev supports deployment and go-live readiness, including monitoring hooks and handoff documentation.";
  }
  if (containsAny(q, ["hosting", "maintenan", "support", "after launch", "bug fix"])) {
    return "Yes. Light retainers or agreed support windows are available for updates, tuning, and fixes after launch.";
  }
  if (containsAny(q, ["revision", "changes", "update", "edits"])) {
    return "Revisions are part of healthy delivery. RS Dev keeps feedback loops explicit so the final result matches agreed scope.";
  }
  if (containsAny(q, ["communication", "update frequency", "progress", "milestone", "report"])) {
    return "Expect clear milestones, incremental demos where useful, and straightforward written updates.";
  }
  if (containsAny(q, ["start", "hire", "work together", "contact", "begin", "onboard"])) {
    return "Use the Book a call page: share outcomes, timeline, CRM and stack context, and budget band. RS Dev replies with fit and next steps.";
  }
  if (containsAny(q, ["project", "portfolio", "case study", "selected work"])) {
    return "Portfolio work is framed by outcome and industry. Featured builds cover commerce, operations, security, and automation. Use contact to ask about a similar project.";
  }
  return FALLBACK_TEXT;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text:
        "Welcome. Ask how we solve digital problems for companies, our services, portfolio work, or how to book a call.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const lastBot = useMemo(() => {
    const bots = messages.filter((m) => m.role === "bot");
    return (bots.length ? bots[bots.length - 1].text : "") ?? "";
  }, [messages]);

  const send = (forcedText?: string) => {
    const text = (forcedText ?? input).trim();
    if (!text) return;
    const reply = getCustomReply(text);
    setMessages((m) => [...m, { role: "user", text }, { role: "bot", text: reply }]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[70]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="btn-cta-float brand-button rounded-full px-5 py-3 text-sm font-semibold ring-1 ring-white/20"
        aria-label="Open chat"
      >
        Ask RS Dev
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute bottom-14 right-0 w-[min(92vw,380px)] rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0b0718]"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-white/10">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">RS Dev assistant</div>
              <button
                type="button"
                className="text-xs font-semibold text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="max-h-[min(52vh,420px)] overflow-y-auto px-3 py-3 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={`${m.role}-${i}`}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-emerald-600 text-white dark:bg-cyan-700"
                        : "bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-100"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-200 p-3 dark:border-white/10">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {QUICK_TOPICS.slice(0, 6).map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => send(topic)}
                    className="rounded-full border border-gray-200 px-2 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/10"
                  >
                    {topic}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") send();
                  }}
                  placeholder="Ask about services…"
                  className="flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-violet-400 dark:border-white/10 dark:bg-black/30 dark:text-white dark:focus:border-cyan-400"
                />
                <button
                  type="button"
                  onClick={() => send()}
                  className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white dark:bg-white dark:text-gray-900"
                >
                  Send
                </button>
              </div>
              <div className="mt-2 text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2">{lastBot}</div>
              <Link href="/contact" className="mt-2 inline-block text-xs font-semibold text-emerald-700 hover:underline dark:text-cyan-300">
                Book a scope call →
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
