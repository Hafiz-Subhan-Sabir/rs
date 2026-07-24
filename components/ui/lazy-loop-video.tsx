"use client";

import { useEffect, useRef, useState } from "react";
import { useCanUseHeavyMotion } from "@/lib/perf";

type LazyLoopVideoProps = {
  src: string;
  className?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

/** Plays muted looping video only when in view and heavy motion is allowed. */
export function LazyLoopVideo({ src, className, ...aria }: LazyLoopVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const allow = useCanUseHeavyMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!allow) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setActive(entry.isIntersecting && entry.intersectionRatio > 0.2);
        }
      },
      { threshold: [0, 0.2, 0.5], rootMargin: "80px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [allow]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (active) {
      void el.play().catch(() => undefined);
    } else {
      el.pause();
    }
  }, [active]);

  if (!allow) {
    return <div className={className} aria-hidden />;
  }

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      {...aria}
    />
  );
}
