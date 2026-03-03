"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const BotomSection = () => {
  const t = useTranslations("Footer");
  return (
    <div className="w-full max-w-7xl mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm text-white/60 text-center md:text-left">
        © {new Date().getFullYear()}. {t("bottom.copyright")}
      </div>
      <div className="flex gap-6 text-xs text-white/50">
        <Link
          href="/contact"
          className="hover:text-white/80 transition-colors duration-300"
        >
          {t("bottom.contact")}
        </Link>
        <span className="text-white/20">|</span>
        <Link
          href="/terms"
          className="hover:text-white/80 transition-colors duration-300"
        >
          {t("bottom.terms")}
        </Link>
        <span className="text-white/20">|</span>
        <Link
          href="/privacy"
          className="hover:text-white/80 transition-colors duration-300"
        >
          {t("bottom.privacy")}
        </Link>
        <span className="text-white/20">|</span>
        <Link
          href="/privacy"
          className="hover:text-white/80 transition-colors duration-300"
        >
          {t("bottom.policy")}
        </Link>
      </div>
    </div>
  );
};

export default BotomSection;
