"use client";

import { FastLink } from "@/components/navigation/fast-link";
import { MotionIn } from "@/components/motion/MotionIn";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";

type CapabilitiesGridProps = {
  showCta?: boolean;
};

export function CapabilitiesGrid({ showCta = true }: CapabilitiesGridProps) {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <SectionHeader
        eyebrow="Services"
        title="The work we take on"
        description="Websites, software, sales tools, and growth — handled by the same people who build and support it."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6" data-stagger>
        {siteConfig.services.map((service, i) => (
          <MotionIn key={service.title} delay={i * 0.06}>
            <article className="surface-card group h-full rounded-2xl border border-stone-200/90 bg-white p-7 sm:p-8 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="font-display text-xs font-semibold text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-stone-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {service.description}
              </p>
            </article>
          </MotionIn>
        ))}
      </div>

      {showCta ? (
        <div className="mt-10 flex justify-center">
          <FastLink
            href="/services"
            className="btn-outline-cta inline-flex items-center rounded-lg border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 hover:bg-stone-50 dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
          >
            Explore services →
          </FastLink>
        </div>
      ) : null}
    </section>
  );
}
