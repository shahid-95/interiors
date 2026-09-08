"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918052050846"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SK POP WORKS on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-lg shadow-black/20"
    >
      <MessageCircle size={24} fill="white" className="text-[#25D366]" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px] group-hover:ml-0.5">
        Chat With Us
      </span>
    </motion.a>
  );
}
