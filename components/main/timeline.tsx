"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { COMPANY_JOURNEY } from "@/constants/company-journey";
import { neonCardClass } from "@/lib/neon-card";

const YEAR_ACCENTS = [
  {
    dot: "bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]",
    phase: "text-emerald-700 dark:text-emerald-300",
    line: "from-emerald-400/60 via-emerald-400/40",
  },
  {
    dot: "bg-cyan-500 shadow-[0_0_0_6px_rgba(6,182,212,0.2)]",
    phase: "text-cyan-700 dark:text-cyan-300",
    line: "from-cyan-400/60 via-cyan-400/40",
  },
  {
    dot: "bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.2)]",
    phase: "text-blue-700 dark:text-blue-300",
    line: "from-blue-400/60 via-blue-400/40",
  },
  {
    dot: "bg-violet-500 shadow-[0_0_0_6px_rgba(139,92,246,0.2)]",
    phase: "text-violet-700 dark:text-violet-300",
    line: "from-violet-400/60 via-violet-400/40",
  },
  {
    dot: "bg-amber-500 shadow-[0_0_0_6px_rgba(245,158,11,0.2)]",
    phase: "text-amber-800 dark:text-amber-300",
    line: "from-amber-400/60 via-amber-400/40",
  },
] as const;

export const Timeline = () => {
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

    const ctx = gsap.context(() => {
      gsap.set(progress, { scaleY: 0, transformOrigin: "top" });
      const setScale = gsap.quickSetter(progress, "scaleY");
      ScrollTrigger.create({
        trigger: section,
        start: "top 10%",
        end: "bottom 10%",
        scrub: true,
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress));
          setScale(p);
        },
        onLeaveBack: () => setScale(0),
        onEnter: () => setScale(0),
      });

      gsap.fromTo(
        heading,
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            once: false,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      items.forEach((el, index) => {
        const fromX = index % 2 === 0 ? 54 : -54;
        gsap.set(el, { autoAlpha: 0, x: fromX, y: 18 });

        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          end: "bottom 22%",
          onEnter: () => {
            gsap.to(el, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          onEnterBack: () => {
            gsap.to(el, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.82,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          onLeaveBack: () => {
            gsap.set(el, { autoAlpha: 0, x: fromX, y: 18 });
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
      className="relative flex flex-col items-center justify-center py-24 px-6 md:px-16 overflow-hidden scroll-mt-24 bg-gray-50/50 dark:bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-44 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="w-full max-w-5xl">
        <div
          ref={(el) => {
            headingRef.current = el;
          }}
          className="mb-10 text-center md:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-cyan-400">
            Company journey
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            How RS Dev <span className="brand-gradient-text">grew with clients</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-600 dark:text-gray-400">
            Milestones in our business, not a skills checklist. Each step reflects real client work and how the
            studio expanded what we offer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-emerald-400/60 via-cyan-400/50 to-violet-500/50" />
          <div
            ref={(el) => {
              progressRef.current = el;
            }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-cyan-400 to-violet-500 opacity-90"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="space-y-16 md:space-y-20">
            {COMPANY_JOURNEY.map((block, blockIndex) => {
              const accent = YEAR_ACCENTS[blockIndex % YEAR_ACCENTS.length];
              return (
                <div
                  key={block.year}
                  ref={(el) => {
                    itemRefs.current[blockIndex] = el;
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <div
                    className={`absolute left-2 md:left-1/2 md:-translate-x-1/2 top-2 h-3.5 w-3.5 rounded-full ${accent.dot}`}
                  />

                  <div
                    className={[
                      "pl-10 md:pl-0 mb-4 md:mb-0",
                      blockIndex % 2 === 0 ? "md:col-start-1 md:text-right md:pr-10" : "md:col-start-2 md:pl-10",
                    ].join(" ")}
                  >
                    <div className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white">
                      {block.year}
                    </div>
                    <div className={`mt-2 text-sm font-semibold ${accent.phase}`}>{block.phase}</div>
                  </div>

                  <div
                    className={[
                      "pl-10",
                      blockIndex % 2 === 0 ? "md:col-start-2 md:pl-10" : "md:col-start-1 md:pl-0 md:text-right md:pr-10",
                    ].join(" ")}
                  >
                    {block.items.map((item, itemIndex) => (
                      <div
                        key={item.title}
                        className={neonCardClass(
                          blockIndex + itemIndex,
                          "group rounded-3xl border border-gray-200 bg-white p-6 md:p-7 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#0f0e18]",
                        )}
                      >
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
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
