import { NAV_LINKS } from "@/constants";

/** Internal app paths — prefetched for faster client navigation */
export const SITE_ROUTES = [
  ...new Set([
    "/",
    ...NAV_LINKS.map((link) => link.link),
    "/contact",
    "/contact?intent=growth",
    "/contact?intent=operations",
    "/contact?intent=brand",
    "/contact?intent=automate",
  ]),
] as const;

export function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}
