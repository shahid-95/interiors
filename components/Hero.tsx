"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  ChevronDown,
  Check,
} from "lucide-react";

const trustIndicators = [
  "Quality Materials",
  "Skilled Workmanship",
  "Clean Finishing",
];

const services = [
  "POP",
  "GYPSUM",
  "PVC",
  "GRID",
  "PARTITION",
  "FLUTED PANEL",
  "VOX PANEL",
  "ALL TYPE OF FALSE CEILING WORKS",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#24231f] sm:min-h-[82vh] lg:min-h-[88vh]">

      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ================= VIDEO OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/25" />

      {/* ================= LEFT DARK GRADIENT ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#11100e]/90 via-[#151411]/55 to-transparent" />

      {/* ================= MOBILE DARK GRADIENT ================= */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#11100e]/75 via-transparent to-black/10 lg:hidden" />

      {/* ================= GOLD GLOW ================= */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[110px]" />

      {/* ================= CONTENT ================= */}
      <div className="container-px relative z-10 mx-auto w-full max-w-content py-14 sm:py-18 lg:py-22">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >

          {/* ================= BADGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-3.5 py-1.5 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-gold/60 sm:px-4 sm:py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(200,160,80,0.9)]" />
            </span>

            <span className="text-[9px] font-bold tracking-[0.16em] text-goldlight sm:text-[11px]">
              PREMIUM FALSE CEILING WORK
            </span>
          </motion.div>

          {/* ================= HEADING ================= */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-5 max-w-3xl font-display text-[2.45rem] font-medium leading-[0.98] tracking-[-0.035em] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] sm:mt-6 sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Elevate Your Space With{" "}
            <span className="relative inline-block italic text-goldlight">
              Premium
              <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-gold/80 to-transparent opacity-70" />
            </span>{" "}
            Ceiling Designs
          </motion.h1>

          {/* ================= DESCRIPTION ================= */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="mt-5 max-w-xl text-[14px] leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-7 lg:text-[17px] lg:leading-7"
          >
            From design to installation, we deliver complete false ceiling
            solutions with{" "}
            <span className="font-medium text-white">
              quality materials
            </span>
            , skilled workmanship and a flawless finish — for homes, offices
            and commercial spaces across Bangalore.
          </motion.p>

          {/* ================= SERVICES ================= */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-5 flex max-w-2xl flex-wrap gap-x-4 gap-y-2 sm:mt-6 sm:gap-x-5 sm:gap-y-2.5"
          >
            {services.map((service, index) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.04,
                }}
                className="relative text-[9px] font-semibold tracking-[0.13em] text-white/65 transition-colors duration-300 hover:text-goldlight sm:text-[11px]"
              >
                {service}
              </motion.span>
            ))}
          </motion.div>

          {/* ================= BUTTONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38 }}
            className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3"
          >

           {/* GET FREE QUOTE */}
<Link
  href="/contact"
  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal shadow-xl shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold/25 sm:px-6 sm:py-3"
>
  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

  <span className="relative">
    Get Free Quote
  </span>

  <ArrowRight
    size={15}
    className="relative transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

          </motion.div>

          {/* ================= TRUST INDICATORS ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 sm:mt-8 sm:gap-x-7"
          >
            {trustIndicators.map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 text-[11px] text-white/70 sm:gap-2 sm:text-xs"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gold/40 bg-gold/10 shadow-[0_0_10px_rgba(200,160,80,0.08)] sm:h-5 sm:w-5">
                  <Check
                    size={9}
                    strokeWidth={2.5}
                    className="text-gold sm:h-[11px] sm:w-[11px]"
                  />
                </span>

                {item}
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ================= BOTTOM LINE ================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* ================= SCROLL ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/40 sm:flex"
      >
        <span className="text-[8px] font-medium tracking-[0.3em]">
          SCROLL
        </span>

        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={15} />
        </motion.span>
      </motion.div>

    </section>
  );
}