import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { siteConfig } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Grupo Rufasto - Fumigación y Sanidad Ambiental",
    template: "%s | Grupo Rufasto",
  },
  description: "Expertos en fumigación, sanidad ambiental, limpieza industrial y control de plagas. Servicios eco-amigables en Arequipa, Puno, Cusco, Moquegua y Tacna.",
  keywords: [
    "fumigación en Arequipa",
    "fumigación en Puno",
    "fumigación en Cusco",
    "fumigación en Tacna",
    "empresa de fumigación",
    "sanidad ambiental",
    "limpieza industrial",
    "control de plagas",
    "desinfección",
    "desratización",
    "Grupo Rufasto",
  ],
  authors: [{ name: "Grupo Rufasto" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteConfig.url,
    siteName: "Grupo Rufasto",
    title: "Grupo Rufasto - Fumigación y Sanidad Ambiental",
    description: "Expertos en fumigación, sanidad ambiental, limpieza industrial y control de plagas en Arequipa y el sur del Perú.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Rufasto - Fumigación y Sanidad Ambiental",
    description: "Expertos en fumigación, sanidad ambiental y limpieza industrial.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.name,
  "image": `${siteConfig.url}/images/og-cover.jpg`,
  "@id": siteConfig.url,
  "url": siteConfig.url,
  "telephone": `+51${siteConfig.phoneWhatsapp}`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Urb. Lara C19 Socabaya",
    "addressLocality": "Arequipa",
    "addressRegion": "Arequipa",
    "postalCode": "04001",
    "addressCountry": "PE"
  },
  "areaServed": siteConfig.locations.map(loc => ({
    "@type": "City",
    "name": loc
  })),
  "description": "Expertos en sanidad ambiental, fumigación, limpieza industrial y control de plagas en el sur del Perú.",
  "sameAs": [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.linkedin
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
