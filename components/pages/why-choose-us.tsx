"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BoltIcon,
  ClockIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

import { MotionIn } from "@/components/motion/MotionIn";

const REASONS = [
  {
    title: "Proven excellence",
    body: "26+ deliveries across membership, affiliate, and product systems with measurable outcomes.",
    icon: TrophyIcon,
  },
  {
    title: "Agile delivery",
    body: "Fast, iterative builds with transparent communication and written scope at every stage.",
    icon: BoltIcon,
  },
  {
    title: "Security first",
    body: "Role-based access, secure logins, and production-minded habits baked into every solution.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Responsive support",
    body: "The same crew that ships stays reachable — typically within a day, not a ticket void.",
    icon: ClockIcon,
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="relative mx-auto w-[min(90vw,1280px)] py-[clamp(3rem,8vw,6rem)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-sky-400/10 blur-[80px]" />
        <div className="absolute left-10 bottom-0 h-56 w-56 rounded-full bg-accent/10 blur-[70px]" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <div>
          <MotionIn>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              Why choose us
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.15]">
              We combine expertise with{" "}
              <span className="text-accent">passion</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl">
              Led by Hafiz Subhan Sabir with a six-person crew — including Cloud Solution Expert{" "}
              <span className="font-semibold text-stone-900 dark:text-white">Daniyal Sheikh</span>{" "}
              and DevOps &amp; Automation led by Omar Farooq — RS Dev brings enterprise-grade
              thinking to businesses of every size.
            </p>
          </MotionIn>

          <ul className="mt-8 space-y-3">
            {REASONS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex gap-4 rounded-2xl border-2 border-stone-200/90 bg-white p-4 sm:p-5 dark:border-white/10 dark:bg-stone-950/80"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-accent/25 bg-orange-50 text-accent dark:bg-orange-950/40">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <MotionIn delay={0.1}>
          <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-accent/25 shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
            <div className="absolute inset-x-0 top-0 z-[1] h-1.5 bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
            <div className="relative aspect-[4/3] w-full bg-stone-200 dark:bg-stone-800">
              <Image
                src="/team/office-crew.jpg"
                alt="RS Dev crew collaborating in the office — six specialists working together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority={false}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent p-5 sm:p-6">
              <p className="font-display text-lg font-semibold text-white">Six specialists. One desk.</p>
              <p className="mt-1 text-sm text-stone-200/90">
                Full stack · Architecture · DevOps · Apps · SEO AI · Cloud
              </p>
            </div>
          </div>
        </MotionIn>
      </div>
    </section>
  );
}
