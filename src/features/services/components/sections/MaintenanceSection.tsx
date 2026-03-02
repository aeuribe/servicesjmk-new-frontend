"use client";

import { useTranslations } from "next-intl";
import { ServiceFeatureBlock } from "../ServiceFeatureBlock";
import { maintenanceGallery } from "../../data/galleries";
import type { ServiceData } from "../../types";

export function MaintenanceSection() {
  const t = useTranslations("ServicesPage");

  const service: ServiceData = {
    id: "maintenance",
    sectionNumber: t("services.maintenance.sectionNumber"),
    title: t("services.maintenance.title"),
    subtitle: t("services.maintenance.subtitle"),
    description: t("services.maintenance.description"),
    iconKey: "automation",
    gallery: maintenanceGallery,
    layout: "text-right",
    colorTheme: "white",
    keywords: [
      t("services.maintenance.keywords.preventive"),
      t("services.maintenance.keywords.corrective"),
      t("services.maintenance.keywords.overhaul"),
      t("services.maintenance.keywords.emergencySupport"),
      
    ],
  };

  return <ServiceFeatureBlock service={service} />;
}
