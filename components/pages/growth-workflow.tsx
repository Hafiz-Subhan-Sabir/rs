"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { DiagramSlot } from "@/components/ui/diagram-slot";
import { SectionHeader } from "@/components/ui/section-header";
import { DIAGRAM_SLOTS, GROWTH_WORKFLOW_STEPS } from "@/constants/content";

export function GrowthWorkflow() {
  const [openId, setOpenId] = useState<string>(GROWTH_WORKFLOW_STEPS[0].id);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <SectionHeader
        eyebrow="Growth workflow"
        title="From launch to qualified leads — one connected program."
        description="This is how we compound results: each phase solves a specific gap. Expand any stage to see the challenge, our response, and what gets delivered."
        align="center"
      />

      <DiagramSlot
        className="mb-12 max-w-4xl mx-auto"
        imagePath={DIAGRAM_SLOTS.growthFunnel.file}
        title={DIAGRAM_SLOTS.growthFunnel.title}
        hint={DIAGRAM_SLOTS.growthFunnel.hint}
      />

      <div className="max-w-3xl mx-auto space-y-2">
        {GROWTH_WORKFLOW_STEPS.map((item, index) => {
          const isOpen = openId === item.id;
          const isLast = index === GROWTH_WORKFLOW_STEPS.length - 1;
          return (
            <div key={item.id} className="relative">
              {!isLast ? (
                <div className="absolute left-[1.65rem] top-14 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 to-cyan-400/20" />
              ) : null}
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? "" : item.id)}
                className={`relative z-10 flex w-full items-start gap-4 rounded-2xl border px-4 py-4 sm:px-5 text-left transition ${
                  isOpen
                    ? "border-emerald-400/40 bg-white shadow-md dark:border-cyan-400/30 dark:bg-white/[0.06]"
                    : "border-gray-200/80 bg-white/70 hover:bg-white dark:border-white/10 dark:bg-white/[0.03]"
                }`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 text-sm font-bold text-emerald-700 dark:text-cyan-300">
                  {item.step}
                </span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
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
                    <div className="ml-0 sm:ml-16 mt-2 mb-4 rounded-xl border border-gray-200/70 bg-gray-50/90 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-rose-600/90 dark:text-rose-400/80">
                            Challenge
                          </p>
                          <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-300">{item.problem}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-cyan-400">
                            Solution
                          </p>
                          <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">{item.solution}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-gray-500">Deliverables</p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {item.deliverables.map((d) => (
                          <li
                            key={d}
                            className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200/80 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
