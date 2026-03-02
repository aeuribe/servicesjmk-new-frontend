import Link from "next/link";
import { useTranslations } from "next-intl";

interface AboutContentProps {
  t: ReturnType<typeof useTranslations>;
}

interface AboutContentProps {
  t: ReturnType<typeof useTranslations>;
}

export const AboutContent: React.FC<AboutContentProps> = ({ t }) => {
  // Le bajamos el umbral a 0.15 para que se active un poquito antes al scrollear


  return (
    <div className="relative">
      <div className="absolute -left-8 top-0 w-64 h-64 bg-[#2563eb]/10 rounded-full blur-3xl opacity-50" />

      {/* 1. TÍTULO: Entra instantáneamente sin delay */}
      <div className={`mb-6 relative z-10`}>
        <span className="text-[#2563eb] text-sm uppercase tracking-widest block mb-3 font-semibold">
          {t("pretitle")}
        </span>
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          {t("title")}
        </h2>
      </div>

      {/* 2. TEXTOS: Entran rapidísimo justo detrás del título (delay-150) */}
      <div className={`space-y-6 mb-8 relative z-10 delay-150`}>
        <p className="text-gray-200 text-lg leading-relaxed font-light">
          {t("description")}
        </p>
        <p className="text-gray-200 text-lg leading-relaxed font-light">
          {t("description2")}
        </p>
      </div>

      {/* 3. BOTÓN: Cierra la animación sin hacerte esperar demasiado (delay-300) */}
      <div className={`relative z-10 delay-300`}>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all duration-300 group uppercase tracking-wider"
        >
          <span className="relative">
            {t("readMore")}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2563eb] group-hover:w-full transition-all duration-300" />
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
    </div>
  );
};