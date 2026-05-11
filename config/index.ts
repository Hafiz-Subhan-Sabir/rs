import type { Metadata } from "next";

const siteUrl = "https://hafiz-subhan-portfolio.vercel.app";

export const siteConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RS Dev | Web apps, software, CRM, SEO & AI",
  description:
    "RS Dev: websites and web apps, custom software, CRM, SEO, AI agents and workflow automation, AI bots, digital marketing, and consultancy — scoped delivery and honest guidance.",
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
    "AI workflow automation",
    "AI bots",
    "digital marketing consultancy",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Python",
    "FastAPI",
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
    title: "RS Dev | Web apps, software, CRM, SEO & AI",
    description:
      "Websites and apps, custom software, CRM, SEO, AI automation, bots, digital marketing, and consultancy — delivery you can plan around.",
    url: siteUrl,
    siteName: "RS Dev",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RS Dev — modern monogram logo and positioning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Dev | Web apps, software, CRM, SEO & AI",
    description:
      "Web apps, custom software, CRM, SEO, AI agents and automation, digital marketing, and consultancy.",
    images: ["/twitter-image"],
  },
} as const;
