"use client";

import { FastLink } from "@/components/navigation/fast-link";
import { MotionIn } from "@/components/motion/MotionIn";

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
          className="relative overflow-hidden rounded-2xl border border-stone-200/90 bg-gradient-to-br from-white via-stone-50 to-orange-50/50 p-10 sm:p-12 lg:p-14 dark:border-white/10 dark:from-stone-900 dark:via-[#1c1917] dark:to-orange-950/25"
          data-reveal="fade-up"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-3">
            Get in touch
          </p>
          <h2 className="relative font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 dark:text-white max-w-2xl">
            {title}
          </h2>
          <p className="relative mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            {description}
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <FastLink
              href={primaryHref}
              className="btn-cta-float inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold brand-button"
            >
              {primaryLabel}
            </FastLink>
            <FastLink
              href={secondaryHref}
              className="btn-outline-cta inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold border border-stone-300 bg-white/80 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
            >
              {secondaryLabel}
            </FastLink>
          </div>
        </div>
      </MotionIn>
    </section>
  );
}
