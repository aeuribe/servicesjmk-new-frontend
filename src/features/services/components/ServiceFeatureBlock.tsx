"use client";
import React from "react";
import ServiceGallery, { GalleryItem } from "@/components/gallery/ServiceGallery";
import { ServiceData, ColorTheme } from "../types";
import { serviceIcons } from "../config/serviceIcons";

interface ServiceFeatureBlockProps {
  service: ServiceData;
}

const colorThemes: Record<"blue" | "white" | "dark-blue", ColorTheme> = {
  blue: {
    background: "linear-gradient(135deg, #07296b 0%, #051d4d 50%, #07296b 100%)",
    textPrimary: "text-white",
    textSecondary: "text-white/90",
    textTertiary: "text-white/70",
    border: "border-white/20",
    cardBg: "bg-white/12",
    iconBg: "bg-white/20",
    numberColor: "text-white/60",
    lineColor: "bg-white/30",
  },
  white: {
    background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
    textPrimary: "text-[#07296b]",
    textSecondary: "text-gray-800",
    textTertiary: "text-gray-600",
    border: "border-[#07296b]/20",
    cardBg: "bg-[#07296b]/8",
    iconBg: "bg-[#07296b]/10",
    numberColor: "text-[#07296b]/40",
    lineColor: "bg-[#07296b]/20",
  },
  "dark-blue": {
    background: "linear-gradient(135deg, #051d4d 0%, #031530 50%, #051d4d 100%)",
    textPrimary: "text-white",
    textSecondary: "text-white/90",
    textTertiary: "text-white/70",
    border: "border-white/20",
    cardBg: "bg-white/12",
    iconBg: "bg-white/20",
    numberColor: "text-white/60",
    lineColor: "bg-white/30",
  },
};

export const ServiceFeatureBlock: React.FC<ServiceFeatureBlockProps> = ({
  service,
}) => {
  const isTextLeft = service.layout === "text-left";
  const theme = colorThemes[service.colorTheme];
  const Icon = serviceIcons[service.iconKey as keyof typeof serviceIcons];

  if (!Icon) {
    console.error(`Icon not found for key: ${service.iconKey}`);
    return null;
  }

  return (
    <section className="py-24 lg:py-32 font-main relative overflow-hidden">
      {/* Background with color theme */}
      <div
        className="absolute inset-0"
        style={{
          background: theme.background,
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100vh",
        }}
      >
        <div className={`absolute inset-0 ${service.colorTheme === "white" ? "opacity-10" : "opacity-5"}`}>
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
        <span className={`text-2xl font-bold drop-shadow-sm ${theme.numberColor}`}>
          {service.sectionNumber}
        </span>
        <div className={`w-px ${theme.lineColor} flex-1`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            isTextLeft ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Text Content */}
          <div
            className={`${
              isTextLeft ? "lg:order-1" : "lg:order-2"
            } space-y-6 lg:space-y-8`}
          >
            <div
              className={`${theme.cardBg} backdrop-blur-sm p-8 lg:p-12`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
                boxShadow: `
                  0 4px 12px rgba(0, 0, 0, 0.8),
                  0 12px 48px rgba(0, 0, 0, 0.6),
                  0 24px 96px rgba(0, 0, 0, 0.4),
                  0 48px 192px rgba(0, 0, 0, 0.2)
                `,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${service.colorTheme === "white" ? "bg-gradient-to-br from-[#07296b] to-[#07296b]/80" : "bg-gradient-to-br from-[#2563eb] to-[#2563eb]/80"} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className={`${service.colorTheme === "white" ? "text-[#07296b]" : "text-[#2563eb]"} text-xs uppercase tracking-widest block mb-1 font-semibold`}>
                    {service.subtitle}
                  </span>
                  <h2 className={`${theme.textPrimary} text-3xl lg:text-4xl font-bold leading-tight`}>
                    {service.title}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className={`${theme.textSecondary} text-base lg:text-lg leading-relaxed mb-8 font-light`}>
                {service.description}
              </p>

              {/* Benefits */}
              {service.benefits && (
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {service.benefits.map((benefit, idx) => {
                    const BenefitIcon = benefit.icon;
                    const isWhiteTheme = service.colorTheme === "white";
                    const hoverBorderColor = isWhiteTheme ? "#07296b" : "#2563eb";
                    const hoverBgColor = isWhiteTheme ? "rgba(7, 41, 107, 0.1)" : "rgba(37, 99, 235, 0.1)";
                    return (
                      <div key={idx} className="text-center group/benefit">
                        <div
                          className="w-16 h-16 mx-auto mb-3 transition-all duration-300 flex items-center justify-center"
                          style={{
                            backgroundColor: theme.iconBg.includes("white/20") ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
                            boxShadow: `
                              0 2px 8px rgba(0, 0, 0, 0.6),
                              0 4px 16px rgba(0, 0, 0, 0.4),
                              0 8px 32px rgba(0, 0, 0, 0.2)
                            `,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = hoverBgColor;
                            e.currentTarget.style.boxShadow = `
                              0 4px 12px rgba(0, 0, 0, 0.8),
                              0 8px 24px rgba(0, 0, 0, 0.6),
                              0 16px 48px rgba(0, 0, 0, 0.4),
                              0 0 20px ${hoverBorderColor}40
                            `;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = theme.iconBg.includes("white/20") ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.boxShadow = `
                              0 2px 8px rgba(0, 0, 0, 0.6),
                              0 4px 16px rgba(0, 0, 0, 0.4),
                              0 8px 32px rgba(0, 0, 0, 0.2)
                            `;
                          }}
                        >
                          <BenefitIcon className={`w-8 h-8 ${isWhiteTheme ? "text-[#07296b]" : "text-[#2563eb]"} group-hover/benefit:scale-110 transition-transform duration-300`} />
                        </div>
                        <p className={`${theme.textPrimary} text-sm font-semibold`}>
                          {benefit.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Keywords */}
              {service.keywords && (
                <div className={`flex flex-wrap items-center gap-3 ${theme.textSecondary} mb-8`}>
                  {service.keywords.map((keyword, idx) => (
                    <React.Fragment key={idx}>
                      <span className="text-sm font-medium">{keyword}</span>
                      {idx < service.keywords!.length - 1 && (
                        <span className={`${service.colorTheme === "white" ? "text-[#19165F]/40" : "text-[#2563eb]/60"}`}>|</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* Metrics */}
              {service.metrics && (
                <div className={`flex gap-8 pt-8 border-t ${theme.border}`}>
                  {service.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className={`${service.colorTheme === "white" ? "text-[#07296b]" : "text-[#2563eb]"} text-3xl font-bold mb-1`}>
                        {metric.value}
                      </div>
                      <div className={`${theme.textTertiary} text-xs uppercase tracking-wider`}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* External Link */}
              {service.externalLink && service.externalLinkText && (
                <div className={`pt-6 border-t ${theme.border} mt-8`}>
                  <a
                    href={service.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${service.colorTheme === "white" ? "text-[#07296b] hover:text-[#051d4d]" : "text-[#2563eb] hover:text-[#1d4ed8]"} transition-colors font-semibold group`}
                  >
                    <span>{service.externalLinkText}</span>
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Service Gallery - Main View + Thumbnail Strip */}
          <div
            className={`${
              isTextLeft ? "lg:order-2" : "lg:order-1"
            } relative`}
          >
            <ServiceGallery
              items={service.gallery}
              aspectRatio="cinematic"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

