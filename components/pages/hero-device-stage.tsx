"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CloudIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { useMotionReady } from "@/lib/motion";

const CLOUD_CHIPS = [
  { label: "Cloud scale", x: "0%", y: "6%", delay: 0.2 },
  { label: "Edge · CDN", x: "70%", y: "2%", delay: 0.35 },
  { label: "Secure host", x: "76%", y: "64%", delay: 0.5 },
] as const;

const ARCH_NODES = [
  { label: "Gateway", icon: CloudIcon, color: "#0284C7", x: 8, y: 18 },
  { label: "Services", icon: CubeTransparentIcon, color: "#C2410C", x: 42, y: 6 },
  { label: "Data", icon: ServerStackIcon, color: "#059669", x: 74, y: 22 },
  { label: "Auth", icon: ShieldCheckIcon, color: "#0ea5e9", x: 28, y: 48 },
] as const;

export function HeroDeviceStage() {
  const ready = useMotionReady();

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none aspect-[1/1.08] sm:aspect-square lg:aspect-auto lg:min-h-[min(560px,70vh)]">
      <div className="pointer-events-none absolute inset-[6%] rounded-[2rem] bg-gradient-to-br from-accent/15 via-sky-400/10 to-emerald-400/15 blur-2xl" />

      {/* Architecture — spaced left */}
      <motion.div
        className="absolute left-0 top-[0%] z-[1] w-[52%] max-w-[260px]"
        initial={ready ? { opacity: 0, x: -40, y: 20, rotate: -6 } : false}
        animate={ready ? { opacity: 1, x: 0, y: 0, rotate: -3 } : undefined}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={ready ? { y: [0, -10, 0], rotate: [-3, -1, -3] } : undefined}
          transition={ready ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : undefined}
          className="relative overflow-hidden rounded-2xl border-2 border-sky-500/35 bg-stone-950/95 p-3 shadow-[0_20px_50px_rgba(2,132,199,0.25)]"
        >
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[clamp(0.55rem,1.1vw,0.7rem)] font-bold uppercase tracking-[0.16em] text-sky-300">
              System architect
            </p>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          </div>
          <div className="relative h-[clamp(100px,18vw,140px)] rounded-xl border border-white/10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(2,132,199,0.25),transparent_55%),#0c1222]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 60" aria-hidden>
              <motion.path
                d="M18 22 H42 M42 22 H72 M42 22 V38 H30 V48 M42 38 H58 V48"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="0.6"
                strokeDasharray="2 1.5"
                initial={ready ? { pathLength: 0, opacity: 0.3 } : false}
                animate={ready ? { pathLength: 1, opacity: 0.7 } : undefined}
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
                  transition={{ delay: 0.7 + i * 0.12, type: "spring", stiffness: 260, damping: 18 }}
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
          <p className="mt-2 text-[9px] font-semibold text-stone-400">Clients → Auth → Core → Store</p>
        </motion.div>
      </motion.div>

      {/* Laptop — more center gap from arch & phone */}
      <motion.div
        className="absolute left-[18%] top-[28%] z-[3] w-[72%] max-w-[380px]"
        initial={ready ? { opacity: 0, y: 50, scale: 0.92 } : false}
        animate={ready ? { opacity: 1, y: 0, scale: 1 } : undefined}
        transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={ready ? { y: [0, -6, 0] } : undefined}
          transition={ready ? { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } : undefined}
        >
          <div className="overflow-hidden rounded-t-xl border-2 border-stone-700 bg-stone-900 shadow-[0_30px_60px_rgba(28,25,23,0.35)]">
            <div className="flex items-center gap-1.5 border-b border-stone-700 bg-stone-800 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-2 truncate text-[9px] text-stone-400">
                the-rsdev.com — Identity · Delivery · Growth
              </span>
            </div>
            <div className="relative bg-gradient-to-b from-stone-50 to-orange-50/80 px-3 py-3 dark:from-stone-900 dark:to-stone-950">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm dark:border-white/10 dark:bg-stone-800">
                  <Image
                    src="/rs-dev-logo.png"
                    alt=""
                    width={36}
                    height={36}
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-bold leading-none">
                    <span className="text-accent">RS</span>
                    <span className="text-stone-900 dark:text-white"> Dev</span>
                  </p>
                  <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">
                    Identity · Delivery · Growth
                  </p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-1.5">
                {[
                  { n: "98.2%", t: "Satisfaction", color: "#C2410C" },
                  { n: "126+", t: "Delivered", color: "#0284C7" },
                ].map((item, i) => (
                  <motion.div
                    key={item.t}
                    initial={ready ? { opacity: 0, y: 10 } : false}
                    animate={ready ? { opacity: 1, y: 0 } : undefined}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="rounded-lg border border-stone-200/90 bg-white py-2 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                  >
                    <p className="font-display text-xs font-bold" style={{ color: item.color }}>
                      {item.n}
                    </p>
                    <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-stone-500">
                      {item.t}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1">
                {["Cloud", "Apps", "DevOps", "SEO"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={ready ? { opacity: 0, scale: 0.8 } : false}
                    animate={ready ? { opacity: 1, scale: 1 } : undefined}
                    transition={{ delay: 1 + i * 0.08 }}
                    className="rounded-md bg-stone-900/90 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-white dark:bg-white/15"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto h-2.5 w-[96%] rounded-b-md bg-stone-700" />
          <div className="mx-auto h-1.5 w-[30%] rounded-b-full bg-stone-600" />
        </motion.div>
      </motion.div>

      {/* Phone — spaced further right / up */}
      <motion.div
        className="absolute right-[-2%] top-[8%] z-[4] w-[clamp(108px,22vw,136px)]"
        initial={ready ? { opacity: 0, x: 50, y: -20, rotate: 12 } : false}
        animate={ready ? { opacity: 1, x: 0, y: 0, rotate: 6 } : undefined}
        transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={ready ? { y: [0, 12, 0], rotate: [6, 3, 6] } : undefined}
          transition={ready ? { duration: 5.5, repeat: Infinity, ease: "easeInOut" } : undefined}
          className="rounded-[1.6rem] border-[3px] border-stone-700 bg-stone-900 p-1.5 shadow-[0_24px_48px_rgba(194,65,12,0.3)]"
        >
          <div className="mx-auto mb-1.5 h-1 w-10 rounded-full bg-stone-600" />
          <div className="overflow-hidden rounded-[1.15rem] bg-gradient-to-b from-orange-50 to-white dark:from-stone-800 dark:to-stone-950">
            <div className="bg-accent px-2 py-1.5 text-center">
              <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-white">RS App</p>
            </div>
            <div className="flex flex-col items-center px-2 py-4">
              <Image
                src="/rs-dev-logo.png"
                alt="RS Dev"
                width={80}
                height={100}
                className="h-[clamp(56px,12vw,72px)] w-auto object-contain drop-shadow-md"
              />
              <p className="mt-2 font-display text-[11px] font-bold">
                <span className="text-accent">RS</span> Dev
              </p>
              <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-sky-700 dark:text-sky-300">
                Live product
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Cloud solution chips */}
      {CLOUD_CHIPS.map((chip) => (
        <motion.div
          key={chip.label}
          className="absolute z-[5]"
          style={{ left: chip.x, top: chip.y }}
          initial={ready ? { opacity: 0, scale: 0.6 } : false}
          animate={
            ready
              ? { opacity: 1, scale: 1, y: [0, -8, 0] }
              : undefined
          }
          transition={{
            opacity: { delay: chip.delay + 0.4, duration: 0.4 },
            scale: { delay: chip.delay + 0.4, duration: 0.4 },
            y: { delay: chip.delay + 1, duration: 4 + chip.delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="inline-flex items-center gap-1 rounded-full border-2 border-sky-500/40 bg-white/95 px-2.5 py-1 text-[clamp(0.55rem,1.2vw,0.7rem)] font-bold text-sky-800 shadow-lg backdrop-blur dark:bg-stone-900/90 dark:text-sky-200">
            <CloudIcon className="h-3 w-3" />
            {chip.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
