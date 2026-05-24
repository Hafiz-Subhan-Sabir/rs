import type { Metadata } from "next";

const siteUrl = "https://hafiz-subhan-portfolio.vercel.app";

export const siteConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RS Dev | Sites, software, search and smart ops",
  description:
    "RS Dev builds sites and apps, bespoke tools, sales boards, search placement, assistant bots, and campaigns with plain updates and written plans.",
  icons: {
    icon: "/rs-dev-logo.png",
    shortcut: "/rs-dev-logo.png",
    apple: "/rs-dev-logo.png",
  },
  keywords: [
    "RS Dev",
    "web app development",
    "custom software",
    "CRM implementation",
    "SEO services",
    "AI agents",
    "workflow automation",
    "digital marketing",
    "React developer",
    "Next.js developer",
    "business website",
    "software consultancy",
  ] as string[],
  authors: {
    name: "RS Dev",
    url: siteUrl,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RS Dev | Sites, software, search and smart ops",
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
    title: "RS Dev | Sites, software, search and smart ops",
    description:
      "Sites, bespoke tools, search, assistant bots, and campaigns from one crew with written plans.",
    images: ["/twitter-image"],
  },
} as const;
