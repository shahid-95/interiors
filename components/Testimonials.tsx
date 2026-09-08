"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Placeholder testimonials — replace with real customer feedback once available.
const testimonials = [
  {
    name: "Customer Review",
    location: "Bangalore",
    text: "The team provided good quality material and completed the work with proper finishing. The overall experience was professional and smooth."
  },
  {
    name: "Customer Review",
    location: "Bangalore",
    text: "Good communication from the first call to the final handover. The false ceiling installation was neat and completed on schedule."
  },
  {
    name: "Customer Review",
    location: "Bangalore",
    text: "They handled the material and labour together, which made the whole process simple for us. Happy with the final finishing."
  }
];

export default function Testimonials() {
  return (
    <section className="section-py bg-charcoal">
      <div className="container-px mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Client Feedback</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-cream">
            What Customers Say
          </h2>
          <p className="mt-3 text-sm text-cream/45">
            Placeholder reviews shown for illustration — to be replaced with
            verified customer feedback.
          </p>
        </motion.div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-2xl border border-cream/10 bg-navylight/50 p-7"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-cream/75">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-display text-cream">{t.name}</p>
                <p className="text-xs text-cream/45">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
