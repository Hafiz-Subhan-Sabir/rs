import type { Metadata } from "next";

const siteUrl = "https://the-rsdev.com";

export const siteConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RS Dev | We solve company problems with technology",
  description:
    "We help entrepreneurs fix digital problems with websites, software, search, and workflows, so teams can focus on quality work.",
  icons: {
    icon: "/rs-dev-logo.png",
    shortcut: "/rs-dev-logo.png",
    apple: "/rs-dev-logo.png",
  },
  keywords: [
    "RS Dev",
    "solve business problems with technology",
    "entrepreneur digital solutions",
    "web app development",
    "custom software",
    "SEO services",
    "CRM implementation",
    "digital marketing",
    "web consulting",
  ] as string[],
  authors: {
    name: "RS Dev",
    url: siteUrl,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RS Dev | We solve company problems with technology",
    description:
      "We help entrepreneurs fix digital problems with practical tech so your company can focus on quality work.",
    url: siteUrl,
    siteName: "RS Dev",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RS Dev, technology partner for entrepreneurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Dev | We solve company problems with technology",
    description:
      "Digital problems solved with tech: websites, software, search, and ops, so entrepreneurs focus on what they do best.",
    images: ["/twitter-image"],
  },
} as const;
