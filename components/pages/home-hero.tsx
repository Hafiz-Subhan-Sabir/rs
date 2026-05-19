"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { MotionIn } from "@/components/motion/MotionIn";
import { HERO_SOLUTIONS } from "@/constants";

const solutionIcons = {
  build: RocketLaunchIcon,
  rank: ChartBarIcon,
  maintain: WrenchScrewdriverIcon,
  leads: UserGroupIcon,
  automate: BoltIcon,
} as const;

const trustMetrics = [
  { value: "35+", label: "Clients served" },
  { value: "End-to-end", label: "Delivery model" },
  { value: "24h", label: "Response window" },
];

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100svh-80px)] flex items-center overflow-hidden pt-6 pb-20">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.08),transparent)]" />
        <div className="absolute top-20 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          {/* Copy — business profile tone */}
          <MotionIn>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200/90 bg-white/90 px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-gray-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-300 mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Full-cycle digital partner
              </div>

              <h1 className="text-[2.15rem] sm:text-[2.75rem] lg:text-[3.35rem] xl:text-[3.65rem] font-semibold tracking-tight leading-[1.08] text-gray-900 dark:text-white">
                When growth stalls, the issue is rarely the ambition —{" "}
                <span className="brand-gradient-text block sm:inline mt-1 sm:mt-0">
                  it is the system behind it.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300/90 max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
                RS Dev is a delivery team that closes the full loop: digital products built to perform, visibility
                earned in search, campaigns that bring qualified conversations, and automations that free your team
                from the repetitive work blocking momentum.
              </p>

              {/* Solution strip — what business profiles highlight */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto lg:mx-0">
                {["Build", "Rank", "Maintain", "Leads", "Automate"].map((label, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-2 rounded-xl border border-gray-200/80 bg-white/60 px-3 py-2.5 text-left dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <ArrowTrendingUpIcon className="h-4 w-4 shrink-0 text-emerald-600 dark:text-cyan-400" />
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{label}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="col-span-2 sm:col-span-1 flex items-center justify-center rounded-xl border border-dashed border-emerald-400/40 bg-emerald-500/5 px-3 py-2.5 dark:border-cyan-400/30 dark:bg-cyan-400/5"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-cyan-300">
                    One accountable team
                  </span>
                </motion.div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold brand-button shadow-lg shadow-emerald-500/25 transition hover:scale-[1.02] hover:shadow-emerald-500/35"
                >
                  Start a conversation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold border border-gray-200/90 bg-white/80 text-gray-800 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-100 dark:hover:bg-white/10 transition"
                >
                  View full capabilities
                </Link>
              </div>

              {/* Trust metrics */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 border-t border-gray-200/80 pt-8 dark:border-white/10">
                {trustMetrics.map((m) => (
                  <div key={m.label} className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-bold brand-gradient-text">{m.value}</div>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionIn>

          {/* Right — logo + solution cards (premium panel) */}
          <MotionIn delay={0.12}>
            <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-blue-500/15 blur-2xl" />

              <div className="relative rounded-[2rem] border border-gray-200/90 bg-white/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0814]/90 dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                {/* Logo header */}
                <div className="flex items-center justify-center pb-6 border-b border-gray-200/80 dark:border-white/10">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-2xl bg-white p-4 ring-1 ring-gray-200/80 dark:ring-white/15"
                  >
                    <Image
                      src="/rs-dev-logo.png"
                      alt="RS Dev"
                      width={320}
                      height={400}
                      priority
                      className="h-[120px] sm:h-[140px] w-auto object-contain"
                    />
                  </motion.div>
                </div>

                {/* Solution cards */}
                <p className="mt-6 mb-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                  What we deliver for you
                </p>
                <ul className="space-y-3">
                  {HERO_SOLUTIONS.map((item, i) => {
                    const Icon = solutionIcons[item.id];
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="group flex gap-3.5 rounded-xl border border-gray-200/70 bg-gray-50/80 p-3.5 transition hover:border-emerald-400/35 hover:bg-white dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-cyan-400/25 dark:hover:bg-white/[0.06]"
                      >
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 text-emerald-600 dark:text-cyan-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 text-left">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                          <p className="mt-0.5 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </MotionIn>
        </div>
      </div>
    </section>
  );
}
