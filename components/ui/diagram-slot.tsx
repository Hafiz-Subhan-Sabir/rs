"use client";

import Image from "next/image";
import { useState } from "react";

type DiagramSlotProps = {
  imagePath: string;
  title: string;
  hint: string;
  className?: string;
};

export function DiagramSlot({ imagePath, title, hint, className = "" }: DiagramSlotProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImage = loaded && !failed;

  return (
    <figure className={`relative ${className}`}>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200/90 bg-gray-50 dark:border-white/10 dark:bg-white/[0.03]">
        {!showImage ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="rounded-full border border-dashed border-emerald-400/50 bg-emerald-500/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 dark:border-cyan-400/40 dark:text-cyan-300">
              Diagram slot
            </div>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{title}</p>
            <p className="max-w-md text-xs leading-relaxed text-gray-500 dark:text-gray-400">{hint}</p>
            <code className="mt-1 rounded-lg bg-gray-200/80 px-3 py-1.5 text-[11px] text-gray-700 dark:bg-white/10 dark:text-gray-300">
              {imagePath}
            </code>
          </div>
        ) : null}
        <Image
          src={imagePath}
          alt={title}
          fill
          className={`object-contain p-4 transition-opacity duration-500 ${showImage ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
      {showImage ? (
        <figcaption className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">{title}</figcaption>
      ) : null}
    </figure>
  );
}
