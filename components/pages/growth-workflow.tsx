"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import { GROWTH_WORKFLOW_STEPS } from "@/constants/content";

export function GrowthWorkflow() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <SectionHeader
        eyebrow="Growth workflow"
        title="From discovery to compounding results"
        description="A clear sequence so marketing and product work reinforce each other instead of competing for attention."
        align="center"
      />

      <ol className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {GROWTH_WORKFLOW_STEPS.map((step, i) => (
          <motion.li
            key={step.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="rounded-xl border border-stone-200/90 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {step.step}
            </p>
            <h3 className="mt-2 font-display text-base font-semibold text-stone-900 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {step.solution}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
