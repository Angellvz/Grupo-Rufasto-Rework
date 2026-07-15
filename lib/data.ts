import {
  Droplets,
  Bug,
  Rat,
  Bird,
  Container,
  Factory,
  Leaf,
  ArrowUpFromLine,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Grupo Rufasto",
  description:
    "Expertos en sanidad ambiental, limpieza industrial y control de plagas. Servicios eco-amigables en Arequipa, Puno, Cusco, Moquegua y Tacna.",
  url: "https://gruporufasto.com.pe",
  phoneWhatsapp: "946499921",
  locations: ["Arequipa", "Puno", "Cusco", "Moquegua", "Tacna"],
  social: {
    instagram: "https://www.instagram.com/gruporufasto/",
    facebook: "https://www.facebook.com/people/Grupo-Rufasto/61588164399933/",
    linkedin: "https://www.linkedin.com/company/grupo-rufasto/?originalSubdomain=pe",
  },
};

export const navLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Clientes", href: "/clientes" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    slug: "desinfeccion",
    title: "Desinfección",
    description:
      "Eliminamos y prevenimos virus, bacterias, hongos y artrópodos dañinos con sustancias químicas y biológicas seguras y gas ecológico, un desinfectante inmediato y respetuoso con el medio ambiente.",
    icon: Droplets,
    image: "/images/servicio-desinfeccion.jpg",
  },
  {
    slug: "desinsectacion",
    title: "Desinsectación",
    description:
      "Controlamos insectos no deseados en hogares, oficinas, industrias o espacios públicos, previniendo daños materiales y problemas de salud, y manteniendo un ambiente limpio y seguro.",
    icon: Bug,
    image: "/images/servicio-desinsectacion.jpg",
  },
  {
    slug: "desratizacion",
    title: "Desratización",
    description:
      "Eliminamos y controlamos poblaciones de roedores en el área que lo necesite, previniendo daños materiales, la propagación de enfermedades y protegiendo la salud pública.",
    icon: Rat,
    image: "/images/servicio-desratizacion.jpg",
  },
  {
    slug: "control-aviar",
    title: "Control Aviar",
    description:
      "Gestionamos y reducimos la presencia de aves en edificios, aeropuertos, áreas industriales y espacios públicos, previniendo daños, riesgos a la salud y problemas estructurales.",
    icon: Bird,
    image: "/images/servicio-control-aviar.jpg",
  },
  {
    slug: "limpieza-de-tanques",
    title: "Limpieza de Tanques",
    description:
      "Eliminamos residuos, sedimentos, contaminantes y microorganismos acumulados en tanques de almacenamiento de agua u otras sustancias, garantizando su seguridad y vida útil.",
    icon: Container,
    image: "/images/servicio-limpieza-tanques.jpg",
  },
  {
    slug: "limpieza-industrial",
    title: "Limpieza Industrial",
    description:
      "Mantenemos limpias y seguras las instalaciones, equipos y maquinaria en entornos industriales, previniendo accidentes y cumpliendo con las normativas de higiene y seguridad.",
    icon: Factory,
    image: "/images/servicio-limpieza-industrial.jpg",
  },
  {
    slug: "areas-verdes",
    title: "Áreas Verdes",
    description:
      "Cuidamos y mantenemos áreas verdes con los mejores pesticidas, previniendo y tratando plagas y enfermedades que puedan afectar plantas, jardines y sembríos.",
    icon: Leaf,
    image: "/images/servicio-areas-verdes.jpg",
  },
  {
    slug: "alquiler-de-elevadores",
    title: "Alquiler de Elevadores",
    description:
      "Plataformas elevadoras para 2 personas que facilitan el acceso a obras de construcción, transporte de suministros e instalación de exhibidores, subiendo hasta 12,000 mm y 200 kg.",
    icon: ArrowUpFromLine,
    image: "/images/servicio-elevadores.jpg",
  },
];

export const values = [
  { title: "Puntualidad", description: "Cumplimos con los tiempos acordados en cada servicio." },
  { title: "Responsabilidad", description: "Asumimos cada trabajo con compromiso total." },
  { title: "Eficiencia", description: "Optimizamos procesos para resultados óptimos." },
  { title: "Honradez", description: "Actuamos con transparencia frente a cada cliente." },
  { title: "Discreción", description: "Cuidamos la confidencialidad de cada operación." },
];

export const whyChooseUs = [
  {
    title: "Cobertura regional",
    description: "Presencia en Arequipa, Puno, Cusco, Moquegua y Tacna.",
  },
  {
    title: "Productos eco-amigables",
    description: "Comprometidos con el cuidado del medio ambiente en cada aplicación.",
  },
  {
    title: "Certificaciones vigentes",
    description: "Respaldo técnico y documentación certificada para cada servicio.",
  },
  {
    title: "Staff especializado",
    description: "Equipo capacitado con maquinaria de última generación.",
  },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.phoneWhatsapp}?text=${encodeURIComponent(message)}`;
}
