"use client";

import type { ReactNode } from "react";
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CloudIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ServerStackIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { LazyLoopVideo } from "@/components/ui/lazy-loop-video";
import { cn } from "@/lib/utils";

type VisualProps = {
  accent: string;
  className?: string;
};

function Frame({
  accent,
  className,
  children,
}: VisualProps & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "relative mt-5 overflow-hidden rounded-xl border bg-stone-950/95 dark:bg-black/60",
        className,
      )}
      style={{ borderColor: `${accent}44` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${accent}33, transparent 55%)`,
        }}
      />
      {children}
    </div>
  );
}

/** Full-stack: laptop with live backend / API activity on screen */
export function LaptopBackendVisual({ accent, className }: VisualProps) {
  return (
    <Frame accent={accent} className={className}>
      <div className="relative px-4 pb-3 pt-4">
        <div className="mx-auto w-[92%]">
          <div className="overflow-hidden rounded-t-lg border border-stone-700/80 bg-stone-900 shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-stone-700/80 bg-stone-800/90 px-2.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-2 flex items-center gap-1 text-[9px] text-stone-400">
                <CommandLineIcon className="h-3 w-3" />
                api.server — /v1
              </span>
            </div>
            <div className="relative grid grid-cols-[1.1fr_0.9fr] gap-0">
              <div className="space-y-1.5 border-r border-stone-800 p-2.5 font-mono text-[9px] leading-relaxed text-emerald-400/90">
                <p className="svc-line-1 text-sky-300">POST /checkout → 201</p>
                <p className="svc-line-2 text-amber-300">PUT /inventory → 204</p>
                <p className="svc-line-3 text-emerald-300">GET /users/:id → 200</p>
                <p className="text-stone-500">{`{ ok: true, ms: 42 }`}</p>
                <p className="text-orange-300/90">&gt; build --prod</p>
                <p className="text-emerald-400">Compiled in 1.8s ✓</p>
              </div>
              <div className="relative min-h-[108px] overflow-hidden bg-stone-950">
                <LazyLoopVideo
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                  src="/videos/backend-terminal.mp4"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
                <div className="relative z-[1] flex h-full flex-col justify-end gap-1.5 p-2">
                  <div className="flex items-center gap-1.5 rounded-md bg-white/10 px-1.5 py-1 backdrop-blur-sm">
                    <ServerStackIcon className="h-3.5 w-3.5 text-orange-300" />
                    <span className="text-[9px] font-semibold text-white">API + DB</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md bg-white/10 px-1.5 py-1 backdrop-blur-sm">
                    <CloudIcon className="h-3.5 w-3.5 text-sky-300" />
                    <span className="text-[9px] font-semibold text-white">Deploy live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-2 w-[96%] rounded-b-md bg-stone-700" />
          <div className="mx-auto h-1.5 w-[28%] rounded-b-full bg-stone-600" />
        </div>
        <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
          {["Next.js", "API", "Auth", "DB"].map((t) => (
            <span
              key={t}
              className="rounded-md px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white"
              style={{ background: `${accent}cc` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/** System architect: compound diagram + short architecture video */
export function ArchitectureVisual({ accent, className }: VisualProps) {
  return (
    <Frame accent={accent} className={className}>
      <div className="relative">
        <LazyLoopVideo
          className="h-[130px] w-full object-cover opacity-75"
          src="/videos/architecture-flow.mp4"
          aria-label="System architecture flow visualization"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/20" />

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 360 130"
          fill="none"
          aria-hidden
        >
          <path
            d="M60 35 H150 M150 35 H250 M150 35 V70 H100 V95 M150 70 H210 V95"
            stroke={accent}
            strokeWidth="1.5"
            strokeOpacity="0.55"
            strokeDasharray="4 3"
          />
          <circle cx="60" cy="35" r="14" fill="#0284C7" fillOpacity="0.9" />
          <circle cx="150" cy="35" r="14" fill={accent} fillOpacity="0.95" />
          <circle cx="250" cy="35" r="14" fill="#059669" fillOpacity="0.9" />
          <circle cx="100" cy="95" r="12" fill="#0ea5e9" fillOpacity="0.9" />
          <circle cx="210" cy="95" r="12" fill="#f97316" fillOpacity="0.9" />
        </svg>

        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Gateway", icon: CloudIcon },
              { label: "Services", icon: CubeTransparentIcon },
              { label: "Data", icon: ServerStackIcon },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-1 rounded-lg border border-white/15 bg-white/10 px-1.5 py-1.5 backdrop-blur-md"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-sky-300" />
                <span className="truncate text-[9px] font-bold text-white">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-1.5 flex items-center justify-center gap-1 text-[9px] font-semibold text-sky-200/90">
            <span className="h-1 w-1 animate-pulse rounded-full bg-sky-400" />
            Clients → Auth → Core → Store
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** App development: phone with internal system UI */
export function PhoneAppVisual({ accent, className }: VisualProps) {
  return (
    <Frame accent={accent} className={className}>
      <div className="flex items-end justify-center gap-3 px-3 pb-3 pt-4">
        <div className="relative w-[108px] shrink-0">
          <div
            className="rounded-[1.35rem] border-[3px] border-stone-600 bg-stone-900 p-1.5 shadow-xl"
            style={{ boxShadow: `0 12px 28px ${accent}33` }}
          >
            <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-stone-600" />
            <div className="overflow-hidden rounded-[0.9rem] bg-stone-950">
              <div
                className="flex items-center justify-between px-2 py-1.5"
                style={{ background: accent }}
              >
                <span className="text-[8px] font-bold text-white">Ops Hub</span>
                <DevicePhoneMobileIcon className="h-3 w-3 text-white/90" />
              </div>
              <div className="space-y-1.5 p-2">
                <div className="h-1.5 w-3/4 rounded bg-stone-700" />
                <div className="grid grid-cols-2 gap-1">
                  <div className="rounded-md bg-emerald-500/20 p-1.5">
                    <p className="text-[8px] font-bold text-emerald-300">98%</p>
                    <p className="text-[7px] text-stone-400">uptime</p>
                  </div>
                  <div className="rounded-md bg-sky-500/20 p-1.5">
                    <p className="text-[8px] font-bold text-sky-300">24</p>
                    <p className="text-[7px] text-stone-400">tasks</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {["Members", "Billing", "Alerts"].map((row, i) => (
                    <div
                      key={row}
                      className="flex items-center gap-1 rounded bg-stone-800/80 px-1.5 py-1"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: i === 0 ? accent : "#64748b" }}
                      />
                      <span className="text-[8px] text-stone-300">{row}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-2 flex flex-1 flex-col gap-1.5">
          {[
            { icon: Squares2X2Icon, label: "Dashboard" },
            { icon: ChatBubbleLeftRightIcon, label: "Messaging" },
            { icon: Cog6ToothIcon, label: "Admin" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5"
            >
              <Icon className="h-3.5 w-3.5" style={{ color: accent }} />
              <span className="text-[10px] font-semibold text-stone-200">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/** AI automation: flow icons */
export function AutomateVisual({ accent, className }: VisualProps) {
  const steps = [
    { icon: ChatBubbleLeftRightIcon, label: "Trigger" },
    { icon: Cog6ToothIcon, label: "Filter" },
    { icon: ServerStackIcon, label: "CRM" },
  ];
  return (
    <Frame accent={accent} className={className}>
      <div className="flex items-center justify-between gap-1 px-3 py-4">
        {steps.map(({ icon: Icon, label }, i) => (
          <div key={label} className="flex flex-1 items-center gap-1">
            <div className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl border"
                style={{ background: `${accent}22`, borderColor: `${accent}55`, color: accent }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[9px] font-bold text-stone-300">{label}</span>
            </div>
            {i < steps.length - 1 ? (
              <span className="mb-4 text-stone-500" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </Frame>
  );
}

/** SEO growth */
export function GrowVisual({ accent, className }: VisualProps) {
  return (
    <Frame accent={accent} className={className}>
      <div className="flex items-end justify-between gap-3 px-4 py-4">
        <div className="flex items-center gap-2">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl"
            style={{ background: `${accent}22`, color: accent }}
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-white">Search lift</p>
            <p className="text-[9px] text-stone-400">Rank · speed · content</p>
          </div>
        </div>
        <div className="flex h-14 items-end gap-1">
          {[40, 55, 48, 72, 88].map((h, i) => (
            <div
              key={i}
              className="w-3 rounded-t"
              style={{
                height: `${h}%`,
                background: i === 4 ? accent : `${accent}66`,
              }}
            />
          ))}
        </div>
        <ChartBarIcon className="mb-1 h-5 w-5 text-sky-300" />
      </div>
    </Frame>
  );
}

/** Consultancy */
export function AdviseVisual({ accent, className }: VisualProps) {
  return (
    <Frame accent={accent} className={className}>
      <div className="flex items-center gap-3 px-4 py-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `${accent}22`, color: accent }}
        >
          <LightBulbIcon className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1 space-y-1.5">
          {["Roadmap", "Scope", "Priorities"].map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-md text-[9px] font-bold text-white"
                style={{ background: accent }}
              >
                {i + 1}
              </span>
              <div className="h-1.5 flex-1 rounded-full bg-stone-800">
                <div
                  className="h-1.5 rounded-full"
                  style={{ width: `${90 - i * 18}%`, background: accent }}
                />
              </div>
              <span className="w-14 truncate text-[9px] font-semibold text-stone-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export const SERVICE_ICONS = [
  ServerStackIcon,
  DevicePhoneMobileIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  CloudIcon,
] as const;

export const SERVICE_VISUALS = [
  LaptopBackendVisual,
  PhoneAppVisual,
  ArchitectureVisual,
  GrowVisual,
  AutomateVisual,
  AdviseVisual,
] as const;
