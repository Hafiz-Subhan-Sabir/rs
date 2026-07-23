"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { PROJECTS } from "@/constants";
import { MotionIn } from "@/components/motion/MotionIn";
import { useMotionReady } from "@/lib/motion";

export function FeaturedWork() {
  const motionReady = useMotionReady();
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <MotionIn>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Flagship work
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">
              Automation, enterprise apps, SEO systems
            </h2>
          </div>
          <Link
            href="/work"
            className="btn-outline-cta glow-border inline-flex items-center gap-2 self-start rounded-lg border-2 bg-white px-5 py-2.5 text-sm font-semibold transition dark:bg-white/5"
          >
            All projects <span aria-hidden>→</span>
          </Link>
        </div>
      </MotionIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project, i) => {
          const inDev = project.status === "in-development";
          const hasLive = Boolean(project.liveUrl);
          return (
            <motion.article
              key={project.title}
              initial={motionReady ? { opacity: 0, y: 24 } : false}
              whileInView={motionReady ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="surface-card group overflow-hidden rounded-xl border-2 bg-white dark:bg-white/[0.03]"
            >
              <div className="image-hover-wrap relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="image-hover-scale object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />
                <div className="absolute left-4 top-4">
                  <span className={`diff-chip ${inDev ? "diff-chip--dev" : ""}`}>
                    {inDev ? "In development" : project.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                {hasLive ? (
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
                ) : (
                  <Link
                    href="/work"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                  >
                    {inDev ? "Enterprise build details" : "Project details"}{" "}
                    <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
