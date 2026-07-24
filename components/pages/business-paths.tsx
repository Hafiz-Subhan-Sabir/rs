"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { BUSINESS_PATHS } from "@/constants/content";
import { cn } from "@/lib/utils";

/**
 * Simple FAQ: clear question → short answer + result tags.
 * No problem/solution theatre — easy to scan.
 */
export function BusinessPaths() {
  const [openId, setOpenId] = useState<string | null>(BUSINESS_PATHS[0]?.id ?? null);

  return (
    <section className="relative w-[90vw] max-w-[90vw] mx-auto py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-56 w-56 rounded-full bg-accent/10 blur-[80px]" />
        <div className="absolute right-1/5 top-20 h-48 w-48 rounded-full bg-sky-400/10 blur-[70px]" />
      </div>

      <header className="mb-12 md:mb-14 text-center mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.15]"
        >
          Common Questions.{" "}
          <span className="text-accent">Simple Answers.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed"
        >
          Click a question to see how{" "}
          <span className="font-semibold text-accent">RS Dev</span> can help — written in plain
          English.
        </motion.p>
      </header>

      <ul className="mx-auto max-w-3xl space-y-3">
        {BUSINESS_PATHS.map((path, index) => {
          const isOpen = openId === path.id;
          const question = path.question;
          const answer = path.answer;
          return (
            <motion.li
              key={path.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={cn(
                  "rounded-2xl border-2 transition duration-300",
                  isOpen
                    ? "border-accent/50 bg-white shadow-[0_0_28px_rgba(194,65,12,0.14)] dark:bg-stone-900 dark:border-accent/45"
                    : "border-stone-200 bg-white/95 hover:border-accent/35 dark:border-white/12 dark:bg-stone-950/70",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : path.id)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="mt-0.5 font-display text-xs font-bold text-accent tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-stone-900 dark:text-white">
                      {question}
                    </span>
                  </div>
                  <ChevronDownIcon
                    className={cn(
                      "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t-2 border-stone-100 px-5 pb-5 pt-4 dark:border-white/10">
                        <p className="text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-300">
                          {answer}
                        </p>
                        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                          What You Get
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {path.outcomes.map((o) => (
                            <li
                              key={o}
                              className="rounded-lg border-2 border-emerald-600/25 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900 dark:border-emerald-400/30 dark:bg-emerald-950/40 dark:text-emerald-200"
                            >
                              {o}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={path.cta.href}
                          className="mt-5 inline-flex text-sm font-bold text-accent hover:underline"
                        >
                          {path.cta.label} →
                        </Link>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
