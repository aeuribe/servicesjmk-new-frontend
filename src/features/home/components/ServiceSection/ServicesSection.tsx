"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

// Custom SVG Icons
const WrenchHammerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
    />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const RepairServiceIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
    />
  </svg>
);

const PencilRulerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

const ServiceCard = ({ service, index, isVisible }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className={`bg-white border border-gray-200 hover:border-[#19165F]/30 transition-all duration-500 group relative overflow-hidden shadow-lg hover:shadow-2xl ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#19165F] via-[#E53E3E] to-[#19165F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#19165F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]">
        {/* Header with icons */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#19165F] to-[#19165F]/80 flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
            <div className="absolute inset-0 bg-[#E53E3E] transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Arrow icon */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 group-hover:border-[#E53E3E] transition-all duration-300 group-hover:bg-[#E53E3E]">
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-all duration-300 ${
                isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-[#19165F] group-hover:text-[#E53E3E] transition-colors duration-300 text-xl sm:text-2xl lg:text-3xl">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#E53E3E] to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default function ServicesShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("ServicesSection");

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      title: t("title1"),
      description:
        t("description1"),
      icon: WrenchHammerIcon,
    },
    {
      id: 2,
      title: t("title2"),
      description: t("description2"),
      icon: SettingsIcon,
    },
    {
      id: 3,
      title: t("title3"),
      description:
        t("description3"),
      icon: SearchIcon,
    },
    {
      id: 4,
      title: t("title4"),
      description: t("description4"),
      icon: RepairServiceIcon,
    },
    {
      id: 5,
      title: t("title5"),
      description: t("description5"),
      icon: PencilRulerIcon,
    },
    {
      id: 6,
      title: t("title6"),
      description: t("description6"),
      icon: BriefcaseIcon,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-[#19165F]/5 font-main py-16 sm:py-20 lg:py-32">
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
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div
            className={`inline-block mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-[#19165F]/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs">
              {t("pretitle")}
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-[#E53E3E] to-transparent mt-3"></div>
          </div>

          <div
            className={`space-y-4 sm:space-y-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-[#19165F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mx-auto max-w-4xl px-4">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed px-4">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 sm:mt-20 lg:mt-24 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="inline-block">
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              {t("ctaText")}
            </p>
            <Link href="/services">
              <button className="bg-[#19165F] text-white px-8 sm:px-10 py-4 sm:py-5 hover:bg-[#19165F]/90 transition-all duration-300 inline-flex items-center gap-3 group relative overflow-hidden shadow-lg hover:shadow-xl">
                <span className="relative z-10">{t("ctaButton")}</span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#E53E3E] to-[#E53E3E]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
