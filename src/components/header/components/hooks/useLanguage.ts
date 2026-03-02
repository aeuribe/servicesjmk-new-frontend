import { useState, useEffect, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SUPPORTED_LOCALES } from "../constants";

// Definimos un tipo basado en tus constantes para reusarlo
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const useLanguage = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  // 1. Agregamos el hook de transición
  const [isPending, startTransition] = useTransition();

  // Función auxiliar para no repetir código y tipar correctamente
  const getLocaleFromPath = (path: string) => {
    const segments = path.split("/");
    const maybeLocale = segments[1];
    // Aquí el cast mágico: le decimos que lo trate como un posible locale
    const hasLocale = SUPPORTED_LOCALES.includes(maybeLocale as SupportedLocale);
    return { hasLocale, maybeLocale, segments };
  };

  const { hasLocale: initialHasLocale, maybeLocale: initialMaybe } = getLocaleFromPath(pathname);
  
  const [language, setLanguage] = useState(
    initialHasLocale && initialMaybe === "es" ? "Español" : "English"
  );
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // Sincronizar idioma al cambiar de ruta
  useEffect(() => {
    const { hasLocale, maybeLocale } = getLocaleFromPath(pathname);
    setLanguage(hasLocale && maybeLocale === "es" ? "Español" : "English");
  }, [pathname]);

  // Manejo de clic afuera (Click Outside)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest("[data-language-selector]")) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // 2. Bloqueo de scroll global mientras la transición está activa
  useEffect(() => {
    if (isPending) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPending]);

  const handleLanguageToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLanguageOpen((prev) => !prev);
  };

  const handleLanguageSelect = (lang: string) => {
    const { hasLocale, segments } = getLocaleFromPath(pathname);
    const locale = lang === "English" ? "en" : "es";

    const pathWithoutLocale = hasLocale
      ? "/" + segments.slice(2).join("/")
      : pathname;

    const normalizedPath = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
    const newUrl = `/${locale}${normalizedPath}`;

    setLanguage(lang);
    setIsLanguageOpen(false);
    
    // 3. Envolvemos la navegación en la transición
    startTransition(() => {
      router.push(newUrl);
      router.refresh(); 
    });
  };

  return {
    language,
    isLanguageOpen,
    isPending, // 4. Exportamos el estado para usarlo en la UI
    handleLanguageToggle,
    handleLanguageSelect,
  };
};