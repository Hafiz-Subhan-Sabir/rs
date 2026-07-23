"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { MotionIn } from "@/components/motion/MotionIn";
import { SectionHeader } from "@/components/ui/section-header";
import { PACKAGED_OFFER } from "@/constants/content";
import { useMotionReady } from "@/lib/motion";

export function PackagedOffer() {
  const motionReady = useMotionReady();

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28 border-y border-stone-200/80 dark:border-white/[0.06]">
      <SectionHeader
        eyebrow="A clear plan"
        title={PACKAGED_OFFER.title}
        description={PACKAGED_OFFER.description}
        align="center"
      />

      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {PACKAGED_OFFER.phases.map((phase, i) => (
            <motion.article
              key={phase.title}
              initial={motionReady ? { opacity: 0, y: 20 } : false}
              whileInView={motionReady ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="surface-card rounded-xl border border-stone-200/90 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {phase.weeks}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-stone-900 dark:text-white">
                {phase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {phase.detail}
              </p>
            </motion.article>
          ))}
        </div>

        <MotionIn>
          <div className="text-center md:text-left">
            <Link
              href={PACKAGED_OFFER.cta.href}
              className="btn-cta-float inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-semibold brand-button"
            >
              {PACKAGED_OFFER.cta.label}
            </Link>
          </div>
        </MotionIn>
      </div>
    </section>
  );
}
