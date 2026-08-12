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

/**
 * Bloques de contenido libres para el cuerpo del detalle.
 * Agrega los que necesites, en el orden que quieras — no hay una
 * estructura fija de "Desafío/Solución/Resultado" obligatoria.
 */
export type ContentBlock =
  | { type: "heading"; text: LocalizedText }
  | { type: "paragraph"; text: LocalizedText }
  | { type: "media"; item: MediaItem; caption?: LocalizedText };

export type WorkEntry = {
  slug: string;
  title: LocalizedText;
  category: CategoryKey[];
  location: string;
  date: string;
  media: MediaItem[]; // foto/video de portada (grid + galería arriba)
  shortDescription: LocalizedText; // resumen de 1 línea, se ve en el grid
  content: ContentBlock[]; // el cuerpo del detalle, totalmente libre
};

export function getWorkEntryBySlug(slug: string): WorkEntry | undefined {
  return workEntries.find((entry) => entry.slug === slug);
}

/**
 * ─────────────────────────────────────────────────────────────────
 * CÓMO AGREGAR UN TRABAJO NUEVO
 *
 * `content` es un array libre. Usa los bloques que necesites, en
 * el orden que quieras — puede ser solo un párrafo, o varios con
 * fotos intercaladas. No hay una cantidad ni estructura obligatoria.
 *
 * Bloques disponibles:
 *   { type: "heading",   text: { es: "...", en: "..." } }
 *   { type: "paragraph", text: { es: "...", en: "..." } }
 *   { type: "media", item: { type: "image"|"video", src: "https://..." },
 *     caption: { es: "...", en: "..." } }   // caption es opcional
 *
 * Plantilla para copiar/pegar (pégala al PRINCIPIO del array):
 *
 * {
 *   slug: "titulo-corto-separado-por-guiones",
 *   title: { es: "...", en: "..." },
 *   category: ["instalacion"],
 *   location: "Ciudad, Estado",
 *   date: "2026-08",
 *   media: [{ type: "image", src: "https://..." }],
 *   shortDescription: { es: "...", en: "..." },
 *   content: [
 *     { type: "paragraph", text: { es: "...", en: "..." } },
 *   ],
 * },
 * ─────────────────────────────────────────────────────────────────
 */
