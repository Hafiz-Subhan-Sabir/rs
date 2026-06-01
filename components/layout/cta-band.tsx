"use client";

import { FastLink } from "@/components/navigation/fast-link";
import { MotionIn } from "@/components/motion/MotionIn";
import { neonCardClass } from "@/lib/neon-card";

type CtaBandProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  title = "Ready to name what is stuck?",
  description = "Share the blocker, the deadline, and what good looks like in ninety days. We reply within a day with a plain plan.",
  primaryLabel = "Book a call",
  primaryHref = "/contact",
  secondaryLabel = "View our work",
  secondaryHref = "/work",
}: CtaBandProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 mt-12 md:mt-16 pb-16 md:pb-24">
      <MotionIn>
        <div
          className={neonCardClass("neon-green", "relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white/90 via-emerald-50/40 to-cyan-50/50 p-10 sm:p-12 lg:p-14 dark:border-white/10 dark:from-[#0f0b1f]/95 dark:via-[#0a1620]/80 dark:to-[#06222a]/70")}
          data-reveal="fade-up"
        >
          <div className="pointer-events-none absolute inset-0 ai-scanline opacity-40" />
          <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white max-w-2xl">
            {title}
          </h2>
          <p className="relative mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <FastLink
              href={primaryHref}
              className="btn-cta-float inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold brand-button"
            >
              {primaryLabel}
            </FastLink>
            <FastLink
              href={secondaryHref}
              className="btn-outline-cta btn-outline-cta-float inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-gray-300 bg-white/70 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
            >
              {secondaryLabel}
            </FastLink>
          </div>
        </div>
      </MotionIn>
    </section>
  );
}
