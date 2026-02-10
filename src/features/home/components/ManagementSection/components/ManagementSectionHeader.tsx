import { useTranslations } from "next-intl";

interface SectionHeaderProps {
  t: ReturnType<typeof useTranslations>;
}

export const ManagementSectionHeader: React.FC<SectionHeaderProps> = ({ t }) => (
  <div className="mb-12 lg:mb-16 pl-12 lg:pl-16">
    <span className="text-[#2563eb] text-sm uppercase tracking-widest block mb-4">
      {t("pretitle")}
    </span>

    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
      {t("title")}
    </h2>
  </div>
);