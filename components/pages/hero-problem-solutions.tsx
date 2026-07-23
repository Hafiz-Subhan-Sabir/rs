"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  SparklesIcon,
  Squares2X2Icon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { FastLink } from "@/components/navigation/fast-link";
import { useMotionReady } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Pair = {
  id: string;
  href: string;
  color: string;
  problem: {
    title: string;
    visual: "outdated" | "enquiries" | "tools" | "chat";
  };
  solution: {
    title: string;
    visual: "brand" | "seo" | "integrate" | "helper";
  };
};

const PAIRS: Pair[] = [
  {
    id: "brand",
    href: "/contact?intent=brand",
    color: "#C2410C",
    problem: { title: "Site looks outdated", visual: "outdated" },
    solution: { title: "Modern brand site", visual: "brand" },
  },
  {
    id: "growth",
    href: "/contact?intent=growth",
    color: "#0284C7",
    problem: { title: "Not enough enquiries", visual: "enquiries" },
    solution: { title: "SEO + conversion path", visual: "seo" },
  },
  {
    id: "ops",
    href: "/contact?intent=operations",
    color: "#059669",
    problem: { title: "Tools don’t connect", visual: "tools" },
    solution: { title: "One integrated stack", visual: "integrate" },
  },
  {
    id: "chat",
    href: "/contact?intent=chat",
    color: "#C2410C",
    problem: { title: "No site chat helper", visual: "chat" },
    solution: { title: "Live chat that converts", visual: "helper" },
  },
];

function ProblemScene({ kind, color }: { kind: Pair["problem"]["visual"]; color: string }) {
  if (kind === "outdated") {
    return (
      <div className="relative h-16 w-full overflow-hidden rounded-lg border border-rose-400/40 bg-stone-900/90 p-2">
        <div className="flex gap-1 opacity-40">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-3/4 rounded bg-stone-600" />
          <div className="h-1.5 w-1/2 rounded bg-stone-700" />
          <div className="grid grid-cols-3 gap-1 pt-1">
            <div className="h-5 rounded bg-stone-700/80" />
            <div className="h-5 rounded bg-stone-700/50" />
            <div className="h-5 rounded bg-stone-700/30" />
          </div>
        </div>
        <ExclamationTriangleIcon
          className="absolute right-1.5 top-1.5 h-4 w-4 text-rose-400"
          style={{ color }}
        />
      </div>
    );
  }
  if (kind === "enquiries") {
    return (
      <div className="relative flex h-16 items-end justify-between gap-1 rounded-lg border border-sky-400/30 bg-stone-900/90 px-2.5 pb-2 pt-3">
        {[28, 22, 18, 14, 10].map((h, i) => (
          <div
            key={i}
            className="w-full rounded-t bg-sky-500/30"
            style={{ height: `${h}%`, background: i === 4 ? `${color}55` : undefined }}
          />
        ))}
        <MagnifyingGlassIcon className="absolute right-2 top-2 h-4 w-4 text-sky-300" />
      </div>
    );
  }
  if (kind === "tools") {
    return (
      <div className="relative flex h-16 items-center justify-center gap-2 rounded-lg border border-emerald-400/30 bg-stone-900/90 px-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5"
          >
            <Squares2X2Icon className="h-3.5 w-3.5 text-stone-400" />
          </div>
        ))}
        <span className="absolute inset-x-6 top-1/2 h-px bg-rose-400/50" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-bold text-rose-300">
          ✕
        </span>
      </div>
    );
  }
  return (
    <div className="relative flex h-16 items-center justify-center rounded-lg border border-orange-400/30 bg-stone-900/90">
      <ChatBubbleLeftRightIcon className="h-7 w-7 text-stone-500" />
      <span className="absolute right-[28%] top-[28%] flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[8px] font-bold text-white">
        ?
      </span>
    </div>
  );
}

