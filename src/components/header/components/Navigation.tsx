"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface NavigationProps {
  currentPage: "home" | "services" | "about" | "contact";
  onPageChange: (page: "home" | "services" | "about" | "contact") => void;
}

export default function Navigation({ onPageChange }: NavigationProps) {
  const [language, setLanguage] = useState("English");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("header");
  const router = useRouter();
  
  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
  const localeFromPath = pathname.split("/")[1];
  if (localeFromPath === "es") setLanguage("Español");
  else setLanguage("English");
}, [pathname]);


  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Don't close if clicking on language selector button or dropdown
      if (target.closest("[data-language-selector]")) {
        return;
      }
      setIsLanguageOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navigationItems = [
    { key: "home", label: t("home"), href: "/" },
    { key: "services", label: t("services"), href: "/services" },
    { key: "about", label: t("about"), href: "/about" },
  ] as const;

  const handleLanguageToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLanguageOpen((prev) => !prev);
  };

  const handleLanguageSelect = (lang: string) => {
    setLanguage(lang);
    setIsLanguageOpen(false);

    const locale = lang === "English" ? "en" : "es";
    const segments = pathname.split("/");

    // Detect if first path segment is locale
    const supportedLocales = ["en", "es"];
    const currentPath = supportedLocales.includes(segments[1])
      ? "/" + segments.slice(2).join("/")
      : pathname;

    router.push(`/${locale}${currentPath}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={() => onPageChange("home")}
          >
            <Image
              src="/isotipo.svg"
              alt="Logo Services JMK"
              width={28}
              height={28}
              className="select-none sm:w-8 sm:h-8 group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col leading-none font-main">
              <span className="text-[0.65rem] sm:text-[0.75rem] tracking-wide text-[#19165F] font-bold transition-colors duration-200">
                Services
              </span>
              <div className="flex items-baseline space-x-1">
                <span className="text-[0.65rem] sm:text-[0.75rem] tracking-wide text-[#19165F] font-bold transition-colors duration-200">
                  JMK,
                </span>
                <span className="text-[0.55rem] sm:text-[0.65rem] text-[#19165F] font-semibold tracking-wider">
                  LLC
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => onPageChange(item.key)}
                className={`px-3 xl:px-5 py-1.5 text-sm transition-all duration-200 relative overflow-hidden group ${
                  pathname === item.href
                    ? "text-[#19165F]"
                    : "text-gray-600 hover:text-[#19165F]"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E53E3E]"></div>
                )}
                <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center opacity-0 group-hover:opacity-100"></div>
              </Link>
            ))}
            {/* Desktop Language Selector */}
            <div
              className="relative ml-6 pl-6 border-l border-gray-200"
              data-language-selector
            >
              <button
                onClick={handleLanguageToggle}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#19165F] transition-colors duration-200 group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{language}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLanguageOpen && (
                <div
                  className={`absolute top-full right-0 mt-3 w-36 bg-white border border-gray-200/60 shadow-2xl rounded-xl overflow-hidden z-50 backdrop-blur-sm transform transition-all duration-200 ease-out
      ${isLanguageOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                  style={{ transformOrigin: "top right" }}
                >
                  <div className="py-2">
                    {["English", "Español"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageSelect(lang)}
                        className={`w-full px-4 py-3 text-left text-sm transition-all duration-200 relative group ${
                          language === lang
                            ? "text-[#19165F] bg-gray-50/80 font-medium"
                            : "text-gray-600 hover:text-[#19165F] hover:bg-gray-50/50"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Contact Button */}
            <Link
              href="/contact"
              onClick={() => onPageChange("contact")}
              className="ml-6 pl-6 border-l border-gray-200 bg-[#19165F] text-white px-5 py-2 text-sm hover:bg-[#19165F]/90 transition-all duration-200 relative group overflow-hidden"
            >
              <span className="relative z-10">{t("contact")}</span>
              <div className="absolute inset-0 bg-[#E53E3E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Language Selector */}
            <div className="relative" data-language-selector>
              <button
                onClick={handleLanguageToggle}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-[#19165F] transition-colors duration-200 group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs">{language.slice(0, 2)}</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-28 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-50">
                  {["English", "Español"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`w-full px-3 py-2 text-left text-xs transition-colors duration-200 ${
                        language === lang
                          ? "bg-[#19165F] text-white"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#19165F]"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-[#19165F] hover:bg-gray-100 transition-all duration-200 group"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden relative ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ zIndex: 60 }}
        >
          <div className="pb-6 pt-4 space-y-1 border-t border-gray-200/50 bg-white shadow-xl">
            {navigationItems.map((item, index) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => onPageChange(item.key)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 relative group ${
                  pathname === item.href
                    ? "text-[#19165F] bg-gray-50"
                    : "text-gray-600 hover:text-[#19165F] hover:bg-gray-50"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen
                    ? "slideInUp 0.3s ease-out forwards"
                    : undefined,
                }}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  {pathname === item.href && (
                    <div className="w-2 h-2 bg-[#E53E3E] rounded-full"></div>
                  )}
                </span>
                {pathname === item.href && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E53E3E]"></div>
                )}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              onClick={() => onPageChange("contact")}
              className="block w-full bg-[#19165F] text-white px-4 py-3 text-base font-medium hover:bg-[#19165F]/90 transition-all duration-200 relative group overflow-hidden"
              style={{
                animationDelay: "150ms",
                animation: isMobileMenuOpen
                  ? "slideInUp 0.3s ease-out forwards"
                  : undefined,
              }}
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-[#E53E3E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ marginTop: "56px" }}
        ></div>
      )}
    </nav>
  );
}
