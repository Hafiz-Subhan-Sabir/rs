"use client";

import { FastLink } from "@/components/navigation/fast-link";
import { openConsultationPopup } from "@/components/layout/consultation-popup";
import { CountUpText } from "@/components/ui/count-up-text";
import { motion } from "framer-motion";
import { useMotionReady } from "@/lib/motion";
import { HeroDeviceStage } from "@/components/pages/hero-device-stage";

const LANES = [
  { label: "Build", detail: "Sites & apps", color: "#C2410C" },
  { label: "DevOps", detail: "Pipelines & automation", color: "#0284C7" },
  { label: "Cloud", detail: "Scale & hosting", color: "#059669" },
] as const;

const STATS = [
  { value: "98.2%", label: "Customer satisfaction rate" },
  { value: "126+", label: "Projects delivered" },
] as const;

export function HomeHero() {
  const motionReady = useMotionReady();

  return (
    <section className="relative isolate scroll-mt-24 overflow-hidden min-h-[calc(100svh-80px)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/90 via-white to-sky-50/50 dark:from-stone-950 dark:via-[#1c1917] dark:to-stone-950" />
        <div className="absolute -top-24 left-[8%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[100px] dark:bg-accent/25" />
        <div className="absolute top-[20%] right-[5%] h-[380px] w-[380px] rounded-full bg-sky-400/20 blur-[110px] dark:bg-sky-500/15" />
        <div className="absolute bottom-[-10%] left-[35%] h-[320px] w-[320px] rounded-full bg-emerald-400/15 blur-[90px] dark:bg-emerald-500/10" />
        <div className="absolute inset-0 hero-mesh opacity-[0.35] dark:opacity-[0.2]" aria-hidden />
      </div>

      <div className="relative mx-auto w-[90vw] max-w-[90vw] pt-[clamp(5.25rem,8vw,6.5rem)] pb-[clamp(2.5rem,6vw,5rem)] flex flex-col justify-center min-h-[calc(100svh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-[clamp(2rem,4vw,3.5rem)] items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={motionReady ? { opacity: 0, y: 22 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.04 }}
              className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-semibold tracking-tight leading-[1.05] text-stone-900 dark:text-white"
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
              className="mt-[clamp(1rem,2.5vw,1.5rem)] text-[clamp(1rem,2.2vw,1.2rem)] text-stone-600 dark:text-stone-300 max-w-[36rem] mx-auto lg:mx-0 leading-relaxed"
            >
              RS Dev helps entrepreneurs solve real digital problems — with a specialist crew that
              builds, ships, and scales so you can focus on the business.
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
                    <span
                      className="block text-[clamp(0.6rem,1.2vw,0.7rem)] font-bold uppercase tracking-[0.14em]"
                      style={{ color: lane.color }}
                    >
                      {lane.label}
                    </span>
                    <span className="block text-[clamp(0.75rem,1.5vw,0.875rem)] font-semibold text-stone-700 dark:text-stone-300">
                      {lane.detail}
                    </span>
                  </span>
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={motionReady ? { opacity: 0, y: 14 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-7 grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0"
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border-2 border-accent/25 bg-white/95 px-3 py-3.5 text-center shadow-sm dark:border-accent/35 dark:bg-stone-950/80"
                >
                  <p className="font-display text-[clamp(1.35rem,3.5vw,1.85rem)] font-semibold text-accent leading-none">
                    <CountUpText value={s.value} />
                  </p>
                  <p className="mt-1.5 text-[clamp(0.65rem,1.4vw,0.8rem)] font-semibold text-stone-500 dark:text-stone-400 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={motionReady ? { opacity: 0, y: 16 } : false}
              animate={motionReady ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <button
                type="button"
                onClick={() => openConsultationPopup()}
                className="cta-glow-zoom btn-cta-float inline-flex items-center justify-center rounded-xl px-[clamp(1.25rem,3vw,2rem)] py-[clamp(0.75rem,1.8vw,0.95rem)] text-[clamp(0.875rem,1.8vw,1rem)] font-bold brand-button"
              >
                Book free consultation →
              </button>
              <FastLink
                href="#meeting"
                className="cta-glow-zoom-alt inline-flex items-center justify-center rounded-xl border-2 border-sky-600/50 bg-sky-50 px-[clamp(1.25rem,3vw,2rem)] py-[clamp(0.75rem,1.8vw,0.95rem)] text-[clamp(0.875rem,1.8vw,1rem)] font-bold text-sky-800 transition dark:border-sky-400/50 dark:bg-sky-950/40 dark:text-sky-200"
              >
                45 minute meeting
              </FastLink>
            </motion.div>
          </div>

          <motion.div
            initial={motionReady ? { opacity: 0, scale: 0.96, x: 18 } : false}
            animate={motionReady ? { opacity: 1, scale: 1, x: 0 } : undefined}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full"
          >
            <HeroDeviceStage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
