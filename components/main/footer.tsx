import Image from "next/image";
import { FastLink } from "@/components/navigation/fast-link";
import { FOOTER_DATA } from "@/constants";
import { isInternalRoute } from "@/lib/site-routes";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-stone-200/80 bg-white/70 dark:border-white/[0.07] dark:bg-[#1c1917]/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <FastLink href="/" className="inline-flex items-center gap-3">
              <Image
                src="/rs-dev-logo.png"
                alt="RS Dev"
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg bg-white p-1 ring-1 ring-stone-200/80 dark:ring-white/10"
              />
              <span className="font-display text-lg font-semibold text-stone-900 dark:text-white">
                RS <span className="text-accent">Dev</span>
              </span>
            </FastLink>
            <p className="max-w-xs text-center text-sm text-stone-600 dark:text-stone-400 lg:text-left leading-relaxed">
              We solve digital problems with technology so entrepreneurs and teams can focus on quality work.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-xl">
            {FOOTER_DATA.map((column) => (
              <div key={column.title} className="text-center sm:text-left">
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.data.map(({ name, link }) => (
                    <li key={`${column.title}-${name}`}>
                      {isInternalRoute(link) ? (
                        <FastLink
                          href={link}
                          className="inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-accent dark:text-stone-300 dark:hover:text-accent"
                        >
                          {name}
                        </FastLink>
                      ) : (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-accent dark:text-stone-300 dark:hover:text-accent"
                        >
                          {name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-stone-200/80 pt-8 text-sm text-stone-500 dark:border-white/10 dark:text-stone-400 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} RS Dev. All rights reserved.</span>
          <span className="text-xs uppercase tracking-[0.16em] text-accent/80">Outcomes you can count</span>
        </div>
      </div>
    </footer>
  );
};
