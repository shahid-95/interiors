"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Hi SK POP WORKS, I would like to book a free site visit for my project."
);

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-14 sm:py-16 lg:py-[72px]">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/[0.10] blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-gold/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[80px]" />

      {/* Decorative Rings */}
      <div className="pointer-events-none absolute -right-16 top-10 h-48 w-48 rounded-full border border-gold/[0.07]" />

      <div className="pointer-events-none absolute -right-2 top-24 h-28 w-28 rounded-full border border-gold/[0.05]" />

      <div className="pointer-events-none absolute -left-20 bottom-8 h-40 w-40 rounded-full border border-white/[0.025]" />

      {/* Top Gold Line */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container-px relative mx-auto max-w-content">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-2.5"
          >
            <span className="h-px w-8 bg-gold/60" />

            <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[10px]">
              <Sparkles size={11} strokeWidth={1.8} />
              Free Site Visit
            </span>

            <span className="h-px w-8 bg-gold/60" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              font-display
              text-[2.35rem]
              font-medium
              leading-[0.95]
              tracking-[-0.055em]
              text-cream
              sm:text-5xl
              lg:text-[58px]
            "
          >
            Ready to transform
            <br />
            <span className="bg-gradient-to-r from-[#c9a227] via-[#e2c45a] to-[#b88b20] bg-clip-text text-transparent">
              your space?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[12px]
              leading-[1.75]
              text-cream/50
              sm:text-[13px]
              lg:text-sm
            "
          >
            Book a free site visit for your false ceiling, partition or
            interior project. We will visit your location and discuss your
            requirements.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.16,
            }}
            className="
              mt-7
              flex
              flex-col
              items-stretch
              justify-center
              gap-2.5
              sm:flex-row
              sm:items-center
            "
          >
            {/* Book Site Visit */}
           {/* Get Free Quote */}
<a
  href="/contact"
  className="
    group
    inline-flex
    min-h-[45px]
    items-center
    justify-center
    gap-2
    rounded-full
    bg-gradient-to-r
    from-[#c9a227]
    via-[#d4af37]
    to-[#b88b20]
    px-6
    py-3
    text-[10px]
    font-bold
    uppercase
    tracking-[0.14em]
    text-navy
    shadow-[0_10px_30px_rgba(212,175,55,0.16)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_14px_35px_rgba(212,175,55,0.25)]
    sm:min-w-[190px]
  "
>
  Get Free Quote

  <ArrowRight
    size={14}
    strokeWidth={2}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>

            {/* Call */}
            <a
              href="tel:+918052050846"
              className="
                group
                inline-flex
                min-h-[45px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.04]
                px-6
                py-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-cream/85
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gold/45
                hover:bg-gold/[0.06]
                hover:text-gold
                sm:min-w-[135px]
              "
            >
              <Phone
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918052050846"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                min-h-[45px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.04]
                px-6
                py-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-cream/85
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gold/45
                hover:bg-gold/[0.06]
                hover:text-gold
                sm:min-w-[145px]
              "
            >
              <MessageCircle
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              WhatsApp
            </a>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-white/10 sm:w-12" />

            <span className="text-[7px] font-medium uppercase tracking-[0.24em] text-cream/25 sm:text-[8px]">
              Material • Labour • Installation
            </span>

            <span className="h-px w-8 bg-white/10 sm:w-12" />
          </motion.div>

          {/* Bottom Accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mx-auto mt-6 h-px w-16 origin-center bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}