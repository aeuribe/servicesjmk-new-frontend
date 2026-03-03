"use client";
import { HeroBackground } from "./ServicesHero/HeroBackground";
import { HeroSectionNumber } from "./ServicesHero/ServiceHeroSectionNumber";
import { HeroContent } from "./ServicesHero/ServiceHeroContent";

export const ServicesHero = () => {

  return (
    <section
      className="relative min-h-[100dvh] sm:min-h-screen flex items-center justify-center overflow-hidden max-md:[background-attachment:scroll]"
      style={{
        background:
          "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100vh",
      }}
    >
      <HeroBackground />
      <HeroSectionNumber />
      <HeroContent />
    </section>
  );
};
