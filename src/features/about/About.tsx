import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface AboutUsProps {
  onNavigateToContact: () => void;
}

// Custom SVG Icons
const TargetIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AwardIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="8"
      r="6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="9"
      cy="7"
      r="4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m9 11 3 3L22 4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AboutUs({ onNavigateToContact }: AboutUsProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const t = useTranslations("About");

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "99%", label: t("heroStat1Label") },
    { value: "25+", label: t("heroStat2Label") },
    { value: "100%", label: t("heroStat3Label")},
  ];

  const values = [
    {
      icon: TargetIcon,
      title: t("values1Title"),
      description:
         t("values1Description"),
    },
    {
      icon: AwardIcon,
      title: t("values2Title"),
      description:
        t("values2Description"),
    },
    {
      icon: UsersIcon,
      title: t("values3Title"),
      description:
        t("values3Description"),
    },
    {
      icon: CheckCircleIcon,
      title: t("values4Title"),
      description:
        t("values4Description"),
    },
  ];

  return (
    <div className="min-h-screen bg-white font-main">
      {/* Hero Section */}
      <section
        className="relative bg-[#19165F] bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-32 mt-10 overflow-hidden"
        style={{ backgroundImage: "url('/background-hero.jpg')" }}
      >
        <style>{`
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-in-left {
      animation: slideInLeft 0.8s ease-out forwards;
    }
    .animate-slide-in-right {
      animation: slideInRight 0.8s ease-out forwards;
    }
  `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_2px_1fr] gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left - About Us Title */}
            <div
              className={`inline-block ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-white text-4xl sm:text-5xl lg:text-7xl block">
                {t("heroTitle")}
              </span>
              <div className="h-px bg-[#E53E3E] mt-3"></div>
            </div>

            {/* Divider Line */}
            <div className="hidden lg:block w-px h-full bg-white/20 self-stretch"></div>

            {/* Right - Content */}
            <div
              className={`space-y-8 ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[#E53E3E] tracking-[0.3em] uppercase text-xs block mb-2">
                    {t("heroSubtitle")}
                  </span>
                </div>

                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  {t("heroParagraph1")}
                </p>

                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  {t("heroParagraph2")}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-white mb-2 text-3xl font-semibold">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-xs uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 bg-[#E53E3E]"></div>
                  <span>{t("heroExtra")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-[#19165F]/60 tracking-[0.2em] uppercase text-sm">
                  {t("missionSubtitle")}
                </span>
                <div className="h-px bg-[#E53E3E] mt-3 w-20"></div>
              </div>

              {/* <h2 className="text-[#19165F] leading-tight">
                {t("missionTitle")}
              </h2> */}

              <div className="space-y-6 text-gray-700 ">
                <p className="leading-relaxed">
                  {t("at")}{" "} 
                  <span className="font-bold text-[#19165F]">Services JMK</span>, {t("missionParagraph1")}
                </p>
                <p className="leading-relaxed">
                  {t("missionParagraph2")}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={onNavigateToContact}
                  className="bg-[#19165F] text-white px-8 py-4 hover:bg-[#19165F]/90 transition-all duration-300 inline-flex items-center gap-3 group"
                >
                  <span>{t("missionButton")}</span>
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
                </button>
              </div>
            </div>

            <div className="relative lg:h-[600px]">
              <div className="absolute inset-0 bg-[#E53E3E]/10 -right-8 -bottom-8"></div>
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1739599211500-74e04a9ca175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBtb2Rlcm58ZW58MXx8fHwxNzU5NTIxOTk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern industrial facilities"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#19165F]/60 tracking-[0.2em] uppercase text-sm">
              {t("valuesSubtitle")}
            </span>
            <div className="h-px bg-[#E53E3E] mt-3 w-20 mx-auto mb-8"></div>
            {/* <h2 className="text-[#19165F] leading-tight mb-6">
              {t("valuesTitle")}
            </h2> */}
            <p className="text-gray-700 leading-relaxed">
              {t("valuesParagraph")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 border border-gray-200 hover:border-[#19165F]/30 transition-all duration-300 group"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#19165F]/10 flex items-center justify-center group-hover:bg-[#19165F] transition-colors duration-300">
                        <Icon className="w-7 h-7 text-[#19165F] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[#19165F]">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:h-[500px] order-2 lg:order-1">
              <div className="absolute inset-0 bg-[#E53E3E]/10 -left-8 -bottom-8"></div>
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1759159091682-3b98f4759367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NTIxOTk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Industrial automation technology"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <span className="text-[#19165F]/60 tracking-[0.2em] uppercase text-sm">
                  {t("expertiseSubtitle")}
                </span>
                <div className="h-px bg-[#E53E3E] mt-3 w-20"></div>
              </div>

              <div className="space-y-4">
                {[
                  t("expertiseItem1"),
                  t("expertiseItem2"),
                  t("expertiseItem3"),
                  t("expertiseItem4"),
                  t("expertiseItem5"),
                  t("expertiseItem6"),
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 border-2 border-[#E53E3E] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#E53E3E]"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#19165F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-white leading-tight">
              {t("ctaTitle")}
            </h2>

            <p className="text-white/90 leading-relaxed max-w-2xl mx-auto text-lg">
              {t("ctaParagraph")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <button
                onClick={onNavigateToContact}
                className="bg-[#E53E3E] text-white px-10 py-4 hover:bg-[#E53E3E]/90 transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>{t("ctaButton")}</span>
              </button>

              <a
                href="tel:+17862587335"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (786) 258-7335</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
