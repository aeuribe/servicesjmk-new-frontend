import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-[#19165F] font-main text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E53E3E]/5 to-transparent pointer-events-none"></div>
      
      {/* Animated particles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#E53E3E]/5 rounded-full blur-3xl footer-particle-float-1"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl footer-particle-float-2"></div>
      
      <div className="relative z-10 flex flex-col items-center px-4 md:px-8 py-12">
        {/* Top Section - Logo and Nav */}
        <div className="w-full max-w-7xl border-b border-white/20 md:pb-8 sm:pb-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center md:gap-4 gap-3 group">
            {/* Logo SVG */}
            <div className="md:w-10 md:h-10 w-8 h-8 relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Image
                src="/isotipo.svg"
                alt="Logo Services JMK"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <Link
              href="home"
              className="md:text-2xl sm:text-xl text-lg select-none cursor-pointer transition-all duration-300 hover:text-[#E53E3E] relative group"
            >
              Services JMK
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E53E3E] to-transparent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          
          <nav className="flex sm:gap-8 gap-4 sm:text-sm text-xs flex-wrap justify-center">
            <Link
              href="home"
              className="relative group transition-colors duration-300 hover:text-[#E53E3E]"
            >
              {t("nav.home")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="services"
              className="relative group transition-colors duration-300 hover:text-[#E53E3E]"
            >
              {t("nav.services")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="about"
              className="relative group transition-colors duration-300 hover:text-[#E53E3E]"
            >
              {t("nav.about")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="contact"
              className="relative group transition-colors duration-300 hover:text-[#E53E3E]"
            >
              {t("nav.contact")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        {/* Middle Section - Content Columns */}
        <div className="w-full max-w-7xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Services Column */}
          <div className="footer-column-animate" style={{ animationDelay: '0ms' }}>
            <h4 className="mb-4 relative inline-block">
              {t("columns.services.title")}
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-[#E53E3E] to-transparent"></span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="services"
                  className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
                >
                  <span className="relative">
                    {t("columns.services.item1")}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
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
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
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
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
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
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
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
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
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
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column-animate" style={{ animationDelay: '100ms' }}>
            <h4 className="mb-4 relative inline-block">
              {t("columns.company.title")}
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-[#E53E3E] to-transparent"></span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="home"
                  className="text-white/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group relative text-left"
                >
                  <span className="relative">
                    {t("columns.company.item1")}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
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
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
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
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E53E3E] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
              </li>
            </ul>

            {/* Call to Action Button */}
            <div className="mt-8">
              <Link
                href="contact"
                className="bg-[#E53E3E] text-white px-6 py-2.5 text-sm hover:bg-white hover:text-[#19165F] transition-all duration-300 relative group overflow-hidden inline-block"
              >
                <span className="relative z-10">{t("columns.company.cta")}</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-column-animate" style={{ animationDelay: '200ms' }}>
            <h4 className="mb-4 relative inline-block">
              {t("columns.contact.title")}
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-[#E53E3E] to-transparent"></span>
            </h4>
            <div className="space-y-4 text-white/60 text-sm">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@servicesjmk.com" className="hover:text-white transition-colors duration-300">
                  info@servicesjmk.com
                </a>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+17862587335" className="hover:text-white transition-colors duration-300">
                  +1 (786) 258-7335
                </a>
              </p>
            </div>
            
            {/* Business Hours */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 mb-2">{t("columns.contact.hoursTitle")}</p>
              <p className="text-sm text-white/60">{t("columns.contact.hour1")}</p>
              <p className="text-sm text-white/60">{t("columns.contact.hour2")}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="w-full max-w-7xl mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} {t("bottom.copyright")}
          </div>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors duration-300">{t("bottom.terms")}</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/70 transition-colors duration-300">{t("bottom.privacy")}</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/70 transition-colors duration-300">{t("bottom.cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
