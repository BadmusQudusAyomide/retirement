"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, MailOpen, Sparkles } from "lucide-react";
import { letter } from "../data/legacy";

export function Letter() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section id="letter" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[var(--gold)]">
            A note from her children
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-[var(--navy)] sm:text-5xl">
            A letter of love and gratitude
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--slate)] sm:text-lg">
            A little keepsake, written especially for Mum.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          {!isOpen && (
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              aria-expanded={false}
              aria-controls="family-letter"
              className="group relative block w-full overflow-hidden rounded-[1.75rem] border border-[rgba(129,91,38,0.3)] bg-[#ead9b6] text-left shadow-[0_24px_60px_rgba(81,58,26,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)] sm:rounded-[2.2rem]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_42%),radial-gradient(circle_at_80%_15%,rgba(182,143,67,0.25),transparent_25%)]" />
              <div className="relative flex min-h-72 items-center justify-center px-6 py-12 sm:min-h-80">
                <div className="relative z-10 flex max-w-sm flex-col items-center text-center">
                  <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(255,255,255,0.65)] bg-[var(--gold)] text-white shadow-[0_8px_20px_rgba(129,91,38,0.24)]">
                    <Heart size={24} fill="currentColor" />
                  </span>
                  <p className="font-script text-5xl leading-none text-[var(--navy)] sm:text-6xl">For Mum</p>
                  <p className="mt-3 text-sm leading-6 text-[rgba(32,50,71,0.76)]">
                    With all our love, admiration and gratitude
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-[rgba(32,50,71,0.18)] bg-white/55 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navy)] transition-colors group-hover:bg-white/75">
                    <MailOpen size={16} /> Open the letter
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(145deg,transparent_49%,rgba(160,120,60,0.18)_50%,transparent_51%),linear-gradient(215deg,transparent_49%,rgba(160,120,60,0.18)_50%,transparent_51%)]" />
                <div className="absolute inset-x-0 top-0 h-[54%] origin-top bg-[linear-gradient(155deg,#f4e6c9_0%,#d7bb86_100%)] shadow-[0_5px_12px_rgba(81,58,26,0.12)]" />
              </div>
            </motion.button>
          )}

          {isOpen && (
            <motion.div
              id="family-letter"
              initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
              className="relative pt-8 sm:pt-12"
            >
              <div className="absolute inset-x-5 top-0 h-32 rounded-t-[2rem] border border-b-0 border-[rgba(129,91,38,0.25)] bg-[#dfc99b] shadow-[0_-5px_22px_rgba(81,58,26,0.1)]" />
              <article className="relative overflow-hidden rounded-[1.8rem] border border-[rgba(184,146,63,0.28)] bg-[linear-gradient(135deg,rgba(255,254,249,0.98),rgba(248,239,219,0.98))] p-7 shadow-[0_24px_70px_rgba(23,50,77,0.13)] sm:rounded-[2.2rem] sm:p-11 lg:p-14">
                <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(182,143,67,0.18)_0.7px,transparent_0.7px)] [background-size:14px_14px]" />
                <div className="relative mx-auto max-w-3xl">
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.45 }}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                      <Sparkles size={15} /> For our beloved Mum
                    </span>
                    <Heart size={18} className="text-[var(--gold)]" fill="currentColor" />
                  </motion.div>
                  <motion.h3
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.3, duration: 0.45 }}
                    className="mt-7 font-script text-5xl leading-none tracking-tight text-[var(--navy)] sm:text-6xl"
                  >
                    {letter.salutation}
                  </motion.h3>
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.55 }}
                    className="mt-8 space-y-6 text-base leading-9 text-[var(--slate)] sm:text-lg"
                  >
                    {letter.paragraphs.map((paragraph, index) => (
                      <p key={paragraph} className={index === 0 ? "font-accent text-xl leading-9 text-[var(--forest)] sm:text-2xl" : undefined}>
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.7, duration: 0.5 }}
                    className="mt-9 border-y border-[rgba(184,146,63,0.32)] py-6"
                  >
                    <div className="space-y-2 border-l-4 border-[var(--gold)] bg-[rgba(184,146,63,0.07)] px-5 py-4">
                      {letter.closingLines.map((line) => (
                        <p key={line} className="font-accent text-lg text-[var(--navy)] sm:text-xl">
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.85, duration: 0.5 }}
                  >
                    <p className="mt-8 text-base leading-8 text-[var(--slate)] sm:text-lg">{letter.signOff}</p>
                    <p className="mt-8 font-script text-4xl leading-tight text-[var(--navy)] sm:text-5xl">{letter.congratulations}</p>
                    <p className="mt-5 font-script text-3xl leading-none text-[var(--gold)] sm:text-4xl">
                      {letter.signature}
                    </p>
                  </motion.div>
                </div>
              </article>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
