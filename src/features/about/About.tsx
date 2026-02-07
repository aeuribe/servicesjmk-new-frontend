"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface AboutUsProps {
  onNavigateToContact: () => void;
}

// Pillar Icons - Electric Blue
const LogisticsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    />
  </svg>
);

const HeritageIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const MasteryIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

export default function AboutUs({ onNavigateToContact }: AboutUsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const t = useTranslations("About");

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const leadership = [
    {
      id: "director",
      name: t("leadership.director.name"),
      role: t("leadership.director.role"),
      bio: t("leadership.director.bio"),
      image: "/team/director.jpg", // Placeholder - replace with actual image
    },
    {
      id: "kleyder",
      name: t("leadership.kleyder.name"),
      role: t("leadership.kleyder.role"),
      bio: t("leadership.kleyder.bio"),
      image: "/team/kleyder.jpg", // Placeholder - replace with actual image
    },
    {
      id: "cto",
      name: t("leadership.cto.name"),
      role: t("leadership.cto.role"),
      bio: t("leadership.cto.bio"),
      image: "/team/cto.jpg", // Placeholder - replace with actual image
    },
  ];

  return (
    <div className="min-h-screen font-main relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .image-bw {
          filter: grayscale(100%);
          transition: filter 0.4s ease;
        }
        .image-color {
          filter: grayscale(0%);
        }
      `}</style>

      {/* Hero Block - Corporate Profile */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark Industrial Background */}
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
          <div className="w-px bg-white/30 flex-1"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-32 pb-16">
          <div className="max-w-6xl mx-auto pl-12 lg:pl-16">
            {/* Split Layout: Text Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Text Content */}
              <div
                className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "0.1s" }}
              >
                {/* Headline */}
                <div>
                  <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 uppercase tracking-tight">
                    {t("heroHeadline")}
                  </h1>
                  <div className="h-px bg-gradient-to-r from-[#00D4FF] to-transparent w-32 mb-6"></div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-white/90 text-lg leading-relaxed">
                    {t("heroDescription1")}
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {t("heroDescription2")}
                  </p>
                </div>

                {/* Three Pillars with Electric Blue Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-[#00D4FF]/20 flex items-center justify-center border border-[#00D4FF]/30">
                      <LogisticsIcon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                      {t("pillars.logistics.title")}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {t("pillars.logistics.description")}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-[#00D4FF]/20 flex items-center justify-center border border-[#00D4FF]/30">
                      <HeritageIcon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                      {t("pillars.heritage.title")}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {t("pillars.heritage.description")}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-[#00D4FF]/20 flex items-center justify-center border border-[#00D4FF]/30">
                      <MasteryIcon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                      {t("pillars.mastery.title")}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {t("pillars.mastery.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div
                className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "0.2s" }}
              >
                <div
                  className="relative w-full h-[500px] lg:h-[600px] overflow-hidden"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
                    filter: "drop-shadow(0 20px 40px rgba(0, 212, 255, 0.2))",
                  }}
                >
                  {!imageErrors["hero-image"] ? (
                    <Image
                      src="/miami-skyline.jpg" // Placeholder - replace with actual Miami skyline or tech map image
                      alt="Miami Skyline / Abstract Tech Map"
                      fill
                      className="object-cover"
                      priority
                      onError={() => setImageErrors(prev => ({ ...prev, "hero-image": true }))}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#00D4FF]/20 to-[#2563eb]/20"></div>
                  )}
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Pyramid Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Slightly lighter dark grey background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #1e1e1e 0%, #252525 50%, #1e1e1e 100%)",
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100vh",
          }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-3">
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
        <div className="absolute left-4 lg:left-8 top-0 bottom-0 z-20 flex flex-col items-center">
          <span className="text-2xl font-bold drop-shadow-sm text-white/60">
            02
          </span>
          <div className="w-px bg-white/30 flex-1"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 lg:pl-16">
          {/* Section Header */}
          <div
            className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-[#00D4FF] tracking-[0.3em] uppercase text-xs font-semibold block mb-4">
              {t("leadership.pretitle")}
            </span>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {t("leadership.title")}
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent w-32 mx-auto"></div>
          </div>

          {/* Leadership Pyramid */}
          <div className="flex flex-col items-center space-y-8">
            {/* Row 1: Director of Operations (Top Center, 20% larger) */}
            <div
              className={`w-full max-w-lg mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 relative overflow-hidden group hover:border-[#00D4FF]/50 transition-all duration-300"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
                  filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
                }}
                onMouseEnter={() => setHoveredCard("director")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Image - Larger for Director (20% larger card) */}
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#00D4FF]/30 bg-white/5">
                    {!imageErrors[leadership[0].id] ? (
                      <Image
                        src={leadership[0].image || "/placeholder-avatar.jpg"}
                        alt={leadership[0].name}
                        fill
                        className={`object-cover ${hoveredCard === "director" ? "image-color" : "image-bw"}`}
                        onError={() => setImageErrors(prev => ({ ...prev, [leadership[0].id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
                        Photo
                      </div>
                    )}
                  </div>
                  {/* Name & Role */}
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-1">
                      {leadership[0].name}
                    </h3>
                    <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-wide mb-3">
                      {leadership[0].role}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                      {leadership[0].bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Two Cards Side-by-Side */}
            <div
              className={`grid md:grid-cols-2 gap-8 w-full max-w-4xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              {/* Business Development Director */}
              <div
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 relative overflow-hidden group hover:border-[#00D4FF]/50 transition-all duration-300"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
                  filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
                }}
                onMouseEnter={() => setHoveredCard("kleyder")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Image */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#00D4FF]/30 bg-white/5">
                    {!imageErrors[leadership[1].id] ? (
                      <Image
                        src={leadership[1].image || "/placeholder-avatar.jpg"}
                        alt={leadership[1].name}
                        fill
                        className={`object-cover ${hoveredCard === "kleyder" ? "image-color" : "image-bw"}`}
                        onError={() => setImageErrors(prev => ({ ...prev, [leadership[1].id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/40 text-xs">
                        Photo
                      </div>
                    )}
                  </div>
                  {/* Name & Role */}
                  <div>
                    <h3 className="text-white text-lg font-bold mb-1">
                      {leadership[1].name}
                    </h3>
                    <p className="text-[#00D4FF] text-xs font-semibold uppercase tracking-wide mb-3">
                      {leadership[1].role}
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {leadership[1].bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTO */}
              <div
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 relative overflow-hidden group hover:border-[#00D4FF]/50 transition-all duration-300"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
                  filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
                }}
                onMouseEnter={() => setHoveredCard("cto")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Image */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#00D4FF]/30 bg-white/5">
                    {!imageErrors[leadership[2].id] ? (
                      <Image
                        src={leadership[2].image || "/placeholder-avatar.jpg"}
                        alt={leadership[2].name}
                        fill
                        className={`object-cover ${hoveredCard === "cto" ? "image-color" : "image-bw"}`}
                        onError={() => setImageErrors(prev => ({ ...prev, [leadership[2].id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/40 text-xs">
                        Photo
                      </div>
                    )}
                  </div>
                  {/* Name & Role */}
                  <div>
                    <h3 className="text-white text-lg font-bold mb-1">
                      {leadership[2].name}
                    </h3>
                    <p className="text-[#00D4FF] text-xs font-semibold uppercase tracking-wide mb-3">
                      {leadership[2].role}
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {leadership[2].bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
