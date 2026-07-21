"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { PROJECTS } from "@/constants";
import { MotionIn } from "@/components/motion/MotionIn";

export function FeaturedWork() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <MotionIn>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Live work
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">
              Sites you can open today
            </h2>
          </div>
          <Link
            href="/work"
            className="btn-outline-cta inline-flex items-center gap-2 self-start rounded-lg border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold transition dark:border-white/10 dark:bg-white/5"
          >
            All live projects <span aria-hidden>→</span>
          </Link>
        </div>
      </MotionIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-xl border border-stone-200/90 bg-white dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="image-hover-wrap relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="image-hover-scale object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange-200">
                  {project.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-white">{project.title}</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent"
              >
                Visit live site{" "}
                <span className="transition group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
