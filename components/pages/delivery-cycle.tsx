"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DELIVERY_CYCLE_STEPS } from "@/constants/content";
import { cn } from "@/lib/utils";

const STEP_COLORS = ["#C2410C", "#0284C7", "#059669", "#C2410C", "#0284C7", "#059669"] as const;

export function DeliveryCycle() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLLIElement[];
      cards.forEach((el, i) => {
        gsap.set(el, { autoAlpha: 0, y: 28 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () => {
            gsap.to(el, {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              delay: i * 0.06,
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
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-b from-orange-50/80 via-white to-sky-50/60 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950" />
      <div className="pointer-events-none absolute top-10 left-1/4 h-48 w-48 rounded-full bg-accent/10 blur-[70px] dark:bg-accent/20" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-40 w-40 rounded-full bg-sky-400/10 blur-[60px] dark:bg-sky-500/15" />

      <div className="relative rounded-[1.75rem] border-2 border-stone-200/90 bg-white/80 px-5 sm:px-8 lg:px-10 py-12 md:py-16 shadow-[0_16px_48px_rgba(28,25,23,0.06)] dark:border-white/12 dark:bg-stone-950/70 dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-stone-900 dark:text-white">
            Six Steps From First Call To <span className="text-accent">Live</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            From the first conversation through launch and support, you always know what we are
            building and why — clear owners, written scope, and the same crew end to end.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {DELIVERY_CYCLE_STEPS.map((step, i) => {
            const color = STEP_COLORS[i];
            return (
              <li
                key={step.step}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 bg-white p-5 transition duration-300 hover:-translate-y-1 dark:bg-stone-900"
                )}
                style={{
                  borderColor: `${color}40`,
                  boxShadow: `0 0 0 1px ${color}12, 0 10px 28px rgba(28,25,23,0.05)`,
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${color}, #0284C7)`,
                  }}
                />
                <span
                  className="font-display mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 text-xs font-bold text-white"
                  style={{
                    background: color,
                    borderColor: color,
                    boxShadow: `0 0 18px ${color}55`,
                  }}
                >
                  {step.step}
                </span>
                <h3 className="mt-4 text-base font-bold text-stone-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {step.detail}
                </p>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 text-center text-sm text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          After go-live the same people keep search, campaigns, routines, and care moving — so
          momentum does not reset at launch.
        </p>
      </div>
    </section>
  );
}
