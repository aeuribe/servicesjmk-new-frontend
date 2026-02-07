"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { useHeaderLightMode } from "@/hooks/useHeaderLightMode";
import { useLanguage } from "./hooks/useLanguage";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import { ContactInfo } from "./ContactInfo";
import { LanguageSelector } from "./LanguageSelector";
import { ContactButton } from "./ContactButton";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";

export interface NavigationProps {
  currentPage: string;
  onPageChange: () => void;
  // Add other props if needed
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("header");
  const isHeaderVisible = useScrollHeader(50);
  const { isLightMode, isAtTop } = useHeaderLightMode();
  const {
    language,
    isLanguageOpen,
    handleLanguageToggle,
    handleLanguageSelect,
  } = useLanguage();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navigationItems = [
    { key: "home", label: t("home"), href: "/" },
    { key: "services", label: t("services"), href: "/services" },
    { key: "about", label: t("about"), href: "/about" },
  ] as const;

  // Adapter: internal components expect (page) => void. We keep your public prop as () => void.
  const handlePageChange = (_page?: unknown) => onPageChange();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${isAtTop
            ? "bg-transparent"
            : isLightMode
              ? "bg-white/95 backdrop-blur-md shadow-md"
              : "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg"
          }`}
        style={{
          backgroundImage: isAtTop
            ? isLightMode
              ? "none"
              : "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0) 100%)"
            : "none",
          transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 font-satoshi">
          {/* Desktop (single row with strong hierarchy) */}
          <div className="hidden lg:flex items-center h-16">
            <div className="flex items-center gap-6 min-w-0">
              <Logo onPageChange={handlePageChange as any} isLightMode={isLightMode} />
            </div>

            <div className="flex-1 flex justify-center">
              <NavigationLinks
                items={navigationItems}
                pathname={pathname}
                onPageChange={handlePageChange as any}
                isLightMode={isLightMode}
              />
            </div>

            <div className="flex items-center gap-5">
              <ContactInfo isLightMode={isLightMode} />
              <LanguageSelector
                language={language}
                isLanguageOpen={isLanguageOpen}
                onToggle={handleLanguageToggle}
                onSelect={handleLanguageSelect}
                isLightMode={isLightMode}
              />
              <ContactButton onPageChange={handlePageChange as any} />
            </div>
          </div>

          {/* Mobile (single row, flat) */}
          <div className={`flex lg:hidden items-center justify-between h-14 sm:h-16 transition-colors duration-300 ${isLightMode
              ? "text-gray-900"
              : isAtTop
                ? "text-white drop-shadow-sm"
                : "text-white"
            }`}>
            <Logo onPageChange={handlePageChange as any} isLightMode={isLightMode} />

            <div className="flex items-center gap-3">
              <LanguageSelector
                language={language}
                isLanguageOpen={isLanguageOpen}
                onToggle={handleLanguageToggle}
                onSelect={handleLanguageSelect}
                isMobile={true}
                isLightMode={isLightMode}
              />

              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                isLightMode={isLightMode}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Outside nav for proper layering */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={navigationItems}
        pathname={pathname}
        onPageChange={handlePageChange as any}
        onClose={() => setIsMobileMenuOpen(false)}
        isLightMode={isLightMode}
      />
    </>
  );
}

export default Navigation;
