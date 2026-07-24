"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { COMPANY_JOURNEY } from "@/constants/company-journey";
import { useMotionReady } from "@/lib/motion";

export const Timeline = () => {
  const ready = useMotionReady();
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const progress = progressRef.current;
    const heading = headingRef.current;
    if (!section || !progress || !heading) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(progress, { scaleY: 1, transformOrigin: "top" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(progress, { scaleY: 0, transformOrigin: "top" });
      const setScale = gsap.quickSetter(progress, "scaleY");
      ScrollTrigger.create({
        trigger: section,
        start: "top 15%",
        end: "bottom 20%",
        scrub: 0.6,
        onUpdate: (self) => {
          setScale(Math.max(0, Math.min(1, self.progress)));
        },
      });

      gsap.fromTo(
        heading,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: heading, start: "top 90%", once: true },
        },
      );

      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      items.forEach((el, index) => {
        const fromX = index % 2 === 0 ? 48 : -48;
        gsap.set(el, { autoAlpha: 0, x: fromX, y: 24, scale: 0.98 });

        ScrollTrigger.create({
          trigger: el,
          start: "top 86%",
          once: true,
          onEnter: () => {
            gsap.to(el, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.85,
              delay: 0.04,
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
      id="timeline"
      ref={(el) => {
        sectionRef.current = el;
      }}
      className="relative flex flex-col items-center justify-center py-24 px-4 sm:px-6 md:px-10 overflow-hidden scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-accent/12 blur-[90px]" />
        <div className="absolute bottom-20 right-1/5 h-56 w-56 rounded-full bg-sky-400/12 blur-[80px]" />
      </div>

      <div className="w-full max-w-5xl">
        <div
          ref={(el) => {
            headingRef.current = el;
          }}
          className="mb-14 md:mb-16 text-center mx-auto max-w-3xl"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.15]">
            Our Story,{" "}
            <span className="text-accent">Year By Year</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Not a skill list — a simple story of how{" "}
            <span className="font-semibold text-accent">RS Dev</span> grew with real client work,
            clearer delivery, and a crew entrepreneurs can reach.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 origin-top bg-stone-200 dark:bg-white/10" />
          <div
            ref={(el) => {
              progressRef.current = el;
            }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-accent via-sky-500 to-emerald-500 opacity-95"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="space-y-16 md:space-y-24">
            {COMPANY_JOURNEY.map((block, blockIndex) => {
              const leftYear = blockIndex % 2 === 0;
              return (
                <div
                  key={block.year}
                  ref={(el) => {
                    itemRefs.current[blockIndex] = el;
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-12 md:items-start"
                >
                  <motion.div
                    className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-3 z-[1] h-4 w-4 rounded-full border-2 border-white bg-accent shadow-[0_0_0_6px_rgba(194,65,12,0.18),0_0_20px_rgba(194,65,12,0.35)] dark:border-stone-950"
                    animate={
                      ready
                        ? { scale: [1, 1.15, 1], boxShadow: [
                            "0 0 0 6px rgba(194,65,12,0.18), 0 0 16px rgba(194,65,12,0.3)",
                            "0 0 0 10px rgba(194,65,12,0.1), 0 0 28px rgba(194,65,12,0.45)",
                            "0 0 0 6px rgba(194,65,12,0.18), 0 0 16px rgba(194,65,12,0.3)",
                          ] }
                        : undefined
                    }
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: blockIndex * 0.15 }}
                  />

                  <div
                    className={[
                      "pl-10 md:pl-0 mb-5 md:mb-0",
                      leftYear ? "md:col-start-1 md:text-right md:pr-12" : "md:col-start-2 md:pl-12",
                    ].join(" ")}
                  >
                    <p className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 dark:text-white">
                      {block.year}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-stone-400 dark:text-stone-500">
                      Chapter {String(COMPANY_JOURNEY.length - blockIndex).padStart(2, "0")}
                    </p>
                  </div>

                  <div
                    className={[
                      "pl-10",
                      leftYear ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pl-0 md:pr-12",
                    ].join(" ")}
                  >
                    {block.items.map((item) => (
                      <article
                        key={item.title}
                        className={[
                          "group relative overflow-hidden rounded-2xl border-2 border-accent/25 bg-white p-6 sm:p-7 shadow-[0_16px_44px_rgba(28,25,23,0.06)] dark:border-accent/30 dark:bg-stone-950/85",
                          !leftYear ? "md:text-left" : "",
                        ].join(" ")}
                      >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
                        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
                        <h3 className="relative font-display text-xl sm:text-2xl font-semibold text-stone-900 dark:text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="relative mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
