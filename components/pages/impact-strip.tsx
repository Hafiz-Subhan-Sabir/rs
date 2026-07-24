"use client";

import { CountUpText } from "@/components/ui/count-up-text";
import { PROOF_STATS } from "@/constants/case-studies";

export function ImpactStrip() {
  return (
    <section className="relative border-y-2 border-stone-200 bg-gradient-to-b from-orange-50/50 via-white to-sky-50/40 py-16 md:py-20 dark:border-white/[0.08] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      <div className="mx-auto w-[90vw] max-w-[90vw]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {PROOF_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border-2 border-stone-200/90 bg-white px-4 py-7 text-center shadow-sm dark:border-white/12 dark:bg-stone-950/80"
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 dark:text-white">
                <CountUpText value={stat.value} />
              </div>
              <p className="mt-3 text-sm sm:text-base uppercase tracking-[0.14em] font-semibold text-accent">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
