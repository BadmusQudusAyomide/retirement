"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getNextBirthdayTarget(now: Date) {
  const target = new Date(now.getFullYear(), 8, 12, 0, 0, 0, 0);
  if (now > target) {
    return new Date(now.getFullYear() + 1, 8, 12, 0, 0, 0, 0);
  }
  return target;
}

function computeCountdown(): CountdownParts {
  const now = new Date();
  const target = getNextBirthdayTarget(now);
  const diff = Math.max(0, target.getTime() - now.getTime());

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const reduceMotion = useReducedMotion();
  const [parts, setParts] = useState<CountdownParts | null>(null);

  useEffect(() => {
    const update = () => setParts(computeCountdown());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
      className="mt-4 rounded-[1.2rem] border border-[rgba(23,50,77,0.08)] bg-white/88 p-4 shadow-[0_12px_30px_rgba(23,50,77,0.06)]"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            Countdown
          </p>
          <p className="mt-2 font-display text-xl text-[var(--navy)]">
            Until September 12
          </p>
        </div>
        <div className="rounded-full border border-[rgba(184,146,63,0.18)] bg-[rgba(184,146,63,0.08)] px-3 py-1 text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
          Live
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {[
          { label: "Days", value: parts?.days ?? "--" },
          { label: "Hours", value: parts?.hours ?? "--" },
          { label: "Mins", value: parts?.minutes ?? "--" },
          { label: "Secs", value: parts?.seconds ?? "--" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[1rem] border border-[rgba(23,50,77,0.08)] bg-[rgba(248,246,241,0.7)] px-2 py-3 text-center"
          >
            <p className="font-display text-2xl leading-none text-[var(--navy)]">
              {item.value}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[var(--slate)]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
