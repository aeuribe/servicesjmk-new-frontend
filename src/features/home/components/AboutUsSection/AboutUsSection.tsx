"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SectionNumber } from "@/components/shared/SectionNumber";

const AboutUsSection = () => {
  const t = useTranslations("AboutUsSection");

  return (
    <section className="py-20 lg:py-32 font-main relative overflow-hidden">
      {/* Fondo con gradiente fijo para continuidad con sección anterior */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)',
          backgroundAttachment: 'fixed',
          backgroundSize: '100% 100vh'
        }}
      >
        {/* Subtle background pattern for depth */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
            backgroundAttachment: 'fixed'
          }}></div>
        </div>
      </div>
      
      {/* Continuous Section Number Line - Extends to connect with previous section */}
      <div className="absolute left-4 lg:left-8 z-20 flex flex-col items-center" style={{ top: '-100vh', bottom: 0 }}>
        {/* Line extension from previous section - consistent color */}
        <div className="w-px bg-gray-400/50" style={{ height: '100vh' }}></div>
        {/* Number at the top of this section */}
        <span className="text-2xl font-bold drop-shadow-sm text-white/60">02</span>
        {/* Line extending down through this section - consistent color */}
        <div className="w-px bg-gray-400/50 flex-1"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pl-12 lg:pl-16">
          {/* Left - Content with enhanced contrast */}
          <div className="relative">
            {/* Glow effect behind content */}
            <div className="absolute -left-8 top-0 w-64 h-64 bg-[#2563eb]/10 rounded-full blur-3xl opacity-50"></div>
            
            <div className="mb-6 relative z-10">
              <span className="text-[#2563eb] text-sm uppercase tracking-widest block mb-3 font-semibold">
                {t("pretitle")}
              </span>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                {t("title")}
              </h2>
            </div>
            
            <div className="space-y-6 mb-8 relative z-10">
              <p className="text-gray-200 text-lg leading-relaxed font-light">
                {t("description")}
              </p>
              <p className="text-gray-200 text-lg leading-relaxed font-light">
                {t("description2")}
              </p>
            </div>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all duration-300 group uppercase tracking-wider relative z-10"
            >
              <span className="relative">
                {t("readMore")}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2563eb] group-hover:w-full transition-all duration-300"></span>
              </span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#2563eb]"
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

          {/* Right - Image with enhanced styling */}
          <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2563eb]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
            
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl border border-white/10 group-hover:border-[#2563eb]/30 transition-all duration-500">
              <Image
                src="/hero-image4.png"
                alt={t("imageAlt")}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

