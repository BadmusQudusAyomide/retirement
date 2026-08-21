"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { biography } from "../data/legacy";
import { SectionHeading } from "./SectionHeading";

export function Biography() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="biography" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Story"
          title="A life shaped by service, leadership, and love"
          description={biography.intro}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(23,50,77,0.08)]"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(23,50,77,0.08)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/photos/IMG_6588.JPG"
                  alt="Official portrait of Mrs. M.O. Yusuf"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,50,77,0.02),rgba(23,50,77,0.45))]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-[rgba(255,255,255,0.8)]">
                  Service Portrait
                </p>
                <p className="mt-2 font-display text-2xl">Grace in every season</p>
              </div>
            </div>
            <div className="mt-4 rounded-[1.4rem] bg-[var(--ivory)] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Legacy Card</p>
              <p className="mt-2 text-sm leading-7 text-[var(--slate)]">
                A woman of quiet strength, careful leadership, and a legacy carried with dignity.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {biography.highlights.map((item, index) => (
              <motion.article
                key={item.label}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-[1.6rem] border border-[rgba(23,50,77,0.08)] bg-white p-6 shadow-[0_14px_40px_rgba(23,50,77,0.05)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-8 text-[var(--slate)]">{item.text}</p>
              </motion.article>
            ))}

            <blockquote className="rounded-[1.8rem] border-l-4 border-[var(--gold)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,246,241,0.95))] p-7 shadow-[0_14px_40px_rgba(23,50,77,0.06)]">
              <p className="font-accent text-2xl leading-relaxed text-[var(--navy)]">
                &ldquo;{biography.quote}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
