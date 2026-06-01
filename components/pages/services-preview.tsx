"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { BUSINESS_SERVICES } from "@/constants";
import { neonCardClass } from "@/lib/neon-card";
import { MotionIn } from "@/components/motion/MotionIn";

export function ServicesPreview() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <MotionIn>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-cyan-400/90">
              What we ship
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-gray-900 dark:text-white">
              Skills tied to{" "}
              <span className="brand-gradient-text">real blockers</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-emerald-400/50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:text-cyan-300"
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
              className={neonCardClass(i, "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white/80 p-6 backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04]")}
            >
              <span className="text-[11px] font-bold tabular-nums text-emerald-600/80 dark:text-cyan-400/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-3 text-2xl" aria-hidden>
                {service.icon}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-600 opacity-0 transition group-hover:opacity-100 dark:text-cyan-400">
                Learn more →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
