"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Call or WhatsApp us and share your project requirements.",
  },
  {
    number: "02",
    title: "Site Visit",
    description:
      "We visit your site and understand the space and requirements.",
  },
  {
    number: "03",
    title: "Measurement & Design",
    description:
      "We take measurements and discuss suitable designs and materials.",
  },
  {
    number: "04",
    title: "Quotation",
    description:
      "We provide a quotation based on your project requirements.",
  },
  {
    number: "05",
    title: "Material & Installation",
    description:
      "We arrange the required materials and complete the installation.",
  },
  {
    number: "06",
    title: "Final Finishing",
    description:
      "We complete the finishing work and hand over the project.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-14 sm:py-16 lg:py-20">
      {/* Premium background glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-gold/[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-100px] h-[450px] w-[450px] rounded-full bg-[#d8b46a]/[0.10] blur-[130px]" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-24 top-20 h-56 w-56 rounded-full border border-gold/[0.10]" />

      <div className="pointer-events-none absolute -right-8 top-36 h-32 w-32 rounded-full border border-gold/[0.08]" />

      <div className="pointer-events-none absolute bottom-10 left-[-70px] h-36 w-36 rounded-full border border-gold/[0.06]" />

      {/* Top border */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-px relative mx-auto max-w-content">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-gold to-gold/20" />

            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-gold sm:text-[10px]">
              How It Works
            </p>
          </div>

          <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.035em] text-ink sm:text-4xl lg:text-[3.5rem] lg:leading-[1]">
            Our Work{" "}
            <span className="bg-gradient-to-r from-[#a67c1e] via-gold to-[#c8a33e] bg-clip-text text-transparent">
              Process
            </span>
          </h2>

          <div className="mt-5 flex items-center gap-2">
            <span className="h-[2px] w-12 bg-gold" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="h-px w-12 bg-ink/10" />
          </div>
        </motion.div>

        {/* Process */}
        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          {/* Timeline */}
          <div className="absolute bottom-2 left-[27px] top-2 hidden w-px bg-gradient-to-b from-gold/30 via-ink/10 to-transparent sm:block" />

          <div className="space-y-7 sm:space-y-8 lg:space-y-9">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex gap-5 sm:gap-8"
              >
                {/* Number */}
                <div
                  className="
                    relative z-10 flex h-14 w-14 flex-shrink-0
                    items-center justify-center
                    rounded-full
                    border border-gold/35
                    bg-[#f6f1e8]
                    font-display text-lg font-medium
                    text-gold
                    shadow-[0_6px_20px_rgba(25,24,20,0.05)]
                    transition-all duration-300
                    group-hover:border-gold/70
                    group-hover:bg-white
                    group-hover:shadow-[0_8px_25px_rgba(25,24,20,0.10)]
                  "
                >
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className="
                    flex-1 rounded-[18px]
                    border border-ink/[0.06]
                    bg-white/45
                    px-5 py-4
                    shadow-[0_8px_25px_rgba(25,24,20,0.025)]
                    backdrop-blur-sm
                    transition-all duration-300
                    group-hover:border-gold/20
                    group-hover:bg-white/65
                    group-hover:shadow-[0_15px_35px_rgba(25,24,20,0.06)]
                    sm:px-6 sm:py-5
                  "
                >
                  <h3 className="font-display text-lg font-medium tracking-[-0.02em] text-ink sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 max-w-lg text-[13px] leading-6 text-ink/55 sm:text-sm sm:leading-6">
                    {step.description}
                  </p>

                  {/* Small gold accent */}
                  <div className="mt-3 h-px w-8 bg-gold/30 transition-all duration-500 group-hover:w-14 group-hover:bg-gold/60" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-3 sm:mt-12"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/25" />

          <span className="h-1.5 w-1.5 rounded-full bg-gold" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-ink/25 sm:text-[9px]">
            Simple • Clear • Professional
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/25" />
        </motion.div>
      </div>
    </section>
  );
}