"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { BUSINESS_SERVICES } from "@/constants";
import { MotionIn } from "@/components/motion/MotionIn";

export function ServicesPreview() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <MotionIn>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Services
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-stone-900 dark:text-white">
              Practical help for{" "}
              <span className="text-accent">real blockers</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-stone-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-accent/50 hover:text-accent dark:border-white/10 dark:bg-white/5 dark:text-stone-200 dark:hover:text-accent"
          >
            All services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </MotionIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BUSINESS_SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.48, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/services"
              className="surface-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-stone-200/90 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <span className="text-[11px] font-semibold tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-stone-900 dark:text-white group-hover:text-accent transition">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {service.description}
              </p>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent opacity-0 transition group-hover:opacity-100">
                Learn more →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