export const workEntries: WorkEntry[] = [
  /**{
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
    ],
    shortDescription: {
      es: "Montaje y puesta en marcha de línea de empaque automatizada para planta de manufactura.",
      en: "Assembly and startup of an automated packaging line for a manufacturing plant.",
    },
    // Ejemplo con varios bloques: párrafo, imagen intercalada, más párrafos.
    content: [
      {
        type: "paragraph",
        text: {
          es: "El cliente había adquirido una línea de empaque nueva pero no contaba con personal técnico propio para instalarla ni integrarla con el resto de su planta.",
          en: "The client had purchased a new packaging line but had no in-house technical staff to install it or integrate it with the rest of the plant.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Nuestro equipo se encargó del montaje completo: nivelación y anclaje de los módulos, cableado eléctrico y neumático, y calibración de sensores de posición.",
          en: "Our team handled the full assembly: leveling and anchoring the modules, electrical and pneumatic wiring, and position sensor calibration.",
        },
      },
      {
        type: "media",
        item: { type: "image", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
        caption: {
          es: "Integración con el sistema de transporte existente en planta.",
          en: "Integration with the plant's existing conveyor system.",
        },
      },
      {
        type: "heading",
        text: { es: "Resultado", en: "Result" },
      },
      {
        type: "paragraph",
        text: {
          es: "La línea quedó operativa en 9 días, dos días antes del plazo comprometido, alcanzando el 100% de su capacidad nominal desde la primera semana.",
          en: "The line was operational in 9 days, two days ahead of the committed deadline, reaching 100% of nominal capacity from the first week.",
        },
      },
    ],
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
    ],
    shortDescription: {
      es: "Diagnóstico y reparación en sitio, vuelta a producción en menos de 48 horas.",
      en: "On-site diagnosis and repair, back to production in under 48 hours.",
    },
    // Ejemplo minimalista: un solo párrafo, nada más.
    content: [
      {
        type: "paragraph",
        text: {
          es: "Diagnosticamos desgaste en el mecanismo de crimpado y descalibración del sistema de presión. Reemplazamos las piezas con repuestos en stock y recalibramos según el lote específico del cliente, devolviendo la máquina a producción en 48 horas con un índice de rechazo por debajo del 0.5%.",
          en: "We diagnosed wear in the crimping mechanism and pressure system miscalibration. We replaced the parts with in-stock spares and recalibrated for the client's specific batch, returning the machine to production within 48 hours with a rejection rate below 0.5%.",
        },
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: {
          es: "La planta operaba bajo un esquema puramente correctivo, lo que generaba paradas no planificadas y dificultaba cumplir auditorías de calidad.",
          en: "The plant operated under a purely reactive model, causing unplanned downtime and making quality audits difficult to pass.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Diseñamos un programa trimestral a la medida, con checklist técnico y reporte fotográfico después de cada visita. Desde su implementación, la planta no ha registrado paradas no planificadas en las máquinas cubiertas.",
          en: "We designed a tailored quarterly program with a technical checklist and photo report after each visit. Since implementation, the plant has recorded zero unplanned downtime on the machines covered.",
        },
      },
    ],
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
    ],
    shortDescription: {
      es: "Entrega, instalación y calibración de equipo de dosificación de precisión.",
      en: "Delivery, installation, and calibration of precision dosing equipment.",
    },
    content: [
      {
        type: "paragraph",
        text: {
          es: "Gestionamos todo el proceso de punta a punta: selección del equipo, importación, transporte, instalación y calibración final con el producto real del cliente.",
          en: "We managed the entire process end to end: equipment selection, import, transport, installation, and final calibration with the client's actual product.",
        },
      },
      {
        type: "media",
        item: { type: "image", src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800" },
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: {
          es: "Medimos tiempos de ciclo estación por estación durante varios turnos e identificamos el cuello de botella real: una estación de inspección manual, no la máquina que todos sospechaban.",
          en: "We measured cycle times station by station across several shifts and identified the actual bottleneck: a manual inspection station, not the machine everyone suspected.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Tras el rediseño de flujo propuesto, el throughput de la línea aumentó 18% sin comprar maquinaria nueva ni contratar personal adicional.",
          en: "After the proposed workflow redesign, line throughput increased by 18% without purchasing new machinery or hiring additional staff.",
        },
      },
    ],
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
    ],
    shortDescription: {
      es: "Conversión de estación manual a etiquetado automático con sensor de posición.",
      en: "Conversion from manual to automatic labeling with position sensor.",
    },
    content: [
      {
        type: "paragraph",
        text: {
          es: "El etiquetado manual generaba variabilidad de posición y errores que el cliente final había reportado como no conformidad más de una vez.",
          en: "Manual labeling caused position variability and errors the end customer had flagged as non-conformance more than once.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Instalamos una estación automática con sensor de posición integrada al ritmo de la línea existente. Desde entonces, cero no conformidades por etiquetado, y se liberaron ~15 horas-hombre semanales.",
          en: "We installed an automatic station with a position sensor integrated to the pace of the existing line. Since then, zero labeling-related non-conformances, and roughly 15 person-hours per week freed up.",
        },
      },
    ],
  },**/
  {
    slug: "vffs-multihead-integration",
    title: {
      es: "Integración de Pesadora Multicabezal de 14 Cabezales y Empacadora Vertical en Línea de Producción",
      en: "Integration of 14-head Multihead Weigher and Vertical Packaging Machine into Production Line",
    },
    category: ["instalacion", "automatizacion"],
    location: "Miami, FL",
    date: "2026-08",
    media: [
      { type: "image", src: "/images/in-action/p1/p1_1.webp" },
      { type: "image", src: "/images/in-action/p1/p1_3.webp" },
      { type: "image", src: "/images/in-action/p1/p1_2.webp" },
      { type: "image", src: "/images/in-action/p1/p1_4.webp" },
    ],
    shortDescription: {
      es: "Suministro, instalación y comisionamiento de sistema de dosificación y empaque vertical para productos congelados.",
      en: "Supply, installation, and commissioning of a dosing and vertical packaging system for frozen products.",
    },
    content: [
      {
        type: "paragraph",
        text: {
          es: "Una empresa del sector de alimentos procesados requería automatizar el proceso de dosificación y empaque de productos congelados para presentaciones de 5 lb y 10 lb, garantizando precisión en el peso y sellado constante.",
          en: "A food processing manufacturing company required the automation of its frozen product dosing and packaging process for 5 lb and 10 lb formats, ensuring weight accuracy and reliable sealing.",
        },
      },
      {
        type: "heading",
        text: { es: "Solución implementada", en: "Implemented solution" },
      },
      {
        type: "paragraph",
        text: {
          es: "Se integró un sistema de empaque vertical (VFFS) compuesto por tres componentes principales: un elevador tipo Z para alimentación continua, una pesadora multicabezal de 14 cabezales independientes para la dosificación exacta y una empacadora vertical encargada del conformado y sellado de bolsas.",
          en: "A vertical form-fill-seal (VFFS) packaging system was integrated, consisting of three primary components: a Z-type elevator for continuous feeding, a 14-head multihead weigher for accurate dosing, and a vertical packaging machine responsible for bag forming and sealing.",
        },
      },
      {
        type: "media",
        item: { type: "image", src: "/images/in-action/p1/p1_2.webp" },
        caption: {
          es: "Sistema de pesadora multicabezal de 14 cabezales y elevador tipo Z.",
          en: "14-head multihead weighing system and Z-type elevator.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El alcance del proyecto abarcó la logística de importación puerta a puerta, ensamble e instalación en sitio, cableado, calibración y pruebas de funcionamiento sin carga y con producto real.",
          en: "The scope of work included door-to-door import logistics, on-site assembly and installation, wiring, calibration, and operational testing both dry and with actual product.",
        },
      },
      {
        type: "media",
        item: { type: "image", src: "/images/in-action/p1/p1_4.webp" },
        caption: {
          es: "Empacadora vertical (VFFS) durante las pruebas de sellado y conformado de bolsa.",
          en: "Vertical form-fill-seal (VFFS) machine during bag forming and sealing trials.",
        },
      },
      {
        type: "heading",
        text: { es: "Resultado y acompañamiento", en: "Result and support" },
      },
      {
        type: "paragraph",
        text: {
          es: "El sistema fue comisionado con éxito, logrando la dosificación y empaque automatizado en las especificaciones requeridas. Se realizó entrenamiento técnico al personal operativo y acompañamiento en rampa de producción hasta transferir la autonomía total del equipo al cliente.",
          en: "The system was successfully commissioned, achieving automated dosing and packaging according to required specifications. Technical training was provided to operating personnel, along with production ramp-up support until full operational autonomy was handed over to the client.",
        },
      },
      {
        type: "media",
        item: { type: "video", src: "https://www.youtube.com/shorts/XSDZdCesNxo" },
        caption: {
          es: "Línea completa operativa en planta de producción.",
          en: "Complete operational line at the manufacturing plant.",
        },
      },
    ],
  },
];
