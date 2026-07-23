"use client";

import { motion } from "framer-motion";

import { FastLink } from "@/components/navigation/fast-link";
import { siteConfig } from "@/config/site";
import {
  SERVICE_ICONS,
  SERVICE_VISUALS,
} from "@/components/pages/service-visuals";

const THEME = [
  { color: "#C2410C", label: "Build" },
  { color: "#0284C7", label: "Architect" },
  { color: "#059669", label: "DevOps" },
  { color: "#EA580C", label: "Apps" },
  { color: "#0284C7", label: "Grow" },
  { color: "#059669", label: "Cloud" },
] as const;

/** Modern collage grid for the six service / work cards */
export function ServicesCollage() {
  return (
    <section className="relative mx-auto w-[min(90vw,1280px)] py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-[clamp(1.5rem,4vw,2.5rem)] text-center max-w-3xl mx-auto">
        <p className="text-[clamp(0.7rem,1.5vw,0.8rem)] font-bold uppercase tracking-[0.24em] text-accent">
          What we ship
        </p>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold tracking-tight text-stone-900 dark:text-white">
          Six expertises in one delivery line
        </h2>
        <p className="mt-3 text-[clamp(0.95rem,2vw,1.125rem)] text-stone-600 dark:text-stone-400 leading-relaxed">
          A modern collage of how we work — build, architect, DevOps, apps, growth, and cloud.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[clamp(0.75rem,2vw,1.25rem)] auto-rows-[minmax(180px,auto)]">
        {siteConfig.services.map((service, i) => {
          const theme = THEME[i % THEME.length];
          const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
          const Visual = SERVICE_VISUALS[i % SERVICE_VISUALS.length];
          const span =
            i === 0
              ? "lg:col-span-3 lg:row-span-2"
              : i === 1
                ? "lg:col-span-3"
                : i === 2
                  ? "lg:col-span-2"
                  : i === 3
                    ? "lg:col-span-2"
                    : i === 4
                      ? "lg:col-span-2"
                      : "lg:col-span-6";

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.45 }}
              className={`group relative flex flex-col overflow-hidden rounded-[clamp(1rem,2vw,1.35rem)] border-2 bg-white dark:bg-stone-950 ${span}`}
              style={{
                borderColor: `${theme.color}55`,
                boxShadow: `0 14px 40px rgba(28,25,23,0.06), 0 0 24px ${theme.color}14`,
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${theme.color}, #0284C7, #059669)`,
                }}
              />
              <div className="relative flex flex-1 flex-col p-[clamp(1rem,2.5vw,1.5rem)]">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{ background: theme.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[clamp(0.6rem,1.2vw,0.7rem)] font-bold uppercase tracking-[0.12em]"
                    style={{ background: `${theme.color}18`, color: theme.color }}
                  >
                    {theme.label}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[clamp(1.05rem,2.2vw,1.35rem)] font-semibold text-stone-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-1 text-[clamp(0.65rem,1.3vw,0.75rem)] font-bold uppercase tracking-[0.1em] text-sky-700 dark:text-sky-300">
                  {service.expertise} · {service.lead}
                </p>
                <p className="mt-2 text-[clamp(0.85rem,1.8vw,0.95rem)] leading-relaxed text-stone-600 dark:text-stone-400 line-clamp-3">
                  {service.description}
                </p>
                {i === 0 || i === 1 ? (
                  <div className="mt-auto pt-3">
                    <Visual accent={theme.color} />
                  </div>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-[clamp(1.5rem,4vw,2.5rem)] flex justify-center">
        <FastLink
          href="/services"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-accent/40 bg-white px-7 py-3.5 text-[clamp(0.875rem,1.8vw,1rem)] font-bold text-stone-900 shadow-[0_0_28px_rgba(194,65,12,0.15)] transition hover:border-accent dark:bg-stone-950 dark:text-white"
        >
          Explore services <span aria-hidden>→</span>
        </FastLink>
      </div>
    </section>
  );
}
