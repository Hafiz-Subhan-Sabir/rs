"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { PROJECTS } from "@/constants";
import { MotionIn } from "@/components/motion/MotionIn";

export function FeaturedWork() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-16 md:py-24 bg-gray-50/80 dark:bg-white/[0.02]">
      <MotionIn>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-cyan-400/90">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Projects that <span className="brand-gradient-text">ship</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-emerald-400/50 dark:border-white/10 dark:bg-white/5 dark:hover:text-cyan-300"
          >
            Full portfolio <span aria-hidden>→</span>
          </Link>
        </div>
      </MotionIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-1 text-xs text-white/75 line-clamp-1">{project.stack}</p>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <Link
                href="/work"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 dark:text-cyan-300"
              >
                View project <span className="transition group-hover:translate-x-0.5" aria-hidden>→</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
