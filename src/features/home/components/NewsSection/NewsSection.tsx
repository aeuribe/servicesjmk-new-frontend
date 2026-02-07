"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SectionNumber } from "@/components/shared/SectionNumber";

const NewsSection = () => {
  const t = useTranslations("NewsSection");

  const newsItems = [
    {
      id: 1,
      title: t("news1.title"),
      date: t("news1.date"),
      image: "/hero-image4.png",
    },
    {
      id: 2,
      title: t("news2.title"),
      date: t("news2.date"),
      image: "/hero-image4.png",
    },
    {
      id: 3,
      title: t("news3.title"),
      date: t("news3.date"),
      image: "/hero-image4.png",
    },
    {
      id: 4,
      title: t("news4.title"),
      date: t("news4.date"),
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
        <span className="text-2xl font-bold drop-shadow-sm text-[#0a1929]/30">05</span>
        {/* Line extending down through this section with circle at bottom - consistent color */}
        <div className="w-px bg-gray-400/50 flex-1 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-black border border-gray-400/50 flex items-center justify-center z-10">
            <span className="text-white font-semibold text-lg">N</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-12 lg:mb-16 pl-12 lg:pl-16">
          <h2 className="text-[#0a1929] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {t("title")}
          </h2>
          <Link
            href="/news"
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pl-12 lg:pl-16">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[#0a1929] font-semibold text-lg mb-2 group-hover:text-gray-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

