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
  { color: "#EA580C", label: "Apps" },
  { color: "#0284C7", label: "Architect" },
  { color: "#0284C7", label: "Grow" },
  { color: "#059669", label: "DevOps" },
  { color: "#059669", label: "Cloud" },
] as const;

const HIDDEN_LEADS = new Set(["Omar Farooq", "Daniyal Sheikh"]);

function toTitleCase(value: string) {
  return value
    .split(" ")
    .map((part) => {
      if (part === "&") return part;
      if (part.toLowerCase() === "and") return "And";
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

/** Even 2×3 service grid — aligned, modern, readable */
export function ServicesCollage() {
  return (
    <section className="relative mx-auto w-[90vw] max-w-[90vw] py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-[clamp(1.5rem,4vw,2.5rem)] text-center max-w-3xl mx-auto">
        <h2 className="font-display text-[clamp(1.85rem,4.5vw,2.85rem)] font-semibold tracking-tight text-stone-900 dark:text-white">
          Six Expertises In One Delivery Line
        </h2>
        <p className="mt-3 text-[clamp(1rem,2vw,1.2rem)] text-stone-600 dark:text-stone-400 leading-relaxed">
          Build, architect, DevOps, apps, growth, and cloud — one aligned grid for how{" "}
          <span className="font-semibold text-accent">RS Dev</span> ships.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
        {siteConfig.services.map((service, i) => {
          const theme = THEME[i % THEME.length];
          const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
          const Visual = SERVICE_VISUALS[i % SERVICE_VISUALS.length];
          const showLead = !HIDDEN_LEADS.has(service.lead);
          const leadLine = showLead
            ? `${service.expertise} · ${service.lead.replace(/\s+Sabir$/, "")}`
            : service.expertise;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.45 }}
              className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border-2 bg-white dark:bg-stone-950"
              style={{
                borderColor: `${theme.color}66`,
                boxShadow: `0 14px 40px rgba(28,25,23,0.06), 0 0 24px ${theme.color}14`,
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${theme.color}, #0284C7, #059669)`,
                }}
              />
              <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 text-white"
                    style={{ background: theme.color, borderColor: theme.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className="rounded-lg border-2 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em]"
                    style={{
                      background: `${theme.color}18`,
                      color: theme.color,
                      borderColor: `${theme.color}40`,
                    }}
                  >
                    {theme.label}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[clamp(1.15rem,2.2vw,1.4rem)] font-semibold leading-snug text-stone-900 dark:text-white">
                  {toTitleCase(service.title)}
                </h3>
                <p
                  className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.1em]"
                  style={{ color: theme.color }}
                >
                  {leadLine}
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-600 dark:text-stone-400">
                  {service.description}
                </p>
                <div className="mt-auto pt-4">
                  <Visual accent={theme.color} />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-[clamp(1.5rem,4vw,2.5rem)] flex justify-center">
        <FastLink
          href="/services"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-accent/40 bg-white px-7 py-3.5 text-base font-bold text-stone-900 shadow-[0_0_28px_rgba(194,65,12,0.15)] transition hover:border-accent dark:bg-stone-950 dark:text-white"
        >
          Explore Services <span aria-hidden>→</span>
        </FastLink>
      </div>
    </section>
  );
}
