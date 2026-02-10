import Link from "next/link";
import { useTranslations } from "next-intl";

export const HeroContent = ({ t }: { t: ReturnType<typeof useTranslations> }) => (
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-32 pb-16">
    <div className="max-w-4xl pl-12 lg:pl-16">
      <div className="mb-6">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          {t("headline")}
        </h1>

        <p className="text-white/90 text-lg drop-shadow-2xl sm:text-xl md:text-2xl mb-8 font-light max-w-2xl">
          {t("subtitle")}
        </p>

        <Link href="/services" passHref>
          <button
            className="bg-[#2563eb] text-white px-8 py-4 text-base sm:text-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 uppercase tracking-wider inline-flex items-center gap-3 group relative"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
            }}
          >
            <span className="relative z-10">{t("button")}</span>
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
);