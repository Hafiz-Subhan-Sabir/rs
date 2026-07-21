"use client";

import { MotionIn } from "@/components/motion/MotionIn";
import { PROOF_STATS } from "@/constants/case-studies";

export function ImpactStrip() {
  return (
    <section className="relative border-y border-stone-200/80 bg-white/70 py-16 md:py-20 dark:border-white/[0.07] dark:bg-stone-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <MotionIn>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-10">
            In numbers
          </p>
        </MotionIn>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4"
          data-stagger
        >
          {PROOF_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 dark:text-white">
                {stat.value}
              </div>
              <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
