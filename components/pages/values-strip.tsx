"use client";

import { motion } from "framer-motion";

import { DiagramSlot } from "@/components/ui/diagram-slot";
import { SectionHeader } from "@/components/ui/section-header";
import { COMPANY_VALUES, DIAGRAM_SLOTS } from "@/constants/content";
import { neonCardClass } from "@/lib/neon-card";

type ValuesStripProps = {
  showDiagram?: boolean;
};

export function ValuesStrip({ showDiagram = true }: ValuesStripProps) {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28 border-y border-gray-200/80 dark:border-white/[0.06]">
      <SectionHeader
        title="How we work with entrepreneurs who want problems solved, not more tech noise"
        align="center"
      />

      {showDiagram ? (
        <DiagramSlot
          variant="inline"
          size="large"
          imagePath={DIAGRAM_SLOTS.brandExperience.file}
          title={DIAGRAM_SLOTS.brandExperience.title}
          className="mx-auto mb-12 max-w-6xl"
        />
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {COMPANY_VALUES.map((v, i) => (
          <motion.article
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.07, duration: 0.45 }}
            className={neonCardClass(i, "rounded-2xl border border-gray-200/90 bg-gradient-to-br from-white to-emerald-50/30 p-6 dark:border-white/10 dark:from-white/[0.05] dark:to-cyan-950/20")}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{v.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
