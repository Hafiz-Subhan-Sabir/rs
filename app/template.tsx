"use client";

import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-route-enter flex min-h-0 w-full flex-1 flex-col">
      {children}
    </div>
  );
}
