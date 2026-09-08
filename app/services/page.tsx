import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import { services } from "@/data/services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Services | SK POP WORKS",
  description:
    "Complete false ceiling and interior work with material, skilled labour and professional installation across Bangalore.",
};

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

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f6f1e8] py-12 sm:py-14 lg:py-16">
        {/* Soft luxury glow */}
        <div className="pointer-events-none absolute -right-40 -top-32 h-80 w-80 rounded-full bg-gold/[0.10] blur-[110px]" />

        <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-80 w-80 rounded-full bg-[#d8c6a0]/[0.12] blur-[110px]" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 top-8 h-52 w-52 rounded-full border border-gold/[0.11]" />

        <div className="pointer-events-none absolute -right-2 top-24 h-32 w-32 rounded-full border border-gold/[0.07]" />

        {/* Top line */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container-px relative mx-auto max-w-content">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-gold" />

              <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#a67c1e] sm:text-[10px]">
                What We Do
              </p>

              <span className="h-1 w-1 rounded-full bg-gold" />
            </div>

            {/* Heading */}
            <h1 className="mt-4 font-display text-[2.45rem] font-medium leading-[0.94] tracking-[-0.055em] text-ink sm:text-5xl lg:text-[4.2rem]">
              Spaces deserve
              <br />
              <span className="bg-gradient-to-r from-[#98701a] via-[#d4af37] to-[#b88b20] bg-clip-text text-transparent">
                better ceilings.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-[12px] leading-[1.75] text-ink/55 sm:text-[13px] sm:leading-6 lg:text-[14px]">
              Complete false ceiling and interior work with quality materials,
              skilled labour and professional installation across Bangalore.
            </p>

            {/* Detail */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-gold" />
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="h-px w-16 bg-ink/10" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-ink/30 sm:text-[9px]">
                Design
              </span>

              <span className="h-1 w-1 rounded-full bg-gold/60" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-ink/30 sm:text-[9px]">
                Material
              </span>

              <span className="h-1 w-1 rounded-full bg-gold/60" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-ink/30 sm:text-[9px]">
                Installation
              </span>

              <span className="h-1 w-1 rounded-full bg-gold/60" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-ink/30 sm:text-[9px]">
                Finishing
              </span>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-[#eee8dc] py-10 sm:py-12 lg:py-16">
        {/* Background */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-gold/[0.05] blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-gold/[0.06] blur-[110px]" />

        <div className="container-px relative mx-auto max-w-content">
          <div className="space-y-12 sm:space-y-14 lg:space-y-20">
            {services.map((service, index) => {
              const image =
                serviceImages[service.slug] ||
                "/images/services/pop.jpg";

              const reverse = index % 2 === 1;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24 grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12"
                >
                  {/* IMAGE */}
                  <div
                    className={`group relative aspect-[4/3] overflow-hidden rounded-[22px] border border-ink/[0.07] bg-white shadow-[0_12px_35px_rgba(25,24,20,0.07)] ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${service.name} by SK POP WORKS`}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="
                        absolute inset-0 h-full w-full object-cover
                        transition-transform duration-1000 ease-out
                        group-hover:scale-105
                      "
                    />

                    {/* Soft overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                    {/* Gold glow */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/[0.08] via-transparent to-transparent" />

                    {/* Number */}
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-[10px] font-medium text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Brand */}
                    <div className="absolute bottom-5 left-5">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/65 sm:text-[9px]">
                        SK POP WORKS
                      </p>

                      <div className="mt-2 h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Category */}
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-gold" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#a67c1e]">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-3 max-w-xl font-display text-[2rem] font-medium leading-[1] tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.7rem]">
                      {service.name}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 max-w-xl text-[12px] leading-[1.7] text-ink/55 sm:text-[13px] sm:leading-6 lg:text-sm">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-5 flex max-w-xl flex-wrap gap-2">
                      {service.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="
                            inline-flex items-center gap-1.5
                            rounded-full
                            border border-gold/[0.18]
                            bg-white/70
                            px-3 py-1.5
                            text-[10px]
                            font-medium
                            text-ink/65
                            shadow-[0_3px_12px_rgba(25,24,20,0.025)]
                            transition-all duration-300
                            hover:border-gold/40
                            hover:bg-white
                          "
                        >
                          <Check
                            size={11}
                            strokeWidth={2.5}
                            className="text-gold"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      <Link
                        href="/contact"
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          bg-[#171613]
                          px-5 py-2.5
                          text-[9px] font-bold uppercase
                          tracking-[0.15em]
                          text-cream
                          shadow-[0_8px_22px_rgba(25,24,20,0.10)]
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:bg-gold
                          hover:text-charcoal
                          sm:text-[10px]
                        "
                      >
                        Get Free Quote
                        <ArrowRight size={14} />
                      </Link>

                      <a
                        href="https://wa.me/918052050846?text=Hi%20SK%20POP%20WORKS,%20I%20want%20to%20know%20more%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          border border-ink/10
                          bg-white/70
                          px-5 py-2.5
                          text-[9px] font-bold uppercase
                          tracking-[0.15em]
                          text-ink/65
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:border-gold/40
                          hover:bg-white
                          hover:text-ink
                          sm:text-[10px]
                        "
                      >
                        <MessageCircle
                          size={14}
                          className="text-gold"
                        />
                        WhatsApp Us
                      </a>
                    </div>

                    {/* Small detail */}
                    <div className="mt-5 flex items-center gap-2">
                      <span className="h-px w-7 bg-gold/40" />
                      <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-ink/25">
                        Quality • Precision • Finish
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}