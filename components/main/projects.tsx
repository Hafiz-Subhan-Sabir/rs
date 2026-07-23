'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { PROJECTS } from '@/constants';

export const Projects = () => {
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement | null>(null);
  const featuredProjects = useMemo(
    () => PROJECTS.filter((p) => p.featured),
    []
  );
  const otherProjects = useMemo(
    () => PROJECTS.filter((p) => !p.featured),
    []
  );
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
      const groups = [
        ...Array.from(section.querySelectorAll<HTMLElement>('[data-project-group="featured"]')),
        ...Array.from(section.querySelectorAll<HTMLElement>('[data-project-group="other"]')),
      ];

      groups.forEach((group) => {
        const cards = Array.from(group.querySelectorAll<HTMLElement>('[data-project-card]'));
        if (!cards.length) return;

        gsap.set(cards, { opacity: 0, y: 26 });

        ScrollTrigger.create({
          trigger: group,
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
          onLeaveBack: () => {
            gsap.set(cards, { opacity: 0, y: 26 });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, [featuredProjects.length, otherProjects.length]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen scroll-mt-24"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="mb-6" data-reveal="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-white">
            Flagship & live work
          </h2>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            SEO-minded builds, AI automation tools, and enterprise system design — including products
            currently in active development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-project-group="featured">
          {featuredProjects.map((project) => {
            const inDev = project.status === 'in-development';
            const hasLive = Boolean(project.liveUrl);
            return (
              <article
                key={project.title}
                data-project-card="true"
                className="surface-card group rounded-xl border-2 bg-white p-4 dark:bg-white/[0.03]"
              >
                <div className="image-hover-wrap relative h-60 sm:h-72 w-full overflow-hidden rounded-xl bg-stone-200 dark:bg-black/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover media-soft"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className={`diff-chip ${inDev ? 'diff-chip--dev' : ''}`}>
                      {inDev ? 'In development' : project.category}
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-stone-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="diff-chip">{project.category}</span>
                </div>
                <div className="mt-2 text-[11px] tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
                  {project.stack}
                </div>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {hasLive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex rounded-lg px-3 py-1.5 text-xs font-semibold brand-button"
                    >
                      Visit live site
                    </a>
                  ) : (
                    <span className="inline-flex rounded-lg border-2 border-accent/30 px-3 py-1.5 text-xs font-semibold text-accent">
                      {inDev ? 'Enterprise build in progress' : 'Private / client deployment'}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {otherProjects.length ? (
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
          <div className="mb-5" data-reveal="fade-up">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-white">
              More live builds
            </h3>
            <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">
              Earlier shipped products you can still open.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" data-project-group="other">
            {otherProjects.map((project) => {
              const hasLive = Boolean(project.liveUrl);
              return (
                <article
                  key={project.title}
                  data-project-card="true"
                  className="surface-card group rounded-xl border-2 bg-white p-4 dark:bg-white/[0.03]"
                >
                  <div className="image-hover-wrap relative h-52 w-full overflow-hidden rounded-xl bg-stone-200 dark:bg-black/30">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover media-soft"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-semibold text-stone-900 dark:text-white">
                    {project.title}
                  </h4>
                  <div className="mt-2">
                    <span className="diff-chip">{project.category}</span>
                  </div>
                  {openDetails[project.title] ? (
                    <>
                      <div className="mt-2 text-[11px] tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
                        {project.stack}
                      </div>
                      <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                        {project.description}
                      </p>
                    </>
                  ) : null}
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleDetails(project.title)}
                      className="inline-flex rounded-lg px-3 py-1.5 text-xs font-semibold text-accent border-2 border-accent/30"
                    >
                      {openDetails[project.title] ? 'Hide details' : 'View details'}
                    </button>
                    {hasLive ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex rounded-lg px-3 py-1.5 text-xs font-semibold brand-button"
                      >
                        Visit live site
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ) : null}
    </section>
  );
};
