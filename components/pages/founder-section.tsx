"use client";

import Link from "next/link";

import { MotionIn } from "@/components/motion/MotionIn";
import { FOUNDER_NOTE, PROOF_STATS } from "@/constants/case-studies";
import { EDUCATION_HIGHLIGHTS } from "@/constants";

export function FounderSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 py-20 scroll-mt-24">
      <MotionIn>
        <div className="rounded-3xl border border-gray-200/90 bg-gradient-to-br from-white via-white to-emerald-50/50 p-8 sm:p-10 dark:border-white/10 dark:from-[#0f0b1f] dark:via-[#0c0b12] dark:to-[#06222a]/60">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-cyan-400">
            Who leads RS Dev
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
            {FOUNDER_NOTE.name}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {FOUNDER_NOTE.role} · {FOUNDER_NOTE.credentials}
          </p>
          <p className="mt-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">{FOUNDER_NOTE.bio}</p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{EDUCATION_HIGHLIGHTS.technicalSummary}</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PROOF_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-200/80 bg-white/80 px-4 py-3 text-center dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="text-2xl font-bold brand-gradient-text">{stat.value}</div>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full px-6 py-3 text-sm font-semibold brand-button transition"
            >
              Start a conversation
            </Link>
            <Link
              href="/journey"
              className="inline-flex rounded-full px-6 py-3 text-sm font-semibold border border-gray-200 bg-white/80 dark:border-white/10 dark:bg-white/5 transition"
            >
              Our path
            </Link>
          </div>
        </div>
      </MotionIn>
    </section>
  );
}
