"use client";

import { motion } from "framer-motion";

import { DiagramSlot } from "@/components/ui/diagram-slot";
import { SectionHeader } from "@/components/ui/section-header";
import { DELIVERY_CYCLE_STEPS, DIAGRAM_SLOTS } from "@/constants/content";
import { MotionIn } from "@/components/motion/MotionIn";

export function DeliveryCycle() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28 bg-gray-50/90 dark:bg-white/[0.02]">
      <SectionHeader
        eyebrow="How projects run"
        title="A delivery cycle built for visibility — not surprises."
        description="From first conversation to post-launch growth, every phase has a defined output. You always know what stage the work is in and what comes next."
        align="center"
      />

      <DiagramSlot
        className="mb-14 max-w-4xl mx-auto"
        imagePath={DIAGRAM_SLOTS.deliveryCycle.file}
        title={DIAGRAM_SLOTS.deliveryCycle.title}
        hint={DIAGRAM_SLOTS.deliveryCycle.hint}
      />

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {DELIVERY_CYCLE_STEPS.map((step, i) => (
            <MotionIn key={step.step} delay={i * 0.05}>
              <li className="relative flex flex-col items-center text-center rounded-2xl border border-gray-200/90 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04] transition hover:-translate-y-1 hover:shadow-lg dark:hover:border-cyan-400/20">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 text-sm font-bold brand-gradient-text ring-2 ring-white dark:ring-[#0c0b12]">
                  {step.step}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{step.detail}</p>
              </li>
            </MotionIn>
          ))}
        </ol>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
      >
        After launch, the same team continues into SEO, campaigns, automation, and maintenance — so momentum does not reset at go-live.
      </motion.p>
    </section>
  );
}
