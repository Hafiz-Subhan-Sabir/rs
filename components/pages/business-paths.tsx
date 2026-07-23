"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import { BUSINESS_PATHS } from "@/constants/content";
import { cn } from "@/lib/utils";

const PATH_COLORS = ["#C2410C", "#0284C7", "#059669", "#C2410C"] as const;

function SolvesCounter() {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setN(0);
      const target = 100;
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setN(Math.round(eased * target));
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
        else {
          setN(target);
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) animate();
          else {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            setN(0);
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <span ref={ref} className="tabular-nums text-accent">
      {n}%
    </span>
  );
}

function VisualProblemPanel({ color }: { color: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-rose-400/35 bg-stone-950 p-3">
      <div className="mb-2 flex items-center gap-1.5">
        <ExclamationTriangleIcon className="h-4 w-4 text-rose-400" />
        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-rose-300">
          Problem state
        </span>
      </div>
      <div className="space-y-1.5 opacity-70">
        <div className="h-2 w-[80%] rounded bg-stone-700" />
        <div className="h-2 w-[60%] rounded bg-stone-700" />
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="h-8 rounded-md bg-stone-800" />
          <div className="h-8 rounded-md bg-stone-800/70" />
          <div className="h-8 rounded-md bg-rose-900/40" style={{ borderColor: color }} />
        </div>
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-rose-500/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function VisualSolutionPanel({ color }: { color: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border-2 bg-gradient-to-br from-white to-emerald-50/80 p-3 dark:from-stone-900 dark:to-emerald-950/30"
      style={{ borderColor: `${color}55` }}
    >
      <div className="mb-2 flex items-center gap-1.5">
        <SparklesIcon className="h-4 w-4" style={{ color }} />
        <span className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color }}>
          Solution state
        </span>
      </div>
      <div className="h-1 w-full rounded-full bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + i * 0.08 }}
            className="h-8 rounded-md"
            style={{ background: `${color}${i === 0 ? "44" : i === 1 ? "33" : "22"}` }}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center gap-1 text-[9px] font-bold text-emerald-700 dark:text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Live & measurable
      </div>
    </div>
  );
}

export function BusinessPaths() {
  const [openId, setOpenId] = useState<string>(BUSINESS_PATHS[0].id);
  const [phase, setPhase] = useState<"problem" | "solution">("problem");

  useEffect(() => {
    setPhase("problem");
    const t = setTimeout(() => setPhase("solution"), 1400);
    return () => clearTimeout(t);
  }, [openId]);

  return (
    <section className="relative w-[90vw] max-w-[90vw] mx-auto py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-56 w-56 rounded-full bg-accent/10 blur-[80px]" />
        <div className="absolute right-1/5 top-20 h-48 w-48 rounded-full bg-sky-400/10 blur-[70px]" />
      </div>

      <header className="mb-12 md:mb-14 text-center mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.15]"
        >
          <span className="block">Different companies</span>
          <span className="mt-1 block text-accent">Different digital problems</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-6 text-base sm:text-xl font-semibold leading-relaxed text-stone-800 dark:text-stone-100"
        >
          <span className="text-accent">RS Dev</span> Solves <SolvesCounter /> of every digital
          problem with <span className="text-accent">proper system designing</span> and{" "}
          <span className="text-sky-700 dark:text-sky-300">continuous communication</span>.
        </motion.p>

        <p className="mt-4 text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
          Open a path to see the friction first, then the fix — visually.
        </p>
      </header>

      <ul className="mx-auto max-w-3xl space-y-3">
        {BUSINESS_PATHS.map((path, index) => {
          const isOpen = openId === path.id;
          const color = PATH_COLORS[index % PATH_COLORS.length];
          return (
            <motion.li
              key={path.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? "" : path.id)}
                className={cn(
                  "w-full rounded-2xl border-2 px-5 py-4 text-left transition duration-300",
                  isOpen
                    ? "border-accent/50 bg-white shadow-[0_0_32px_rgba(194,65,12,0.16)] dark:bg-stone-900 dark:border-accent/45"
                    : "border-stone-200 bg-white/95 hover:border-accent/35 dark:border-white/12 dark:bg-stone-950/70 dark:hover:border-accent/30",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-display text-xs font-bold text-accent tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-stone-900 dark:text-white">
                      {path.label}
                    </span>
                  </div>
                  <ChevronDownIcon
                    className={cn(
                      "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 overflow-hidden rounded-2xl border-2 border-accent/25 bg-gradient-to-br from-orange-50 via-white to-sky-50 p-5 sm:p-6 dark:border-accent/30 dark:from-stone-900 dark:via-stone-950 dark:to-sky-950/30">
                      <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                        <span className={phase === "problem" ? "text-rose-600" : "text-stone-400"}>
                          Problem
                        </span>
                        <ArrowRightIcon className="h-3.5 w-3.5 text-accent" />
                        <span className={phase === "solution" ? "text-emerald-600" : "text-stone-400"}>
                          Solution
                        </span>
                      </div>

                      <AnimatePresence mode="wait">
                        {phase === "problem" ? (
                          <motion.div
                            key="p"
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 24 }}
                            transition={{ duration: 0.4 }}
                          >
                            <VisualProblemPanel color={color} />
                            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-rose-700 dark:text-rose-300">
                              The friction
                            </p>
                            <p className="mt-2 text-sm text-stone-800 dark:text-stone-200">
                              {path.problem}
                            </p>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="s"
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 24 }}
                            transition={{ duration: 0.4 }}
                          >
                            <VisualSolutionPanel color={color} />
                            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                              The response
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                              {path.solution}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                              {path.outcomes.map((o) => (
                                <li
                                  key={o}
                                  className="rounded-md border-2 border-emerald-600/25 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 dark:border-emerald-400/30 dark:bg-emerald-950/40 dark:text-emerald-200"
                                >
                                  {o}
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={path.cta.href}
                              className="mt-5 inline-flex text-sm font-bold text-accent hover:underline"
                            >
                              {path.cta.label} →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-4 flex justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => setPhase("problem")}
                          className={cn(
                            "h-2 w-2 rounded-full transition",
                            phase === "problem" ? "bg-rose-500 scale-125" : "bg-stone-300 dark:bg-stone-600",
                          )}
                          aria-label="Show problem"
                        />
                        <button
                          type="button"
                          onClick={() => setPhase("solution")}
                          className={cn(
                            "h-2 w-2 rounded-full transition",
                            phase === "solution" ? "bg-emerald-500 scale-125" : "bg-stone-300 dark:bg-stone-600",
                          )}
                          aria-label="Show solution"
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
