"use client";

import { useTranslations } from "next-intl";
import { HeroBackground } from "./components/HeroBackground";
import { HeroImageCard } from "./components/HeroImageCard";
import { useHeroSlider } from "./hooks/useHeroSlider";
import { HeroProgressBar } from "./components/HeroPogressBar";
import { useHeroProgress } from "./hooks/useHeroProgress";
import { HeroSectionNumber } from "./components/HeroSectionNumber";
import { HeroContent } from "./components/HeroContent";

const HERO_IMAGES = [
  { src: "/placa-jmk.png", alt: "Industrial Services JMK" },
  { src: "/founder.jpg", alt: "Technology Robot Arm" },
  { src: "/brazo.png", alt: "Technology Robot Arm" },
];

const SLIDE_DURATION = 7000; // ms
const PROGRESS_INTERVAL = 50; // ms

const Hero = () => {
  const t = useTranslations("Hero");
  const currentIndex = useHeroSlider(HERO_IMAGES.length, SLIDE_DURATION);
  const progress = useHeroProgress(SLIDE_DURATION, PROGRESS_INTERVAL, currentIndex);

  return (
    <section className="relative min-h-screen flex items-center justify-center font-main overflow-hidden">
      <HeroBackground />

      <HeroImageCard images={HERO_IMAGES} currentIndex={currentIndex} />

      <HeroProgressBar progress={progress} />

      <HeroSectionNumber />

      <HeroContent t={t} />
    </section>
  );
};

export default Hero;









