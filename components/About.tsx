"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

const stats = [
  "Complete Solution",
  "Material + Labour",
  "Residential & Commercial",
  "Across Bangalore",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f6f1e8] py-16 sm:py-20 lg:py-24"
    >
      {/* ================================================= */}
      {/* LUXURY BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute -left-52 -top-40 h-[600px] w-[600px] rounded-full bg-gold/[0.10] blur-[150px]" />

      <div className="pointer-events-none absolute -right-60 top-[35%] h-[650px] w-[650px] rounded-full bg-[#d8c7a0]/15 blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/70 blur-[150px]" />

      {/* Elegant circles */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-gold/10" />

      <div className="pointer-events-none absolute -right-12 -top-12 h-[200px] w-[200px] rounded-full border border-gold/10" />

      {/* Top shine */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Bottom shine */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="container-px relative mx-auto max-w-content">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20 xl:gap-24">

          {/* ================================================= */}
          {/* VISUAL */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px] pb-16 sm:pb-20"
          >
            {/* Luxury outer frame */}
            <div className="absolute -left-3 -top-3 h-[calc(100%-4rem)] w-[calc(100%-1rem)] rounded-[32px] border border-gold/25 sm:-left-5 sm:-top-5 sm:h-[calc(100%-5rem)]" />

            {/* Soft image glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-[50px] bg-gold/[0.055] blur-3xl" />

            {/* Main Image */}
            <div className="group relative ml-3 aspect-[5/5.8] overflow-hidden rounded-[30px] bg-charcoal shadow-[0_30px_80px_rgba(30,29,26,0.20)] sm:ml-6">
              <Image
                src="/images/about-collage-1.png"
                alt="Living room false ceiling by SK POP WORKS"
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 560px"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
              />

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              {/* Warm luxury overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.08] via-transparent to-transparent" />

              {/* Image bottom content */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/60">
                    SK POP WORKS
                  </p>

                  <p className="mt-1 font-display text-lg text-white sm:text-xl">
                    Designed to elevate.
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* FLOATING IMAGES */}
            {/* ================================================= */}

            <div className="absolute bottom-0 left-0 flex w-[68%] gap-3 sm:gap-4">
              {/* Image 2 */}
              <div className="group relative aspect-square flex-1 overflow-hidden rounded-[18px] border-[5px] border-[#f6f1e8] bg-charcoal shadow-[0_20px_45px_rgba(30,29,26,0.18)]">
                <Image
                  src="/images/about-collage-2.png"
                  alt="Gypsum and PVC ceiling work by SK POP WORKS"
                  fill
                  sizes="(max-width: 640px) 30vw, 180px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Image 3 */}
              <div className="group relative aspect-square flex-1 overflow-hidden rounded-[18px] border-[5px] border-[#f6f1e8] bg-charcoal shadow-[0_20px_45px_rgba(30,29,26,0.18)]">
                <Image
                  src="/images/about-collage-3.png"
                  alt="False ceiling work by SK POP WORKS"
                  fill
                  sizes="(max-width: 640px) 30vw, 180px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* ================================================= */}
            {/* MATERIAL + LABOUR BADGE */}
            {/* ================================================= */}

            <motion.div
              initial={{ scale: 0, rotate: -18 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -right-2 top-8 flex h-24 w-24 items-center justify-center rounded-full bg-gold shadow-[0_20px_50px_rgba(30,29,26,0.18)] sm:-right-5 sm:h-28 sm:w-28"
            >
              <div className="text-center font-display text-sm leading-tight text-charcoal">
                Material
                <br />
                <span className="text-xs">+</span>
                <br />
                Labour
              </div>
            </motion.div>

            {/* Vertical gold line */}
            <div className="absolute -left-1 top-24 h-20 w-px bg-gradient-to-b from-transparent via-gold to-transparent sm:top-28 sm:h-28" />
          </motion.div>

          {/* ================================================= */}
          {/* CONTENT */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-gold" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[10px]">
                About SK POP WORKS
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-4 max-w-2xl font-display text-[2.5rem] font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[4rem]">
              Spaces deserve
              <br />

              <span className="relative inline-block text-gold">
                better ceilings.

                <span className="absolute -bottom-2 left-0 h-px w-2/3 bg-gold/40" />
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-ink/60 sm:text-base sm:leading-7">
              SK POP WORKS delivers complete false ceiling, partition and
              interior finishing solutions for homes, offices and commercial
              spaces across Bangalore.
            </p>

            {/* Feature */}
            <div className="mt-7 flex max-w-xl items-start gap-4 border-l-2 border-gold pl-5">
              <Sparkles
                size={18}
                strokeWidth={1.7}
                className="mt-1 shrink-0 text-gold"
              />

              <div>
                <p className="text-sm font-semibold text-ink">
                  From material to final finish.
                </p>

                <p className="mt-1 text-sm leading-6 text-ink/50">
                  Measurement, design discussion, material, skilled labour,
                  installation and finishing — handled as one complete
                  solution.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 shadow-[0_20px_50px_rgba(30,29,26,0.06)]">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.4,
                  }}
                  className="group relative bg-[#f9f5ed] p-4 transition-all duration-300 hover:bg-white sm:p-5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                      <Check
                        size={13}
                        strokeWidth={2.5}
                      />
                    </div>

                    <p className="text-[11px] font-semibold text-ink sm:text-sm">
                      {stat}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>

            {/* Bottom line */}
            <div className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-ink/30 sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Quality • Precision • Finish
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}