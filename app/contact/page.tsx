import type { Metadata } from "next";

import { ContactPage } from "@/components/main/contact-page";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "RS Dev | Book a scope call — Web apps, CRM, SEO & AI",
  description:
    "Contact RS Dev for websites and web apps, custom software, CRM, SEO, AI agents and automation, digital marketing, and consultancy.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}

