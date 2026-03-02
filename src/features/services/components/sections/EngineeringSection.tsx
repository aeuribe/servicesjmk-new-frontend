"use client";

import { useTranslations } from "next-intl";
import { ServiceFeatureBlock } from "../ServiceFeatureBlock";
import { engineeringGallery } from "../../data/galleries";
import { ProcessIcon, DigitalTwinIcon, FeasibilityIcon } from "../../config/serviceIcons";
import type { ServiceData } from "../../types";

export function EngineeringSection() {
  const t = useTranslations("ServicesPage");

  const service: ServiceData = {
    id: "engineering",
    sectionNumber: t("services.engineering.sectionNumber"),
    title: t("services.engineering.title"),
    subtitle: t("services.engineering.subtitle"),
    description: t("services.engineering.description"),
    iconKey: "engineering",
    gallery: engineeringGallery,
    layout: "text-left",
    colorTheme: "blue",
    benefits: [
      { title: t("services.engineering.benefits.processOptimization"), icon: ProcessIcon },
      { title: t("services.engineering.benefits.digitalTwinDesign"), icon: DigitalTwinIcon },
      { title: t("services.engineering.benefits.feasibilityStudies"), icon: FeasibilityIcon },
    ],
  };

  return <ServiceFeatureBlock service={service} />;
}
