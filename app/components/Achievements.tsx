"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements, numbers } from "../data/legacy";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="achievements" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Recognition"
          title="The numbers and honors tell part of the story"
          description="A few highlights from a career built on consistency and care."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {numbers.map((item, index) => (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="rounded-[1.8rem] bg-white p-7 text-center shadow-[0_16px_40px_rgba(23,50,77,0.06)]"
            >
              <p className="font-display text-5xl text-[var(--navy)]">{item.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[var(--slate)]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-[1.8rem] border border-[rgba(23,50,77,0.08)] bg-[linear-gradient(180deg,#ffffff,#fbf8f0)] p-7 shadow-[0_16px_40px_rgba(23,50,77,0.06)]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[rgba(184,146,63,0.12)] text-[var(--gold)]">
                  <Award size={28} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Medal</p>
                  <h3 className="mt-1 text-xl text-[var(--navy)]">{item}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

