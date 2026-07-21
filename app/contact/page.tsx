import type { Metadata } from "next";

import { ContactPage } from "@/components/main/contact-page";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "RS Dev | Book a call",
  description:
    "Tell RS Dev what done looks like: sites, bespoke tools, search, or campaigns. Plain reply within a day.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}

