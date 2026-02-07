import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface FooterProps {
  hideInfrastructureSection?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideInfrastructureSection = false }) => {
  const t = useTranslations('Footer');
  return (
    <footer 
      className="font-main text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #051d4d 0%, #031530 50%, #051d4d 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100vh",
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>

      {/* Infrastructure Leading Section */}
      {!hideInfrastructureSection && (
        <div className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text and Button */}
              <div>
                <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                  {t("infrastructure.title")}
                </h2>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-[#07296b] px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-300 group"
                >
                  {t("infrastructure.button")}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              
              {/* Right - Image */}
              <div className="hidden lg:block relative h-96">
                <Image
                  src="/hero-image4.png"
                  alt="Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center px-4 md:px-8 py-12 border-t border-white/10">
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

        {/* Middle Section - Content Columns */}
        <div className="w-full max-w-7xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Services Column */}
          <div className="footer-column-animate" style={{ animationDelay: '0ms' }}>
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

          {/* Company Column */}
          <div className="footer-column-animate" style={{ animationDelay: '100ms' }}>
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
              <li>
              </li>
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

          {/* Contact Column */}
          <div className="footer-column-animate" style={{ animationDelay: '200ms' }}>
            <h4 className="mb-4 relative inline-block">
              {t("columns.contact.title")}
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-white"></span>
            </h4>
            <div className="space-y-4 text-white/70 text-sm">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@servicesjmk.com" className="hover:text-white transition-colors duration-300">
                  info@servicesjmk.com
                </a>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+17862587335" className="hover:text-white transition-colors duration-300">
                  +1 (786) 258-7335
                </a>
              </p>
              <p className="text-white/70 text-sm mt-4">
                50 Grosvenor Place, London, SW1X 7HS
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
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
          <div className="text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()}. {t("bottom.copyright")}
          </div>
          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/contact" className="hover:text-white/80 transition-colors duration-300">{t("bottom.contact")}</Link>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/80 transition-colors duration-300">{t("bottom.terms")}</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/80 transition-colors duration-300">{t("bottom.privacy")}</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/80 transition-colors duration-300">{t("bottom.policy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
