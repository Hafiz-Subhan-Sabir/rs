"use client";

import { motion } from "framer-motion";

import { DiagramSlot } from "@/components/ui/diagram-slot";
import { SectionHeader } from "@/components/ui/section-header";
import { DIAGRAM_SLOTS, MAINTENANCE_CYCLE_STEPS } from "@/constants/content";
import { MotionIn } from "@/components/motion/MotionIn";

export function MaintenanceCycle() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <SectionHeader
        eyebrow="After launch"
        title="Maintenance is not a ticket queue — it is a growth loop."
        description="Sites and systems drift without care. We run a continuous loop so performance, security, and results keep compounding."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <DiagramSlot
          imagePath={DIAGRAM_SLOTS.maintenanceLoop.file}
          title={DIAGRAM_SLOTS.maintenanceLoop.title}
          hint={DIAGRAM_SLOTS.maintenanceLoop.hint}
        />

        <ol className="space-y-4">
          {MAINTENANCE_CYCLE_STEPS.map((step, i) => (
            <MotionIn key={step.step} delay={i * 0.06}>
              <li className="flex gap-4 rounded-2xl border border-gray-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-700 dark:text-cyan-300">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{step.detail}</p>
                </div>
              </li>
            </MotionIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
