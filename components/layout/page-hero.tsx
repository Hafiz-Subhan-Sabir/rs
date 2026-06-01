"use client";

import { FastLink } from "@/components/navigation/fast-link";
import { MotionIn } from "@/components/motion/MotionIn";
import { isInternalRoute } from "@/lib/site-routes";

type PageHeroProps = {
  badge?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  badge = "RS Dev",
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pb-12 md:pb-16">
      <MotionIn>
        <div className="flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {badge}
          </div>
          <h1 className="hero-headline capitalize text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white leading-[1.05] max-w-4xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {primaryCta ? (
                isInternalRoute(primaryCta.href) ? (
                  <FastLink
                    href={primaryCta.href}
                    className="btn-cta-float inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold brand-button"
                  >
                    {primaryCta.label}
                  </FastLink>
                ) : (
                  <a
                    href={primaryCta.href}
                    className="btn-cta-float inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold brand-button"
                  >
                    {primaryCta.label}
                  </a>
                )
              ) : null}
              {secondaryCta ? (
                isInternalRoute(secondaryCta.href) ? (
                  <FastLink
                    href={secondaryCta.href}
                    className="btn-outline-cta btn-outline-cta-float inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-gray-300 bg-white/70 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
                  >
                    {secondaryCta.label}
                  </FastLink>
                ) : (
                  <a
                    href={secondaryCta.href}
                    className="btn-outline-cta btn-outline-cta-float inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-gray-300 bg-white/70 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
                  >
                    {secondaryCta.label}
                  </a>
                )
              ) : null}
            </div>
          )}
        </div>
      </MotionIn>
    </section>
  );
}
