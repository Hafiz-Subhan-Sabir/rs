"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

import { prefetchRoute, prefetchRoutes } from "@/lib/prefetch-routes";
import { SITE_ROUTES } from "@/lib/site-routes";

function scrollWindowToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function FastNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const bootPrefetchedRef = useRef(false);

  useEffect(() => {
    if (bootPrefetchedRef.current) return;
    bootPrefetchedRef.current = true;

    prefetchRoutes(router, SITE_ROUTES);

    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(() => prefetchRoutes(router, SITE_ROUTES), { timeout: 400 })
        : null;

    return () => {
      if (idleId !== null) window.cancelIdleCallback(idleId);
    };
  }, [router]);

  useEffect(() => {
    const onPointerOver = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank") return;
      const href = anchor.getAttribute("href");
      if (href) prefetchRoute(router, href);
    };

    document.addEventListener("mouseover", onPointerOver, { passive: true });
    return () => document.removeEventListener("mouseover", onPointerOver);
  }, [router]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || event.defaultPrevented) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      prefetchRoute(router, href);

      const nextPath = href.split("?")[0].split("#")[0] || "/";
      if (nextPath !== window.location.pathname && !href.startsWith("/#")) {
        document.documentElement.dataset.navigating = "true";
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useLayoutEffect(() => {
    delete document.documentElement.dataset.navigating;

    const pending =
      typeof sessionStorage !== "undefined" ? sessionStorage.getItem("pending_anchor") : null;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const hasHomeAnchor = pathname === "/" && (pending || hash);

    if (!hasHomeAnchor) {
      scrollWindowToTop();
      window.dispatchEvent(new CustomEvent("rsdev:route-scroll-top"));
    }

    window.dispatchEvent(new CustomEvent("rsdev:route-change", { detail: { pathname } }));
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="route-progress pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400 opacity-0"
    />
  );
}
