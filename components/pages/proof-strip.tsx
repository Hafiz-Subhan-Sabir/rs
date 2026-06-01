"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { PROOF_STATS } from "@/constants/case-studies";
import { EDUCATION_HIGHLIGHTS } from "@/constants";
import { MotionIn } from "@/components/motion/MotionIn";
import { neonCardClass, type NeonVariant } from "@/lib/neon-card";

const statNeon: NeonVariant[] = ["neon-green", "neon-blue", "neon-pink"];

const statAccents = [
  "from-emerald-500/20 to-cyan-500/10",
  "from-cyan-500/20 to-blue-500/10",
  "from-blue-500/20 to-emerald-500/10",
] as const;

export function ProofStrip() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      <MotionIn>
        <div className={neonCardClass("neon-purple", "relative overflow-hidden rounded-[2rem] border border-gray-200/90 bg-gradient-to-br from-white via-white to-emerald-50/60 p-8 sm:p-12 dark:border-white/10 dark:from-[#0f0b1f] dark:via-[#0c0b12] dark:to-[#06222a]/80")}>
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white leading-snug">
                Small crew.{" "}
                <span className="brand-gradient-text">Senior hands on your loop.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {EDUCATION_HIGHLIGHTS.technicalSummary}
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline dark:text-cyan-300"
              >
                Meet the founder
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PROOF_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className={neonCardClass(statNeon[i], `rounded-2xl border border-gray-200/80 bg-gradient-to-br ${statAccents[i]} p-5 text-center dark:border-white/10`)}
                >
                  <div className="text-3xl sm:text-4xl font-bold brand-gradient-text">{stat.value}</div>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
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
