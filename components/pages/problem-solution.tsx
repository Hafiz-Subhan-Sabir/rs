"use client";

import { MotionIn } from "@/components/motion/MotionIn";
import { SectionHeader } from "@/components/ui/section-header";
import { PROBLEM_SOLUTION_BLOCKS, PROBLEM_SOLUTION_INTRO } from "@/constants/content";

export function ProblemSolution() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <SectionHeader
        eyebrow={PROBLEM_SOLUTION_INTRO.eyebrow}
        title={PROBLEM_SOLUTION_INTRO.headline}
        description={PROBLEM_SOLUTION_INTRO.subhead}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PROBLEM_SOLUTION_BLOCKS.map((block, i) => (
          <MotionIn key={block.problem} delay={i * 0.06}>
            <article className="h-full rounded-2xl border border-gray-200/90 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.04] transition hover:border-emerald-400/30 hover:shadow-lg dark:hover:border-cyan-400/20">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-rose-600/90 dark:text-rose-400/90">
                The challenge
              </p>
              <p className="mt-2 text-base font-semibold text-gray-900 dark:text-white leading-snug">
                {block.problem}
              </p>
              <div className="my-5 h-px bg-gradient-to-r from-emerald-400/50 via-cyan-400/30 to-transparent" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-cyan-400">
                Our approach
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{block.solution}</p>
            </article>
          </MotionIn>
        ))}
      </div>
    </section>
  );
}
