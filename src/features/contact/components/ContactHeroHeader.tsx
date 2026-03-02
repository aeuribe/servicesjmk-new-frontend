import React from "react";

interface ContactHeroHeaderProps {
  t: (key: string) => string;
  isVisible: boolean;
}

export function ContactHeroHeader({ t, isVisible }: ContactHeroHeaderProps) {
  return (
    <div
      className={`mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: "0.1s" }}
    >
      <div className="inline-block mb-6">
        <span className="text-[#2563eb] tracking-[0.3em] uppercase text-xs font-semibold">
          {t("heroSection.getInTouch") || "Initiate Contact Protocol"}
        </span>
        <div className="h-px bg-gradient-to-r from-transparent via-[#2563eb] to-transparent mt-2"></div>
      </div>
      <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight font-bold">
        {t("heroSection.headline") || "Mission Control Interface"}
      </h1>
      <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
        {t("heroSection.description") ||
          "Connect with our engineering team. Submit your project request through our secure interface."}
      </p>
    </div>
  );
}

