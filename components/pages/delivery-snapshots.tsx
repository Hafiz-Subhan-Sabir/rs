"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CloudIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import { MotionIn } from "@/components/motion/MotionIn";
import { DELIVERY_SNAPSHOTS } from "@/constants/case-studies";
import { useMotionReady } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Browser + cloud enterprise dashboard for The Syndicate */
function SyndicateCloudVisual() {
  const ready = useMotionReady();

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-sky-500/30 bg-gradient-to-br from-slate-950 via-stone-900 to-orange-950 p-3 sm:p-4 shadow-[0_0_40px_rgba(14,165,233,0.18)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-400/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-4 h-24 w-24 rounded-full bg-accent/25 blur-2xl" />

      {/* Floating cloud nodes */}
      <motion.div
        className="absolute left-3 top-10 z-10 flex items-center gap-1 rounded-lg border border-sky-400/40 bg-sky-950/80 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-sky-200 backdrop-blur"
        animate={ready ? { y: [0, -5, 0] } : undefined}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <CloudIcon className="h-3.5 w-3.5" />
        Edge
      </motion.div>
      <motion.div
        className="absolute right-3 top-14 z-10 flex items-center gap-1 rounded-lg border border-amber-400/40 bg-amber-950/70 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-amber-200 backdrop-blur"
        animate={ready ? { y: [0, 6, 0] } : undefined}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <CubeTransparentIcon className="h-3.5 w-3.5" />
        Chain
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 z-10 flex items-center gap-1 rounded-lg border border-emerald-400/40 bg-emerald-950/70 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-200 backdrop-blur"
        animate={ready ? { y: [0, -4, 0] } : undefined}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        <ServerStackIcon className="h-3.5 w-3.5" />
        API
      </motion.div>

      {/* Browser chrome */}
      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-stone-950 shadow-inner">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <div className="ml-2 flex-1 truncate rounded-md bg-white/10 px-2 py-1 text-[10px] text-stone-300">
            app.thesyndicate.cloud / members
          </div>
        </div>

        <div className="grid grid-cols-[72px_1fr] gap-2 p-2.5 sm:grid-cols-[88px_1fr] sm:p-3">
          {/* Sidebar */}
          <div className="space-y-1.5 rounded-lg bg-white/[0.04] p-2">
            {["Home", "Members", "Courses", "Pay"].map((label, i) => (
              <div
                key={label}
                className={cn(
                  "rounded-md px-1.5 py-1 text-[9px] font-semibold",
                  i === 1
                    ? "bg-accent/90 text-white"
                    : "bg-white/5 text-stone-400",
                )}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Main dashboard */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold text-white">Member Hub</p>
                <p className="text-[9px] text-stone-400">Cloud enterprise surface</p>
              </div>
              <span className="rounded-md bg-sky-500/20 px-1.5 py-0.5 text-[8px] font-bold uppercase text-sky-300">
                Live
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: "Members", value: "12.4k", tone: "text-sky-300" },
                { label: "Courses", value: "86", tone: "text-amber-300" },
                { label: "Uptime", value: "99.9%", tone: "text-emerald-300" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/[0.05] p-1.5"
                >
                  <p className={cn("font-display text-xs font-semibold", stat.tone)}>
                    {stat.value}
                  </p>
                  <p className="text-[8px] text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-white/10 bg-gradient-to-r from-accent/20 to-sky-500/15 p-2">
              <div className="mb-1.5 flex items-center gap-1.5 text-[9px] font-bold text-orange-100">
                <UserGroupIcon className="h-3.5 w-3.5" />
                AI automations · RBAC · Payments
              </div>
              <div className="flex h-8 items-end gap-1">
                {[40, 65, 48, 78, 55, 88, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-accent to-amber-300"
                    style={{ height: `${h}%` }}
                    animate={ready ? { opacity: [0.55, 1, 0.55] } : undefined}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Phone app mockup for AI proctoring quiz exam */
function QuizExamAppVisual() {
  const ready = useMotionReady();

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-violet-500/30 bg-gradient-to-br from-violet-950 via-stone-900 to-stone-950 p-3 sm:p-4 shadow-[0_0_40px_rgba(139,92,246,0.2)]">
      <div className="pointer-events-none absolute -left-6 top-0 h-28 w-28 rounded-full bg-violet-400/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-rose-400/20 blur-2xl" />

      <div className="relative mx-auto flex max-w-[280px] flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:items-stretch sm:justify-center sm:gap-4">
        {/* Phone shell */}
        <div className="relative w-[148px] shrink-0 overflow-hidden rounded-[1.35rem] border-[3px] border-stone-700 bg-stone-950 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
          <div className="mx-auto mt-1.5 h-1.5 w-12 rounded-full bg-stone-600" />
          <div className="space-y-2 p-2.5 pt-3">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-bold text-white">Quiz Exam</p>
              <span className="rounded bg-rose-500/25 px-1.5 py-0.5 text-[8px] font-bold text-rose-300">
                12:48
              </span>
            </div>

            {/* Webcam preview */}
            <div className="relative overflow-hidden rounded-lg border border-violet-400/40 bg-gradient-to-br from-violet-900/80 to-stone-900 aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-10 w-10 rounded-full border-2 border-dashed border-violet-300/50" />
              </div>
              <motion.div
                className="absolute inset-x-2 top-2 flex items-center gap-1 rounded-md bg-black/55 px-1.5 py-1 text-[8px] font-bold text-emerald-300"
                animate={ready ? { opacity: [0.7, 1, 0.7] } : undefined}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                <VideoCameraIcon className="h-3 w-3" />
                Face check OK
              </motion.div>
              <div className="absolute bottom-1.5 right-1.5 rounded bg-rose-500/80 px-1 py-0.5 text-[7px] font-bold text-white">
                REC
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-2">
              <p className="text-[8px] font-semibold text-stone-400">Q3 · Multiple choice</p>
              <p className="mt-0.5 text-[9px] font-semibold leading-snug text-white">
                Which check runs on tab switch?
              </p>
              <div className="mt-1.5 space-y-1">
                {["Warn + log", "Ignore", "End exam"].map((opt, i) => (
                  <div
                    key={opt}
                    className={cn(
                      "rounded-md px-1.5 py-1 text-[8px] font-medium",
                      i === 0
                        ? "border border-accent/50 bg-accent/20 text-orange-100"
                        : "bg-white/5 text-stone-400",
                    )}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side status panel */}
        <div className="min-w-0 flex-1 space-y-2 self-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-violet-300">
            App surfaces
          </p>
          {[
            { icon: ShieldCheckIcon, title: "AI Proctoring", text: "Webcam + tab guards" },
            { icon: UserGroupIcon, title: "Teacher / Student", text: "Role-based panels" },
            { icon: VideoCameraIcon, title: "Cheat logs", text: "Screenshots + counts" },
          ].map((row, i) => (
            <motion.div
              key={row.title}
              initial={ready ? { opacity: 0, x: 12 } : false}
              whileInView={ready ? { opacity: 1, x: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-2.5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                <row.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">{row.title}</p>
                <p className="text-[10px] text-stone-400">{row.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ id }: { id: string }) {
  if (id === "syndicate") return <SyndicateCloudVisual />;
  if (id === "quiz-exam") return <QuizExamAppVisual />;
  return null;
}

export function DeliverySnapshots() {
  const ready = useMotionReady();

  return (
    <section className="relative mx-auto w-[90vw] max-w-[90vw] py-20 md:py-28">
      <MotionIn>
        <header className="mb-12 md:mb-14 text-center mx-auto max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.1]">
            Two MVP Projects We Ship With Depth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Cloud enterprise web app and a live exam product — see the product surface, not just
            the brief.
          </p>
        </header>
      </MotionIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {DELIVERY_SNAPSHOTS.map((item, i) => (
          <motion.article
            key={item.id}
            initial={ready ? { opacity: 0, y: 28 } : false}
            whileInView={ready ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-accent/30 bg-white shadow-[0_16px_48px_rgba(28,25,23,0.07)] dark:border-accent/35 dark:bg-stone-950/85"
          >
            <div className="p-4 sm:p-5 pb-0">
              <ProjectVisual id={item.id} />
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8 pt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                MVP Project {String(i + 1).padStart(2, "0")} · {item.industry}
              </p>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-semibold text-stone-900 dark:text-white leading-snug">
                {item.headline}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                {item.summary}
              </p>

              <div className="mt-5 space-y-4 rounded-xl border-2 border-stone-200/90 bg-stone-50/80 p-4 sm:p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="font-bold text-rose-600 dark:text-rose-400">Stuck: </span>
                  <span className="text-stone-700 dark:text-stone-300">{item.problem}</span>
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="font-bold text-accent">Fixed: </span>
                  <span className="text-stone-700 dark:text-stone-300">{item.outcome}</span>
                </p>
              </div>

              {item.details?.length ? (
                <ul className="mt-5 space-y-2.5">
                  {item.details.slice(0, 4).map((line) => (
                    <li
                      key={line}
                      className="flex gap-2.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {line}
                    </li>
                  ))}
                </ul>
              ) : null}

              <ul className="mt-auto pt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                    className="rounded-lg border-2 border-stone-200/90 bg-white px-2.5 py-1 text-[11px] font-semibold text-stone-600 dark:border-white/12 dark:bg-white/5 dark:text-stone-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <MotionIn>
        <p className="mt-10 text-center text-sm text-stone-500 dark:text-stone-400">
          Building something similar?{" "}
          <Link href="/contact" className="font-semibold text-accent hover:underline">
            Tell us the brief →
          </Link>
        </p>
      </MotionIn>
    </section>
  );
}
