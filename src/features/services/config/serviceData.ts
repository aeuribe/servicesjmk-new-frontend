import { GalleryItem } from "@/components/gallery/ServiceGallery";
import { ServiceData } from "../types";
import { ProcessIcon, DigitalTwinIcon, FeasibilityIcon } from "./serviceIcons";

// Gallery Data - Separated for easy content management
export const engineeringGallery: GalleryItem[] = [
  {
    type: "image",
    src: "/placa-jmk.png",
    thumbnail: "/placa-jmk.png",
    title: "CAD Design - Manufacturing Plant",
    alt: "Engineering CAD design",
  },
  {
    type: "image",
    src: "/founder.jpg",
    thumbnail: "/founder.jpg",
    title: "Site Survey - Industrial Facility",
    alt: "Site survey",
  },
  {
    type: "image",
    src: "/brazo.png",
    thumbnail: "/brazo.png",
    title: "Blueprint Analysis - Production Line",
    alt: "Blueprint analysis",
  },
];

export const automationGallery: GalleryItem[] = [
  {
    type: "image",
    src: "/brazo.png",
    thumbnail: "/brazo.png",
    title: "Robotic Arm Installation - Assembly Line",
    alt: "Robotic arm",
  },
  {
    type: "image",
    src: "/placa-jmk.png",
    thumbnail: "/placa-jmk.png",
    title: "HMI Screen - Control System",
    alt: "HMI screen",
  },
  {
    type: "image",
    src: "/founder.jpg",
    thumbnail: "/founder.jpg",
    title: "Conveyor Automation - Distribution Center",
    alt: "Conveyor system",
  },
];

export const machineryGallery: GalleryItem[] = [
  {
    type: "image",
    src: "/brazo.png",
    thumbnail: "/brazo.png",
    title: "Industrial Robot - KUKA KR210",
    alt: "Industrial robot",
  },
  {
    type: "image",
    src: "/placa-jmk.png",
    thumbnail: "/placa-jmk.png",
    title: "Equipment Installation - Production Floor",
    alt: "Equipment installation",
  },
  {
    type: "image",
    src: "/founder.jpg",
    thumbnail: "/founder.jpg",
    title: "Machinery Catalog - Custom Solutions",
    alt: "Machinery catalog",
  },
];

export const maintenanceGallery: GalleryItem[] = [
  {
    type: "image",
    src: "/founder.jpg",
    thumbnail: "/founder.jpg",
    title: "Before/After - PLC Upgrade",
    alt: "PLC upgrade",
  },
  {
    type: "image",
    src: "/brazo.png",
    thumbnail: "/brazo.png",
    title: "Technician On-Site - Preventive Maintenance",
    alt: "Technician maintenance",
  },
  {
    type: "image",
    src: "/placa-jmk.png",
    thumbnail: "/placa-jmk.png",
    title: "System Diagnostics - Real-Time Monitoring",
    alt: "System diagnostics",
  },
];

// Service data factory function that uses translations
export const createServiceData = (t: ReturnType<typeof import("../hooks/useServicesTranslations").useServicesTranslations>): ServiceData[] => [
  {
    id: "engineering",
    sectionNumber: t.services.engineering.sectionNumber,
    title: t.services.engineering.title,
    subtitle: t.services.engineering.subtitle,
    description: t.services.engineering.description,
    iconKey: "engineering",
    gallery: engineeringGallery,
    layout: "text-left",
    colorTheme: "blue",
    metrics: [
      { label: t.services.engineering.metrics.projectsDelivered, value: "500+" },
      { label: t.services.engineering.metrics.efficiencyGain, value: "35% avg" },
    ],
    benefits: [
      { title: t.services.engineering.benefits.processOptimization, icon: ProcessIcon },
      { title: t.services.engineering.benefits.digitalTwinDesign, icon: DigitalTwinIcon },
      { title: t.services.engineering.benefits.feasibilityStudies, icon: FeasibilityIcon },
    ],
  },
  {
    id: "automation",
    sectionNumber: t.services.automation.sectionNumber,
    title: t.services.automation.title,
    subtitle: t.services.automation.subtitle,
    description: t.services.automation.description,
    iconKey: "automation",
    gallery: automationGallery,
    layout: "text-right",
    colorTheme: "white",
    metrics: [
      { label: t.services.automation.metrics.uptimeImprovement, value: "98.5%" },
      { label: t.services.automation.metrics.costReduction, value: "42% avg" },
    ],
    keywords: [
      t.services.automation.keywords.predictiveAnalytics,
      t.services.automation.keywords.iotIntegration,
      t.services.automation.keywords.realTimeMonitoring,
      t.services.automation.keywords.support247,
    ],
  },
  {
    id: "machinery",
    sectionNumber: t.services.machinery.sectionNumber,
    title: t.services.machinery.title,
    subtitle: t.services.machinery.subtitle,
    description: t.services.machinery.description,
    iconKey: "machinery",
    gallery: machineryGallery,
    layout: "text-left",
    colorTheme: "dark-blue",
    metrics: [
      { label: t.services.machinery.metrics.unitsSupplied, value: "2,500+" },
      { label: t.services.machinery.metrics.countriesServed, value: "45+" },
    ],
    keywords: [
      t.services.machinery.keywords.globalSourcing,
      t.services.machinery.keywords.customConfig,
      t.services.machinery.keywords.rapidDeployment,
      t.services.machinery.keywords.lifecycleManagement,
    ],
    externalLink: t.services.machinery.externalLink,
    externalLinkText: t.services.machinery.externalLinkText,
  },
  {
    id: "maintenance",
    sectionNumber: t.services.maintenance.sectionNumber,
    title: t.services.maintenance.title,
    subtitle: t.services.maintenance.subtitle,
    description: t.services.maintenance.description,
    iconKey: "automation",
    gallery: maintenanceGallery,
    layout: "text-right",
    colorTheme: "white",
    metrics: [
      { label: t.services.maintenance.metrics.uptimeImprovement, value: "98.5%" },
      { label: t.services.maintenance.metrics.responseTime, value: "< 2hrs" },
    ],
    keywords: [
      t.services.maintenance.keywords.preventiveMaintenance,
      t.services.maintenance.keywords.predictiveAnalytics,
      t.services.maintenance.keywords.support247,
      t.services.maintenance.keywords.remoteDiagnostics,
    ],
  },
];

