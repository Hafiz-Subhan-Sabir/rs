"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { DiagramSlot } from "@/components/ui/diagram-slot";
import { SectionHeader } from "@/components/ui/section-header";
import { BUSINESS_PATHS, DIAGRAM_SLOTS } from "@/constants/content";
import { neonCardClass } from "@/lib/neon-card";
import { cn } from "@/lib/utils";

type BusinessPathsProps = {
  /** Hide diagram when a gallery already shows it on the same page */
  showDiagram?: boolean;
};

export function BusinessPaths({ showDiagram = true }: BusinessPathsProps) {
  const [openId, setOpenId] = useState<string>(BUSINESS_PATHS[0].id);
  const activePath = BUSINESS_PATHS.find((p) => p.id === openId);
  const diagram = activePath ? DIAGRAM_SLOTS[activePath.diagramKey] : DIAGRAM_SLOTS.growthFunnel;

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28 bg-gray-50/90 dark:bg-white/[0.02]">
      <SectionHeader
        title="Different companies, different digital problems. We solve yours with the right tech."
        description="Open the line that sounds like your week. Each path shows what is going wrong and how we fix it so your team can focus on quality work."
        align="center"
      />

      <div
        className={
          showDiagram
            ? "grid grid-cols-1 lg:grid-cols-[1fr_minmax(420px,680px)] gap-10 lg:gap-14 items-start"
            : "max-w-3xl mx-auto"
        }
      >
        <ul className="space-y-3">
          {BUSINESS_PATHS.map((path) => {
            const isOpen = openId === path.id;
            return (
              <li key={path.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : path.id)}
                  className={cn(
                    neonCardClass(path.id, "w-full rounded-2xl border px-5 py-4 text-left transition"),
                    isOpen
                      ? "bg-white dark:bg-white/[0.06]"
                      : "border-gray-200/90 bg-white/70 hover:border-gray-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                      {path.label}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
                      <div className={neonCardClass(path.id, "mt-3 rounded-2xl border border-gray-200/80 bg-white p-5 dark:border-white/10 dark:bg-[#0a0814]/80")}>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-rose-600/90 dark:text-rose-400/80">
                          The friction
                        </p>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{path.problem}</p>
                        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-600 dark:text-cyan-400">
                          The response
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{path.solution}</p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {path.outcomes.map((o) => (
                            <li
                              key={o}
                              className="rounded-full border border-gray-200/80 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                            >
                              {o}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={path.cta.href}
                          className="mt-5 inline-flex text-sm font-semibold text-emerald-600 hover:underline dark:text-cyan-300"
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

        {showDiagram ? (
          <div className="lg:sticky lg:top-28">
            <DiagramSlot
              variant="inline"
              size="large"
              imagePath={diagram.file}
              title={diagram.title}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
