import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse false ceiling, partition and wall panel projects completed by SK POP WORKS across Bangalore homes and commercial spaces."
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-charcoal pt-20 pb-14 sm:pt-24">
        <div className="container-px mx-auto max-w-content">
          <p className="eyebrow">Our Work</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium text-cream max-w-2xl">
            Recent Projects
          </h1>
          <p className="mt-4 max-w-xl text-cream/65">
            A look at our false ceiling, partition and wall panel work across
            Bangalore. Filter by category to explore.
          </p>
        </div>
      </section>

      <section className="section-py bg-cream">
        <div className="container-px mx-auto max-w-content">
          <Gallery />
        </div>
      </section>

      <CTA />
    </>
  );
}
