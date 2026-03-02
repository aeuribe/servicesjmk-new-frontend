import { useTranslations } from "next-intl";
import Image from "next/image";

interface AboutImageProps {
  t: ReturnType<typeof useTranslations>;
}

export const AboutImage: React.FC<AboutImageProps> = ({ t }) => {

  return (
    <div

      // Clases dinámicas: Si es visible, opacidad 1 y posición 0. Si no, opacidad 0 y se mueve a la izquierda (-translate-x-12)
      className={`relative group transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] `}
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-[#2563eb]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

      <div
        className="relative aspect-[4/3] overflow-hidden shadow-2xl transition-all duration-500"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 88% 100%, 0 100%)",
          filter:
            "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 0 1px rgba(255, 255, 255, 0.05))",
        }}
      >
        <Image
          src="/about_us_section2.jpg"
          alt={t("imageAlt")}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  );
};