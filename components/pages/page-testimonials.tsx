"use client";

import { motion } from "framer-motion";

import { CLIENT_TESTIMONIALS } from "@/constants/testimonials";
import { MotionIn } from "@/components/motion/MotionIn";

const FEATURED = CLIENT_TESTIMONIALS.slice(0, 6);

export function PageTestimonials() {
  return (
    <section className="relative mx-auto w-[90vw] max-w-[90vw] py-16 md:py-24 border-y border-stone-200/80 dark:border-white/[0.06]">
      <MotionIn>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">
            Teams who trusted us with the hard parts
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Real operators — clearer product, search, and ops after working with the RS Dev crew.
          </p>
        </div>
      </MotionIn>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {FEATURED.map((item, i) => (
          <motion.article
            key={`${item.partnerName}-${item.author}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: (i % 3) * 0.06, duration: 0.45 }}
            className="flex h-full flex-col rounded-2xl border-2 border-stone-200/90 bg-white p-6 dark:border-white/10 dark:bg-stone-950/80"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
              {item.partnerName}
            </p>
            <blockquote className="mt-3 flex-1 text-base leading-relaxed text-stone-700 dark:text-stone-300">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <footer className="mt-5 border-t border-stone-200/80 pt-4 dark:border-white/10">
              <p className="text-sm font-semibold text-stone-900 dark:text-white">{item.author}</p>
              <p className="mt-0.5 text-sm text-stone-500 dark:text-stone-400">{item.role}</p>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
