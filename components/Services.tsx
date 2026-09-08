"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-creamdark py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-content">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                What We Do
              </p>
            </div>

            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Crafting spaces
              <br />
              <span className="text-gold">
                above expectations.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-ink/60 sm:text-base">
              Complete material, skilled labour and professional installation
              for residential and commercial projects across Bangalore.
            </p>
          </div>

          <div className="hidden items-center gap-3 pb-2 lg:flex">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/30">
              Our Expertise
            </span>

            <ArrowDownRight size={20} className="text-gold" />
          </div>
        </motion.div>

        <div className="mt-12 grid items-stretch gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-14 h-px max-w-xs origin-center bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />
      </div>
    </section>
  );
}