"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

import { CONTACT_EMAIL, FOUNDER_FULL_NAME } from "@/constants";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"] as const;

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function daysInMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}

/** Monday-first weekday index 0..6 */
function mondayIndex(d: Date) {
  return (d.getDay() + 6) % 7;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isSelectable(day: Date, today: Date) {
  const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const d = new Date(day.getFullYear(), day.getMonth(), day.getDate());
  if (d < t) return false;
  const wd = d.getDay();
  return wd !== 0; // no Sundays
}

export function MeetingScheduler() {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState(() => startOfMonth(today));
  const [selected, setSelected] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  const cells = useMemo(() => {
    const first = startOfMonth(cursor);
    const total = daysInMonth(cursor);
    const pad = mondayIndex(first);
    const list: (Date | null)[] = Array.from({ length: pad }, () => null);
    for (let day = 1; day <= total; day++) {
      list.push(new Date(cursor.getFullYear(), cursor.getMonth(), day));
    }
    while (list.length % 7 !== 0) list.push(null);
    return list;
  }, [cursor]);

  const monthLabel = cursor.toLocaleString("en-US", { month: "long", year: "numeric" });

  const bookHref = useMemo(() => {
    if (!selected || !slot) return `mailto:${CONTACT_EMAIL}`;
    const dateLabel = selected.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const subject = encodeURIComponent(`45 Minute Meeting with ${FOUNDER_FULL_NAME}`);
    const body = encodeURIComponent(
      `Hi ${FOUNDER_FULL_NAME},\n\nI'd like to book a 45 Minute Meeting.\n\nPreferred date: ${dateLabel}\nPreferred time: ${slot}\n\nTopic / notes:\n`,
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }, [selected, slot]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border-2 border-accent/30 bg-white shadow-[0_16px_48px_rgba(28,25,23,0.08),0_0_32px_rgba(194,65,12,0.12)] dark:border-accent/40 dark:bg-stone-950"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-sky-500 to-emerald-500" />
      <div className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-accent/15 blur-2xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Meeting meta */}
        <div className="border-b-2 border-stone-200/80 p-6 sm:p-7 lg:border-b-0 lg:border-r-2 dark:border-white/10">
          <p className="text-base font-semibold text-stone-600 dark:text-stone-300">
            {FOUNDER_FULL_NAME}
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
            45 Minute Meeting
          </h2>
          <ul className="mt-5 space-y-3 text-base text-stone-600 dark:text-stone-300">
            <li className="flex items-center gap-2.5">
              <ClockIcon className="h-5 w-5 shrink-0 text-accent" />
              45 min
            </li>
            <li className="flex items-start gap-2.5">
              <VideoCameraIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-600 dark:text-sky-400" />
              <span>Web conferencing details provided upon confirmation.</span>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
            Pick a date and time. We confirm by email at{" "}
            <span className="font-semibold text-accent">{CONTACT_EMAIL}</span>.
          </p>
        </div>

        {/* Calendar */}
        <div className="p-6 sm:p-7">
          <h3 className="text-center font-display text-xl font-semibold text-stone-900 dark:text-white">
            Select a Date &amp; Time
          </h3>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() =>
                setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent/30 text-accent transition hover:bg-orange-50 dark:hover:bg-orange-950/40"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <p className="font-display text-lg font-semibold text-stone-900 dark:text-white">
              {monthLabel}
            </p>
            <button
              type="button"
              aria-label="Next month"
              onClick={() =>
                setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent/30 text-accent transition hover:bg-orange-50 dark:hover:bg-orange-950/40"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-1.5 text-center">
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className="py-1 text-sm font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400"
              >
                {d}
              </div>
            ))}
            {cells.map((day, i) => {
              if (!day) return <div key={`e-${i}`} />;
              const ok = isSelectable(day, today);
              const active = selected ? isSameDay(day, selected) : false;
              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  disabled={!ok}
                  onClick={() => {
                    setSelected(day);
                    setSlot(null);
                  }}
                  className={cn(
                    "mx-auto flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold transition",
                    !ok && "cursor-default text-stone-300 dark:text-stone-600",
                    ok &&
                      !active &&
                      "bg-orange-50 text-stone-800 hover:bg-accent/15 dark:bg-orange-950/35 dark:text-stone-100",
                    active && "bg-accent text-white shadow-[0_0_18px_rgba(194,65,12,0.45)]",
                  )}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>

          {selected ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5"
            >
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-stone-500">
                Available times
              </p>
              <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSlot(t)}
                    className={cn(
                      "rounded-xl border-2 px-3 py-2.5 text-base font-semibold transition",
                      slot === t
                        ? "border-accent bg-accent text-white"
                        : "border-stone-200 bg-white text-stone-800 hover:border-accent/50 dark:border-white/12 dark:bg-white/[0.04] dark:text-stone-100",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <a
                href={bookHref}
                className={cn(
                  "btn-cta-float mt-5 inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-base font-bold brand-button",
                  (!selected || !slot) && "pointer-events-none opacity-50",
                )}
              >
                Confirm 45 minute meeting
              </a>
            </motion.div>
          ) : (
            <p className="mt-5 text-center text-base text-stone-500 dark:text-stone-400">
              Choose a date to see times.
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
}
