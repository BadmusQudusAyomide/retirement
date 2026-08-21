"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { timeline } from "../data/legacy";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="timeline" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Career Journey"
          title="A path marked by steady growth"
          description="Click each year to reveal the story behind the milestone."
        />

        <div className="mt-12 grid gap-4">
          {timeline.map((item, index) => {
            const expanded = index === activeIndex;

            return (
              <motion.button
                key={item.year}
                type="button"
                onClick={() => setActiveIndex(index)}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className={`w-full rounded-[1.6rem] border p-5 text-left shadow-[0_12px_34px_rgba(23,50,77,0.05)] transition-all duration-300 ${
                  expanded
                    ? "border-[rgba(184,146,63,0.34)] bg-white"
                    : "border-[rgba(23,50,77,0.08)] bg-[rgba(255,255,255,0.72)]"
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <div className="w-fit shrink-0 rounded-full bg-[var(--navy)] px-4 py-2 text-center text-sm font-semibold text-white">
                    {item.year}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="min-w-0 font-display text-xl leading-tight text-[var(--navy)] sm:text-2xl">
                        {item.title}
                      </h3>
                      <ChevronDown
                        className={`shrink-0 text-[var(--gold)] transition-transform duration-300 ${
                          expanded ? "rotate-180" : ""
                        }`}
                        size={20}
                      />
                    </div>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        expanded ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <p className="min-h-0 overflow-hidden text-base leading-8 text-[var(--slate)]">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
