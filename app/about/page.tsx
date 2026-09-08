import type { Metadata } from "next";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | SK POP WORKS",
  description:
    "Learn about SK POP WORKS — providing complete false ceiling, partition and interior finishing solutions with material, labour and professional installation across Bangalore.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="relative overflow-hidden bg-[#f6f1e8] py-12 sm:py-14 lg:py-16">
        {/* Soft luxury glow */}
        <div className="pointer-events-none absolute -right-32 -top-28 h-80 w-80 rounded-full bg-gold/[0.10] blur-[110px]" />

        <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-80 w-80 rounded-full bg-[#d8c6a0]/[0.14] blur-[110px]" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 top-8 h-52 w-52 rounded-full border border-gold/[0.12]" />

        <div className="pointer-events-none absolute -right-3 top-24 h-32 w-32 rounded-full border border-gold/[0.08]" />

        <div className="pointer-events-none absolute bottom-8 left-[8%] h-2 w-2 rounded-full bg-gold/40" />

        {/* Top line */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container-px relative mx-auto max-w-content">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-gold" />

              <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#a67c1e] sm:text-[10px]">
                About SK POP WORKS
              </p>

              <span className="h-1 w-1 rounded-full bg-gold" />
            </div>

            {/* Main Heading */}
            <h1
              className="
                mt-4
                max-w-3xl
                font-display
                text-[2.45rem]
                font-medium
                leading-[0.94]
                tracking-[-0.055em]
                text-ink
                sm:text-5xl
                lg:text-[4.2rem]
              "
            >
              We create spaces
              <br />
              <span className="bg-gradient-to-r from-[#98701a] via-[#d4af37] to-[#b88b20] bg-clip-text text-transparent">
                that feel complete.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-2xl
                text-[12px]
                leading-[1.75]
                text-ink/55
                sm:text-[13px]
                sm:leading-6
                lg:text-[14px]
              "
            >
              From material selection to installation and final finishing, we
              provide complete false ceiling, partition and interior solutions
              for homes, offices and commercial spaces across Bangalore.
            </p>

            {/* Premium divider */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-gold" />

              <span className="h-1.5 w-1.5 rounded-full bg-gold" />

              <span className="h-px w-16 bg-ink/10" />
            </div>

            {/* Bottom text */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-ink/30 sm:text-[9px]">
                False Ceiling
              </span>

              <span className="h-1 w-1 rounded-full bg-gold/60" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-ink/30 sm:text-[9px]">
                Interior Work
              </span>

              <span className="h-1 w-1 rounded-full bg-gold/60" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-ink/30 sm:text-[9px]">
                Complete Solution
              </span>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* About */}
      <About />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process */}
      <Process />

      {/* CTA */}
      <CTA />
    </>
  );
}