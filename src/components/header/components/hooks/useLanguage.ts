import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SUPPORTED_LOCALES } from "../constants";

export const useLanguage = () => {
  const [language, setLanguage] = useState("English");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const localeFromPath = pathname.split("/")[1];
    setLanguage(localeFromPath === "es" ? "Español" : "English");
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
    const currentPath = SUPPORTED_LOCALES.includes(segments[1] as any)
      ? "/" + segments.slice(2).join("/")
      : pathname;

    router.push(`/${locale}${currentPath}`);
  };

  return {
    language,
    isLanguageOpen,
    handleLanguageToggle,
    handleLanguageSelect,
  };
};

