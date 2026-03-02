"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useScrollHeader } from "@/components/header/components/hooks/useScrollHeader";
import { useLanguage } from "./hooks/useLanguage";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import { ContactInfo } from "./ContactInfo";
import { LanguageSelector } from "./LanguageSelector";
import { ContactButton } from "./ContactButton";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";
import { LoadingScreen } from "../../shared/LoadingScreen";

export type PageKey = "home" | "services" | "about" | "contact";

export interface NavigationProps {
  currentPage: string;
  onPageChange: (page?: PageKey) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("header");
  const isHeaderVisible = useScrollHeader(50);

  const {
    language,
    isLanguageOpen,
    isPending, // <--- Extraído del hook actualizado
    handleLanguageToggle,
    handleLanguageSelect,
  } = useLanguage();

  const [isAtTop, setIsAtTop] = useState(true);
  const isLight = !isAtTop;

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navigationItems = [
    { key: "home", label: t("home"), href: "/" },
    { key: "services", label: t("services"), href: "/services" },
    { key: "about", label: t("about"), href: "/about" },
  ] as const;

  const handlePageChange = (page?: PageKey) => {
    onPageChange(page);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isAtTop ? "bg-transparent" : "bg-white/95 backdrop-blur-md shadow-md"
        }`}
        style={{
          backgroundImage: isAtTop
            ? "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0) 100%)"
            : "none",
          transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 font-satoshi">
          {/* Desktop */}
          <div className="hidden lg:flex items-center h-16">
            <Logo onPageChange={handlePageChange} isLightMode={isLight} />

            <div className="flex-1 flex justify-center">
              <NavigationLinks
                items={navigationItems}
                pathname={pathname}
                onPageChange={handlePageChange}
                isLightMode={isLight}
              />
            </div>

            <div className="flex items-center gap-5">
              <ContactInfo isLightMode={isLight} />
              <LanguageSelector
                language={language}
                isLanguageOpen={isLanguageOpen}
                onToggle={handleLanguageToggle}
                onSelect={handleLanguageSelect}
                isLightMode={isLight}
              />
              <ContactButton onPageChange={handlePageChange} />
            </div>
          </div>

          {/* Mobile */}
          <div
            className={`flex lg:hidden items-center justify-between h-14 sm:h-16 transition-colors duration-300 ${
              isAtTop ? "text-white drop-shadow-sm" : "text-gray-900"
            }`}
          >
            <Logo onPageChange={handlePageChange} isLightMode={isLight} />

            <div className="flex items-center gap-3">
              <LanguageSelector
                language={language}
                isLanguageOpen={isLanguageOpen}
                onToggle={handleLanguageToggle}
                onSelect={handleLanguageSelect}
                isMobile={true}
                isLightMode={isLight}
              />

              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                isLightMode={isLight}
              />
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={navigationItems}
        pathname={pathname}
        onPageChange={handlePageChange}
        onClose={() => setIsMobileMenuOpen(false)}
        isLightMode={isLight}
      />

      {/* OVERLAY DE CARGA INDUSTRIAL (Reutilizado) */}
      {isPending && (
        <LoadingScreen
          title="Actualizando Idioma"
          subtitle="Sincronizando entorno de idioma..."
        />
      )}
    </>
  );
};

export default Navigation;
