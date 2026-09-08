"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

const serviceImages: Record<string, string> = {
  "pop-false-ceiling": "/images/services/pop.jpg",
  "gypsum-false-ceiling": "/images/services/gypsum.jpg",
  "pvc-false-ceiling": "/images/services/pvc.jpg",
  "grid-false-ceiling": "/images/services/grid.jpg",
  "fluted-false-ceiling": "/images/services/fluted.jpg",
  "vox-ceiling-outside-passage": "/images/services/vox.jpg",
  "gypsum-partition": "/images/services/gypsum-partition.jpg",
  "fluted-wall-panel": "/images/services/flutedWall.jpg",
  "pop-moulding-cornice": "/images/services/cornis.jpg",
  "pop-flower-design": "/images/services/flower.jpg",
};

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const image =
    serviceImages[service.slug] || "/images/services/pop.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group h-full"
    >
      <div
        className="
          relative flex h-full flex-col overflow-hidden
          rounded-[24px]
          border border-ink/[0.08]
          bg-white
          shadow-[0_10px_35px_rgba(25,24,20,0.06)]
          transition-all duration-500
          sm:rounded-[26px]
          lg:hover:-translate-y-2
          lg:hover:border-gold/30
          lg:hover:shadow-[0_25px_65px_rgba(25,24,20,0.13)]
        "
      >
        {/* ========================================= */}
        {/* IMAGE */}
        {/* ========================================= */}

        <div className="relative aspect-[4/3] min-h-[230px] overflow-hidden bg-[#e9e4da] sm:min-h-0">
          <img
            src={image}
            alt={service.name}
            loading={index < 3 ? "eager" : "lazy"}
            className="
              absolute inset-0 h-full w-full object-cover
              transition-transform duration-1000 ease-out
              lg:group-hover:scale-110
            "
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

          {/* Warm gold glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-70" />

          {/* ========================================= */}
          {/* NUMBER */}
          {/* ========================================= */}

          <div
            className="
              absolute left-4 top-4
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-white/20
              bg-black/25
              text-[10px] font-semibold tracking-wider text-white/90
              backdrop-blur-md
              transition-all duration-300
              lg:group-hover:border-gold/50
              lg:group-hover:bg-gold
              lg:group-hover:text-charcoal
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* ========================================= */}
          {/* ARROW */}
          {/* ========================================= */}

          <Link
            href={`/services#${service.slug}`}
            aria-label={`Explore ${service.name}`}
            className="
              absolute right-4 top-4
              flex h-10 w-10 items-center justify-center
              rounded-full
              bg-white text-charcoal
              shadow-[0_8px_25px_rgba(0,0,0,0.18)]
              transition-all duration-300
              lg:translate-y-3 lg:opacity-0
              lg:group-hover:translate-y-0
              lg:group-hover:opacity-100
              hover:bg-gold
              hover:scale-105
            "
          >
            <ArrowUpRight size={17} strokeWidth={1.8} />
          </Link>

          {/* ========================================= */}
          {/* IMAGE TITLE */}
          {/* ========================================= */}

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <p
              className="
                text-[8px] font-semibold uppercase
                tracking-[0.32em] text-gold/90
                sm:text-[9px]
              "
            >
              SK POP WORKS
            </p>

            <h3
              className="
                mt-1.5 max-w-[90%]
                font-display
                text-[1.35rem]
                font-medium
                leading-[1.05]
                tracking-[-0.025em]
                text-white
                sm:text-[1.55rem]
                lg:text-[1.65rem]
              "
            >
              {service.name}
            </h3>

            {/* Small gold underline */}
            <div className="mt-3 h-px w-8 bg-gold transition-all duration-500 lg:group-hover:w-16" />
          </div>
        </div>

        {/* ========================================= */}
        {/* CONTENT */}
        {/* ========================================= */}

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p
            className="
              text-[13px]
              leading-[1.7]
              text-ink/55
              sm:text-sm
              sm:leading-6
            "
          >
            {service.shortDescription}
          </p>

          {/* Explore */}
          <Link
            href={`/services#${service.slug}`}
            className="
              mt-auto
              inline-flex w-fit
              items-center gap-2
              pt-6
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-gold
              transition-all duration-300
              hover:text-ink
            "
          >
            <span className="relative">
              Explore Service
              <span
                className="
                  absolute -bottom-1 left-0 h-px w-full
                  origin-left scale-x-50
                  bg-gold/40
                  transition-transform duration-300
                  hover:scale-x-100
                "
              />
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/25 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal">
              <ArrowUpRight size={13} />
            </span>
          </Link>
        </div>

        {/* ========================================= */}
        {/* GOLD BOTTOM LINE */}
        {/* ========================================= */}

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold via-[#d7b54a] to-transparent transition-all duration-700 lg:group-hover:w-full" />
      </div>
    </motion.div>
  );
}