import type { Metadata } from "next";

const siteUrl = "https://hafiz-subhan-portfolio.vercel.app";

export const siteConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RS Dev | Revenue loop partner for build, search and ops",
  description:
    "Small senior crew for sites, bespoke tools, search placement, enquiry flow, and back office wiring. Written plans before build starts.",
  icons: {
    icon: "/rs-dev-logo.png",
    shortcut: "/rs-dev-logo.png",
    apple: "/rs-dev-logo.png",
  },
  keywords: [
    "RS Dev",
    "revenue loop partner",
    "web app development",
    "custom software",
    "SEO services",
    "CRM implementation",
    "AI agents",
    "workflow automation",
    "digital marketing",
    "founder led development",
  ] as string[],
  authors: {
    name: "RS Dev",
    url: siteUrl,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RS Dev | Revenue loop partner for build, search and ops",
    description:
      "One crew for product build, search placement, enquiries, and back office wiring. Plans you can read before you commit.",
    url: siteUrl,
    siteName: "RS Dev",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RS Dev monogram and positioning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Dev | Revenue loop partner for build, search and ops",
    description:
      "Sites, bespoke tools, search, assistant bots, and campaigns from one founder led crew with written plans.",
    images: ["/twitter-image"],
  },
} as const;
