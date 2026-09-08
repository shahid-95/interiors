"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { projects } from "@/data/projects";
import Lightbox from "./Lightbox";

const categories = [
  "All",
  "POP",
  "Gypsum",
  "PVC",
  "Grid",
  "Partitions",
  "Wall Panels"
] as const;

export default function Gallery({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const list =
      active === "All" ? projects : projects.filter((p) => p.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              active === cat
                ? "border-gold bg-gold text-charcoal"
                : "border-ink/15 text-ink/70 hover:border-gold/60 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-9 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {filtered.map((project, index) => (
          <motion.button
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
            onClick={() => setLightboxIndex(index)}
            className="group relative mb-5 block w-full overflow-hidden rounded-2xl break-inside-avoid text-left"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-display text-cream">{project.title}</p>
                <p className="text-xs text-gold">{project.category}</p>
              </div>
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/60 text-cream opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <Expand size={16} />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        projects={filtered}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
