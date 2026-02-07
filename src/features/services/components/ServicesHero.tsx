"use client";
import React from "react";
import Link from "next/link";
import { useServicesTranslations } from "../hooks/useServicesTranslations";

export const ServicesHero: React.FC = () => {
  const t = useServicesTranslations();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient matching Home page */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100vh",
        }}
      >
        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none" />

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
      </div>

      {/* Section Number Line */}
      <div className="absolute left-4 lg:left-8 top-16 bottom-0 z-20 flex flex-col items-center">
        <span className="text-2xl font-bold drop-shadow-sm text-white/60">
          01
        </span>
        <div className="w-px bg-gray-400/50 flex-1"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-32 pb-16">
        <div className="max-w-4xl pl-12 lg:pl-16">
          <div className="mb-6">
            <span className="text-[#2563eb] text-sm uppercase tracking-widest block mb-4 font-semibold">
              {t.hero.badge}
            </span>
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              {t.hero.title1}
              <br />
              {t.hero.title2}
            </h1>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-2xl">
              {t.hero.description}
            </p>
            <Link href="/contact" passHref>
              <button
                className="bg-[#2563eb] text-white px-8 py-4 text-base sm:text-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 uppercase tracking-wider inline-flex items-center gap-3 group relative"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
                }}
              >
                <span className="relative z-10">{t.hero.button}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10"
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
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

