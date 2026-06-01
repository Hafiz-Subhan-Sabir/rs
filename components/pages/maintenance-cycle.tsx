"use client";

import Image from "next/image";

import { SectionHeader } from "@/components/ui/section-header";
import { DIAGRAM_SLOTS, MAINTENANCE_CYCLE_STEPS } from "@/constants/content";
import { MotionIn } from "@/components/motion/MotionIn";

const STEP_ACCENTS = [
  { badge: "bg-emerald-500 text-white", title: "text-emerald-800 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-500/35" },
  { badge: "bg-cyan-600 text-white dark:bg-cyan-500", title: "text-cyan-800 dark:text-cyan-300", border: "border-cyan-200 dark:border-cyan-500/35" },
  { badge: "bg-blue-600 text-white dark:bg-blue-500", title: "text-blue-800 dark:text-blue-300", border: "border-blue-200 dark:border-blue-500/35" },
  { badge: "bg-violet-600 text-white dark:bg-violet-500", title: "text-violet-800 dark:text-violet-300", border: "border-violet-200 dark:border-violet-500/35" },
  { badge: "bg-amber-500 text-amber-950 dark:bg-amber-400 dark:text-amber-950", title: "text-amber-900 dark:text-amber-300", border: "border-amber-200 dark:border-amber-500/35" },
] as const;

export function MaintenanceCycle() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <SectionHeader
        title="After launch, we keep your tech healthy so you stay focused on the business"
        description="Sites and tools need ongoing care. We handle updates, speed, and small fixes so digital problems do not pull you back from quality work."
        align="center"
      />

      <MotionIn>
        <figure className="mx-auto mb-12 max-w-6xl">
          <div className="group image-hover-wrap relative aspect-[16/9] min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#12101c]">
            <Image
              src={DIAGRAM_SLOTS.maintenanceLoop.file}
              alt="Quarterly maintenance and care loop"
              fill
              className="image-hover-scale object-contain p-4 sm:p-6 lg:p-8"
              sizes="(max-width: 1280px) 96vw, 1120px"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {DIAGRAM_SLOTS.maintenanceLoop.title}
          </figcaption>
        </figure>
      </MotionIn>

      <ol className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
        {MAINTENANCE_CYCLE_STEPS.map((step, i) => {
          const accent = STEP_ACCENTS[i % STEP_ACCENTS.length];
          return (
            <MotionIn key={step.step} delay={i * 0.05}>
              <li
                className={`flex gap-4 rounded-2xl border bg-white p-4 dark:bg-[#0f0e18] ${accent.border}`}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg text-xs font-bold ${accent.badge}`}
                >
                  {step.step}
                </span>
                <div>
                  <h3 className={`text-sm font-semibold text-gray-900 dark:text-gray-100 ${accent.title}`}>
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{step.detail}</p>
                </div>
              </li>
            </MotionIn>
          );
        })}
      </ol>
    </section>
  );
}
