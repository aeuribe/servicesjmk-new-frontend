"use client";
import { useTranslations } from "next-intl";
import { ServiceHeroCTA } from "./ServiceHeroCTA";

export function HeroContent() {
  const t = useTranslations("ServicesPage");

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 lg:pt-32 pb-10 sm:pb-16">
      <div className="max-w-4xl pl-10 sm:pl-12 lg:pl-16">
        <span className="text-[#2563eb] text-xs sm:text-sm uppercase tracking-widest block mb-3 sm:mb-4 font-semibold">
          {t("hero.badge")}
        </span>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6">
          {t("hero.title1")}
          <br />
          {t("hero.title2")}
        </h1>

        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light max-w-2xl leading-relaxed">
          {t("hero.description")}
        </p>

        <ServiceHeroCTA label={t("hero.button")} />
      </div>
    </div>
  );
}