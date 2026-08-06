"use client";

import { motion } from "framer-motion";
import {
  BoltIcon,
  ClockIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

import { FastLink } from "@/components/navigation/fast-link";
import { MotionIn } from "@/components/motion/MotionIn";
import { useMotionReady } from "@/lib/motion";

const REASONS = [
  {
    title: "Proven Excellence",
    body: "26+ deliveries across membership and product systems with measurable outcomes you can plan around.",
    result: "Trackable wins",
    icon: TrophyIcon,
    color: "#C2410C",
  },
  {
    title: "Agile Delivery",
    body: "Fast, iterative builds with transparent communication and written scope at every stage.",
    result: "No guesswork",
    icon: BoltIcon,
    color: "#0284C7",
  },
  {
    title: "Security First",
    body: "Role-based access, secure logins, and production-minded habits baked into every solution.",
    result: "Safe by default",
    icon: ShieldCheckIcon,
    color: "#059669",
  },
  {
    title: "Responsive Support",
    body: "The same crew that ships stays reachable, typically within a day, not a ticket void.",
    result: "Same hands",
    icon: ClockIcon,
    color: "#EA580C",
  },
] as const;

export function WhyChooseUs() {
  const ready = useMotionReady();

  return (
    <section className="relative mx-auto w-[min(92vw,1440px)] py-[clamp(3rem,8vw,6rem)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-10 h-64 w-64 rounded-full bg-sky-400/10 blur-[80px]" />
        <div className="absolute left-1/3 bottom-0 h-56 w-56 rounded-full bg-accent/10 blur-[70px]" />
      </div>

      <div className="mx-auto max-w-3xl">
        <MotionIn>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.15]">
            We Combine Expertise With{" "}
            <span className="text-accent">Passion</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            Led by{" "}
            <span className="font-semibold text-stone-900 dark:text-white">Hafiz Subhan</span>{" "}
            with a six-person crew,{" "}
            <span className="font-semibold text-accent">RS Dev</span> brings enterprise-grade
            thinking to businesses of every size. Clear owners, written scope, and the same
            hands from first call to go-live.
          </p>
        </MotionIn>

        <ul className="mt-8 space-y-4">
          {REASONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.title}
                initial={ready ? { opacity: 0, y: 16, scale: 0.97 } : false}
                whileInView={ready ? { opacity: 1, y: 0, scale: 1 } : undefined}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={ready ? { y: -3, transition: { duration: 0.2 } } : undefined}
                className="group relative flex gap-4 overflow-hidden rounded-2xl border-2 bg-white p-4 sm:p-5 dark:bg-stone-950/80 contain-content"
                style={{
                  borderColor: `${item.color}45`,
                  boxShadow: `0 10px 28px rgba(28,25,23,0.05), 0 0 20px ${item.color}12`,
                }}
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-25 blur-2xl motion-safe:animate-pulse max-md:hidden"
                  style={{ background: item.color }}
                />
                <span
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 text-white"
                  style={{
                    background: item.color,
                    borderColor: item.color,
                    boxShadow: `0 0 18px ${item.color}55`,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div className="relative min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-stone-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span
                      className="rounded-md border-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      style={{
                        color: item.color,
                        borderColor: `${item.color}55`,
                        background: `${item.color}14`,
                      }}
                    >
                      {item.result}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <MotionIn delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <FastLink
              href="/about"
              className="cta-glow-zoom btn-cta-float inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm sm:text-base font-bold brand-button"
            >
              Meet The Minds Behind It
            </FastLink>
            <FastLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-stone-300 bg-white/90 px-7 py-3.5 text-sm sm:text-base font-bold text-stone-800 transition hover:border-accent/40 dark:border-white/15 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
            >
              Bring Us Your Challenge
            </FastLink>
          </div>
        </MotionIn>
      </div>
    </section>
  );
}
