"use client";

import { FastLink } from "@/components/navigation/fast-link";
import { MotionIn } from "@/components/motion/MotionIn";
import { isInternalRoute } from "@/lib/site-routes";

type PageHeroProps = {
  /** @deprecated Eyebrow badges removed sitewide — kept optional for API compat */
  badge?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pb-12 md:pb-16">
      <MotionIn>
        <div className="flex flex-col gap-5">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.05] max-w-4xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {primaryCta ? (
                isInternalRoute(primaryCta.href) ? (
                  <FastLink
                    href={primaryCta.href}
                    className="btn-cta-float inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold brand-button"
                  >
                    {primaryCta.label}
                  </FastLink>
                ) : (
                  <a
                    href={primaryCta.href}
                    className="btn-cta-float inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold brand-button"
                  >
                    {primaryCta.label}
                  </a>
                )
              ) : null}
              {secondaryCta ? (
                isInternalRoute(secondaryCta.href) ? (
                  <FastLink
                    href={secondaryCta.href}
                    className="btn-outline-cta inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold border-2 border-stone-300 bg-white/70 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
                  >
                    {secondaryCta.label}
                  </FastLink>
                ) : (
                  <a
                    href={secondaryCta.href}
                    className="btn-outline-cta inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold border-2 border-stone-300 bg-white/70 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
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
