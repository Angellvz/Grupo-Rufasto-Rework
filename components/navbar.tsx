"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { navLinks, whatsappLink, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col w-full">
      {/* Topbar */}
      <div className="hidden w-full bg-primary-900 px-4 py-2.5 text-[11px] font-medium tracking-wide text-white/90 sm:block">
        <Container className="flex items-center justify-center gap-10">
          <div className="flex items-center gap-8">
            <a 
              href="https://maps.app.goo.gl/foc2HWdfYXVF2d1v9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <MapPin className="h-4 w-4 text-white animate-pulse" />
              <span className="border-b border-transparent group-hover:border-white transition-colors">{siteConfig.address}</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white animate-pulse" />
              <span>+51 {siteConfig.phoneWhatsapp}</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="text-white hover:text-accent-400 transition-colors group" aria-label="Facebook">
              <Facebook className="h-4 w-4 transition-transform group-hover:scale-125" />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="text-white hover:text-accent-400 transition-colors group" aria-label="Instagram">
              <Instagram className="h-4 w-4 transition-transform group-hover:scale-125" />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-accent-400 transition-colors group" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4 transition-transform group-hover:scale-125" />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Nav */}
      <div className="w-full border-b border-border/70 bg-white/95 shadow-sm backdrop-blur-md">
        <Container>
          <nav className="flex h-[72px] items-center justify-between" aria-label="Principal">
            <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative inline-block text-sm font-medium tracking-tight text-ink transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary-700 after:transition-all after:duration-300 hover:text-primary-700 hover:after:w-full",
                    pathname === link.href && "text-primary-700 after:w-full",
                    `animate-nav-wave delay-nav-${i + 1}`
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <LinkButton
              href={whatsappLink("Hola Grupo Rufasto, quisiera información sobre sus servicios")}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              size="md"
            >
              <MessageCircle className="h-4 w-4" />
              Contáctanos
            </LinkButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-lg font-medium transition-colors hover:bg-surface",
                      pathname === link.href ? "text-primary-700" : "text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <LinkButton
                href={whatsappLink("Hola Grupo Rufasto, quisiera información sobre sus servicios")}
                target="_blank"
                rel="noopener noreferrer"
                variant="inverse"
                size="lg"
                className="mt-4 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Contáctanos
              </LinkButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
