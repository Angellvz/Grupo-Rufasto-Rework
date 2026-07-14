# Grupo Rufasto — Sitio web (Next.js 15 + TypeScript + Tailwind)

Reconstrucción moderna del sitio [gruporufasto.com.pe](https://gruporufasto.com.pe/), manteniendo la identidad de marca (sanidad ambiental, colores verde/azul corporativo) con una implementación técnica actual.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (tokens de color propios: `primary`, `secondary`, `accent`, `background`, `surface`, `border`)
- **Framer Motion** para animaciones (reveal on scroll, hero, menú móvil)
- **lucide-react** para iconografía
- Componentes propios estilo **shadcn/ui** (`Button`, `Card`) construidos con `class-variance-authority`
- `next/image` + `next/font` (Space Grotesk / Inter / JetBrains Mono)
- SEO: `metadata`, OpenGraph, Twitter Card, `sitemap.ts`, `robots.ts`, `favicon.ico`

## Cómo ejecutar el proyecto

Este entorno no tiene acceso a internet, así que **no pude ejecutar `npm install` ni `npm run dev` aquí**. El código está completo y listo — corre esto en tu máquina:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para producción:

```bash
npm run build
npm run start
```

Si al instalar ves algún warning de peer dependency por React 19 (algunas librerías aún listan React 18 como peer), usa:

```bash
npm install --legacy-peer-deps
```

## Estructura

```
app/
  layout.tsx          → fuentes, metadata global, Navbar/Footer/WhatsApp flotante
  page.tsx             → Home
  nosotros/page.tsx    → Misión, visión, valores, formulario de contacto
  servicios/page.tsx   → Grid completo de 8 servicios
  clientes/page.tsx    → Logos de clientes
  sitemap.ts / robots.ts
components/
  navbar.tsx, footer.tsx, logo.tsx, whatsapp-float.tsx
  sections/            → Hero, WhyChooseUs, ServicesGrid, Certifications, Values, Cta, About, ContactForm, ClientsGrid
  ui/                  → Button, Card, Container, SectionTitle, Reveal (scroll animations)
lib/
  data.ts              → todo el contenido del sitio (servicios, valores, nav, WhatsApp link)
  utils.ts             → helper `cn`
public/
  logo.png             → reemplaza este archivo y el logo se actualiza en todo el sitio
  images/              → placeholders generados, reemplázalos por fotografías reales
```

## Reemplazar el logo

Solo sustituye **`/public/logo.png`** por el logo real (idealmente PNG con fondo transparente, apaisado). Todo el sitio —header y footer— lo toma de esa única ruta.

## Reemplazar imágenes

Todas las imágenes están en `/public/images/` como placeholders de marca generados automáticamente (para que el proyecto compile y se vea completo desde ya). Reemplaza cada archivo manteniendo el mismo nombre:

- `hero.jpg` — imagen de portada
- `empresa.jpg`, `equipo.jpg` — sección "Por qué elegirnos" / Nosotros
- `og-cover.jpg` — imagen para compartir en redes (1200×630)
- `servicio-*.jpg` (8 archivos) — una por cada servicio
- `clientes/cliente-01.png` … `cliente-18.png` — logos de clientes (fondo transparente o blanco recomendado)

## Colores de marca

| Token | Hex | Uso |
|---|---|---|
| `primary` | `#0B4F3F` | Verde institucional (headers, botones principales) |
| `secondary` | `#0D3B66` | Azul industrial (apoyo) |
| `accent` | `#8BC53F` | Verde lima (CTAs, detalles) |
| `background` | `#F6F8F6` | Fondo general |
| `ink` | `#0F241C` | Texto |

## Formulario de contacto

El formulario en `/nosotros` (`components/sections/contact-form.tsx`) valida en el cliente y simula el envío — **no está conectado a ningún backend**. Para conectarlo, agrega una API route en `app/api/contact/route.ts` (o un proveedor externo como Resend/Formspree) y reemplaza el `setTimeout` de simulación por la llamada real.

## Pendiente antes de publicar

- [ ] Reemplazar `logo.png` y todas las imágenes en `/public/images/`
- [ ] Conectar el formulario de contacto a un backend/servicio de email
- [ ] Confirmar teléfono de WhatsApp y correo de contacto en `lib/data.ts`
- [ ] Ejecutar `npm run build` y revisar que no haya errores/warnings
