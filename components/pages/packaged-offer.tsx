"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { MotionIn } from "@/components/motion/MotionIn";
import { PACKAGED_OFFER } from "@/constants/content";
import { useMotionReady } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PHASE_COLORS = ["#C2410C", "#0284C7", "#059669"] as const;

export function PackagedOffer() {
  const motionReady = useMotionReady();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInView(entry.isIntersecting);
          if (!entry.isIntersecting) setActive(0);
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !motionReady) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % PACKAGED_OFFER.phases.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, [inView, motionReady]);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto w-[90vw] max-w-[90vw] py-20 md:py-28 border-y-2 border-stone-200/80 dark:border-white/[0.06]"
    >
      <MotionIn>
        <header className="mb-12 md:mb-14 text-center mx-auto max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.1]">
            Ninety Day Digital Fix Plan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            {PACKAGED_OFFER.description}
          </p>
        </header>
      </MotionIn>

      {/* Animated staging progress */}
      <div className="mx-auto mb-10 max-w-3xl">
        <div className="relative flex items-center justify-between gap-2">
          <div className="absolute inset-x-6 top-1/2 h-1 -translate-y-1/2 rounded-full bg-stone-200 dark:bg-white/10" />
          <motion.div
            className="absolute left-6 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent via-sky-500 to-emerald-500"
            initial={false}
            animate={{
              width:
                active === 0
                  ? "0%"
                  : active === 1
                    ? "calc(50% - 1.5rem)"
                    : "calc(100% - 3rem)",
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
          {PACKAGED_OFFER.phases.map((phase, i) => {
            const color = PHASE_COLORS[i];
            const isActive = i === active;
            const isDone = i < active;
            return (
              <button
                key={phase.title}
                type="button"
                onClick={() => setActive(i)}
                className="relative z-[1] flex flex-col items-center gap-2"
                aria-label={`Stage ${i + 1}: ${phase.title}`}
              >
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-bold transition duration-300",
                    isActive || isDone
                      ? "text-white scale-110"
                      : "bg-white text-stone-500 dark:bg-stone-950 dark:text-stone-400",
                  )}
                  style={{
                    borderColor: color,
                    background: isActive || isDone ? color : undefined,
                    boxShadow: isActive ? `0 0 28px ${color}66` : undefined,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "hidden sm:block text-[10px] font-bold uppercase tracking-[0.14em]",
                    isActive ? "text-accent" : "text-stone-500",
                  )}
                >
                  {phase.weeks}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {PACKAGED_OFFER.phases.map((phase, i) => {
          const color = PHASE_COLORS[i];
          const isActive = i === active;
          return (
            <motion.article
              key={phase.title}
              initial={motionReady ? { opacity: 0, y: 20 } : false}
              whileInView={motionReady ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              onClick={() => setActive(i)}
              className={cn(
                "cursor-pointer rounded-2xl border-2 bg-white p-6 sm:p-7 transition duration-300 dark:bg-stone-950/80",
                isActive ? "scale-[1.02]" : "opacity-90",
              )}
              style={{
                borderColor: isActive ? color : `${color}55`,
                boxShadow: isActive
                  ? `0 0 36px ${color}33, 0 16px 40px rgba(28,25,23,0.08)`
                  : `0 10px 28px rgba(28,25,23,0.05)`,
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color }}>
                  {phase.weeks}
                </p>
                {isActive ? (
                  <span
                    className="rounded-md border-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white"
                    style={{ background: color, borderColor: color }}
                  >
                    Live Stage
                  </span>
                ) : null}
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-stone-900 dark:text-white">
                {phase.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-400">
                {phase.detail}
              </p>

              {/* Mini staging bars */}
              <div className="mt-5 space-y-2">
                {[0.7, 0.55, 0.85].map((w, bar) => (
                  <div
                    key={bar}
                    className="h-1.5 overflow-hidden rounded-full bg-stone-100 dark:bg-white/10"
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: color }}
                      initial={false}
                      animate={{
                        width: isActive ? `${w * 100}%` : "12%",
                        opacity: isActive ? 1 : 0.35,
                      }}
                      transition={{ duration: 0.7, delay: bar * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      <MotionIn>
        <div className="mt-10 text-center">
          <Link
            href={PACKAGED_OFFER.cta.href}
            className="cta-glow-zoom btn-cta-float inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-base font-bold brand-button"
          >
            Ask About The Ninety Day Plan
          </Link>
        </div>
      </MotionIn>
    </section>
  );
}
