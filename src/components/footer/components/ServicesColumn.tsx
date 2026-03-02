import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ServicesColumn = () => {
  const t = useTranslations("Footer");
  return (
    <div className="footer-column-animate" style={{ animationDelay: "0ms" }}>
      <h4 className="mb-4 relative inline-block">
        {t("columns.services.title")}
        <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-white"></span>
      </h4>
      <ul className="space-y-2.5">
        <li>
          <Link
            href="services"
            className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
          >
            <span className="relative">
              {t("columns.services.item1")}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="services"
            className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
          >
            <span className="relative">
              {t("columns.services.item2")}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="services"
            className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
          >
            <span className="relative">
              {t("columns.services.item3")}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="services"
            className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
          >
            <span className="relative">
              {t("columns.services.item4")}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="services"
            className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
          >
            <span className="relative">
              {t("columns.services.item5")}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="services"
            className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
          >
            <span className="relative">
              {t("columns.services.item6")}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesColumn;
