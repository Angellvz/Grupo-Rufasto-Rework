"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { WhatsappChatModal } from "@/components/whatsapp-chat-modal";

export function WhatsappFloat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Abrir chat de WhatsApp"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#25D366] shadow-lg shadow-black/20 ring-1 ring-black/5"
      >
        <WhatsappIcon className="h-7 w-7" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/25" />
      </motion.button>

      <WhatsappChatModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
