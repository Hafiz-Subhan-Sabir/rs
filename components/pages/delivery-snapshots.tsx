"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { MotionIn } from "@/components/motion/MotionIn";
import { SectionHeader } from "@/components/ui/section-header";
import { DELIVERY_SNAPSHOTS } from "@/constants/case-studies";

export function DeliverySnapshots() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <SectionHeader
        eyebrow="Delivery snapshots"
        title="Problems we have helped companies solve"
        description="Real-style delivery work across industries. Names withheld where required. Ask us about a similar challenge for your business."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {DELIVERY_SNAPSHOTS.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="surface-card rounded-xl border-2 bg-white p-6 sm:p-7 dark:bg-white/[0.03]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                {item.industry}
              </span>
              <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">{item.metric}</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-stone-900 dark:text-white">
              {item.headline}
            </h3>
            <p className="mt-2 text-sm text-rose-600/90 dark:text-rose-400/90">
              <span className="font-semibold">Stuck: </span>
              {item.problem}
            </p>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              <span className="font-semibold text-accent">Fixed: </span>
              {item.outcome}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-stone-200/80 bg-stone-50 px-2.5 py-1 text-[11px] font-medium text-stone-600 dark:border-white/10 dark:bg-white/5 dark:text-stone-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <MotionIn>
        <p className="mt-10 text-center text-sm text-stone-500 dark:text-stone-400">
          Want the full build list?{" "}
          <Link href="/work" className="font-semibold text-accent hover:underline">
            See portfolio work
          </Link>
        </p>
      </MotionIn>
    </section>
  );
}
