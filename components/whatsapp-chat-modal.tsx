"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig, whatsappDefaultMessage, whatsappLink } from "@/lib/data";

type WhatsappChatModalProps = {
  open: boolean;
  onClose: () => void;
};

export function WhatsappChatModal({ open, onClose }: WhatsappChatModalProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (open) setMessage("");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  function openWhatsApp() {
    const trimmed = message.trim() || whatsappDefaultMessage;
    window.open(whatsappLink(trimmed), "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label="Chat de WhatsApp"
          aria-hidden="false"
          className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm origin-bottom-right sm:right-6 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        >
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#efeae2] shadow-2xl">
            <div className="relative overflow-hidden bg-primary-700 px-5 py-4 text-white">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
              <div className="relative flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-5 w-5" aria-hidden="true">
                      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                    </svg>
                    <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-primary-700 bg-[#25D366]"></span>
                  </div>
                  <div className="leading-tight">
                    <p className="font-display text-base font-semibold">{siteConfig.name}</p>
                    <p className="text-xs text-white/85">En línea · responde rápido</p>
                  </div>
                </div>
                <button type="button" aria-label="Cerrar chat" onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-lg text-white/85 transition-colors hover:bg-white/15 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4" aria-hidden="true">
                    <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="space-y-3 px-4 py-5" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, rgba(0,114,36,0.06), transparent 40%), radial-gradient(circle at 100% 100%, rgba(18,120,86,0.06), transparent 40%)" }}>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-ink shadow-sm">
                👋 ¡Hola! Somos {siteConfig.name}.
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-ink shadow-sm">
                Cuéntanos qué servicio necesitas y te asesoramos al instante.
              </div>
              <p className="pt-1 text-center text-[11px] uppercase tracking-widest text-ink/45">Al enviar se abrirá WhatsApp</p>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); openWhatsApp(); }} className="flex items-end gap-2 border-t border-black/10 bg-white p-3">
              <textarea 
                rows={1} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    openWhatsApp();
                  }
                }}
                placeholder="Escribe tu mensaje..." 
                className="min-h-[40px] max-h-24 flex-1 resize-none rounded-xl border border-black/10 bg-surface px-3 py-2 text-sm text-ink outline-none placeholder:text-ink/45 focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]" 
              />
              <button type="submit" aria-label="Enviar y abrir WhatsApp" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send h-4 w-4" aria-hidden="true">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
