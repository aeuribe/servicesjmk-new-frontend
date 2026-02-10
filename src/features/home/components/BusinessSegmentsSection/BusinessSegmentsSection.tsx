"use client";

import { useTranslations } from "next-intl";
import { BusinessSectionNumber } from "./components/BusinessSectionNumber";
import { BusinessSectionHeader } from "./components/BusinessSectionHeader";
import { BusinessSegmentsGrid } from "./components/BusinessSegmentsGrid";

interface SegmentItem {
  id: number;
  title: string;
  image: string;
}

const BusinessSegmentsSection = () => {
  const t = useTranslations("BusinessSegmentsSection");

  const segments: SegmentItem[] = [
    { id: 1, title: t("segment1.title"), image: "/hero-image4.png" },
    { id: 2, title: t("segment2.title"), image: "/hero-image4.png" },
    { id: 3, title: t("segment3.title"), image: "/hero-image4.png" },
    { id: 4, title: t("segment4.title"), image: "/hero-image4.png" },
    { id: 5, title: t("segment5.title"), image: "/hero-image4.png" },
    { id: 6, title: t("segment6.title"), image: "/hero-image4.png" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white font-main relative">
      <BusinessSectionNumber />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <BusinessSectionHeader t={t} />
        <BusinessSegmentsGrid segments={segments} />
      </div>
    </section>
  );
};

export default BusinessSegmentsSection;
