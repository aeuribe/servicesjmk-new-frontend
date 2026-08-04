export type CategoryKey =
  | "instalacion"
  | "mantenimiento"
  | "reparacion"
  | "automatizacion"
  | "suministro"
  | "asesoria";

export type LocalizedText = {
  es: string;
  en: string;
};

export function pickText(text: LocalizedText, locale: string): string {
  return locale === "en" ? text.en : text.es;
}

export const CATEGORY_LABELS: Record<CategoryKey, LocalizedText> = {
  instalacion: { es: "Instalación", en: "Installation" },
  mantenimiento: { es: "Mantenimiento", en: "Maintenance" },
  reparacion: { es: "Reparación", en: "Repair" },
  automatizacion: { es: "Automatización", en: "Automation" },
  suministro: { es: "Suministro", en: "Supply" },
  asesoria: { es: "Asesoría", en: "Consulting" },
};

export type MediaItem = {
  type: "image" | "video";
  src: string;
};

export type WorkEntry = {
  slug: string;
  title: LocalizedText;
  category: CategoryKey[];
  location: string;
  date: string;
  media: MediaItem[];
  shortDescription: LocalizedText;
};

export function getWorkEntryBySlug(slug: string): WorkEntry | undefined {
  return workEntries.find((entry) => entry.slug === slug);
}

/**
 * ─────────────────────────────────────────────────────────────────
 * CÓMO AGREGAR UN TRABAJO NUEVO
 * Copia el bloque de abajo, pégalo al PRINCIPIO del array (para que
 * salga como "Más reciente"), y llena cada campo en ambos idiomas:
 *
 * {
 *   slug: "titulo-corto-separado-por-guiones",
 *   title: { es: "...", en: "..." },
 *   category: ["instalacion"],
 *   location: "Ciudad, Estado",
 *   date: "2026-08",
 *   media: [{ type: "image", src: "https://..." }],
 *   shortDescription: { es: "...", en: "..." },
 * },
 * ─────────────────────────────────────────────────────────────────
 */
export const workEntries: WorkEntry[] = [
  {
    slug: "instalacion-linea-empaque-doral",
    title: {
      es: "Instalación de línea de empaque completa",
      en: "Full packaging line installation",
    },
    category: ["instalacion", "automatizacion"],
    location: "Doral, FL",
    date: "2026-07",
    media: [
      { type: "video", src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=800" },
      { type: "image", src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800" },
      { type: "image", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
    ],
    shortDescription: {
      es: "Montaje y puesta en marcha de línea de empaque automatizada para planta de manufactura.",
      en: "Assembly and startup of an automated packaging line for a manufacturing plant.",
    },
  },
  {
    slug: "reparacion-crimpadora-viales-miami",
    title: {
      es: "Reparación de crimpadora de viales",
      en: "Vial crimping machine repair",
    },
    category: ["reparacion"],
    location: "Miami, FL",
    date: "2026-06",
    media: [
      { type: "video", src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800" },
      { type: "image", src: "https://images.unsplash.com/photo-1565717174269-2394d1c9d9c1?q=80&w=800" },
    ],
    shortDescription: {
      es: "Diagnóstico y reparación en sitio, vuelta a producción en menos de 48 horas.",
      en: "On-site diagnosis and repair, back to production in under 48 hours.",
    },
  },
  {
    slug: "mantenimiento-preventivo-trimestral-planta-empaque",
    title: {
      es: "Programa de mantenimiento preventivo trimestral",
      en: "Quarterly preventive maintenance program",
    },
    category: ["mantenimiento"],
    location: "Doral, FL",
    date: "2026-05",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800" },
    ],
    shortDescription: {
      es: "Plan de mantenimiento continuo para maquinaria de empaque farmacéutico.",
      en: "Ongoing maintenance plan for pharmaceutical packaging machinery.",
    },
  },
  {
    slug: "suministro-equipo-dosificacion",
    title: {
      es: "Suministro e instalación de equipo de dosificación",
      en: "Dosing equipment supply and installation",
    },
    category: ["suministro", "instalacion"],
    location: "Hialeah, FL",
    date: "2026-05",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
      { type: "image", src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800" },
    ],
    shortDescription: {
      es: "Entrega, instalación y calibración de equipo de dosificación de precisión.",
      en: "Delivery, installation, and calibration of precision dosing equipment.",
    },
  },
  {
    slug: "asesoria-optimizacion-linea-produccion",
    title: {
      es: "Asesoría de optimización de línea de producción",
      en: "Production line optimization consulting",
    },
    category: ["asesoria"],
    location: "Miami, FL",
    date: "2026-04",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800" },
    ],
    shortDescription: {
      es: "Análisis de cuellos de botella y rediseño de flujo para aumentar throughput.",
      en: "Bottleneck analysis and workflow redesign to increase throughput.",
    },
  },
  {
    slug: "automatizacion-estacion-etiquetado",
    title: {
      es: "Automatización de estación de etiquetado",
      en: "Labeling station automation",
    },
    category: ["automatizacion"],
    location: "Doral, FL",
    date: "2026-03",
    media: [
      { type: "video", src: "https://images.unsplash.com/photo-1565717174269-2394d1c9d9c1?q=80&w=800" },
      { type: "image", src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=800" },
    ],
    shortDescription: {
      es: "Conversión de estación manual a etiquetado automático con sensor de posición.",
      en: "Conversion from manual to automatic labeling with position sensor.",
    },
  },
];