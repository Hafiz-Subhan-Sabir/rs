"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type RevealPreset = "fade-up" | "fade" | "line" | "fade-left" | "fade-right";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function RevealEngine() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let killed = false;
    let cleanup: (() => void) | undefined;

    const run = async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (killed) return;

      const gsap = (gsapMod as any).default ?? gsapMod;
      const ScrollTrigger = (stMod as any).ScrollTrigger ?? (stMod as any).default;
      gsap.registerPlugin(ScrollTrigger);

      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      if (!elements.length) return;

      const ctx = gsap.context(() => {
        elements.forEach((el) => {
          const preset = (el.getAttribute("data-reveal") as RevealPreset) || "fade-up";
          const once = el.getAttribute("data-reveal-once") !== "false";
          const delay = Number(el.getAttribute("data-reveal-delay") ?? "0") || 0;
          const duration = Number(el.getAttribute("data-reveal-duration") ?? "0.72") || 0.72;
          const stagger = Number(el.getAttribute("data-reveal-stagger") ?? "0") || 0;
          const childSelector = el.getAttribute("data-reveal-children");
          const xOverride = Number(el.getAttribute("data-reveal-x") ?? "0") || 0;
          const isMobile = window.matchMedia("(max-width: 1023px)").matches;

          const from = (() => {
            if (preset === "fade") return { opacity: 0 };
            if (preset === "line") return { opacity: 0, scaleX: 0, transformOrigin: "left" };
            if (preset === "fade-left") return { opacity: 0, x: -22, y: 8 };
            if (preset === "fade-right") return { opacity: 0, x: 22, y: 8 };
            return { opacity: 0, y: 18, x: xOverride };
          })();
          const to =
            preset === "fade"
              ? { opacity: 1 }
              : preset === "line"
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 1, y: 0, x: 0 };

          const targets: Element[] =
            stagger > 0
              ? childSelector
                ? Array.from(el.querySelectorAll(childSelector))
                : Array.from(el.children)
              : [el];

          if (!targets.length) return;

          const tween = gsap.fromTo(targets, from, {
            ...to,
            duration: isMobile ? duration + 0.08 : duration,
            delay,
            stagger: stagger > 0 ? stagger : 0,
            ease: "power3.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger: el,
              start: isMobile ? "top 94%" : "top 88%",
              once,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
          });

          if (!once) {
            const st = (tween as any).scrollTrigger as { eventCallback?: (name: string, fn: () => void) => void };
            st?.eventCallback?.("onLeaveBack", () => {
              gsap.set(targets, from);
            });
          }
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      cleanup = () => ctx.revert();
    };

    const timer = window.setTimeout(run, 0);

    return () => {
      killed = true;
      window.clearTimeout(timer);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
