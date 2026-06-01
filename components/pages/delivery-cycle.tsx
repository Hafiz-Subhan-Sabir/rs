"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import { DELIVERY_CYCLE_STEPS, DIAGRAM_SLOTS } from "@/constants/content";
import { MotionIn } from "@/components/motion/MotionIn";

type DeliveryCycleProps = {
  showDiagram?: boolean;
};

/** Four plus accent colors for step recognition in light and dark mode */
const STEP_ACCENTS = [
  {
    ring: "ring-emerald-500/50",
    badge: "bg-emerald-500 text-white",
    border: "border-emerald-200 dark:border-emerald-500/35",
    title: "text-emerald-800 dark:text-emerald-300",
  },
  {
    ring: "ring-cyan-500/50",
    badge: "bg-cyan-600 text-white dark:bg-cyan-500",
    border: "border-cyan-200 dark:border-cyan-500/35",
    title: "text-cyan-800 dark:text-cyan-300",
  },
  {
    ring: "ring-blue-500/50",
    badge: "bg-blue-600 text-white dark:bg-blue-500",
    border: "border-blue-200 dark:border-blue-500/35",
    title: "text-blue-800 dark:text-blue-300",
  },
  {
    ring: "ring-violet-500/50",
    badge: "bg-violet-600 text-white dark:bg-violet-500",
    border: "border-violet-200 dark:border-violet-500/35",
    title: "text-violet-800 dark:text-violet-300",
  },
  {
    ring: "ring-amber-500/50",
    badge: "bg-amber-500 text-amber-950 dark:bg-amber-400 dark:text-amber-950",
    border: "border-amber-200 dark:border-amber-500/35",
    title: "text-amber-900 dark:text-amber-300",
  },
  {
    ring: "ring-rose-500/50",
    badge: "bg-rose-600 text-white dark:bg-rose-500",
    border: "border-rose-200 dark:border-rose-500/35",
    title: "text-rose-800 dark:text-rose-300",
  },
] as const;

function StepCards() {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {DELIVERY_CYCLE_STEPS.map((step, i) => {
        const accent = STEP_ACCENTS[i % STEP_ACCENTS.length];
        return (
          <MotionIn key={step.step} delay={i * 0.05}>
            <li
              className={`flex h-full flex-col rounded-2xl border bg-white p-5 shadow-sm dark:bg-[#0f0e18] ${accent.border}`}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xs font-bold ring-2 ring-offset-2 ring-offset-white dark:ring-offset-[#0f0e18] ${accent.badge} ${accent.ring}`}
              >
                {step.step}
              </span>
              <h3
                className={`mt-4 text-sm font-semibold text-gray-900 dark:text-gray-100 ${accent.title}`}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                {step.detail}
              </p>
            </li>
          </MotionIn>
        );
      })}
    </ol>
  );
}

export function DeliveryCycle({ showDiagram = true }: DeliveryCycleProps) {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28 bg-gray-50/90 dark:bg-[#0a0912]">
      <SectionHeader
        title="How we solve your problem, step by step"
        description="From first call through launch and support, you always know what we are building and why it helps your business."
        align="center"
      />

      {showDiagram ? (
        <MotionIn>
          <figure className="mx-auto max-w-6xl">
            <div className="group image-hover-wrap relative aspect-[16/9] min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#12101c]">
              <Image
                src={DIAGRAM_SLOTS.deliveryCycle.file}
                alt="Project delivery cycle from discover through grow"
                fill
                className="image-hover-scale object-contain p-4 sm:p-6 lg:p-8"
                sizes="(max-width: 1280px) 96vw, 1120px"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {DIAGRAM_SLOTS.deliveryCycle.title}
            </figcaption>
          </figure>
        </MotionIn>
      ) : (
        <StepCards />
      )}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
      >
        After go live the same people keep search, ads, routines, and care moving so momentum does not reset at
        launch.
      </motion.p>
    </section>
  );
}
