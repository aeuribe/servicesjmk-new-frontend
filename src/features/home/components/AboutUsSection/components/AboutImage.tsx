import { useTranslations } from "next-intl";
import Image from "next/image";

interface AboutImageProps {
  t: ReturnType<typeof useTranslations>;
}

export const AboutImage: React.FC<AboutImageProps> = ({ t }) => (
  <div className="relative group">
    <div className="absolute -inset-4 bg-gradient-to-r from-[#2563eb]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl border border-white/10 group-hover:border-[#2563eb]/30 transition-all duration-500">
      <Image
        src="/hero-image4.png"
        alt={t("imageAlt")}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  </div>
);