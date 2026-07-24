"use client";

import { motion } from "framer-motion";
import {
  BoltIcon,
  DocumentTextIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import { COMPANY_VALUES } from "@/constants/content";
import { useMotionReady } from "@/lib/motion";

const ICONS = [DocumentTextIcon, UserGroupIcon, BoltIcon, SparklesIcon] as const;
const COLORS = ["#C2410C", "#0284C7", "#059669", "#EA580C"] as const;

export function ValuesStrip() {
  const ready = useMotionReady();

  return (
    <section className="relative mx-auto w-[90vw] max-w-[90vw] py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-56 w-56 rounded-full bg-accent/15 blur-[90px]" />
        <div className="absolute right-1/5 bottom-10 h-48 w-48 rounded-full bg-sky-400/15 blur-[80px]" />
      </div>

      <motion.header
        initial={ready ? { opacity: 0, y: 24 } : false}
        whileInView={ready ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="mb-12 md:mb-14 text-center mx-auto max-w-3xl"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.1]">
          Problems Solved, Not More Tech Noise
        </h2>
        <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
          Clear principles so entrepreneurs get outcomes they can plan around — not another pile of tools.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
        {COMPANY_VALUES.map((v, i) => {
          const Icon = ICONS[i % ICONS.length];
          const color = COLORS[i % COLORS.length];
          return (
            <motion.article
              key={v.title}
              initial={ready ? { opacity: 0, y: 28, scale: 0.96 } : false}
              whileInView={ready ? { opacity: 1, y: 0, scale: 1 } : undefined}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={ready ? { y: -6, transition: { duration: 0.25 } } : undefined}
              className="group relative overflow-hidden rounded-2xl border-2 bg-white p-6 sm:p-7 dark:bg-stone-950/90"
              style={{
                borderColor: `${color}55`,
                boxShadow: `0 14px 40px rgba(28,25,23,0.06), 0 0 0 1px ${color}12`,
              }}
            >
              <motion.div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-40 blur-2xl"
                style={{ background: color }}
                animate={
                  ready
                    ? { scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }
                    : undefined
                }
                transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
              <div className="relative flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 text-white shadow-lg"
                  style={{
                    background: color,
                    borderColor: color,
                    boxShadow: `0 0 22px ${color}55`,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-stone-900 dark:text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-400">
                    {v.body}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
