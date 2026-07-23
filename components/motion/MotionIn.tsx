"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function MotionIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  // Gate motion until after hydration — useReducedMotion is null on SSR.
  const skipMotion = !ready || reduceMotion === true;

  return (
    <motion.div
      initial={skipMotion ? false : { opacity: 0, y: 16 }}
      whileInView={skipMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
