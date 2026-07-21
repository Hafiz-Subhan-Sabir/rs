"use client";

import Image from "next/image";
import { FastLink } from "@/components/navigation/fast-link";
import { motion } from "framer-motion";
import { useMotionReady } from "@/lib/motion";

const PROBLEM_CHIPS = [
  { label: "Site looks outdated", href: "/contact?intent=brand" },
  { label: "Not enough enquiries", href: "/contact?intent=growth" },
  { label: "Tools don’t talk to each other", href: "/contact?intent=operations" },
  { label: "Need a website chat helper", href: "/contact?intent=chat" },
] as const;

export function HomeHero() {
  const motionReady = useMotionReady();

  return (
    <section className="relative isolate scroll-mt-24 overflow-hidden min-h-[calc(100svh-80px)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(194,65,12,0.16),transparent_58%)] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(251,146,60,0.14),transparent_58%)]" />
        <div className="absolute bottom-0 left-0 h-[40%] w-[50%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,88,12,0.07),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,146,60,0.06),transparent_70%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 flex flex-col justify-center min-h-[calc(100svh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 xl:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.p
              initial={motionReady ? { opacity: 0, y: 12 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.45 }}
              className="font-display text-sm sm:text-base font-semibold tracking-[0.14em] uppercase text-accent"
            >
              RS Dev
            </motion.p>

            <motion.h1
              initial={motionReady ? { opacity: 0, y: 18 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-4 font-display text-[2.2rem] sm:text-[2.85rem] lg:text-[3.35rem] xl:text-[3.7rem] font-semibold tracking-tight leading-[1.06] text-stone-900 dark:text-white"
            >
              Your digital problems,
              <span className="block text-accent">fixed by people you can reach</span>
            </motion.h1>

            <motion.p
              initial={motionReady ? { opacity: 0, y: 16 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="mt-6 text-base sm:text-lg text-stone-600 dark:text-stone-300/90 max-w-[540px] mx-auto lg:mx-0 leading-relaxed"
            >
              Websites, software, search, and day-to-day tools — scoped clearly, built carefully, and
              supported by the same hands that ship the work.
            </motion.p>

            <motion.div
              initial={motionReady ? { opacity: 0, y: 16 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400 mb-3">
                What’s slowing you down?
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {PROBLEM_CHIPS.map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={motionReady ? { opacity: 0, y: 10 } : false}
                    animate={motionReady ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.35, delay: 0.28 + i * 0.05 }}
                  >
                    <FastLink
                      href={chip.href}
                      className="group inline-flex items-center rounded-full border border-stone-200/90 bg-white/90 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition hover:border-accent/45 hover:bg-orange-50 hover:text-accent dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-200 dark:hover:bg-orange-950/30 dark:hover:text-accent"
                    >
                      {chip.label}
                      <span
                        className="ml-1.5 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-0.5"
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
              transition={{ duration: 0.5, delay: 0.42 }}
              className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <FastLink
                href="/contact"
                className="btn-cta-float inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-semibold brand-button"
              >
                Book a short call
              </FastLink>
              <FastLink
                href="/work"
                className="btn-outline-cta inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-semibold border border-stone-200/90 bg-white/80 text-stone-800 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:hover:bg-white/10"
              >
                See live projects
              </FastLink>
            </motion.div>
          </div>

          <motion.div
            initial={motionReady ? { opacity: 0, x: 20 } : false}
            animate={motionReady ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
          >
            <div className="pointer-events-none absolute inset-4 rounded-[2rem] bg-accent/12 blur-3xl" />
            <div className="hero-delivery-panel relative flex flex-col items-center justify-center rounded-2xl border border-stone-200/80 bg-white/95 px-8 py-14 sm:py-16 dark:border-white/[0.1] dark:bg-stone-900/90 overflow-hidden">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent via-accent-soft to-amber-400" />
              <motion.div
                animate={motionReady ? { y: [0, -6, 0] } : undefined}
                transition={motionReady ? { duration: 5.5, repeat: Infinity, ease: "easeInOut" } : undefined}
              >
                <Image
                  src="/rs-dev-logo.png"
                  alt="RS Dev"
                  width={280}
                  height={350}
                  priority
                  className="h-[120px] sm:h-[140px] w-auto object-contain"
                />
              </motion.div>
              <p className="mt-6 font-display text-xl font-semibold text-stone-900 dark:text-white">
                RS <span className="text-accent">Dev</span>
              </p>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                Websites · Software · Growth
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
