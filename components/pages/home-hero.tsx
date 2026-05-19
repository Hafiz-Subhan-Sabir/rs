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
    <section className="relative isolate scroll-mt-24 overflow-hidden">
      {/* Ambient — kept below navbar zone */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 top-24 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(34,197,94,0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(34,197,94,0.09),transparent_55%)]" />
        <div className="absolute top-40 right-[-80px] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-60px] h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div
          className="absolute inset-0 top-20 opacity-[0.28] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content — generous top clearance under fixed nav (80px) */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 min-h-[calc(100svh-80px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left column */}
          <MotionIn>
            <div className="text-center lg:text-left lg:pr-4 xl:pr-8">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200/90 bg-white/90 px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-gray-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-300 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Full-cycle digital partner
              </div>

              <h1 className="text-[2.1rem] sm:text-[2.65rem] lg:text-[3.1rem] xl:text-[3.5rem] font-semibold tracking-tight leading-[1.1] text-gray-900 dark:text-white">
                When growth stalls, the issue is rarely the ambition —{" "}
                <span className="brand-gradient-text block sm:inline mt-2 sm:mt-0">
                  it is the system behind it.
                </span>
              </h1>

              <p className="mt-7 text-base sm:text-lg text-gray-600 dark:text-gray-300/90 max-w-[560px] mx-auto lg:mx-0 leading-relaxed">
                RS Dev is a delivery team that closes the full loop: digital products built to perform, visibility
                earned in search, campaigns that bring qualified conversations, and automations that free your team
                from the repetitive work blocking momentum.
              </p>

              <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
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

              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold brand-button shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]"
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

              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 border-t border-gray-200/70 pt-10 dark:border-white/[0.08]">
                {trustMetrics.map((m) => (
                  <div key={m.label} className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-bold brand-gradient-text">{m.value}</div>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionIn>

          {/* Right column — offset from nav, contained panel */}
          <MotionIn delay={0.12}>
            <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none lg:mt-2 xl:mt-4">
              {/* Glow sits behind panel only, not under navbar */}
              <div className="pointer-events-none absolute left-4 right-4 top-8 bottom-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/15 via-cyan-400/8 to-blue-500/12 blur-2xl" />

              <div className="hero-delivery-panel relative flex flex-col rounded-[1.75rem] border border-gray-200/80 bg-white/95 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/[0.1] dark:bg-[#0a0814]/95 dark:shadow-[0_32px_80px_-16px_rgba(0,0,0,0.65)] overflow-hidden">
                {/* Logo block — padded away from top edge */}
                <div className="mx-5 mt-6 sm:mx-6 sm:mt-7 mb-2 rounded-2xl border border-gray-200/70 bg-gradient-to-b from-white to-gray-50/80 p-5 sm:p-6 dark:border-white/10 dark:from-white dark:to-gray-50/5">
                  <motion.div
                    className="flex justify-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/rs-dev-logo.png"
                      alt="RS Dev"
                      width={280}
                      height={350}
                      priority
                      className="h-[100px] sm:h-[112px] w-auto object-contain"
                    />
                  </motion.div>
                </div>

                <div className="flex flex-col flex-1 min-h-0 px-5 sm:px-6 pb-6 sm:pb-7 pt-5">
                  <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                    What we deliver for you
                  </p>

                  <ul className="space-y-2.5 max-h-[min(420px,50vh)] overflow-y-auto pr-1 scrollbar-thin">
                    {HERO_SOLUTIONS.map((item, i) => {
                      const Icon = solutionIcons[item.id];
                      return (
                        <motion.li
                          key={item.id}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="group flex gap-3 rounded-xl border border-gray-200/60 bg-gray-50/90 p-3.5 transition hover:border-emerald-400/30 hover:bg-white dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:border-cyan-400/20 dark:hover:bg-white/[0.05]"
                        >
                          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 text-emerald-600 dark:text-cyan-400">
                            <Icon className="h-[18px] w-[18px]" />
                          </div>
                          <div className="min-w-0 text-left">
                            <h3 className="text-[13px] font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="mt-0.5 text-[11px] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </MotionIn>
        </div>
      </div>
    </section>
  );
}
