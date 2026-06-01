/** Client quotes — paired with companies in `constants/brands.ts` */

export const CLIENT_TESTIMONIALS = [
  {
    partnerName: "Metro Motors",
    quote:
      "Our listings finally load fast enough that sales trusts the site. RS Dev wired tracking so we see which cars pull enquiries before we pick up the phone.",
    author: "James Okonkwo",
    role: "Digital sales lead",
  },
  {
    partnerName: "PlateHouse",
    quote:
      "Supply orders used to live in three tabs. One portal with clear roles cut the back-and-forth and gave ops a number they could trust each morning.",
    author: "Priya Nair",
    role: "Operations director",
  },
  {
    partnerName: "OpsFlow",
    quote:
      "They mapped our real workflow first, then built modules around it. No shelf product fight — just software our team actually opens every day.",
    author: "Marcus Chen",
    role: "Founder",
  },
  {
    partnerName: "VisionAI Labs",
    quote:
      "From labeled data to a live inference path, they kept the stack understandable. We could review models without a black box between us and production.",
    author: "Elena Vasquez",
    role: "Product lead",
  },
  {
    partnerName: "CareLine Health",
    quote:
      "Patient flows and clinic scheduling needed to feel calm under load. The build held up in testing and the handoff docs matched how our staff works.",
    author: "Dr. Amara Osei",
    role: "Clinical operations",
  },
  {
    partnerName: "RankLocal",
    quote:
      "Technical fixes and content structure moved us up where local buyers search. Reporting was plain English, not a dashboard we had to decode.",
    author: "Tom Bradley",
    role: "Growth manager",
  },
  {
    partnerName: "StreamVault",
    quote:
      "Browse and watchlist patterns finally felt intentional. Performance tuning meant previews stayed smooth even when catalog size jumped.",
    author: "Sofia Ruiz",
    role: "Head of product",
  },
  {
    partnerName: "AdoptPaws",
    quote:
      "Search, applications, and moderation in one place shortened our volunteer shifts. Families get clearer steps from first click to approval.",
    author: "Hannah Cole",
    role: "Program director",
  },
  {
    partnerName: "LearnSphere",
    quote:
      "Course flows and admin tools shipped in slices we could test with real instructors. Updates stayed on schedule because scope was written down upfront.",
    author: "David Kim",
    role: "EdTech founder",
  },
  {
    partnerName: "FreshCart",
    quote:
      "Cart, payments, and inventory signals connected without duct tape. Marketing finally sees which promos move baskets, not just page views.",
    author: "Leah Martins",
    role: "E-commerce lead",
  },
] as const;

export type ClientTestimonial = (typeof CLIENT_TESTIMONIALS)[number];
