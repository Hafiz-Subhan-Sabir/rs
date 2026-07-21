"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { SectionHeader } from "@/components/ui/section-header";
import { BUSINESS_PATHS } from "@/constants/content";
import { cn } from "@/lib/utils";

export function BusinessPaths() {
  const [openId, setOpenId] = useState<string>(BUSINESS_PATHS[0].id);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <SectionHeader
        eyebrow="Problem to solution"
        title="Different companies, different digital problems"
        description="Open the line that sounds like your week. Each path shows what is going wrong and how we fix it so your team can focus on quality work."
        align="center"
      />

      <ul className="mx-auto max-w-3xl space-y-3">
        {BUSINESS_PATHS.map((path) => {
          const isOpen = openId === path.id;
          return (
            <li key={path.id}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? "" : path.id)}
                className={cn(
                  "w-full rounded-xl border px-5 py-4 text-left transition",
                  isOpen
                    ? "border-accent/30 bg-white shadow-soft dark:bg-white/[0.06] dark:border-accent/25"
                    : "border-stone-200/90 bg-white/70 hover:border-stone-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm sm:text-base font-semibold text-stone-900 dark:text-white">
                    {path.label}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-stone-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 rounded-xl border border-stone-200/80 bg-white p-5 dark:border-white/10 dark:bg-stone-900/80">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-600/90 dark:text-rose-400/80">
                        The friction
                      </p>
                      <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">{path.problem}</p>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                        The response
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{path.solution}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {path.outcomes.map((o) => (
                          <li
                            key={o}
                            className="rounded-md border border-stone-200/80 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-white/10 dark:bg-white/5 dark:text-stone-300"
                          >
                            {o}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={path.cta.href}
                        className="mt-5 inline-flex text-sm font-semibold text-accent hover:underline"
                      >
                        {path.cta.label} →
                      </Link>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
