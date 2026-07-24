'use client';

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaRobot } from "react-icons/fa";

import { FastLink } from "@/components/navigation/fast-link";
import { openRsBot } from "@/components/main/chatbot";
import { PromoOfferTrigger } from "@/components/layout/promo-offer-sidebar";
import { NAV_LINKS } from "@/constants";
import { ThemeToggle } from "@/components/main/ThemeToggle";
import { cn } from "@/lib/utils";

const NAVBAR_H = "h-[80px]";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** RS Bot trigger — robotic symbol + label, no button background */
function RsBotNavTrigger({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => openRsBot()}
      className={cn(
        "rs-bot-nav-trigger group flex flex-col items-center justify-center gap-0.5 bg-transparent border-0 p-1 outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-stone-400/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950",
        className,
      )}
      aria-label="Open RS Bot"
      title="Ask RS Bot"
    >
      <FaRobot
        className="h-6 w-6 text-stone-900 dark:text-stone-200"
        aria-hidden
      />
      <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-stone-700 dark:text-stone-300 leading-none">
        RS Bot
      </span>
    </button>
  );
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 right-0 z-50 border-b border-stone-200/80 dark:border-white/[0.07]",
        "bg-white/90 dark:bg-[#1c1917]/90 backdrop-blur-xl",
        NAVBAR_H
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <FastLink
          href="/"
          className="group flex shrink-0 items-center gap-3 rounded-xl p-1 transition hover:opacity-90"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Home"
        >
          <Image
            src="/rs-dev-logo.png"
            alt="RS Dev"
            width={48}
            height={48}
            draggable={false}
            priority
            className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-lg bg-white p-1 ring-1 ring-stone-200/80 dark:ring-white/10"
          />
          <span className="hidden sm:block font-display text-lg font-semibold tracking-tight text-stone-900 dark:text-white">
            RS <span className="text-accent">Dev</span>
          </span>
        </FastLink>

        <nav
          className="hidden lg:flex flex-1 max-w-2xl items-center justify-center"
          aria-label="Main"
        >
          <div className="flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.link);
              return (
                <FastLink
                  key={link.title}
                  href={link.link}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-[13px] font-medium transition",
                    active
                      ? "text-accent bg-orange-50 dark:bg-orange-950/40"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 dark:text-stone-300 dark:hover:text-white dark:hover:bg-white/5"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </FastLink>
              );
            })}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <PromoOfferTrigger />
          <ThemeToggle compact />
          <FastLink
            href="/contact"
            className="brand-button inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold"
          >
            Let&apos;s talk
          </FastLink>
          <RsBotNavTrigger className="ml-4 sm:ml-5" />
        </div>

        <div className="flex md:hidden items-center gap-2 shrink-0">
          <PromoOfferTrigger />
          <ThemeToggle compact />
          <RsBotNavTrigger />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-stone-200/80 bg-white/70 text-lg leading-none text-stone-800 dark:border-white/10 dark:bg-white/5 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <nav
          className={cn(
            "absolute left-0 right-0 top-[80px] border-b border-stone-200 bg-white/95 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-[#1c1917]/95 md:hidden",
            "flex flex-col gap-1"
          )}
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.link);
            return (
              <FastLink
                key={link.title}
                href={link.link}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition",
                  active
                    ? "brand-button"
                    : "text-stone-700 hover:bg-stone-50 dark:text-stone-200 dark:hover:bg-white/5"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </FastLink>
            );
          })}
          <FastLink
            href="/contact"
            className="brand-button mt-2 rounded-lg px-4 py-3 text-center text-sm font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let&apos;s talk
          </FastLink>
        </nav>
      ) : null}
    </header>
  );
};
