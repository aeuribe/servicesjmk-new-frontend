import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NavigationSection = () => {
  const t = useTranslations("Footer");
  return (
    <div className="w-full max-w-7xl border-b border-white/20 md:pb-8 sm:pb-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center md:gap-4 gap-3 group">
        {/* Logo SVG */}
        <div className="md:w-10 md:h-10 w-8 h-8 relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Image
            src="/logos/isotipo.svg"
            alt="Logo Services JMK"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
        <Link
          href="/"
          className="md:text-2xl sm:text-xl text-lg select-none cursor-pointer transition-all duration-300 hover:text-white/80 relative group"
        >
          SERVICES JMK
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      <nav className="flex sm:gap-8 gap-4 sm:text-sm text-xs flex-wrap justify-center">
        <Link
          href="/"
          className="relative group transition-colors duration-300 hover:text-white/80"
        >
          {t("nav.home")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/services"
          className="relative group transition-colors duration-300 hover:text-white/80"
        >
          {t("nav.services")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/about"
          className="relative group transition-colors duration-300 hover:text-white/80"
        >
          {t("nav.about")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/contact"
          className="relative group transition-colors duration-300 hover:text-white/80"
        >
          {t("nav.contact")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
    </div>
  );
};

export default NavigationSection;
