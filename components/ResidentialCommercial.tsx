"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const groups = [
  {
    title: "Residential",
    label: "Homes & Living Spaces",
    video: "/hero3.mp4",
    items: [
      "Living Room",
      "Bedroom",
      "Hall",
      "Kitchen",
      "Pooja Room",
      "Home Office",
    ],
  },
  {
    title: "Commercial",
    label: "Business & Workspaces",
    video: "/hero2.mp4",
    items: [
      "Office",
      "Shop",
      "Showroom",
      "Hotel",
      "Restaurant",
      "Commercial Space",
    ],
  },
];

export default function ResidentialCommercial() {
  return (
    <section className="relative overflow-hidden bg-[#eee8dc] py-11 sm:py-14 lg:py-16">
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-gold/[0.09] blur-[110px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-gold/[0.06] blur-[100px]" />

      <div className="container-px relative mx-auto max-w-content">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[10px]">
                Where We Work
              </p>
            </div>

            <h2 className="mt-3 font-display text-3xl font-medium leading-none tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl">
              Spaces we
              <span className="text-gold"> transform.</span>
            </h2>
          </div>

          <p className="max-w-sm text-[13px] leading-5 text-ink/50 sm:text-right sm:text-sm sm:leading-6">
            From beautiful homes to professional workspaces, we deliver
            complete ceiling and interior solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-7 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[22px] border border-ink/[0.08] bg-[#171613] shadow-[0_12px_40px_rgba(25,24,20,0.10)]"
            >
              {/* VIDEO */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <video
                  src={group.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 lg:group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171613] via-[#171613]/30 to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/[0.08] via-transparent to-transparent" />

                {/* Title */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-[9px]">
                    {group.label}
                  </p>

                  <h3 className="mt-1 font-display text-2xl font-medium tracking-[-0.02em] text-cream sm:text-3xl">
                    {group.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-5 sm:px-6">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[11px] text-cream/65 sm:text-xs"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <Check
                          size={10}
                          strokeWidth={2.5}
                          className="text-gold"
                        />
                      </span>

                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-cream/25">
                    SK POP WORKS
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 lg:group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}