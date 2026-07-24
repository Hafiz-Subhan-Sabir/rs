"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FastLink } from "@/components/navigation/fast-link";
import {
  SERVICE_ICONS,
  SERVICE_VISUALS,
} from "@/components/pages/service-visuals";
import { siteConfig } from "@/config/site";

/** Themes aligned to: Build · Ship Apps · Architect · Grow · DevOps · Cloud */
const SERVICE_THEME = [
  { color: "#C2410C", soft: "rgba(194,65,12,0.12)" },
  { color: "#EA580C", soft: "rgba(234,88,12,0.12)" },
  { color: "#0284C7", soft: "rgba(2,132,199,0.12)" },
  { color: "#0284C7", soft: "rgba(2,132,199,0.12)" },
  { color: "#059669", soft: "rgba(5,150,105,0.12)" },
  { color: "#059669", soft: "rgba(5,150,105,0.12)" },
] as const;

const HIDDEN_LEADS = new Set(["Omar Farooq", "Daniyal Sheikh"]);

function toTitleCase(value: string) {
  return value
    .split(" ")
    .map((part) => {
      if (part === "&") return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

type CapabilitiesGridProps = {
  showCta?: boolean;
};

export function CapabilitiesGrid({ showCta = true }: CapabilitiesGridProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector<HTMLElement>("[data-services-heading]");
      if (heading) {
        gsap.fromTo(
          heading,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: heading, start: "top 88%", once: true },
          },
        );
      }

      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      cards.forEach((el, i) => {
        gsap.set(el, { autoAlpha: 0, y: 36, scale: 0.98 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(el, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              delay: (i % 2) * 0.08,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-[90vw] max-w-[90vw] mx-auto py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />
        <div className="absolute top-32 right-1/4 h-56 w-56 rounded-full bg-sky-500/10 blur-[70px]" />
        <div className="absolute bottom-20 left-1/3 h-48 w-48 rounded-full bg-emerald-500/10 blur-[60px]" />
      </div>

      <div data-services-heading className="mb-12 md:mb-14 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold tracking-tight text-stone-900 dark:text-white">
          Six Lanes. Clear Owners.{" "}
          <span className="text-accent">Real Delivery.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
          Each expertise shows what{" "}
          <span className="font-semibold text-accent">RS Dev</span> already shipped — and what we
          are building now — so you can match your problem to the right lane fast.
        </p>
      </div>

      {/* 2 columns × 3 rows: Build+Apps · Architect+Grow · DevOps+Cloud */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {siteConfig.services.map((service, i) => {
          const theme = SERVICE_THEME[i % SERVICE_THEME.length];
          const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
          const Visual = SERVICE_VISUALS[i % SERVICE_VISUALS.length];
          const showLead = !HIDDEN_LEADS.has(service.lead);
          const leadLine = showLead
            ? `${service.expertise} · ${service.lead.replace(/\s+Sabir$/, "")}`
            : service.expertise;

          return (
            <article
              key={service.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="svc-card group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 bg-white dark:bg-stone-950"
              style={{
                borderColor: `${theme.color}66`,
                boxShadow: `0 0 0 1px ${theme.color}14, 0 14px 40px rgba(28,25,23,0.06), 0 0 28px ${theme.color}16`,
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${theme.color}, #0284C7, #059669)`,
                }}
              />

              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 text-white"
                    style={{
                      background: theme.color,
                      borderColor: theme.color,
                      boxShadow: `0 0 16px ${theme.color}55`,
                    }}
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="ml-auto font-display text-sm font-bold text-stone-400 dark:text-stone-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold text-stone-900 dark:text-white group-hover:text-accent transition">
                  {toTitleCase(service.title)}
                </h3>
                <p
                  className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: theme.color }}
                >
                  {leadLine}
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-400">
                  {service.description}
                </p>

                <Visual accent={theme.color} />

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border-2 border-emerald-600/25 bg-emerald-50/80 px-3.5 py-2.5 dark:border-emerald-400/25 dark:bg-emerald-950/35">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-800 dark:text-emerald-300">
                      Worked On
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-emerald-950/80 dark:text-emerald-100/85">
                      {service.workedOn}
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-accent/30 bg-orange-50/90 px-3.5 py-2.5 dark:border-accent/35 dark:bg-orange-950/35">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                      Working On
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-stone-700 dark:text-orange-100/85">
                      {service.workingOn}
                    </p>
                  </div>
                </div>

                <FastLink
                  href="/contact"
                  className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-bold"
                  style={{ color: theme.color }}
                >
                  Ask About This Lane
                  <span className="transition group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </FastLink>
              </div>
            </article>
          );
        })}
      </div>

      {showCta ? (
        <div className="mt-12 flex justify-center">
          <FastLink
            href="/services"
            className="svc-cta inline-flex items-center gap-2 rounded-xl border-2 border-accent/40 bg-white px-7 py-3.5 text-sm font-bold text-stone-900 shadow-[0_0_28px_rgba(194,65,12,0.15)] transition hover:border-accent dark:bg-stone-950 dark:text-white"
          >
            Explore Services
            <span aria-hidden>→</span>
          </FastLink>
        </div>
      ) : null}
    </section>
  );
}
