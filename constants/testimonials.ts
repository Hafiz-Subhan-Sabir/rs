/** Client quotes — paired with companies in `constants/brands.ts` */

export const CLIENT_TESTIMONIALS = [
  {
    partnerName: "Metro Motors",
    quote:
      "RS Dev rebuilt our product listings for speed and conversion. Analytics and enquiry tracking finally tell sales which cars convert before the phone rings.",
    author: "James Okonkwo",
    role: "Digital sales lead",
  },
  {
    partnerName: "PlateHouse",
    quote:
      "Orders lived in three tabs. RS Dev shipped one portal with clear roles — ops opens it every morning and trust the number on the dashboard.",
    author: "Priya Nair",
    role: "Operations director",
  },
  {
    partnerName: "OpsFlow",
    quote:
      "RS Dev mapped our real workflow first, then built automation around it. No shelf product fight — DevOps and product modules our crew actually uses daily.",
    author: "Marcus Chen",
    role: "Founder",
  },
  {
    partnerName: "VisionAI Labs",
    quote:
      "From labeled data to a live inference path, RS Dev kept the architecture readable. We can review models without a black box between us and production.",
    author: "Elena Vasquez",
    role: "Product lead",
  },
  {
    partnerName: "CareLine Health",
    quote:
      "Patient flows and clinic scheduling needed calm under load. RS Dev delivered a secure product surface that held in testing — with handoff docs staff can follow.",
    author: "Dr. Amara Osei",
    role: "Clinical operations",
  },
  {
    partnerName: "RankLocal",
    quote:
      "RS Dev fixed technical SEO and page structure so we climb where local buyers search. Reporting is plain English — not a dashboard we have to decode.",
    author: "Tom Bradley",
    role: "Growth manager",
  },
  {
    partnerName: "StreamVault",
    quote:
      "Browse and watchlist patterns finally felt intentional. RS Dev performance tuning kept previews smooth even when catalog size jumped.",
    author: "Sofia Ruiz",
    role: "Head of product",
  },
  {
    partnerName: "AdoptPaws",
    quote:
      "Search, applications, and moderation in one place shortened volunteer shifts. RS Dev gave families clearer steps from first click to approval.",
    author: "Hannah Cole",
    role: "Program director",
  },
  {
    partnerName: "LearnSphere",
    quote:
      "Course flows and admin tools shipped in slices we could test with instructors. RS Dev wrote scope upfront so updates stayed on the pipeline schedule.",
    author: "David Kim",
    role: "EdTech founder",
  },
  {
    partnerName: "FreshCart",
    quote:
      "Cart, payments, and inventory signals connected without duct tape. RS Dev wired analytics so marketing sees which promos move baskets — not just page views.",
    author: "Leah Martins",
    role: "E-commerce lead",
  },
] as const;

export type ClientTestimonial = (typeof CLIENT_TESTIMONIALS)[number];
