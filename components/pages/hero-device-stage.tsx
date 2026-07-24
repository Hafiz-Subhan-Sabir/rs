"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CloudIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { CountUpText } from "@/components/ui/count-up-text";
import { useMotionReady } from "@/lib/motion";
import { useCanUseHeavyMotion } from "@/lib/perf";

const ARCH_NODES = [
  { label: "Gateway", icon: CloudIcon, color: "#0284C7", x: 8, y: 18 },
  { label: "Services", icon: CubeTransparentIcon, color: "#C2410C", x: 42, y: 6 },
  { label: "Data", icon: ServerStackIcon, color: "#059669", x: 74, y: 22 },
  { label: "Auth", icon: ShieldCheckIcon, color: "#0ea5e9", x: 28, y: 48 },
] as const;

export function HeroDeviceStage() {
  const ready = useMotionReady();
  const heavy = useCanUseHeavyMotion();
  const float = ready && heavy;

  return (
    <div className="relative mx-auto w-full">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/12 via-sky-400/10 to-emerald-400/12 blur-2xl" />

      {/* Pyramid: mobile on top-center, desktop left + architect right below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 lg:gap-9 xl:gap-10 items-start justify-items-center">
        {/* 1 · Mobile — TOP / MID */}
        <motion.div
          className="relative z-[3] w-full max-w-[170px] sm:col-span-2 sm:justify-self-center"
          initial={ready ? { opacity: 0, y: 28 } : false}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={float ? { y: [0, -8, 0] } : undefined}
            transition={float ? { duration: 5.5, repeat: Infinity, ease: "easeInOut" } : undefined}
            className="rounded-[1.85rem] border-[3px] border-stone-700 bg-stone-900 p-2 shadow-[0_20px_44px_rgba(194,65,12,0.3)]"
          >
            <div className="mx-auto mb-1.5 h-1 w-11 rounded-full bg-stone-600" />
            <div className="overflow-hidden rounded-[1.35rem] bg-gradient-to-b from-orange-50 to-white dark:from-stone-800 dark:to-stone-950">
              <div className="bg-accent px-2 py-2 text-center">
                <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-white">RS App</p>
              </div>
              <div className="flex flex-col items-center px-2 py-6">
                <Image
                  src="/rs-dev-logo.png"
                  alt="RS Dev"
                  width={90}
                  height={110}
                  sizes="(max-width: 640px) 78px, 90px"
                  className="h-[78px] w-auto object-contain drop-shadow-md"
                  priority
                />
                <p className="mt-2.5 font-display text-xs font-bold">
                  <span className="text-accent">RS</span> Dev
                </p>
                <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-sky-700 dark:text-sky-300">
                  Live product
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 2 · Desktop — BOTTOM LEFT */}
        <motion.div
          className="relative z-[2] w-full max-w-[340px] sm:justify-self-end sm:pr-1"
          initial={ready ? { opacity: 0, y: 36 } : false}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={float ? { y: [0, -6, 0] } : undefined}
            transition={
              float ? { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 } : undefined
            }
          >
            <div className="overflow-hidden rounded-t-xl border-2 border-stone-700 bg-stone-900 shadow-[0_28px_56px_rgba(28,25,23,0.35)]">
              <div className="flex items-center gap-1.5 border-b border-stone-700 bg-stone-800 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-2 truncate text-[9px] text-stone-400">
                  the-rsdev.com — Identity · Delivery · Growth
                </span>
              </div>
              <div className="relative bg-gradient-to-b from-stone-50 to-orange-50/80 px-3.5 py-4 dark:from-stone-900 dark:to-stone-950">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm dark:border-white/10 dark:bg-stone-800">
                    <Image
                      src="/rs-dev-logo.png"
                      alt=""
                      width={40}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-display text-[15px] font-bold leading-none">
                      <span className="text-accent">RS</span>
                      <span className="text-stone-900 dark:text-white"> Dev</span>
                    </p>
                    <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">
                      Identity · Delivery · Growth
                    </p>
                  </div>
                </div>
                <div className="mt-3.5 grid grid-cols-2 gap-2">
                  {[
                    { n: "98.2%", t: "Satisfaction", color: "#C2410C" },
                    { n: "126+", t: "Delivered", color: "#0284C7" },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="rounded-lg border border-stone-200/90 bg-white py-2.5 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                    >
                      <p className="font-display text-sm font-bold" style={{ color: item.color }}>
                        <CountUpText value={item.n} />
                      </p>
                      <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-stone-500">
                        {item.t}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {["Cloud", "Apps", "DevOps", "SEO"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-stone-900/90 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-white dark:bg-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mx-auto h-2.5 w-[96%] rounded-b-md bg-stone-700" />
            <div className="mx-auto h-1.5 w-[30%] rounded-b-full bg-stone-600" />
          </motion.div>
        </motion.div>

        {/* 3 · System architect — BOTTOM RIGHT */}
        <motion.div
          className="relative z-[1] w-full max-w-[260px] sm:justify-self-start sm:pl-1"
          initial={ready ? { opacity: 0, y: 28 } : false}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={float ? { y: [0, -8, 0] } : undefined}
            transition={float ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : undefined}
            className="overflow-hidden rounded-2xl border-2 border-sky-500/40 bg-stone-950/95 p-3.5 shadow-[0_20px_48px_rgba(2,132,199,0.28)]"
          >
            <div className="mb-2.5 flex items-center justify-between gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-sky-300">
                System architect
              </p>
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" />
            </div>
            <div className="relative h-[160px] rounded-xl border border-white/10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(2,132,199,0.28),transparent_55%),#0c1222]">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 60" aria-hidden>
                <motion.path
                  d="M18 22 H42 M42 22 H72 M42 22 V38 H30 V48 M42 38 H58 V48"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="0.6"
                  strokeDasharray="2 1.5"
                  initial={ready ? { pathLength: 0, opacity: 0.3 } : false}
                  animate={ready ? { pathLength: 1, opacity: 0.75 } : undefined}
                  transition={{ duration: 2.2, delay: 0.6, ease: "easeInOut" }}
                />
              </svg>
              {ARCH_NODES.map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.label}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    initial={ready ? { scale: 0, opacity: 0 } : false}
                    animate={ready ? { scale: 1, opacity: 1 } : undefined}
                    transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 text-white shadow-lg"
                      style={{ background: node.color, boxShadow: `0 0 16px ${node.color}66` }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="mt-0.5 text-[7px] font-bold uppercase tracking-wide text-stone-300">
                      {node.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            <p className="mt-2.5 text-[9px] font-semibold text-stone-400">
              Clients → Auth → Core → Store
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
