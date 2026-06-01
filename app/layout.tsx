import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { ChatBot } from "@/components/main/chatbot";
import { Navbar } from "@/components/main/navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/main/ThemeProvider";
import { FastNavigation } from "@/components/navigation/fast-navigation";
import { RevealEngine } from "@/components/motion/RevealEngine";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { themeInitScript } from "@/lib/theme";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#030014" },
  ],
};

export const metadata: Metadata = siteConfig;
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RS Dev",
  description:
    "We help entrepreneurs solve digital problems with technology so companies can focus on quality work.",
  url: "https://hafiz-subhan-portfolio.vercel.app",
  image: "https://hafiz-subhan-portfolio.vercel.app/rs-dev-logo.png",
  sameAs: [] as string[],
  knowsAbout: [
    "Web application development",
    "Custom software",
    "Search engine optimization",
    "CRM and pipeline setup",
    "AI agents and workflow automation",
    "Digital marketing",
    "Revenue operations",
  ],
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RS Dev",
  url: "https://hafiz-subhan-portfolio.vercel.app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" style={{ colorScheme: "light dark" }}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-[#030014] dark:text-gray-100 overflow-y-scroll overflow-x-clip transition-colors",
          inter.className
        )}
      >
        <ThemeProvider>
          <FastNavigation />
          <SmoothScroll />
          <RevealEngine />
          <Navbar />
          {children}
          <ChatBot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
