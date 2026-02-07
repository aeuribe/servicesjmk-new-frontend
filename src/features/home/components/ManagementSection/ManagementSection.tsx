"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionNumber } from "@/components/shared/SectionNumber";

const ManagementSection = () => {
  const t = useTranslations("ManagementSection");
  const [currentIndex, setCurrentIndex] = useState(0);

  const directors = [
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
      image: "/hero-image4.png",
    },
    {
      id: 3,
      name: t("director3.name"),
      title: t("director3.title"),
      description: t("director3.description"),
      image: "/hero-image4.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % directors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + directors.length) % directors.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-[#0a1929] font-main relative">
      {/* Continuous Section Number Line - Extends to connect with previous section */}
      <div className="absolute left-4 lg:left-8 z-20 flex flex-col items-center" style={{ top: '-100vh', bottom: 0 }}>
        {/* Line extension from previous section - consistent color */}
        <div className="w-px bg-gray-400/50" style={{ height: '100vh' }}></div>
        {/* Number at the top of this section */}
        <span className="text-2xl font-bold drop-shadow-sm text-white/30">04</span>
        {/* Line extending down through this section - consistent color */}
        <div className="w-px bg-gray-400/50 flex-1"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-12 lg:mb-16 pl-12 lg:pl-16">
          <span className="text-gray-400 text-sm uppercase tracking-widest block mb-4">
            {t("pretitle")}
          </span>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {t("title")}
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300"
            aria-label="Previous director"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300"
            aria-label="Next director"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-12 lg:pl-16">
          {directors.map((director, index) => (
            <div
              key={director.id}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-70 scale-95"
              }`}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2 text-center">
                {director.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4 text-center">
                {director.title}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {director.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;

