import Link from "next/link";
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { LinkButton } from "@/components/ui/button";
import { navLinks, siteConfig, whatsappLink } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-8">
        <div>
          <Logo light className="h-9 w-[150px]" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
              { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
              { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent-500 hover:text-accent-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            Navegación
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "inline-block text-sm text-white/70 transition-colors hover:text-accent-400",
                    `animate-nav-wave delay-nav-${i + 1}`
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            Cobertura
          </h3>
          <ul className="mt-5 space-y-3">
            {siteConfig.locations.map((location) => (
              <li key={location} className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-3.5 w-3.5 text-white" />
                {location}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            Contacto
          </h3>
          <ul className="mt-5 space-y-3">
            <li className="flex items-start gap-2 text-sm text-white/70 leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/70 leading-relaxed">
              <Phone className="h-4 w-4 shrink-0 text-white" />
              <span>+51 {siteConfig.phoneWhatsapp}</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/70 leading-relaxed">
              <Mail className="h-4 w-4 shrink-0 text-white" />
              <a href="mailto:contacto@gruporufasto.com.pe" className="hover:text-accent-400 transition-colors">
                contacto@gruporufasto.com.pe
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Grupo Rufasto. Todos los derechos reservados.</p>
          <p>Sanidad Ambiental &amp; Limpieza Industrial · Sur del Perú</p>
        </Container>
      </div>
    </footer>
  );
}
