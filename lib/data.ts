import {
  Droplets,
  Bug,
  Rat,
  Bird,
  Container,
  Factory,
  Leaf,
  ArrowUpFromLine,
  Clock,
  ShieldCheck,
  Zap,
  HeartHandshake,
  LockKeyhole,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Grupo Rufasto",
  description:
    "Expertos en sanidad ambiental, limpieza industrial y control de plagas. Servicios eco-amigables en Arequipa, Puno, Cusco, Moquegua y Tacna.",
  url: "https://gruporufasto.com.pe",
  phoneWhatsapp: "946499921",
  address: "Urb. Lara C19 Socabaya - Arequipa, Arequipa, Peru, 04001, Arequipa, Peru",
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
  features?: string[];
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    slug: "desinfeccion",
    title: "Desinfección",
    description: "Ofrecemos un servicio de desinfección integral y de alto nivel que elimina y previene la propagación de virus, bacterias, hongos y agentes patógenos en cualquier superficie.",
    features: [
      "Uso de amonios cuaternarios y sustancias certificadas seguras.",
      "Aplicación de gas ecológico de acción inmediata.",
      "Protección sanitaria para oficinas, clínicas e industrias.",
      "Garantía de ambientes estériles y eco-amigables."
    ],
    icon: Droplets,
    image: "/images/Servicios/Desinfeccion.png",
  },
  {
    slug: "desinsectacion",
    title: "Desinsectación",
    description: "Diseñamos estrategias eficaces de erradicación y control preventivo contra todo tipo de insectos rastreros y voladores (cucarachas, moscas, mosquitos, arañas, pulgas, entre otros).",
    features: [
      "Aplicación mediante termo nebulización y aspersión.",
      "Uso de cebos en gel para lugares de difícil acceso.",
      "Protección de mercadería y prevención de daños estructurales.",
      "Mantenimiento de espacios de trabajo seguros y libres de plagas."
    ],
    icon: Bug,
    image: "/images/Servicios/DESINSECTACION.png",
  },
  {
    slug: "desratizacion",
    title: "Desratización",
    description: "Implementamos sistemas especializados para el control y erradicación definitiva de poblaciones de roedores, evaluando la magnitud de cada infestación.",
    features: [
      "Establecimiento de barreras físicas y estaciones de cebado de seguridad.",
      "Uso de rodenticidas de última generación con bajo riesgo.",
      "Protección de infraestructura y prevención de cortocircuitos.",
      "Freno a la transmisión de enfermedades asociadas a roedores."
    ],
    icon: Rat,
    image: "/images/Servicios/DESRATIZACION.png",
  },
  {
    slug: "control-aviar",
    title: "Control Aviar",
    description: "Gestionamos de forma ética y efectiva la presencia de aves en zonas donde su actividad resulta perjudicial por acumulación de excremento altamente corrosivo.",
    features: [
      "Instalación de mallas invisibles y púas de policarbonato.",
      "Aplicación de repelentes en gel y dispositivos ultrasónicos.",
      "Sistemas disuasorios éticos que no dañan al animal.",
      "Ideal para naves industriales, monumentos y aeropuertos."
    ],
    icon: Bird,
    image: "/images/Servicios/controlaviar.png",
  },
  {
    slug: "limpieza-de-tanques",
    title: "Limpieza de tanques",
    description: "Realizamos la limpieza, desinfección y mantenimiento preventivo de tanques de almacenamiento, cisternas y reservorios de agua potable.",
    features: [
      "Remoción profunda de algas, sarro, lodo y microorganismos.",
      "Procesos mecánicos e hidrolavado a alta presión.",
      "Sanitización con hipoclorito en dosis precisas y seguras.",
      "Garantía de potabilidad y mayor vida útil de la infraestructura."
    ],
    icon: Container,
    image: "/images/Servicios/limpiezatanques.png",
  },
  {
    slug: "limpieza-industrial",
    title: "Limpieza Industrial",
    description: "Brindamos soluciones de limpieza técnica y profunda para instalaciones, maquinarias y líneas de producción en entornos industriales altamente exigentes.",
    features: [
      "Uso de desengrasantes industriales y aspiradoras de gran capacidad.",
      "Remoción de residuos pesados, grasas incrustadas y polvo tóxico.",
      "Reducción de riesgos de incendios y accidentes laborales.",
      "Cumplimiento con normativas estrictas de seguridad e higiene."
    ],
    icon: Factory,
    image: "/images/Servicios/limpiezaindustrial.png",
  },
  {
    slug: "areas-verdes",
    title: "Áreas Verdes",
    description: "Nos especializamos en el diseño, mantenimiento integral y recuperación de áreas verdes, jardines corporativos y espacios recreativos.",
    features: [
      "Poda técnica, fertilización y corte de césped profesional.",
      "Control fitosanitario con plaguicidas de baja toxicidad.",
      "Prevención y tratamiento de hongos y plagas específicas.",
      "Mejora de la imagen corporativa y reducción de huella de carbono."
    ],
    icon: Leaf,
    image: "/images/Servicios/areasverdes.png",
  },
  {
    slug: "alquiler-de-elevadores",
    title: "Alquiler de Elevadores para 02 personas",
    description: "Ponemos a su disposición plataformas elevadoras de última generación, ideales para mantenimiento en altura, iluminación, inventarios y obras.",
    features: [
      "Acceso a lugares de difícil alcance de manera 100% segura.",
      "Alternativa eficiente y rápida a los andamios tradicionales.",
      "Diseño compacto con capacidad de operar en pasillos angostos.",
      "Máxima estabilidad y maniobrabilidad para el personal."
    ],
    icon: ArrowUpFromLine,
    image: "/images/Servicios/elevadores.png",
  },
];

export const values = [
  { title: "Puntualidad", description: "Cumplimos con los tiempos acordados en cada servicio.", icon: Clock },
  { title: "Responsabilidad", description: "Asumimos cada trabajo con compromiso total.", icon: ShieldCheck },
  { title: "Eficiencia", description: "Optimizamos procesos para resultados óptimos.", icon: Zap },
  { title: "Honradez", description: "Actuamos con transparencia frente a cada cliente.", icon: HeartHandshake },
  { title: "Discreción", description: "Cuidamos la confidencialidad de cada operación.", icon: LockKeyhole },
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

export const whatsappDefaultMessage =
  "Hola, quisiera información sobre Rufasto Servicios";
