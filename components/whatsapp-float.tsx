"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/data";

export function WhatsappFloat() {
  return (
    <motion.a
      href={whatsappLink("Hola Grupo Rufasto, quisiera información sobre Rufasto Servicios")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-primary-900 shadow-lg shadow-accent-500/30"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent-500/50" />
    </motion.a>
  );
}
