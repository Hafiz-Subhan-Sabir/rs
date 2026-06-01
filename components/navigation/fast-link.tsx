"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, type ComponentProps, type FocusEvent, type MouseEvent } from "react";

import { prefetchRoute } from "@/lib/prefetch-routes";
import { isInternalRoute } from "@/lib/site-routes";

type FastLinkProps = LinkProps &
  Omit<ComponentProps<"a">, keyof LinkProps> & {
    prefetchOnHover?: boolean;
  };

export function FastLink({
  href,
  prefetch = true,
  prefetchOnHover = true,
  onMouseEnter,
  onFocus,
  onClick,
  ...props
}: FastLinkProps) {
  const router = useRouter();
  const path = typeof href === "string" ? href.split("?")[0] : href.pathname ?? "";

  const warmRoute = useCallback(() => {
    if (!prefetchOnHover || typeof href !== "string" || !isInternalRoute(href)) return;
    prefetchRoute(router, href);
  }, [href, prefetchOnHover, router]);

  const handleMouseEnter = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      warmRoute();
      onMouseEnter?.(event);
    },
    [onMouseEnter, warmRoute],
  );

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLAnchorElement>) => {
      warmRoute();
      onFocus?.(event);
    },
    [onFocus, warmRoute],
  );

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (
        typeof href === "string" &&
        isInternalRoute(href) &&
        path !== window.location.pathname
      ) {
        document.documentElement.dataset.navigating = "true";
      }
      onClick?.(event);
    },
    [href, onClick, path],
  );

  return (
    <Link
      href={href}
      prefetch={prefetch}
      scroll
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      onClick={handleClick}
      onTouchStart={warmRoute}
      {...props}
    />
  );
}
