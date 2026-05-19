import type { PropsWithChildren } from "react";

import { AmbientBackground } from "@/components/layout/ambient-bg";

type PageShellProps = PropsWithChildren<{
  className?: string;
}>;

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <main className={`relative w-full min-h-[calc(100vh-80px)] pt-[96px] pb-20 ${className}`}>
      <AmbientBackground />
      {children}
    </main>
  );
}
