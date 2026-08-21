"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, CakeSlice, ChevronRight, PartyPopper } from "lucide-react";
import { siteCopy } from "../data/legacy";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-12 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(184,146,63,0.16),_transparent_40%),linear-gradient(180deg,#f8f6f1_0%,#f4efe3_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:radial-gradient(rgba(23,50,77,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.28em]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(23,50,77,0.12)] bg-white/75 px-4 py-2 text-[var(--navy)]">
              <CakeSlice size={14} />
              Birthday
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(184,146,63,0.18)] bg-[rgba(184,146,63,0.08)] px-4 py-2 text-[var(--gold)]">
              <PartyPopper size={14} />
              Retirement
            </span>
          </div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
            In Honor Of
          </p>
          <h1 className="font-display text-5xl leading-tight tracking-tight text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {siteCopy.retireeName}
          </h1>
          <p className="mt-6 max-w-2xl font-accent text-2xl leading-relaxed text-[var(--forest)] sm:text-3xl">
            {siteCopy.role}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--slate)] sm:text-lg">
            {siteCopy.celebrationLine}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--slate)]">
            <span className="rounded-full border border-[rgba(23,50,77,0.14)] bg-white/70 px-4 py-2 shadow-[0_10px_30px_rgba(23,50,77,0.06)]">
              {siteCopy.years}
            </span>
            <span>{siteCopy.tagline}</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#biography"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Read Her Story
              <ChevronRight size={18} />
            </Link>
            <Link
              href="#letter"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(23,50,77,0.18)] bg-white/70 px-6 py-3 text-sm font-medium text-[var(--navy)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <BookOpen size={18} />
              Read Letter
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-5 rounded-[2rem] border border-[rgba(184,146,63,0.24)]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(23,50,77,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.72))] p-4 shadow-[0_30px_90px_rgba(23,50,77,0.14)] backdrop-blur sm:p-5">
            <div className="relative overflow-hidden rounded-[1.7rem]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/photos/IMG_6591.JPG"
                  alt="Official portrait of Mrs. M.O. Yusuf"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,50,77,0.06),rgba(23,50,77,0.62))]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-[rgba(255,255,255,0.78)]">
                  Official Portrait
                </p>
                <p className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                  {siteCopy.retireeName}
                </p>
                <p className="mt-3 max-w-md text-sm leading-7 text-[rgba(255,255,255,0.88)] sm:text-base">
                  A formal frame for a remarkable life of service, warmth, and leadership.
                </p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.2rem] border border-[rgba(23,50,77,0.08)] bg-white/85 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Service</p>
                <p className="mt-2 text-sm leading-6 text-[var(--slate)]">1991 - 2026</p>
              </div>
              <div className="rounded-[1.2rem] border border-[rgba(23,50,77,0.08)] bg-white/85 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Legacy</p>
                <p className="mt-2 text-sm leading-6 text-[var(--slate)]">35 years of service</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
