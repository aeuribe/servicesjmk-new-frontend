"use client";

import { useTranslations } from "next-intl";
import { ServiceFeatureBlock } from "../ServiceFeatureBlock";
import { machineryGallery } from "../../data/galleries";
import type { ServiceData } from "../../types";

export function MachinerySection() {
  const t = useTranslations("ServicesPage");

  const service: ServiceData = {
    id: "machinery",
    sectionNumber: t("services.machinery.sectionNumber"),
    title: t("services.machinery.title"),
    subtitle: t("services.machinery.subtitle"),
    description: t("services.machinery.description"),
    iconKey: "machinery",
    gallery: machineryGallery,
    layout: "text-left",
    colorTheme: "blue",
    keywords: [
      t("services.machinery.keywords.equipmentSourcing"),
      t("services.machinery.keywords.heavyLogistics"),
      t("services.machinery.keywords.delivery"),
      t("services.machinery.keywords.readyToRun"),
    ],
    externalLink: t("services.machinery.externalLink"),
    externalLinkText: t("services.machinery.externalLinkText"),
  };

  return <ServiceFeatureBlock service={service} />;
}
