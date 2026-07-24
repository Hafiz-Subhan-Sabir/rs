"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { MAINTENANCE_CYCLE_STEPS } from "@/constants/content";
import { MotionIn } from "@/components/motion/MotionIn";

export function MaintenanceCycle() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <SectionHeader
        title="After Launch, We Keep Your Tech Healthy"
        description="Sites and tools need ongoing care. We handle updates, speed, and small fixes so digital problems do not pull you back from quality work."
        align="center"
      />

      <ol className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
        {MAINTENANCE_CYCLE_STEPS.map((step, i) => (
          <MotionIn key={step.step} delay={i * 0.05}>
            <li className="flex gap-4 rounded-xl border border-stone-200/90 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                {step.step}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-stone-900 dark:text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{step.detail}</p>
              </div>
            </li>
          </MotionIn>
        ))}
      </ol>
    </section>
  );
}
