"use client";

import { useTranslations } from "next-intl";
import { BusinessSectionNumber } from "./components/BusinessSectionNumber";
import { BusinessSectionHeader } from "./components/BusinessSectionHeader";
import { BusinessSegmentsGrid } from "./components/BusinessSegmentsGrid";

interface SegmentItem {
  id: number;
  title: string;
  description:string;
  image: string;
}

const BusinessSegmentsSection = () => {
  const t = useTranslations("BusinessSegmentsSection");

  const segments: SegmentItem[] = [
    { id: 1, description: t("segment1.description"), title: t("segment1.title"), image: "/business_section_1.jpg" },
    { id: 2, description: t("segment2.description"), title: t("segment2.title"), image: "/business_section_2.jpg" },
    { id: 3, description: t("segment3.description"), title: t("segment3.title"), image: "/business_section_3.png" },
    { id: 4, description: t("segment4.description"), title: t("segment4.title"), image: "/business_section_4.jpg" },
    { id: 5, description: t("segment5.description"), title: t("segment5.title"), image: "/business_section_5.jpg" },
    { id: 6, description: t("segment6.description"), title: t("segment6.title"), image: "/business_section_6.jpg" },
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
