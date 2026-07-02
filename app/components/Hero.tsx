"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, GalleryVerticalEnd } from "lucide-react";
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
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
            In Honor Of
          </p>
          <h1 className="font-display text-5xl leading-tight tracking-tight text-[var(--navy)] sm:text-6xl lg:text-7xl">
            {siteCopy.retireeName}
          </h1>
          <p className="mt-6 max-w-2xl font-accent text-2xl leading-relaxed text-[var(--forest)] sm:text-3xl">
            {siteCopy.role}
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
              Read His Story
              <ChevronRight size={18} />
            </Link>
            <Link
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(23,50,77,0.18)] bg-white/70 px-6 py-3 text-sm font-medium text-[var(--navy)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <GalleryVerticalEnd size={18} />
              View Gallery
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
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(23,50,77,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.62))] p-8 shadow-[0_30px_90px_rgba(23,50,77,0.14)] backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,146,63,0.18),_transparent_48%)]" />
            <div className="relative rounded-[1.5rem] border border-[rgba(23,50,77,0.1)] bg-[linear-gradient(180deg,#fffdf8,#f6f0e3)] px-6 py-14 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
                Retirement Plaque
              </p>
              <p className="mt-8 font-display text-4xl text-[var(--navy)] sm:text-5xl">
                Celebrating 37 Years
              </p>
              <p className="mt-4 text-lg leading-8 text-[var(--slate)]">
                A life of leadership, service, and quiet excellence.
              </p>
              <div className="mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
