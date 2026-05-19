"use client";

import Link from "next/link";

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
  title = "Ready to scope your next build?",
  description = "Share goals, timeline, and constraints. We reply within 24 hours with a clear plan — no black box.",
  primaryLabel = "Book a scope call",
  primaryHref = "/contact",
  secondaryLabel = "View our work",
  secondaryHref = "/work",
}: CtaBandProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 mt-16 md:mt-24">
      <MotionIn>
        <div
          className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white/90 via-emerald-50/40 to-cyan-50/50 p-8 sm:p-10 dark:border-white/10 dark:from-[#0f0b1f]/95 dark:via-[#0a1620]/80 dark:to-[#06222a]/70"
          data-reveal="fade-up"
        >
          <div className="pointer-events-none absolute inset-0 ai-scanline opacity-40" />
          <h2 className="relative text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white max-w-xl">
            {title}
          </h2>
          <p className="relative mt-3 max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <div className="relative mt-6 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold brand-button transition"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-gray-300 bg-white/70 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 transition"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </MotionIn>
    </section>
  );
}
