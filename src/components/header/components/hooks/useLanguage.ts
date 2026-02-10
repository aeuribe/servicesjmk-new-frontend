import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SUPPORTED_LOCALES } from "../constants";

export const useLanguage = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Detectar locale inicial desde la URL
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  const hasLocale = SUPPORTED_LOCALES.includes(maybeLocale as any);

  const initialLocale = hasLocale && maybeLocale === "es" ? "Español" : "English";
  const [language, setLanguage] = useState(initialLocale);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // Mantener sincronizado el idioma si cambia la ruta
  useEffect(() => {
    const segments = pathname.split("/");
    const maybeLocale = segments[1];
    const hasLocale = SUPPORTED_LOCALES.includes(maybeLocale as any);

    setLanguage(hasLocale && maybeLocale === "es" ? "Español" : "English");
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-language-selector]")) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLanguageToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLanguageOpen((prev) => !prev);
  };

  const handleLanguageSelect = (lang: string) => {
  setLanguage(lang);
  setIsLanguageOpen(false);

  const locale = lang === "English" ? "en" : "es";
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  const hasLocale = SUPPORTED_LOCALES.includes(maybeLocale as any);

  const pathWithoutLocale = hasLocale
    ? "/" + segments.slice(2).join("/")
    : pathname;

  const normalizedPath = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
  const newUrl = `/${locale}${normalizedPath}`;

  // 1. Cambia la URL
  router.push(newUrl);
  // 2. Fuerza a Next.js a refrescar los datos del servidor para el nuevo idioma
  router.refresh(); 
};

  return {
    language,
    isLanguageOpen,
    handleLanguageToggle,
    handleLanguageSelect,
  };
};