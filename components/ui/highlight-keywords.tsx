"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const KEYWORD_PATTERN =
  /\b(RS Dev|Next\.js|SEO|DevOps|Cloud|CRM|API|analytics|conversion|performance|architecture|automation|pipeline|dashboard|tracking|search|product|enterprise|security|RBAC|hosting|scale)\b/gi;

/** Highlight strong delivery keywords (and RS Dev) inside plain quote text. */
export function HighlightKeywords({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const nodes: ReactNode[] = [];
  let last = 0;
  const re = new RegExp(KEYWORD_PATTERN.source, KEYWORD_PATTERN.flags);
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    nodes.push(
      <mark
        key={`${match.index}-${match[0]}`}
        className="rounded-sm bg-accent/15 px-0.5 font-semibold text-accent dark:bg-accent/25 dark:text-orange-300"
      >
        {match[0]}
      </mark>,
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));

  return <span className={cn(className)}>{nodes}</span>;
}
