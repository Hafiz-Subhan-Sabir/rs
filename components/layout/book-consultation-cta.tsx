"use client";

import { FastLink } from "@/components/navigation/fast-link";
import { MotionIn } from "@/components/motion/MotionIn";
import { FOUNDER_FULL_NAME } from "@/constants";

const STATS = [
  { value: "Free", label: "Consultation" },
  { value: "45 min", label: "Typical intro call" },
  { value: "Zero", label: "Sales pressure" },
] as const;

type BookConsultationCtaProps = {
  /** Optional accent line under headline */
  note?: string;
};

export function BookConsultationCta({ note }: BookConsultationCtaProps) {
  return (
    <section className="relative mx-auto w-[min(90vw,1280px)] py-[clamp(3rem,8vw,5rem)]">
      <MotionIn>
        <div className="relative overflow-hidden rounded-[clamp(1.25rem,3vw,1.75rem)] border-2 border-accent/25 bg-white px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(2rem,5vw,3.5rem)] text-center dark:border-accent/35 dark:bg-stone-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(194,65,12,0.1),transparent_55%)]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.15]">
              Ready to{" "}
              <span className="bg-gradient-to-r from-accent via-orange-500 to-sky-600 bg-clip-text text-transparent">
                transform
              </span>{" "}
              your business?
            </h2>
            <p className="mt-4 text-[clamp(1rem,2.2vw,1.2rem)] text-stone-600 dark:text-stone-300 leading-relaxed">
              Let&apos;s discuss how we can help you achieve your goals with practical technology.
              Free consultation with {FOUNDER_FULL_NAME} — no obligation.
              {note ? (
                <>
                  {" "}
                  <span className="font-semibold text-accent">{note}</span>
                </>
              ) : null}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {STATS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border-2 border-stone-200/90 bg-stone-50/90 px-4 py-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-accent">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-stone-500 dark:text-stone-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <FastLink
                href="/contact"
                className="btn-cta-float inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-base font-bold brand-button shadow-[0_0_28px_rgba(194,65,12,0.3)]"
              >
                Book free consultation →
              </FastLink>
              <FastLink
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-stone-300 bg-white px-8 py-3.5 text-base font-bold text-stone-800 transition hover:border-accent/40 dark:border-white/15 dark:bg-stone-900 dark:text-stone-100"
              >
                Contact us instead
              </FastLink>
            </div>

            <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">
              Prefer to browse first?{" "}
              <FastLink href="/work" className="font-semibold text-accent hover:underline">
                See flagship products
              </FastLink>
            </p>
          </div>
        </div>
      </MotionIn>
    </section>
  );
}
