import React from "react";
import { ServiceData } from "../../types";

interface ServiceContentProps {
  service: ServiceData;
  Icon: React.ComponentType<{ className?: string }>;
}

export const ServiceContent: React.FC<ServiceContentProps> = ({
  service,
  Icon,
}) => {
  const colorTheme = service.colorTheme;
  const isWhiteTheme = colorTheme === "white";

  const cardBgClass = isWhiteTheme ? "bg-[#07296b]/8" : "bg-white/12";
  const textPrimaryClass = isWhiteTheme ? "text-[#07296b]" : "text-white";
  const textSecondaryClass = isWhiteTheme ? "text-gray-800" : "text-white/90";
  const borderClass = isWhiteTheme ? "border-[#07296b]/20" : "border-white/20";
  const cardBorderClass = isWhiteTheme ? "border-[#07296b]/15" : "border-white/10";

  // Same clip as Home BusinessCard: bottom-right cut, straight edges
  const cardClip = "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)";

  return (
    <div
      className={`${cardBgClass} backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-12 border ${cardBorderClass} [box-shadow:0_4px_12px_rgba(0,0,0,0.8),0_12px_48px_rgba(0,0,0,0.6),0_24px_96px_rgba(0,0,0,0.4),0_48px_192px_rgba(0,0,0,0.2)]`}
      style={{ clipPath: cardClip }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center shrink-0 ${
            isWhiteTheme
              ? "bg-[#07296b]"
              : "bg-blue-600"
          }`}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
        </div>
        <div className="min-w-0">
          <span
            className={`${
              isWhiteTheme ? "text-[#07296b]" : "text-blue-400"
            } text-[10px] sm:text-xs uppercase tracking-widest block mb-0.5 sm:mb-1 font-semibold`}
          >
            {service.subtitle}
          </span>
          <h2
            className={`${textPrimaryClass} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight break-words`}
          >
            {service.title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p
        className={`${textSecondaryClass} text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 lg:mb-8 font-light`}
      >
        {service.description}
      </p>

      {/* Benefits */}
      {service.benefits && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
          {service.benefits.map((benefit, idx) => {
            const BenefitIcon = benefit.icon;

            return (
              <div key={idx} className="text-center group/benefit">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/50 group-hover/benefit:shadow-2xl ${
                    isWhiteTheme
                      ? "bg-[#07296b]/10 group-hover/benefit:bg-[#07296b]/20"
                      : "bg-white/10 group-hover/benefit:bg-white/20"
                  }`}
                >
                  <BenefitIcon
                    className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${
                      isWhiteTheme ? "text-[#07296b]" : "text-blue-500"
                    } group-hover/benefit:scale-110 transition-transform duration-300`}
                  />
                </div>
                <p className={`${textPrimaryClass} text-xs sm:text-sm font-semibold line-clamp-2`}>
                  {benefit.title}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Keywords */}
      {service.keywords && (
        <div
          className={`flex flex-wrap items-center gap-2 sm:gap-3 ${textSecondaryClass} mb-5 sm:mb-6 lg:mb-8`}
        >
          {service.keywords.map((keyword, idx) => (
            <React.Fragment key={idx}>
              <span className="text-xs sm:text-sm font-medium">{keyword}</span>
              {idx < (service.keywords?.length ?? 0) - 1 && (
                <span
                  className={
                    isWhiteTheme ? "text-[#07296b]/40" : "text-blue-400/60"
                  }
                >
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* External Link */}
      {service.externalLink && service.externalLinkText && (
        <div className={`pt-4 sm:pt-6 border-t ${borderClass} mt-5 sm:mt-8`}>
          <a
            href={service.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${
              isWhiteTheme
                ? "text-[#07296b] hover:text-[#051d4d]"
                : "text-blue-500 hover:text-blue-400"
            } transition-colors font-semibold group`}
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
  );
};


