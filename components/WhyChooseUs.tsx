"use client";

import { motion } from "framer-motion";
import {
  Gem,
  PackageCheck,
  HardHat,
  Sparkles,
  Brush,
  MapPin,
} from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Quality Materials",
    description:
      "Good quality materials are used as per the requirement of the work.",
  },
  {
    icon: PackageCheck,
    title: "Complete Solution",
    description:
      "We take care of the material, labour and installation from start to finish.",
  },
  {
    icon: HardHat,
    title: "Skilled Workmanship",
    description:
      "The work is done by experienced workers with proper attention to the finishing.",
  },
  {
    icon: Sparkles,
    title: "Modern Designs",
    description:
      "We provide simple and modern designs according to the space and customer's choice.",
  },
  {
    icon: Brush,
    title: "Neat Finishing",
    description:
      "We focus on clean work and proper finishing so the ceiling looks neat after completion.",
  },
  {
    icon: MapPin,
    title: "On-Site Service",
    description:
      "We visit the site, understand the requirement and provide the complete work accordingly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#eee8dc] py-9 sm:py-11 lg:py-12">
      {/* Premium background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#d4af37]/[0.10] blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#c9a96e]/[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-white/[0.55] blur-[100px]" />

      {/* Elegant circles */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-gold/[0.12]" />

      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-gold/[0.08]" />

      <div className="pointer-events-none absolute -bottom-28 -left-20 h-52 w-52 rounded-full border border-ink/[0.04]" />

      {/* Center highlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.35] blur-[90px]" />

      {/* Top border */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-px relative mx-auto max-w-content">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-px w-7 bg-gold" />

            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gold sm:text-[9px]">
              Why Choose Us
            </p>
          </div>

          <h2 className="mt-3 font-display text-[2.1rem] font-medium leading-[0.95] tracking-[-0.045em] text-ink sm:text-3xl lg:text-[3.1rem]">
            Good Work.
            <br />
            <span className="bg-gradient-to-r from-[#a67c1e] via-gold to-[#c8a33e] bg-clip-text text-transparent">
              Clean Finish.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-[12px] leading-5 text-ink/55 sm:text-[13px] sm:leading-6">
            From material selection to the final finish, we focus on delivering
            reliable workmanship, clean execution and a result that elevates
            your space.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-6 grid gap-2.5 sm:mt-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <div
                  className="
                    relative flex h-full min-h-[165px]
                    flex-col overflow-hidden
                    rounded-[17px]
                    border border-ink/[0.07]
                    bg-white/75
                    p-4
                    shadow-[0_7px_25px_rgba(25,24,20,0.05)]
                    backdrop-blur-sm
                    transition-all duration-300
                    sm:p-[18px]
                    lg:hover:-translate-y-1
                    lg:hover:border-gold/25
                    lg:hover:bg-white/90
                    lg:hover:shadow-[0_16px_35px_rgba(25,24,20,0.09)]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-[10px]
                      border border-gold/20
                      bg-gold/[0.07]
                      text-gold
                      transition-all duration-300
                      lg:group-hover:scale-105
                      lg:group-hover:border-gold/40
                      lg:group-hover:bg-gold/[0.12]
                    "
                  >
                    <Icon size={17} strokeWidth={1.7} />
                  </div>

                  {/* Content */}
                  <div className="mt-3">
                    <h3 className="font-display text-[17px] font-medium tracking-[-0.02em] text-ink">
                      {reason.title}
                    </h3>

                    <p className="mt-1 text-[11.5px] leading-[1.55] text-ink/50 sm:text-[12px]">
                      {reason.description}
                    </p>
                  </div>

                  {/* Gold accent */}
                  <div className="mt-auto pt-3">
                    <div className="h-px w-7 bg-gold/30 transition-all duration-400 lg:group-hover:w-12 lg:group-hover:bg-gold/60" />
                  </div>

                  {/* Hover glow */}
                  <div
                    className="
                      pointer-events-none absolute
                      -bottom-12 -right-12
                      h-24 w-24 rounded-full
                      bg-gold/10 blur-[30px]
                      opacity-0
                      transition-opacity duration-500
                      lg:group-hover:opacity-100
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-7 bg-gold/25" />

          <span className="h-1 w-1 rounded-full bg-gold" />

          <p className="text-[7px] font-semibold uppercase tracking-[0.25em] text-ink/25 sm:text-[8px]">
            Built with Quality • Finished with Care
          </p>

          <span className="h-px w-7 bg-gold/25" />
        </div>
      </div>
    </section>
  );
}