"use client";

import Image from "next/image";
import { FastLink } from "@/components/navigation/fast-link";
import { motion } from "framer-motion";
import { useMotionReady } from "@/lib/motion";

const PROBLEM_CHIPS = [
  { label: "Site looks outdated", href: "/contact?intent=brand", color: "#C2410C" },
  { label: "Not enough enquiries", href: "/contact?intent=growth", color: "#0284C7" },
  { label: "Tools don’t talk to each other", href: "/contact?intent=operations", color: "#059669" },
  { label: "Need a website chat helper", href: "/contact?intent=chat", color: "#C2410C" },
] as const;

const LANES = [
  { label: "Build", detail: "Sites & apps", color: "#C2410C" },
  { label: "Automate", detail: "AI & workflows", color: "#0284C7" },
  { label: "Grow", detail: "SEO AI & leads", color: "#059669" },
] as const;

export function HomeHero() {
  const motionReady = useMotionReady();

  return (
    <section className="relative isolate scroll-mt-24 overflow-hidden min-h-[calc(100svh-80px)]">
      {/* Atmosphere — copper · sky · emerald */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/90 via-white to-sky-50/50 dark:from-stone-950 dark:via-[#1c1917] dark:to-stone-950" />
        <div className="absolute -top-24 left-[8%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[100px] dark:bg-accent/25" />
        <div className="absolute top-[20%] right-[5%] h-[380px] w-[380px] rounded-full bg-sky-400/20 blur-[110px] dark:bg-sky-500/15" />
        <div className="absolute bottom-[-10%] left-[35%] h-[320px] w-[320px] rounded-full bg-emerald-400/15 blur-[90px] dark:bg-emerald-500/10" />
        <div className="absolute inset-0 hero-mesh opacity-[0.35] dark:opacity-[0.2]" aria-hidden />
      </div>

      <div className="relative mx-auto w-[90vw] max-w-[90vw] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 flex flex-col justify-center min-h-[calc(100svh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-16 items-center">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={motionReady ? { opacity: 0, y: 14 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent/30 bg-white/90 px-3.5 py-1.5 shadow-[0_0_24px_rgba(194,65,12,0.12)] dark:bg-stone-900/80"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-700 dark:text-stone-200">
                Six specialists · live delivery
              </span>
            </motion.div>

            <motion.p
              initial={motionReady ? { opacity: 0, y: 12 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.45, delay: 0.04 }}
              className="mt-6 font-display text-sm sm:text-base font-bold tracking-[0.2em] uppercase"
            >
              <span className="text-accent">RS</span>
              <span className="text-sky-600 dark:text-sky-400"> Dev</span>
            </motion.p>

            <motion.h1
              initial={motionReady ? { opacity: 0, y: 22 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-3 font-display text-[2.35rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[3.85rem] font-semibold tracking-tight leading-[1.05] text-stone-900 dark:text-white"
            >
              Your digital problems,
              <span className="mt-1 block bg-gradient-to-r from-accent via-orange-500 to-sky-600 bg-clip-text text-transparent dark:from-orange-300 dark:via-accent dark:to-sky-400">
                fixed by people you can reach
              </span>
            </motion.h1>

            <motion.p
              initial={motionReady ? { opacity: 0, y: 16 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-[34rem] mx-auto lg:mx-0 leading-relaxed"
            >
              Websites, software, SEO AI, and automation — one crew, clear scope, and the same hands
              from first call to go-live.
            </motion.p>

            <motion.div
              initial={motionReady ? { opacity: 0, y: 14 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mt-7 flex flex-wrap justify-center lg:justify-start gap-2"
            >
              {LANES.map((lane) => (
                <span
                  key={lane.label}
                  className="inline-flex items-center gap-2 rounded-xl border-2 bg-white/95 px-3 py-2 text-left shadow-sm dark:bg-stone-900/70"
                  style={{ borderColor: `${lane.color}55` }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: lane.color, boxShadow: `0 0 10px ${lane.color}` }}
                  />
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: lane.color }}>
                      {lane.label}
                    </span>
                    <span className="block text-xs font-semibold text-stone-700 dark:text-stone-300">
                      {lane.detail}
                    </span>
                  </span>
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={motionReady ? { opacity: 0, y: 16 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400 mb-3">
                What’s slowing you down?
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {PROBLEM_CHIPS.map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={motionReady ? { opacity: 0, y: 10 } : false}
                    animate={motionReady ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.35, delay: 0.32 + i * 0.05 }}
                  >
                    <FastLink
                      href={chip.href}
                      className="group inline-flex items-center rounded-full border-2 bg-white px-4 py-2 text-sm font-semibold text-stone-800 shadow-sm transition duration-300 hover:-translate-y-0.5 dark:bg-stone-900 dark:text-stone-100"
                      style={{
                        borderColor: `${chip.color}66`,
                      }}
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full shadow-[0_0_8px_currentColor]"
                        style={{ background: chip.color, color: chip.color }}
                      />
                      {chip.label}
                      <span
                        className="ml-1.5 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-0.5"
                        style={{ color: chip.color }}
                        aria-hidden
                      >
                        →
                      </span>
                    </FastLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={motionReady ? { opacity: 0, y: 16 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <FastLink
                href="/contact"
                className="btn-cta-float inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-bold brand-button shadow-[0_0_32px_rgba(194,65,12,0.35)]"
              >
                Book a short call
              </FastLink>
              <FastLink
                href="/work"
                className="inline-flex items-center justify-center rounded-xl border-2 border-sky-600/40 bg-sky-50 px-8 py-3.5 text-sm font-bold text-sky-800 transition hover:border-sky-600 hover:bg-sky-100 dark:border-sky-400/40 dark:bg-sky-950/40 dark:text-sky-200"
              >
                See live projects
              </FastLink>
            </motion.div>
          </div>

          {/* Identity stage */}
          <motion.div
            initial={motionReady ? { opacity: 0, scale: 0.96, x: 18 } : false}
            animate={motionReady ? { opacity: 1, scale: 1, x: 0 } : undefined}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[520px] lg:max-w-none aspect-square lg:aspect-auto lg:min-h-[480px] flex items-center justify-center"
          >
            {/* Orbit rings */}
            <div className="pointer-events-none absolute inset-[6%] rounded-full border-2 border-accent/25 dark:border-accent/35" />
            <motion.div
              className="pointer-events-none absolute inset-[14%] rounded-full border-2 border-dashed border-sky-500/35"
              animate={motionReady ? { rotate: 360 } : undefined}
              transition={motionReady ? { duration: 28, repeat: Infinity, ease: "linear" } : undefined}
            />
            <motion.div
              className="pointer-events-none absolute inset-[24%] rounded-full border-2 border-emerald-500/30"
              animate={motionReady ? { rotate: -360 } : undefined}
              transition={motionReady ? { duration: 36, repeat: Infinity, ease: "linear" } : undefined}
            />

            {/* Orbit dots */}
            {motionReady ? (
              <>
                <motion.span
                  className="absolute left-1/2 top-[6%] h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_16px_rgba(194,65,12,0.8)]"
                  animate={{ rotate: 360 }}
                  style={{ transformOrigin: "50% calc(44% + 0px)" }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />
                <span className="absolute right-[10%] top-1/2 h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(2,132,199,0.8)]" />
                <span className="absolute left-[12%] bottom-[22%] h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(5,150,105,0.8)]" />
              </>
            ) : null}

            {/* Core brand plate */}
            <div className="hero-identity relative z-10 w-[78%] max-w-[360px] overflow-hidden rounded-[1.75rem] border-[3px] border-accent/40 bg-white/95 p-8 sm:p-10 text-center shadow-[0_0_0_1px_rgba(194,65,12,0.1),0_24px_60px_rgba(28,25,23,0.12),0_0_50px_rgba(194,65,12,0.18)] dark:border-accent/50 dark:bg-stone-950/90">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-sky-400/20 blur-2xl" />

              <motion.div
                animate={motionReady ? { y: [0, -8, 0] } : undefined}
                transition={motionReady ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined}
                className="relative mx-auto"
              >
                <Image
                  src="/rs-dev-logo.png"
                  alt="RS Dev"
                  width={280}
                  height={350}
                  priority
                  className="mx-auto h-[110px] sm:h-[130px] w-auto object-contain drop-shadow-md"
                />
              </motion.div>

              <p className="mt-5 font-display text-2xl font-semibold tracking-tight">
                <span className="text-accent">RS</span>
                <span className="text-stone-900 dark:text-white"> Dev</span>
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
                Identity · Delivery · Growth
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {[
                  { n: "6", t: "Crew" },
                  { n: "26+", t: "Builds" },
                  { n: "24h", t: "Reply" },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="rounded-xl border border-stone-200/90 bg-stone-50/90 py-2.5 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p className="font-display text-sm font-bold text-accent">{item.n}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-stone-500 dark:text-stone-400">
                      {item.t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
