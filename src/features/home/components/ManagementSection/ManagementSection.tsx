"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { ManagementSectionNumber } from "./components/ManagementSectionNumber";
import { ManagementSectionHeader } from "./components/ManagementSectionHeader";
import { NavigationArrows } from "./components/NavigationArrows";
import { useDirectorsSlider } from "./hooks/useDirectorsSlider";
import { DirectorsGrid } from "./components/DirectorsGrid";

interface DirectorItem {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

const getDirectors = (
  t: ReturnType<typeof useTranslations>,
): DirectorItem[] => [
  {
    id: 1,
    name: t("director1.name"),
    title: t("director1.title"),
    description: t("director1.description"),
    image: "/hero-image4.png",
  },
  {
    id: 2,
    name: t("director2.name"),
    title: t("director2.title"),
    description: t("director2.description"),
    image: "/kleyder.png",
  },
  {
    id: 3,
    name: t("director3.name"),
    title: t("director3.title"),
    description: t("director3.description"),
    image: "/me2.png",
  },
];

const ManagementSection = () => {
  const t = useTranslations("ManagementSection");

  const directors = getDirectors(t);
  const { currentIndex, next, prev } = useDirectorsSlider(directors.length);

  return (
    <section
      className="py-20 lg:py-32 font-main relative"
      style={{
        background:
          "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100vh",
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
      <ManagementSectionNumber />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ManagementSectionHeader t={t} />

        <NavigationArrows next={next} prev={prev} />

        <DirectorsGrid directors={directors} currentIndex={currentIndex} />
      </div>
    </section>
  );
};

export default ManagementSection;
