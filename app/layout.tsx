import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { ChatBot } from "@/components/main/chatbot";
import { Navbar } from "@/components/main/navbar";
import { ConsultationPopup } from "@/components/layout/consultation-popup";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/main/ThemeProvider";
import { FastNavigation } from "@/components/navigation/fast-navigation";
import { RevealEngine } from "@/components/motion/RevealEngine";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { themeInitScript } from "@/lib/theme";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
};

export const metadata: Metadata = siteConfig;
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RS Dev",
  description:
    "We help entrepreneurs solve digital problems with technology so companies can focus on quality work.",
  url: "https://the-rsdev.com",
  image: "https://the-rsdev.com/rs-dev-logo.png",
  sameAs: [] as string[],
  knowsAbout: [
    "Web application development",
    "Custom software",
    "Search engine optimization",
    "CRM and pipeline setup",
    "Digital marketing",
    "Software consulting",
  ],
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RS Dev",
  url: "https://the-rsdev.com",
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
        suppressHydrationWarning
        className={cn(
          "min-h-screen flex flex-col bg-stone-50 text-stone-900 dark:bg-[#1c1917] dark:text-stone-100 overflow-y-scroll overflow-x-clip transition-colors font-sans",
          plusJakarta.variable,
          syne.variable,
          plusJakarta.className
        )}
      >
        <ThemeProvider>
          <FastNavigation />
          <SmoothScroll />
          <RevealEngine />
          <Navbar />
          {children}
          <ChatBot />
          <ConsultationPopup />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
