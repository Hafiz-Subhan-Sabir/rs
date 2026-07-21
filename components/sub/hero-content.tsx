"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const HeroContent = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textBlockRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const mobileImageWrapRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const text = textBlockRef.current;
    const paragraph = paragraphRef.current;
    const image = imageWrapRef.current;
    if (!section || !text || !paragraph || !image) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      // Desktop intro path: text starts from top-center, then shifts to mid-left.
      gsap.set(text, {
        xPercent: 12,
        yPercent: -18,
        scale: 1.14,
        opacity: 1,
        transformOrigin: "50% 50%",
      });
      gsap.set(paragraph, { opacity: 0.82 });
      gsap.set(image, { xPercent: 16, autoAlpha: 0, scale: 0.96 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top+=72",
          end: "+=125%",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      tl.to(text, { xPercent: -12, yPercent: 0, scale: 0.86, duration: 0.52, ease: "none" })
        .to(paragraph, { opacity: 1, duration: 0.36, ease: "none" }, 0.08)
        .to(image, { xPercent: 0, autoAlpha: 1, scale: 1, duration: 0.52, ease: "none" }, 0.2);
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const playIntro = () => {
      const text = textBlockRef.current;
      const paragraph = paragraphRef.current;
      const mobileImage = mobileImageWrapRef.current;
      if (!text || !paragraph) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (prefersReduced) return;

      gsap.killTweensOf([text, paragraph, mobileImage]);
      gsap.fromTo(
        text,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.58, ease: "power2.out" }
      );
      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.08 }
      );
      if (isMobile && mobileImage) {
        gsap.fromTo(
          mobileImage,
          { opacity: 0, y: 18, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.52, ease: "power2.out", delay: 0.14 }
        );
      }
    };

    const onHashChange = () => {
      if (window.location.hash === "#about-me") {
        playIntro();
      }
    };

    playIntro();
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100svh-72px)] lg:min-h-[calc(100vh-72px)] lg:h-[210vh] w-full scroll-mt-24"
      id="about-me"
    >
      <div className="relative min-h-[calc(100svh-72px)] lg:min-h-[calc(100vh-72px)] pt-20 max-[430px]:pt-20 pb-8 lg:py-0 lg:h-[calc(100vh-72px)] flex items-start lg:items-center overflow-visible lg:overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="relative min-h-[calc(100svh-170px)] lg:min-h-[calc(100vh-180px)] lg:h-[72vh] lg:min-h-[460px] grid grid-cols-1 lg:grid-cols-[minmax(480px,1fr)_minmax(320px,430px)] items-start lg:items-center gap-6 lg:gap-10">
            <div
              ref={textBlockRef}
              className="z-20 text-center lg:text-left will-change-transform min-w-0"
            >
              <h1 className="text-[2.35rem] max-[430px]:text-[2.2rem] sm:text-5xl lg:text-[4.4rem] xl:text-[5.15rem] font-semibold tracking-tight text-gray-900 dark:text-white leading-[1.02] lg:leading-[0.95]">
                <span className={isMobile ? "block text-gray-900 dark:text-white" : "text-accent block"}>Web apps</span>
                <span className={isMobile ? "block text-gray-900 dark:text-white" : "text-accent block"}>Custom software</span>
                <span className={isMobile ? "block text-gray-900 dark:text-white" : "text-accent block"}>CRM · SEO · Growth</span>
              </h1>
              <p
                ref={paragraphRef}
                className="mt-4 max-[430px]:mt-3 text-base max-[430px]:text-[1.05rem] sm:text-lg text-gray-600 dark:text-gray-300 max-w-[620px] lg:max-w-[560px] mx-auto lg:mx-0"
              >
                RS Dev delivers websites and web applications, custom software, and CRM setups — plus SEO, digital marketing, and consultancy — with clear scope and outcomes you can measure.
              </p>
            </div>

            <div
              ref={imageWrapRef}
              className="w-full max-w-[430px] hidden lg:flex lg:opacity-0 justify-end justify-self-end z-10"
            >
              <div className="w-full">
                <div
                  className="about-photo group relative overflow-visible rounded-3xl outline-none"
                  tabIndex={0}
                  role="img"
                  aria-label="RS Dev monogram logo"
                >
                  <div className="about-float about-vintage will-change-transform flex items-center justify-center rounded-3xl border border-gray-200/80 dark:border-white/10 bg-white p-8 dark:bg-white">
                    <Image
                      src="/rs-dev-logo.png"
                      alt="RS Dev — modern black and white monogram logo with RS above DEV"
                      width={480}
                      height={600}
                      priority
                      className="h-[320px] xl:h-[380px] w-full max-w-[280px] xl:max-w-[320px] object-contain"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <div className="text-xs uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">RS Dev</div>
                  <div className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300 max-w-[360px]">
                    Websites · custom software · CRM · SEO · marketing consultancy
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile image block after title (no absolute overlap) */}
            <div
              ref={mobileImageWrapRef}
              className="lg:hidden mt-3 w-full max-w-[320px] mx-auto"
            >
              <div className="about-photo group relative overflow-visible rounded-3xl outline-none" tabIndex={0}>
                <div className="about-float about-vintage will-change-transform">
                  <Image
                    src="/rs-dev-logo.png"
                    alt="RS Dev — monogram logo"
                    width={400}
                    height={500}
                    className="h-[200px] w-full max-w-[220px] mx-auto object-contain rounded-3xl border border-gray-200/80 dark:border-white/10 bg-white p-6 dark:bg-white"
                  />
                </div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">RS Dev</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

