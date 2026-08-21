"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type GalleryProps = {
  images: string[];
  featured: [string, string];
  stream: string[];
  ratios: string[];
};

export function Gallery({ images, featured, stream, ratios }: GalleryProps) {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      const viewportWidth = viewportRef.current?.offsetWidth ?? 0;
      const railWidth = railRef.current?.scrollWidth ?? 0;
      const maxLeft = Math.min(0, viewportWidth - railWidth);
      setConstraints({ left: maxLeft - 32, right: 0 });
    };

    updateConstraints();

    const resizeObserver = new ResizeObserver(updateConstraints);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    if (railRef.current) resizeObserver.observe(railRef.current);

    window.addEventListener("resize", updateConstraints);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateConstraints);
    };
  }, [images]);

  return (
    <>
      <div className="mt-12 -mx-6 sm:hidden">
        <div ref={viewportRef} className="overflow-hidden px-4">
          <motion.div
            ref={railRef}
            drag={reduceMotion ? false : "x"}
            dragConstraints={constraints}
            dragElastic={0.12}
            dragMomentum={!reduceMotion}
            className="flex w-max gap-0 pb-6 pl-2 pr-[28vw] [touch-action:pan-y]"
          >
            {images.map((src, index) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className={`group relative shrink-0 overflow-hidden rounded-[1.75rem] border border-[rgba(23,50,77,0.08)] bg-white shadow-[0_18px_44px_rgba(23,50,77,0.08)] ${
                  index === 0
                    ? "w-[84vw] aspect-[4/5]"
                    : "w-[78vw] -ml-[14vw] aspect-[3/4]"
                }`}
                style={{ zIndex: images.length - index }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="84vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(23,50,77,0.03),rgba(23,50,77,0.18))] opacity-70" />
              </motion.figure>
            ))}
          </motion.div>
        </div>
        <p className="mt-2 text-center text-xs uppercase tracking-[0.28em] text-[var(--slate)]">
          Swipe through the full album
        </p>
      </div>

      <div className="mt-12 hidden sm:block">
        <div className="grid grid-cols-12 gap-5">
          <motion.figure
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="group col-span-12 overflow-hidden rounded-[2rem] border border-[rgba(23,50,77,0.08)] bg-white shadow-[0_18px_44px_rgba(23,50,77,0.08)] lg:col-span-7"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={featured[0]}
                alt="Official portrait image"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="group col-span-12 overflow-hidden rounded-[2rem] border border-[rgba(23,50,77,0.08)] bg-white shadow-[0_18px_44px_rgba(23,50,77,0.08)] lg:col-span-5"
          >
            <div className="relative aspect-[4/5] lg:aspect-[4/5]">
              <Image
                src={featured[1]}
                alt="Corporate profile image"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </motion.figure>
        </div>

        <div className="mt-5 columns-1 gap-5 sm:columns-2 xl:columns-3">
          {stream.map((src, index) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.03 }}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-[rgba(23,50,77,0.08)] bg-white shadow-[0_14px_38px_rgba(23,50,77,0.06)]"
            >
              <div
                className={`relative overflow-hidden bg-[linear-gradient(180deg,#ede5d6,#f8f6f1)] ${
                  ratios[index % ratios.length]
                }`}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </>
  );
}
