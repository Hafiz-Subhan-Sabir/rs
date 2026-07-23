"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { BUSINESS_PATHS } from "@/constants/content";
import { cn } from "@/lib/utils";

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
      { threshold: 0.5 }
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

export function BusinessPaths() {
  const [openId, setOpenId] = useState<string>(BUSINESS_PATHS[0].id);

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
          <span className="text-accent">RS Dev</span> Solves{" "}
          <SolvesCounter /> of every digital problem with{" "}
          <span className="text-accent">proper system designing</span> and{" "}
          <span className="text-sky-700 dark:text-sky-300">continuous communication</span>.
        </motion.p>

        <p className="mt-4 text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
          Open the line that sounds like your week. Each path shows what is going wrong and how we
          fix it so your team can focus on{" "}
          <span className="font-semibold text-emerald-700 dark:text-emerald-300">quality work</span>.
        </p>
      </header>

      <ul className="mx-auto max-w-3xl space-y-3">
        {BUSINESS_PATHS.map((path, index) => {
          const isOpen = openId === path.id;
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
                    : "border-stone-200 bg-white/95 hover:border-accent/35 dark:border-white/12 dark:bg-stone-950/70 dark:hover:border-accent/30"
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
                      isOpen && "rotate-180"
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
                      <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent via-sky-500 to-emerald-500 mb-4" />
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-rose-700 dark:text-rose-300">
                        The friction
                      </p>
                      <p className="mt-2 text-sm text-stone-800 dark:text-stone-200">{path.problem}</p>
                      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
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
