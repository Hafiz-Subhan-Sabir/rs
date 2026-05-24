"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { MotionIn } from "@/components/motion/MotionIn";
import { SectionHeader } from "@/components/ui/section-header";
import { PACKAGED_OFFER } from "@/constants/content";

export function PackagedOffer() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28 bg-gray-50/60 dark:bg-white/[0.02] border-y border-gray-200/80 dark:border-white/[0.06]">
      <SectionHeader
        eyebrow={PACKAGED_OFFER.eyebrow}
        title={PACKAGED_OFFER.title}
        description={PACKAGED_OFFER.description}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {PACKAGED_OFFER.phases.map((phase, i) => (
          <motion.article
            key={phase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.07, duration: 0.45 }}
            className="rounded-2xl border border-gray-200/90 bg-white/90 p-6 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-cyan-400">
              {phase.weeks}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{phase.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{phase.detail}</p>
          </motion.article>
        ))}
      </div>

      <MotionIn>
        <div className="text-center">
          <Link
            href={PACKAGED_OFFER.cta.href}
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold brand-button shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]"
          >
            {PACKAGED_OFFER.cta.label}
          </Link>
        </div>
      </MotionIn>
    </section>
  );
}
