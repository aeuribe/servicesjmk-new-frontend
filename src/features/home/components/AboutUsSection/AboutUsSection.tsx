"use client";

import { useTranslations } from "next-intl";
import { AboutSectionNumber } from "./components/AboutSectionNumber";
import { AboutBackground } from "./components/AboutBackground";
import { AboutContent } from "./components/AboutContent";
import { AboutImage } from "./components/AboutImage";

const AboutUsSection = () => {
  const t = useTranslations("AboutUsSection");

  return (
    <section className="py-20 lg:py-32 font-main relative overflow-hidden">
      <AboutBackground />

      <AboutSectionNumber />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pl-12 lg:pl-16">
          <AboutContent t={t} />
          <AboutImage t={t} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
