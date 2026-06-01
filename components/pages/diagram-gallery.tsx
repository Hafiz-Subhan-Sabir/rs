"use client";

import { motion } from "framer-motion";

import { DiagramSlot } from "@/components/ui/diagram-slot";
import { SectionHeader } from "@/components/ui/section-header";
import { DIAGRAM_GALLERY_ITEMS } from "@/constants/content";
import { neonCardClass } from "@/lib/neon-card";

export function DiagramGallery() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28 border-y border-gray-200/80 dark:border-white/[0.06] bg-gray-50/60 dark:bg-white/[0.02]">
      <SectionHeader
        title="Five maps for the work we run with you."
        description="Each visual matches a real program: revenue, delivery, care, operations, and brand presence."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {DIAGRAM_GALLERY_ITEMS.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={neonCardClass(i, "rounded-2xl border border-gray-200/90 bg-white/90 p-5 sm:p-6 dark:border-white/10 dark:bg-white/[0.04] transition hover:-translate-y-0.5")}
          >
            <DiagramSlot imagePath={item.file} title={item.title} />
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 text-center">
              {item.caption}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
