"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const areas = [
  "Bangalore",
  "Whitefield",
  "KR Puram",
  "Yelahanka",
  "Doddaballapura",
  "Budigere",
  "Hoskote",
  "Sulebele",
  "Devanahalli",
  "Vijayapura",
];

export default function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-9 sm:py-11 lg:py-13">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 -top-20 h-72 w-72 rounded-full bg-gold/[0.08] blur-[100px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-64 w-64 rounded-full bg-gold/[0.05] blur-[100px]" />

      {/* Top line */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-px relative mx-auto max-w-content">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 bg-gold" />

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gold sm:text-[9px]">
                Where We Serve
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-3 font-display text-[2rem] font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.8rem]">
              Serving Customers
              <br />
              <span className="bg-gradient-to-r from-[#a67c1e] via-gold to-[#c8a33e] bg-clip-text text-transparent">
                Across Bangalore.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-md text-[12px] leading-[1.65] text-ink/50 sm:text-[13px]">
              We provide on-site false ceiling, partition and interior
              finishing services across Bangalore and surrounding locations.
            </p>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="
                group mt-4 inline-flex items-center gap-2
                rounded-full
                bg-[#171613]
                px-4 py-2.5
                text-[9px] font-bold uppercase
                tracking-[0.14em]
                text-cream
                shadow-[0_8px_25px_rgba(25,24,20,0.10)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-gold
                hover:text-charcoal
                hover:shadow-[0_12px_30px_rgba(25,24,20,0.15)]
                sm:px-5 sm:py-3
                sm:text-[10px]
              "
            >
              Check Service Availability

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.55,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative overflow-hidden
              rounded-[20px]
              border border-ink/[0.07]
              bg-white/70
              p-4
              shadow-[0_10px_32px_rgba(25,24,20,0.05)]
              backdrop-blur-sm
              sm:p-5
            "
          >
            {/* Header */}
            <div className="mb-3 flex items-center justify-between border-b border-ink/[0.08] pb-3">
              <div>
                <p className="mt-0.5 text-[9px] text-ink/40 sm:text-[10px]">
                  Bangalore & surrounding locations
                </p>
              </div>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/[0.08] text-gold sm:h-9 sm:w-9">
                <MapPin size={15} />
              </div>
            </div>

            {/* Areas */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {areas.map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.025,
                  }}
                  className="
                    inline-flex items-center gap-1.5
                    rounded-full
                    border border-gold/[0.18]
                    bg-gold/[0.04]
                    px-2.5 py-1.5
                    text-[10px] font-medium
                    text-ink/70
                    transition-all duration-300
                    hover:border-gold/40
                    hover:bg-gold/[0.09]
                    hover:text-ink
                    sm:px-3 sm:text-[11px]
                  "
                >
                  <MapPin
                    size={9}
                    strokeWidth={2}
                    className="shrink-0 text-gold"
                  />

                  {area}
                </motion.span>
              ))}
            </div>

            {/* Bottom */}
            <div className="mt-4 flex items-center gap-2 border-t border-ink/[0.08] pt-3">
              <CheckCircle2
                size={13}
                className="shrink-0 text-gold"
              />

              <p className="text-[9px] leading-4 text-ink/40 sm:text-[10px]">
                And many more locations across Bangalore.
              </p>
            </div>

            {/* Gold accent */}
            <div className="absolute bottom-0 left-0 h-[2px] w-16 bg-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}