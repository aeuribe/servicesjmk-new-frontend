"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SectionNumber } from "@/components/shared/SectionNumber";

const BusinessSegmentsSection = () => {
  const t = useTranslations("BusinessSegmentsSection");

  const segments = [
    {
      id: 1,
      title: t("segment1.title"),
      image: "/hero-image4.png",
    },
    {
      id: 2,
      title: t("segment2.title"),
      image: "/hero-image4.png",
    },
    {
      id: 3,
      title: t("segment3.title"),
      image: "/hero-image4.png",
    },
    {
      id: 4,
      title: t("segment4.title"),
      image: "/hero-image4.png",
    },
    {
      id: 5,
      title: t("segment5.title"),
      image: "/hero-image4.png",
    },
    {
      id: 6,
      title: t("segment6.title"),
      image: "/hero-image4.png",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white font-main relative">
      {/* Continuous Section Number Line - Extends to connect with previous section */}
      <div className="absolute left-4 lg:left-8 z-20 flex flex-col items-center" style={{ top: '-100vh', bottom: 0 }}>
        {/* Line extension from previous section - consistent color */}
        <div className="w-px bg-gray-400/50" style={{ height: '100vh' }}></div>
        {/* Number at the top of this section */}
        <span className="text-2xl font-bold drop-shadow-sm text-[#0a1929]/30">03</span>
        {/* Line extending down through this section - consistent color */}
        <div className="w-px bg-gray-400/50 flex-1"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-12 lg:mb-16 pl-12 lg:pl-16">
          <span className="text-gray-400 text-sm uppercase tracking-widest block mb-4">
            {t("pretitle")}
          </span>
          <div className="flex items-center justify-between">
            <h2 className="text-[#0a1929] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {t("title")}
            </h2>
            <Link
              href="/services"
              className="hidden lg:inline-flex items-center gap-2 text-[#0a1929] font-semibold hover:gap-4 transition-all duration-300 group uppercase tracking-wider"
            >
              {t("readMore")}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Grid of Segments */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pl-12 lg:pl-16">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={segment.image}
                alt={segment.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white font-semibold text-base md:text-lg lg:text-xl">
                  {segment.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSegmentsSection;