function SolutionScene({ kind, color }: { kind: Pair["solution"]["visual"]; color: string }) {
  if (kind === "brand") {
    return (
      <div className="relative h-16 w-full overflow-hidden rounded-lg border border-emerald-400/40 bg-gradient-to-br from-orange-50 to-white p-2 dark:from-stone-800 dark:to-stone-900">
        <div className="h-1 w-full rounded-full bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
        <div className="mt-2 flex items-center gap-1.5">
          <GlobeAltIcon className="h-4 w-4" style={{ color }} />
          <div className="h-1.5 flex-1 rounded bg-accent/40" />
        </div>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          <div className="h-5 rounded-md" style={{ background: `${color}33` }} />
          <div className="h-5 rounded-md bg-sky-500/25" />
          <div className="h-5 rounded-md bg-emerald-500/25" />
        </div>
        <CheckCircleIcon className="absolute right-1.5 top-1.5 h-4 w-4 text-emerald-500" />
      </div>
    );
  }
  if (kind === "seo") {
    return (
      <div className="relative flex h-16 items-end justify-between gap-1 rounded-lg border border-emerald-400/35 bg-stone-900/90 px-2.5 pb-2 pt-3">
        {[35, 48, 62, 78, 92].map((h, i) => (
          <motion.div
            key={i}
            className="w-full rounded-t"
            style={{ background: i === 4 ? color : `${color}66` }}
            initial={{ height: "10%" }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.45 }}
          />
        ))}
        <SparklesIcon className="absolute right-2 top-2 h-4 w-4 text-emerald-300" />
      </div>
    );
  }
  if (kind === "integrate") {
    return (
      <div className="relative flex h-16 items-center justify-center gap-1.5 rounded-lg border border-emerald-400/35 bg-stone-900/90 px-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex h-8 w-8 items-center justify-center rounded-lg border"
            style={{ borderColor: `${color}66`, background: `${color}22` }}
          >
            <CheckCircleIcon className="h-3.5 w-3.5" style={{ color }} />
          </div>
        ))}
        <svg className="pointer-events-none absolute inset-x-4 top-1/2 h-4 -translate-y-1/2" viewBox="0 0 100 10" aria-hidden>
          <path d="M8 5 H92" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8" />
        </svg>
      </div>
    );
  }
  return (
    <div className="relative flex h-16 items-center justify-center rounded-lg border border-emerald-400/35 bg-gradient-to-br from-orange-950/40 to-stone-900">
      <ChatBubbleLeftRightIcon className="h-7 w-7 text-orange-300" />
      <span className="absolute right-[26%] top-[26%] flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[8px] font-bold text-white">
        ✓
      </span>
    </div>
  );
}

function PairCard({ pair, index }: { pair: Pair; index: number }) {
  const ready = useMotionReady();
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const cycle = 3200;
    const start = index * 400;
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setInterval>;
    t1 = setTimeout(() => {
      setShowSolution(true);
      t2 = setInterval(() => setShowSolution((v) => !v), cycle);
    }, start + 900);
    return () => {
      clearTimeout(t1);
      clearInterval(t2!);
    };
  }, [ready, index]);

  return (
    <FastLink
      href={pair.href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border-2 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 dark:bg-stone-950",
      )}
      style={{
        borderColor: showSolution ? `${pair.color}66` : "rgba(225,29,72,0.35)",
        boxShadow: showSolution
          ? `0 12px 28px ${pair.color}22`
          : "0 10px 24px rgba(225,29,72,0.12)",
      }}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em]",
            showSolution
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
              : "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
          )}
        >
          {showSolution ? "Solution" : "Problem"}
        </span>
        <ArrowRightIcon
          className={cn(
            "h-3.5 w-3.5 transition",
            showSolution ? "text-emerald-500 rotate-0" : "text-rose-400 -rotate-45",
          )}
        />
      </div>

      <div className="relative min-h-[64px]">
        <AnimatePresence mode="wait">
          {!showSolution ? (
            <motion.div
              key="problem"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.35 }}
            >
              <ProblemScene kind={pair.problem.visual} color={pair.color} />
              <p className="mt-2 text-xs font-semibold text-stone-800 dark:text-stone-100">
                {pair.problem.title}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="solution"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.35 }}
            >
              <SolutionScene kind={pair.solution.visual} color={pair.color} />
              <p className="mt-2 text-xs font-semibold text-stone-800 dark:text-stone-100">
                {pair.solution.title}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FastLink>
  );
}

export function HeroProblemSolutions() {
  const ready = useMotionReady();

  return (
    <motion.div
      initial={ready ? { opacity: 0, y: 16 } : false}
      animate={ready ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay: 0.28 }}
      className="mt-8"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
        Problem → solution
      </p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {PAIRS.map((pair, i) => (
          <PairCard key={pair.id} pair={pair} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
