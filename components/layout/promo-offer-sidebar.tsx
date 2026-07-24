"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { GiftIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";

import { cn } from "@/lib/utils";

const OFFER_POINTS = [
  {
    title: "Free Maintenance",
    text: "Three months of updates, fixes, and care after go-live — included.",
  },
  {
    title: "Free Hosting Care",
    text: "Hosting health checks and uptime support for the same window.",
  },
  {
    title: "Free Consultancy",
    text: "Advice on product, SEO, and ops while your launch settles.",
  },
  {
    title: "Plan Demo",
    text: "A clear walkthrough of your plan before you commit to build.",
  },
] as const;

const POPPERS = [
  { left: "8%", delay: 0, color: "#FBBF24" },
  { left: "28%", delay: 0.12, color: "#FB923C" },
  { left: "52%", delay: 0.05, color: "#34D399" },
  { left: "72%", delay: 0.18, color: "#38BDF8" },
  { left: "88%", delay: 0.08, color: "#F472B6" },
] as const;

const PROMO_OPEN_EVENT = "rsdev:open-promo-offer";

export function openPromoOffer() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(PROMO_OPEN_EVENT));
}

type PromoOfferTriggerProps = {
  className?: string;
};

/** Navbar gift icon — glow + party poppers; opens limited-offer sidebar. */
export function PromoOfferTrigger({ className }: PromoOfferTriggerProps) {
  const [open, setOpen] = useState(false);
  const [burst, setBurst] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(PROMO_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(PROMO_OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const reveal = () => {
    setBurst(true);
    setOpen(true);
    window.setTimeout(() => setBurst(false), 900);
  };

  const panel =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close offer panel"
              className="fixed inset-0 z-[200] bg-stone-950/45 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="promo-offer-title"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-[210] flex h-[100dvh] max-h-[100dvh] w-[min(100vw,400px)] flex-col border-l border-white/10 bg-gradient-to-b from-[#1c1410] via-[#221811] to-[#0f0d0c] shadow-[-24px_0_60px_rgba(0,0,0,0.35)]"
            >
              <div className="relative shrink-0 overflow-hidden border-b border-white/10 px-5 py-5">
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-400/25 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-8 h-20 w-28 rounded-full bg-accent/30 blur-2xl" />
                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFB133] text-stone-950 shadow-[0_0_28px_rgba(255,177,51,0.55)]">
                      <GiftIcon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300">
                        Limited Offer
                      </p>
                      <h2
                        id="promo-offer-title"
                        className="mt-1 font-display text-xl font-semibold text-white leading-tight"
                      >
                        Free 3 Months Bundle
                      </h2>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/90 transition hover:bg-white/15"
                    aria-label="Close"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <p className="relative mt-3 text-sm text-stone-300 leading-relaxed">
                  Book a plan demo with RS Dev and unlock three months of care — so your launch
                  stays healthy while you grow.
                </p>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 space-y-3">
                {OFFER_POINTS.map((point, i) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold text-white">
                          {point.title}
                        </p>
                        <p className="mt-1 text-xs text-stone-400 leading-relaxed">{point.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="shrink-0 border-t border-white/10 p-5 space-y-2.5">
                <Link
                  href="/contact?promo=free3months"
                  onClick={() => setOpen(false)}
                  className="cta-glow-zoom flex w-full items-center justify-center rounded-xl bg-[#FFB133] px-5 py-3.5 text-sm font-bold text-stone-950 shadow-[0_0_28px_rgba(255,177,51,0.4)]"
                >
                  Claim Free 3 Months →
                </Link>
                <Link
                  href="/contact?promo=free3months#meeting"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Book Plan Demo
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <button
        type="button"
        onClick={reveal}
        onMouseEnter={() => {
          setBurst(true);
          setOpen(true);
        }}
        onFocus={reveal}
        className={cn(
          "promo-gift-trigger relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFB133] text-stone-950 outline-none transition",
          "focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950",
          className,
        )}
        aria-label="Limited offer"
        aria-expanded={open}
        title="Limited offer"
      >
        <span className="pointer-events-none absolute inset-0 rounded-xl promo-gift-glow" />
        <span className="pointer-events-none absolute inset-0 overflow-visible">
          {(burst || open) &&
            POPPERS.map((p, i) => (
              <motion.span
                key={`${burst}-${i}`}
                className="absolute bottom-1 h-1.5 w-1.5 rounded-full"
                style={{ left: p.left, background: p.color }}
                initial={{ opacity: 0, y: 0, scale: 0.6 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-4, -28 - i * 3, -40],
                  x: [0, (i % 2 === 0 ? 1 : -1) * (6 + i * 2)],
                  scale: [0.6, 1.2, 0.4],
                }}
                transition={{ duration: 0.85, delay: p.delay, ease: "easeOut" }}
              />
            ))}
        </span>
        <GiftIcon className="relative h-5 w-5" aria-hidden />
      </button>
      {panel}
    </>
  );
}
