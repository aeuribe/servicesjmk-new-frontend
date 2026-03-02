import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CompanyColumn = () => {
  const t = useTranslations("Footer");
  return (
    <div className="footer-column-animate" style={{ animationDelay: "100ms" }}>
      <h4 className="mb-4 relative inline-block">
        {t("columns.company.title")}
        <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-white"></span>
      </h4>
      <ul className="space-y-2.5">
        <li>
          <Link
            href="home"
            className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
          >
            <span className="relative">
              {t("columns.company.item1")}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="about"
            className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
          >
            <span className="relative">
              {t("columns.company.item2")}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="contact"
            className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
          >
            <span className="relative">
              {t("columns.company.item3")}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li></li>
      </ul>

      {/* Call to Action Button */}
      <div className="mt-8">
        <Link
          href="/contact"
          className="bg-white text-[#07296b] px-6 py-2.5 text-sm hover:bg-gray-100 transition-all duration-300 relative group overflow-hidden inline-block font-semibold"
        >
          <span className="relative z-10">{t("columns.company.cta")}</span>
        </Link>
      </div>
    </div>
  );
};

export default CompanyColumn;
