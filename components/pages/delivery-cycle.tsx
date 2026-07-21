"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import { DELIVERY_CYCLE_STEPS } from "@/constants/content";
import { MotionIn } from "@/components/motion/MotionIn";

export function DeliveryCycle() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28 bg-stone-50/80 dark:bg-white/[0.02]">
      <SectionHeader
        eyebrow="How projects run"
        title="Six steps from first call to live"
        description="From the first conversation through launch and support, you always know what we are building and why."
        align="center"
      />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {DELIVERY_CYCLE_STEPS.map((step, i) => (
          <MotionIn key={step.step} delay={i * 0.05}>
            <li className="flex h-full flex-col rounded-xl border border-stone-200/90 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="font-display grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                {step.step}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-stone-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                {step.detail}
              </p>
            </li>
          </MotionIn>
        ))}
      </ol>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center text-sm text-stone-600 dark:text-stone-400 max-w-2xl mx-auto"
      >
        After go live the same people keep search, ads, routines, and care moving so momentum does not reset at
        launch.
      </motion.p>
    </section>
  );
}
