"use client";

import Image from "next/image";
import { FastLink } from "@/components/navigation/fast-link";
import { motion } from "framer-motion";

import { MotionIn } from "@/components/motion/MotionIn";

import { SITE_SUBTAGLINE, SITE_TAGLINE } from "@/constants";
import { neonCardClass } from "@/lib/neon-card";
import { PROOF_STATS } from "@/constants/case-studies";

const trustMetrics = PROOF_STATS.map((stat) => ({
  value: stat.value,
  label: stat.label,
}));

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
              <h1 className="hero-headline capitalize text-[2.1rem] sm:text-[2.65rem] lg:text-[3.1rem] xl:text-[3.5rem] font-semibold tracking-tight leading-[1.1] text-gray-900 dark:text-white">
                {SITE_TAGLINE}
              </h1>

              <p className="mt-7 text-base sm:text-lg text-gray-600 dark:text-gray-300/90 max-w-[560px] mx-auto lg:mx-0 leading-relaxed">
                {SITE_SUBTAGLINE}
              </p>

              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
                <FastLink
                  href="/contact"
                  className="btn-cta-float inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold brand-button"
                >
                  Tell us your digital problem
                </FastLink>
                <FastLink
                  href="/services"
                  className="btn-outline-cta btn-outline-cta-float inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold border border-gray-200/90 bg-white/80 text-gray-800 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-100 dark:hover:bg-white/10"
                >
                  How we help
                </FastLink>
              </div>

              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 border-t border-gray-200/70 pt-10 dark:border-white/[0.08]" data-stagger>
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
                <div className={neonCardClass("neon-blue", "hero-logo-frame mx-5 mt-6 sm:mx-6 sm:mt-7 mb-2 rounded-2xl border border-gray-200/70 bg-gradient-to-b from-white to-gray-50/80 p-5 sm:p-6 dark:border-white/10 dark:from-white dark:to-gray-50/5")}>
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

              </div>
            </div>
          </MotionIn>
        </div>
      </div>
    </section>
  );
}
