"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useEffect, useCallback } from "react";

export default function Lightbox({
  projects,
  activeIndex,
  onClose,
  onNavigate
}: {
  projects: Project[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const isOpen = activeIndex !== null;
  const project = isOpen ? projects[activeIndex] : null;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + projects.length) % projects.length);
  }, [activeIndex, projects.length, onNavigate]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % projects.length);
  }, [activeIndex, projects.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4 sm:p-10"
          onClick={onClose}
        >
          <button
            aria-label="Close lightbox"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors"
          >
            <X size={20} />
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 sm:left-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 sm:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="font-display text-lg text-cream">{project.title}</p>
              <span className="text-xs tracking-wide text-gold">
                {project.category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
