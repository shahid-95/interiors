"use client";

import { motion } from "framer-motion";
import {
  Star,
  ExternalLink,
  MessageCircle,
  Quote,
} from "lucide-react";

const googleMapsUrl =
  "https://www.google.com/maps/place/S+K+-+POP,+Gypsum,PVC+Works+%26+All+Types+of+False+Ceiling+works/@13.0744548,77.2923104,10z/data=!3m1!4b1!4m6!3m5!1s0x28810ee7cd40b409:0xebfb5cdf93143582!8m2!3d13.0746638!4d77.6219718!16s%2Fg%2F11zxf04cpk?entry=ttu";

const googleReviewUrl =
  "https://g.page/r/CYI1FJPfXPvrEBM/review";

const reviews = [
  {
    name: "Ankit Singh",
    service: "Gypsum False Ceiling",
    text: "I recently got Gypsum false ceiling work done for my home and I’m very happy with the overall experience. The team provided good quality material, professional installation and neat finishing. They understood my requirements and completed the work on time. Overall, a great experience with SK POP WORKS.",
  },
  {
    name: "Kaira Mandal",
    service: "PVC Ceiling",
    text: "Got PVC ceiling work done recently and really liked the final result. The team suggested a simple design that suited the space and completed the work neatly. They handled the required material and installation, making the whole process easy. Overall, I’m happy with the result and would recommend SK POP WORKS.",
  },
  {
    name: "Rezwan Ahmed",
    service: "Grid False Ceiling",
    text: "We got a grid false ceiling done for our office and are quite satisfied with the outcome. The team worked neatly and completed the installation without any hassle. The ceiling looks clean and professional, and they handled the material and complete installation. Overall, a smooth experience with SK POP WORKS.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
          strokeWidth={1.5}
          className="fill-[#d4af37] text-[#d4af37]"
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-9 sm:py-11 lg:py-13">
      {/* Soft luxury glow */}
      <div className="pointer-events-none absolute -right-40 -top-32 h-72 w-72 rounded-full bg-gold/[0.08] blur-[100px]" />

      <div className="pointer-events-none absolute -left-40 bottom-[-150px] h-72 w-72 rounded-full bg-[#d8c6a0]/[0.12] blur-[100px]" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-20 top-8 h-44 w-44 rounded-full border border-gold/[0.07]" />

      <div className="pointer-events-none absolute -right-3 top-24 h-28 w-28 rounded-full border border-gold/[0.05]" />

      {/* Top line */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

      <div className="container-px relative mx-auto max-w-content">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-2.5">
            <span className="h-px w-7 bg-gold" />

            <p className="text-[8px] font-bold uppercase tracking-[0.32em] text-[#a67c1e] sm:text-[9px]">
              Customer Reviews
            </p>

            <span className="h-1 w-1 rounded-full bg-gold" />
          </div>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-[2.15rem] font-medium leading-[0.91] tracking-[-0.055em] text-ink sm:text-4xl lg:text-[3.2rem]">
                What our customers
                <br />
                <span className="bg-gradient-to-r from-[#98701a] via-[#d4af37] to-[#b88b20] bg-clip-text text-transparent">
                  say about us.
                </span>
              </h2>
            </div>

            {/* RATING */}
            <div
              className="
                flex w-full items-center gap-3
                rounded-[15px]
                border border-gold/15
                bg-white/70
                px-4 py-3
                shadow-[0_7px_22px_rgba(25,24,20,0.04)]
                backdrop-blur-sm
                sm:w-auto
              "
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/[0.10]">
                <Star
                  size={17}
                  className="fill-gold text-gold"
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-xl font-medium leading-none text-ink">
                    5.0
                  </span>

                  <Stars />
                </div>

                <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.18em] text-ink/30">
                  Google Rating
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* REVIEWS */}
        <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.a
              key={review.name}
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group relative flex h-full min-w-0 flex-col
                overflow-hidden
                rounded-[18px]
                border border-ink/[0.07]
                bg-white/80
                p-4
                shadow-[0_7px_24px_rgba(25,24,20,0.045)]
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-gold/25
                hover:bg-white
                hover:shadow-[0_15px_32px_rgba(25,24,20,0.08)]
                sm:p-5
              "
            >
              {/* Quote */}
              <div className="pointer-events-none absolute right-4 top-4 text-gold/[0.08] transition-all duration-300 group-hover:text-gold/[0.13]">
                <Quote
                  size={31}
                  fill="currentColor"
                  strokeWidth={1.2}
                />
              </div>

              {/* Customer */}
              <div className="relative flex min-w-0 items-center gap-2.5">
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-gold/20
                    bg-gradient-to-br from-gold/[0.14] to-gold/[0.04]
                    font-display text-sm
                    font-medium text-[#a67c1e]
                  "
                >
                  {review.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <p className="truncate font-display text-[13px] font-medium tracking-[-0.01em] text-ink">
                    {review.name}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-3.5 flex items-center gap-2">
                <Stars />

                <span className="text-[8px] font-semibold tracking-[0.08em] text-ink/25">
                  5.0
                </span>
              </div>

              {/* Service */}
              <div className="mt-2.5 w-fit max-w-full rounded-full border border-gold/15 bg-gold/[0.045] px-2.5 py-1">
                <span className="block truncate text-[7px] font-bold uppercase tracking-[0.16em] text-[#a67c1e] sm:text-[8px]">
                  {review.service}
                </span>
              </div>

              {/* Review Text */}
              <p className="mt-3 flex-1 font-display text-[12px] leading-[1.65] tracking-[-0.005em] text-ink/55 sm:text-[12.5px]">
                “{review.text}”
              </p>

              {/* Bottom */}
              <div className="mt-4 flex items-center justify-between border-t border-ink/[0.06] pt-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-gold" />

                  <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-ink/25">
                    Google Review
                  </span>
                </div>

                <ExternalLink
                  size={12}
                  strokeWidth={1.7}
                  className="text-ink/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                />
              </div>

              {/* Gold hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold via-[#d4af37] to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.08,
          }}
          className="
            mt-6 flex flex-col
            items-stretch justify-center
            gap-2.5
            sm:flex-row sm:items-center
          "
        >
          {/* Write Review */}
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex w-full
              items-center justify-center gap-2
              rounded-full
              bg-[#171613]
              px-5 py-3
              text-[9px] font-bold uppercase
              tracking-[0.15em]
              text-cream
              shadow-[0_8px_22px_rgba(25,24,20,0.10)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-gold
              hover:text-charcoal
              sm:w-auto
            "
          >
            <MessageCircle
              size={14}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            Write a Google Review
          </a>

          {/* View Reviews */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex w-full
              items-center justify-center gap-2
              rounded-full
              border border-ink/10
              bg-white/70
              px-5 py-3
              text-[9px] font-bold uppercase
              tracking-[0.15em]
              text-ink/60
              transition-all duration-300
              hover:border-gold/35
              hover:bg-white
              hover:text-ink
              sm:w-auto
            "
          >
            View All Reviews

            <ExternalLink
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}