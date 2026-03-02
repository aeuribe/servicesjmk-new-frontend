import { useTranslations } from "next-intl";
import Link from "next/link";

interface SectionHeaderProps {
  t: ReturnType<typeof useTranslations>;
}

export const BusinessSectionHeader: React.FC<SectionHeaderProps> = ({ t }) => (
  <div className="mb-12 lg:mb-16 pl-12 lg:pl-16">
    <span className="text-[#2563eb] text-sm uppercase tracking-widest block mb-4 ">
      {t("pretitle")}
    </span>
    <h2 className="text-[#0a1929] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
      {t("title")}
    </h2>
    <div className="flex items-center justify-between">
      <Link
        href="/services"
        className="hidden lg:inline-flex items-center gap-2 text-[#0a1929] font-semibold hover:gap-4 transition-all duration-300 group uppercase tracking-wider"
      >
        {t("readMore")}
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
