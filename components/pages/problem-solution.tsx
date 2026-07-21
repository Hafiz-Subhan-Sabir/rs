"use client";

import { MotionIn } from "@/components/motion/MotionIn";
import { SectionHeader } from "@/components/ui/section-header";
import { PROBLEM_SOLUTION_BLOCKS, PROBLEM_SOLUTION_INTRO } from "@/constants/content";

export function ProblemSolution() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 pb-20 md:pt-12 md:pb-28">
      <SectionHeader
        title={PROBLEM_SOLUTION_INTRO.headline}
        description={PROBLEM_SOLUTION_INTRO.subhead}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PROBLEM_SOLUTION_BLOCKS.map((block, i) => (
          <MotionIn key={block.problem} delay={i * 0.06}>
            <article className="surface-card h-full rounded-xl border border-stone-200/90 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-600/90 dark:text-rose-400/90">
                What is stuck
              </p>
              <p className="mt-2 text-base font-semibold text-stone-900 dark:text-white leading-snug">
                {block.problem}
              </p>
              <div className="my-5 h-px bg-gradient-to-r from-accent/40 via-accent/20 to-transparent" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                What changes
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{block.solution}</p>
            </article>
          </MotionIn>
        ))}
      </div>
    </section>
  );
}
