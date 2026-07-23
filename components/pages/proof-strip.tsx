"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { PROOF_STATS } from "@/constants/case-studies";
import { EDUCATION_HIGHLIGHTS } from "@/constants";
import { MotionIn } from "@/components/motion/MotionIn";
import { useMotionReady } from "@/lib/motion";

export function ProofStrip() {
  const motionReady = useMotionReady();

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      <MotionIn>
        <div className="relative overflow-hidden rounded-2xl border border-stone-200/90 bg-gradient-to-br from-white via-white to-orange-50/40 p-8 sm:p-12 dark:border-white/10 dark:from-stone-900 dark:via-[#292524] dark:to-orange-950/20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-white leading-snug">
                Six-person crew.{" "}
                <span className="text-accent">Senior hands on your loop.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                {EDUCATION_HIGHLIGHTS.technicalSummary}
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Meet the crew
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PROOF_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={motionReady ? { opacity: 0, y: 16 } : false}
                  whileInView={motionReady ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="surface-card rounded-xl border border-stone-200/80 bg-white/90 p-5 text-center dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="font-display text-3xl sm:text-4xl font-semibold text-accent">{stat.value}</div>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MotionIn>
    </section>
  );
}
