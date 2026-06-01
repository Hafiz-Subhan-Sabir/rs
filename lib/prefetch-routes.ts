import { isInternalRoute } from "@/lib/site-routes";

const warmed = new Set<string>();

type PrefetchRouter = {
  prefetch: (href: string) => void;
};

export function normalizePrefetchHref(href: string) {
  if (!isInternalRoute(href) || href.startsWith("/#")) return null;
  return href.split("#")[0] || href;
}

export function prefetchRoute(router: PrefetchRouter, href: string) {
  const normalized = normalizePrefetchHref(href);
  if (!normalized || warmed.has(normalized)) return;

  warmed.add(normalized);
  try {
    router.prefetch(normalized);
  } catch {
    warmed.delete(normalized);
  }
}

export function prefetchRoutes(router: PrefetchRouter, routes: readonly string[]) {
  routes.forEach((route) => prefetchRoute(router, route));
}
