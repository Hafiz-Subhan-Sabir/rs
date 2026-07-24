"use client";

import { motion } from "framer-motion";

import { FastLink } from "@/components/navigation/fast-link";
import { MotionIn } from "@/components/motion/MotionIn";
import { useMotionReady } from "@/lib/motion";

type CtaBandProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  title = "Ready To Start Your Next Chapter?",
  description = "Tell us what is slowing your team down — a website, a tool, search, or daily busywork. We reply within a day with a plain plan and an honest yes or no on fit.",
  primaryLabel = "Describe Your Problem",
  primaryHref = "/contact",
  secondaryLabel = "Meet The Crew",
  secondaryHref = "/about",
}: CtaBandProps) {
  const ready = useMotionReady();

  return (
    <section className="mx-auto w-[90vw] max-w-[90vw] mt-12 md:mt-16 pb-16 md:pb-24">
      <MotionIn>
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] border-2 border-accent/30 bg-gradient-to-br from-white via-orange-50/40 to-sky-50/50 p-8 sm:p-11 lg:p-14 dark:border-accent/35 dark:from-stone-950 dark:via-stone-900 dark:to-sky-950/30 shadow-[0_20px_56px_rgba(28,25,23,0.08)]"
          whileHover={ready ? { y: -3 } : undefined}
          transition={{ duration: 0.35 }}
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl" />

          <motion.div
            className="pointer-events-none absolute right-8 top-8 h-3 w-3 rounded-full bg-accent"
            animate={ready ? { scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] } : undefined}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <h2 className="relative font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold tracking-tight text-stone-900 dark:text-white max-w-2xl leading-[1.15]">
            {title}
          </h2>
          <p className="relative mt-4 max-w-2xl text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            {description}
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <FastLink
              href={primaryHref}
              className="cta-glow-zoom btn-cta-float inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm sm:text-base font-bold brand-button"
            >
              {primaryLabel}
            </FastLink>
            <FastLink
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-xl border-2 border-stone-300 bg-white/90 px-7 py-3.5 text-sm sm:text-base font-bold text-stone-800 transition hover:border-accent/40 dark:border-white/15 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
            >
              {secondaryLabel}
            </FastLink>
          </div>
        </motion.div>
      </MotionIn>
    </section>
  );
}
