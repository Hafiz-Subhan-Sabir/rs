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
  "How do you estimate project cost?",
  "How long does a project usually take?",
  "Do you work solo or with teams?",
  "Can you redesign an existing website?",
  "Do you provide consultancy only?",
  "How can we start working together?",
] as const;

const FALLBACK_TEXT =
  "Happy to help — send a short note on the contact page and we will reply with fit, approach, and next steps for your situation.";

const containsAny = (q: string, terms: string[]): boolean => terms.some((t) => q.includes(t));

function getCustomReply(question: string): string {
  const q = question.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();

  if (containsAny(q, ["ninety day", "90 day", "revenue loop", "flagship", "packaged", "digital fix"])) {
    return "We offer a ninety day digital fix plan: product, search and traffic, then pipeline and day-to-day tools under one written plan. Ask on the contact page.";
  }
  if (containsAny(q, ["what is rs dev", "rs dev", "who are you", "about you", "introduce", "briefly introduce", "intro"])) {
    return "RS Dev is a small studio led by Hafiz Subhan. We help companies fix websites, software, search, and daily workflows so the team can focus on real work.";
  }
  if (containsAny(q, ["your name", "what is your name", "hafiz", "subhan", "founder"])) {
    return "RS Dev is led by Hafiz Subhan. Use the contact page if you want to speak with him directly.";
  }
  if (containsAny(q, ["experience", "how many years", "years of experience", "how long have you", "exp"])) {
    return "We have multi-year experience shipping web products, integrations, and delivery work with startups and project teams.";
  }
  if (containsAny(q, ["service", "offer", "what do you do", "what can you do"])) {
    return "We build sites and apps, custom software, sales record setups, search work, integrations, campaign help, and advice — end to end or one slice at a time.";
  }
  if (containsAny(q, ["crm", "salesforce", "hubspot", "pipeline"])) {
    return "Yes. We help pick, set up, and tune sales boards with pipelines, reports, and live links so marketing and sales see the same numbers.";
  }
  if (containsAny(q, ["seo", "ranking", "google", "search console", "organic"])) {
    return "Yes. We fix structure, speed, and page intent with practical content guidance. No fake promises about page one overnight.";
  }
  if (containsAny(q, ["marketing", "ads", "campaign", "social media"])) {
    return "We help with channel picks, ad structure, tracking, and messages that match what you sell — execution or advice only.";
  }
  if (containsAny(q, ["chatbot", "chat bot", "website chat", "site chat", "ai bot", "live chat"])) {
    return "Yes. We build custom chat for business websites — FAQ answers, lead capture, and routing people to the right next step. Ask on the contact page with your site URL.";
  }
  if (containsAny(q, ["automation", "workflow", "integrate", "integration"])) {
    return "Yes. We connect the tools you already use and set up repeat workflows so your team spends less time on copy-paste work.";
  }
  if (containsAny(q, ["skill", "tech stack", "technology", "stack", "react", "next", "python", "fastapi", "typescript"])) {
    return "Typical stacks include React, Next.js, TypeScript, Tailwind CSS, Python, and FastAPI, plus integrations and sign-in patterns matched to the job.";
  }
  if (containsAny(q, ["budget", "cost", "price", "charges", "pricing", "rate"])) {
    return "Cost depends on scope and timeline. After a short brief, we reply with fit, a practical plan, and a clear estimate band.";
  }
  if (containsAny(q, ["timeline", "how long", "delivery", "take", "deadline", "duration"])) {
    return "Timelines vary: a landing refresh is different from a CRM rollout. You get a realistic schedule once we understand constraints.";
  }
  if (containsAny(q, ["solo", "team", "collaborat", "independent"])) {
    return "We work with founders and internal teams — embedded for sprints or fixed phases — and can align with vendors you already use.";
  }
  if (containsAny(q, ["redesign", "existing website", "improve my website", "revamp", "ui ux"])) {
    return "Yes. We can redesign or rebuild your site for performance, conversion, SEO foundations, and a UI system your team can extend.";
  }
  if (containsAny(q, ["consultancy", "advisory", "roadmap", "strategy only"])) {
    return "Yes. Advisory covers architecture, search, sales tools, or campaign roadmaps you can run internally or hand back for build.";
  }
  if (containsAny(q, ["full stack", "fullstack", "backend", "api", "database", "authentication"])) {
    return "Yes. We build full-stack applications: frontends, APIs, authentication, data workflows, and production-minded deployment.";
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
    return "Expect clear milestones, demos when useful, and straightforward written updates.";
  }
  if (containsAny(q, ["start", "hire", "work together", "contact", "begin", "onboard"])) {
    return "Use the contact page: share outcomes, timeline, tools you use, and budget band. We reply with fit and next steps.";
  }
  if (containsAny(q, ["project", "portfolio", "case study", "selected work"])) {
    return "Portfolio work is framed by outcome and industry — commerce, operations, security, and internal tools. Contact us to ask about a similar project.";
  }
  return FALLBACK_TEXT;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi — ask about our services, past work, timelines, or how to get started. For anything detailed, the contact page is best.",
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
        className="btn-cta-float brand-button rounded-lg px-5 py-3 text-sm font-semibold"
        aria-label="Open quick questions"
      >
        Quick questions
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute bottom-14 right-0 w-[min(92vw,380px)] rounded-xl border border-stone-200 bg-white shadow-soft-lg dark:border-white/10 dark:bg-stone-900"
          >
            <div className="flex items-center justify-between border-b border-stone-200 px-4 py-3 dark:border-white/10">
              <div className="text-sm font-semibold text-stone-900 dark:text-white">Quick answers</div>
              <button
                type="button"
                className="text-xs font-semibold text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-white"
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
                        ? "bg-accent text-white dark:text-stone-900"
                        : "bg-stone-100 text-stone-800 dark:bg-white/10 dark:text-stone-100"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-stone-200 p-3 dark:border-white/10">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {QUICK_TOPICS.slice(0, 6).map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => send(topic)}
                    className="rounded-full border border-stone-200 px-2 py-1 text-[11px] font-semibold text-stone-700 hover:bg-stone-50 dark:border-white/10 dark:text-stone-200 dark:hover:bg-white/10"
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
                  className="flex-1 rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none focus:border-accent dark:border-white/10 dark:bg-black/30 dark:text-white dark:focus:border-accent"
                />
                <button
                  type="button"
                  onClick={() => send()}
                  className="rounded-xl bg-stone-900 px-3 py-2 text-sm font-semibold text-white dark:bg-white dark:text-stone-900"
                >
                  Send
                </button>
              </div>
              <div className="mt-2 text-[11px] text-stone-500 dark:text-stone-400 line-clamp-2">{lastBot}</div>
              <Link href="/contact" className="mt-2 inline-block text-xs font-semibold text-accent hover:underline">
                Contact us →
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
