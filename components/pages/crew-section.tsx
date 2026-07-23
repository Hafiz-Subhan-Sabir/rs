"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

import { CREW } from "@/constants";
import { cn } from "@/lib/utils";

export function CrewSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [cycling, setCycling] = useState(false);

  const member = CREW[active];

  const scrollToMember = useCallback((index: number) => {
    const el = itemRefs.current[index];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const spotlightNext = useCallback(() => {
    if (cycling) return;
    setCycling(true);
    const steps = 6 + Math.floor(Math.random() * 4);
    let ticks = 0;
    const id = window.setInterval(() => {
      ticks += 1;
      setActive((a) => (a + 1) % CREW.length);
      if (ticks >= steps) {
        window.clearInterval(id);
        const next = Math.floor(Math.random() * CREW.length);
        setActive(next);
        setCycling(false);
        window.setTimeout(() => scrollToMember(next), 100);
      }
    }, 90);
  }, [cycling, scrollToMember]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const progress = progressRef.current;
    if (!section || !progress) return;

    const ctx = gsap.context(() => {
      gsap.set(progress, { scaleY: 0, transformOrigin: "top" });
      const setScale = gsap.quickSetter(progress, "scaleY");

      ScrollTrigger.create({
        trigger: section,
        start: "top 18%",
        end: "bottom 22%",
        scrub: true,
        onUpdate: (self) => {
          setScale(Math.max(0, Math.min(1, self.progress)));
        },
      });

      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      items.forEach((el, index) => {
        const fromX = index % 2 === 0 ? 64 : -64;
        gsap.set(el, { autoAlpha: 0, x: fromX, y: 32, scale: 0.97 });

        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          end: "bottom 20%",
          onEnter: () => {
            setActive(index);
            gsap.to(el, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.92,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          onEnterBack: () => {
            setActive(index);
            gsap.to(el, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          onLeaveBack: () => {
            gsap.set(el, { autoAlpha: 0, x: fromX, y: 32, scale: 0.97 });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="crew"
      ref={sectionRef}
      className="relative w-[90vw] max-w-[90vw] mx-auto py-16 md:py-24 scroll-mt-24"
    >
      {/* Soft ambient — light: warm wash, dark: deeper glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[420px] w-[60vw] -translate-x-1/2 rounded-full bg-accent/10 blur-[90px] dark:bg-accent/20" />
        <div className="absolute top-[45%] right-0 h-56 w-56 rounded-full bg-sky-500/10 blur-[70px] dark:bg-sky-500/15" />
        <div className="absolute top-[60%] left-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-[60px] dark:bg-emerald-500/12" />
      </div>

      {/* ——— Intro: photo + spotlight + description ——— */}
      <div className="crew-intro relative overflow-hidden rounded-[1.5rem] border-2 border-accent/35 bg-gradient-to-br from-white via-orange-50/80 to-sky-50/60 shadow-[0_0_0_1px_rgba(194,65,12,0.08),0_16px_48px_rgba(28,25,23,0.08),0_0_40px_rgba(194,65,12,0.12)] dark:border-accent/55 dark:from-stone-950 dark:via-stone-900 dark:to-orange-950/40 dark:shadow-[0_0_48px_rgba(194,65,12,0.35)]">
        <div className="pointer-events-none absolute inset-0 crew-intro-grid opacity-30 dark:opacity-45" aria-hidden />
        <div
          className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full blur-3xl opacity-40"
          style={{ background: member.color }}
          aria-hidden
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 p-6 sm:p-8 lg:p-11">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-[1.35rem] opacity-70 blur-md"
                style={{
                  background: `linear-gradient(135deg, ${member.color}, #C2410C, #0ea5e9)`,
                }}
              />
              <div
                className="relative h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-[1.2rem] border-[3px] bg-white shadow-lg dark:bg-stone-900"
                style={{
                  borderColor: member.color,
                  boxShadow: `0 0 28px ${member.color}55`,
                }}
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="224px"
                    priority
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center font-display text-5xl font-bold text-white"
                    style={{
                      background: `linear-gradient(145deg, ${member.color}, #1c1917 75%)`,
                    }}
                  >
                    {member.initials}
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/85 to-transparent p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-200">
                    Member 0{active + 1} of 06
                  </p>
                  <p className="font-display text-base font-semibold text-white">{member.name}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={spotlightNext}
              disabled={cycling}
              className={cn(
                "mt-7 inline-flex items-center gap-2.5 rounded-xl border-2 border-accent bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_28px_rgba(194,65,12,0.35)] transition hover:bg-accent-soft hover:shadow-[0_10px_32px_rgba(194,65,12,0.45)] disabled:opacity-70 dark:text-stone-950"
              )}
            >
              {cycling ? "Finding…" : "Spotlight next"}
            </button>
            <p className="mt-2.5 text-center lg:text-left text-xs text-stone-500 dark:text-stone-400 max-w-[16rem]">
              Or scroll down — each specialist appears as you move.
            </p>
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Our crew</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.1] text-stone-900 dark:text-white">
              Six specialists.
              <span className="block text-accent">One delivery line.</span>
            </h2>
            <p className="mt-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Scroll like our company journey — members fade in one by one with motion. Copper,
              ink, and each role’s color keep the contrast clear in light and dark mode.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-6 rounded-2xl border-2 bg-white/90 p-5 shadow-sm dark:bg-stone-950/70"
                style={
                  {
                    borderColor: `${member.color}99`,
                    boxShadow: `0 0 0 1px ${member.color}22, 0 12px 32px rgba(28,25,23,0.06)`,
                  } as CSSProperties
                }
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className="rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white"
                    style={{ background: member.color }}
                  >
                    {member.specialty}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-sky-700 dark:text-sky-300">
                    {member.lane}
                  </span>
                </div>
                <p className="font-display text-xl font-semibold text-stone-900 dark:text-white">
                  {member.name}
                </p>
                <p className="mt-1 text-sm font-semibold text-accent">{member.role}</p>
                <p className="mt-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {member.bio}
                </p>
                <p className="mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  {member.strengths}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="btn-cta-float inline-flex rounded-xl px-6 py-3.5 text-sm font-bold brand-button"
              >
                Talk to the crew
              </Link>
              <Link
                href="/work"
                className="inline-flex rounded-xl border-2 border-sky-600/40 bg-sky-50 px-6 py-3.5 text-sm font-bold text-sky-800 transition hover:border-sky-600 hover:bg-sky-100 dark:border-sky-400/40 dark:bg-sky-950/40 dark:text-sky-200"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ——— Scroll journey: members appear ——— */}
      <div className="relative mt-20 md:mt-28">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Meet the team</p>
          <h3 className="mt-2 font-display text-3xl md:text-4xl font-semibold text-stone-900 dark:text-white">
            Scroll — each member <span className="text-accent">appears</span>
          </h3>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-stone-600 dark:text-stone-400 mx-auto md:mx-0">
            Same scroll rhythm as Our Story. As you move down, each specialist slides in with a
            colored accent so roles stay easy to tell apart.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-stone-200 dark:bg-white/15" />
          <div
            ref={progressRef}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-accent via-sky-500 to-emerald-500 shadow-[0_0_14px_rgba(194,65,12,0.45)]"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="space-y-16 md:space-y-24">
            {CREW.map((m, index) => {
              const left = index % 2 === 0;
              const isHot = active === index;
              return (
                <div
                  key={m.name}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <div
                    className="absolute left-[0.55rem] md:left-1/2 md:-translate-x-1/2 top-3 z-10 h-5 w-5 rounded-full border-[3px] border-white dark:border-stone-900"
                    style={{
                      background: m.color,
                      boxShadow: `0 0 0 6px ${m.color}33, 0 0 18px ${m.color}88`,
                    }}
                  />

                  <div
                    className={cn(
                      "pl-12 md:pl-0 mb-4 md:mb-0",
                      left ? "md:col-start-1 md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    )}
                  >
                    <div className="font-display text-4xl md:text-6xl font-semibold text-stone-900 dark:text-white">
                      0{index + 1}
                    </div>
                    <div
                      className="mt-2 text-sm font-bold uppercase tracking-[0.14em]"
                      style={{ color: m.color }}
                    >
                      {m.specialty}
                    </div>
                    <p className="mt-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                      {m.lane}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "pl-12",
                      left ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pl-0 md:pr-12 md:text-right"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className={cn(
                        "crew-member-card group w-full overflow-hidden rounded-2xl border-2 bg-white text-left transition duration-300 dark:bg-stone-950",
                        isHot
                          ? "crew-member-card-hot"
                          : "border-stone-200 hover:border-accent/50 dark:border-white/15"
                      )}
                      style={
                        isHot
                          ? ({
                              borderColor: m.color,
                              boxShadow: `0 0 0 1px ${m.color}44, 0 0 36px ${m.color}33, 0 16px 40px rgba(28,25,23,0.08)`,
                            } as CSSProperties)
                          : undefined
                      }
                    >
                      <div
                        className="h-2.5 w-full"
                        style={{
                          background: `linear-gradient(90deg, ${m.color}, #C2410C, #0ea5e9)`,
                        }}
                      />
                      <div className={cn("p-6 md:p-7", !left && "md:text-right")}>
                        <div
                          className={cn(
                            "flex items-start gap-4",
                            !left && "md:flex-row-reverse"
                          )}
                        >
                          {m.photo ? (
                            <div
                              className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 bg-stone-100"
                              style={{ borderColor: m.color, boxShadow: `0 0 16px ${m.color}44` }}
                            >
                              <Image
                                src={m.photo}
                                alt={m.name}
                                fill
                                className="object-cover object-top"
                                sizes="64px"
                              />
                            </div>
                          ) : (
                            <div
                              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-2 font-display text-xl font-bold text-white"
                              style={{
                                borderColor: m.color,
                                background: `linear-gradient(145deg, ${m.color}, #292524)`,
                                boxShadow: `0 0 16px ${m.color}44`,
                              }}
                            >
                              {m.initials}
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <h4 className="font-display text-xl md:text-2xl font-semibold text-stone-900 dark:text-white">
                              {m.name}
                            </h4>
                            <p className="mt-1 text-sm font-semibold text-accent">{m.role}</p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm md:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                          {m.bio}
                        </p>
                        <p className="mt-2 text-xs font-semibold text-stone-500 dark:text-stone-400">
                          {m.focus}
                        </p>
                        <div
                          className={cn(
                            "mt-5 flex flex-wrap gap-2",
                            !left && "md:justify-end"
                          )}
                        >
                          <span className="rounded-lg border border-emerald-600/30 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-950/40 dark:text-emerald-200">
                            {m.strengths}
                          </span>
                          {m.linkedin ? (
                            <a
                              href={m.linkedin}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="rounded-lg border border-accent/30 bg-orange-50 px-3 py-1.5 text-[11px] font-bold text-accent dark:bg-orange-950/40"
                              onClick={(e) => e.stopPropagation()}
                            >
                              LinkedIn →
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
