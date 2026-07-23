'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { PROJECTS } from '@/constants';

export const Projects = () => {
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement | null>(null);

  const toggleDetails = useCallback((title: string) => {
    setOpenDetails((prev) => ({ ...prev, [title]: !prev[title] }));
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-project-card]'));
      if (!cards.length) return;

      gsap.set(cards, { opacity: 0, y: 28 });

      ScrollTrigger.create({
        trigger: section,
        start: 'top 84%',
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.82,
            stagger: 0.14,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative scroll-mt-24">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="mb-8" data-reveal="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-white">
            Flagship products
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
            Three builds that show how we package architecture, security, and product UX — membership,
            affiliate ops, and AI-proctored exams.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:gap-8" data-project-group="featured">
          {PROJECTS.map((project) => {
            const open = Boolean(openDetails[project.title]);
            return (
              <article
                key={project.title}
                data-project-card="true"
                className="surface-card group grid grid-cols-1 overflow-hidden rounded-2xl border-2 bg-white dark:bg-white/[0.03] lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="image-hover-wrap relative min-h-[220px] w-full overflow-hidden bg-stone-200 dark:bg-black/30 lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover media-soft"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                  <div className="absolute left-3 top-3">
                    <span className="diff-chip">{project.category}</span>
                  </div>
                </div>

                <div className="flex flex-col p-5 sm:p-7">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-stone-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="mt-2 text-[11px] tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
                    {project.stack}
                  </div>
                  <p className="mt-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {project.description}
                  </p>

                  {'highlights' in project && project.highlights?.length ? (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => toggleDetails(project.title)}
                        className="inline-flex rounded-lg border-2 border-accent/30 px-3 py-1.5 text-xs font-semibold text-accent"
                      >
                        {open ? 'Hide capabilities' : 'See what is inside'}
                      </button>
                      {open ? (
                        <ul className="mt-3 space-y-2">
                          {project.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm text-stone-700 dark:text-stone-300"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="mt-auto pt-5">
                    <span className="inline-flex rounded-lg border-2 border-accent/30 px-3 py-1.5 text-xs font-semibold text-accent">
                      Private / client deployment
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
