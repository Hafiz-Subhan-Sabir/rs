'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS, SOCIALS } from "@/constants";
import { ThemeToggle } from "@/components/main/ThemeToggle";
import { cn } from "@/lib/utils";

const NAVBAR_H = "h-[80px]";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 right-0 z-50 border-b border-gray-200/60 dark:border-white/[0.08]",
        "bg-white/75 dark:bg-[#0c0b12]/75 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        NAVBAR_H
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="group flex shrink-0 items-center rounded-2xl p-1 transition hover:opacity-90"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Home"
        >
          <Image
            src="/rs-dev-logo.png"
            alt="RS Dev"
            width={56}
            height={56}
            draggable={false}
            priority
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-xl bg-white p-1 shadow-sm ring-1 ring-gray-200/80 dark:ring-white/15 transition group-hover:scale-[1.03]"
          />
        </Link>

        <nav
          className="hidden lg:flex flex-1 max-w-2xl items-center justify-center"
          aria-label="Main"
        >
          <div className="flex items-center gap-1 rounded-full border border-gray-200/80 bg-white/60 px-2 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.link);
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition",
                    active
                      ? "bg-emerald-500/15 text-emerald-700 dark:bg-[#f7e295]/15 dark:text-[#f7e295]"
                      : "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ThemeToggle compact />
          <div className="h-6 w-px bg-gray-200 dark:bg-white/10" />
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
              className="grid h-9 w-9 place-items-center rounded-full border border-gray-200/80 bg-white/50 text-gray-700 transition hover:border-emerald-400/40 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:text-cyan-300"
            >
              <Icon className="h-[18px] w-[18px]" />
            </Link>
          ))}
        </div>

        <div className="flex md:hidden items-center gap-2 shrink-0">
          <ThemeToggle compact />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200/80 bg-white/70 text-lg leading-none text-gray-800 dark:border-white/10 dark:bg-white/5 dark:text-white"
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
            "absolute left-0 right-0 top-[80px] border-b border-gray-200 bg-white/95 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0c0b12]/95 md:hidden",
            "flex flex-col gap-1"
          )}
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.link);
            return (
              <Link
                key={link.title}
                href={link.link}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition",
                  active
                    ? "bg-emerald-500/10 text-emerald-700 dark:bg-[#f7e295]/10 dark:text-[#f7e295]"
                    : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/5"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            );
          })}
          <div className="mt-3 flex justify-center gap-4 border-t border-gray-200 pt-4 dark:border-white/10">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link href={link} target="_blank" rel="noreferrer noopener" key={name} aria-label={name}>
                <Icon className="h-7 w-7 text-gray-700 dark:text-white" />
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
};
