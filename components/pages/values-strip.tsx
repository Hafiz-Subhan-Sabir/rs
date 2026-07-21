"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import { COMPANY_VALUES } from "@/constants/content";

export function ValuesStrip() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28 border-y border-stone-200/80 dark:border-white/[0.06]">
      <SectionHeader
        eyebrow="How we work"
        title="Problems solved, not more tech noise"
        description="Principles that keep delivery clear for entrepreneurs who want outcomes they can plan around."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {COMPANY_VALUES.map((v, i) => (
          <motion.article
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.07, duration: 0.45 }}
            className="surface-card rounded-xl border border-stone-200/90 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-white">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{v.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
