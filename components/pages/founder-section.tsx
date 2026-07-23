"use client";

import Image from "next/image";
import Link from "next/link";

import { MotionIn } from "@/components/motion/MotionIn";
import { FOUNDER, EDUCATION_HIGHLIGHTS } from "@/constants";
import { PROOF_STATS } from "@/constants/case-studies";

export function FounderSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 py-20 scroll-mt-24">
      <MotionIn>
        <div className="surface-card glow-border rounded-2xl border-2 bg-gradient-to-br from-white via-white to-orange-50/40 p-8 sm:p-10 dark:from-stone-900 dark:via-[#292524] dark:to-orange-950/20">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="mx-auto md:mx-0 shrink-0">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-soft dark:border-white/10 dark:bg-stone-800">
                <Image
                  src={FOUNDER.photo}
                  alt={FOUNDER.name}
                  fill
                  className="object-cover object-top"
                  sizes="208px"
                  priority
                />
              </div>
              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-stone-200 px-3 py-2 text-xs font-semibold text-stone-700 transition hover:border-accent hover:text-accent dark:border-white/10 dark:text-stone-200"
              >
                LinkedIn profile →
              </a>
            </div>

            <div className="min-w-0 flex-1 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Founder · Full Stack Engineer
              </p>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-white">
                {FOUNDER.name}
              </h2>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                {FOUNDER.role} | {FOUNDER.credentials}
              </p>
              <p className="mt-5 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                {FOUNDER.bio}
              </p>
              <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
                {EDUCATION_HIGHLIGHTS.technicalSummary}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PROOF_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-stone-200/80 bg-white/80 px-4 py-3 text-center dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <div className="font-display text-2xl font-semibold text-accent">{stat.value}</div>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                <Link
                  href="/contact"
                  className="btn-cta-float inline-flex rounded-lg px-6 py-3 text-sm font-semibold brand-button"
                >
                  Start a conversation
                </Link>
                <Link
                  href="/journey"
                  className="btn-outline-cta inline-flex rounded-lg px-6 py-3 text-sm font-semibold border border-stone-200 bg-white/80 dark:border-white/10 dark:bg-white/5"
                >
                  Company journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MotionIn>
    </section>
  );
}
