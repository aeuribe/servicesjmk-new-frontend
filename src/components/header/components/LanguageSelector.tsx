import { LANGUAGES } from "./constants";

interface LanguageSelectorProps {
  language: string;
  isLanguageOpen?: boolean;
  isScrolled?: boolean;
  onToggle?: (e: React.MouseEvent) => void;
  onSelect: (lang: string) => void;
  isMobile?: boolean;
  isLightMode?: boolean;
}

export const LanguageSelector = ({
  language,
  isLanguageOpen,
  isScrolled,
  onToggle,
  onSelect,
  isMobile = false,
  isLightMode = false,
}: LanguageSelectorProps) => {
  const isEnglish = language.toLowerCase().startsWith("en");

  const current = {
    short: isEnglish ? "EN" : "ES",
    icon: isEnglish ? "🇺🇸" : "🇪🇸",
    next: isEnglish ? "Español" : "English",
  };

  // Tamaños según modo móvil o desktop
  const sizes = {
    containerH: isMobile ? "h-8" : "h-9",
    containerW: isMobile ? "w-10" : "w-11",
    knob: isMobile ? "w-4 h-4" : "w-5 h-5",
    padding: "p-0.5",
  };

  const baseColor = isLightMode ? "text-gray-900" : "text-white";
  const borderColor = isLightMode ? "border-gray-300" : "border-white/60";
  const bgColor = isLightMode ? "bg-white/50" : "bg-transparent";
  const knobColor = isLightMode ? "bg-gray-700" : "bg-white";

  return (
    <div className="inline-flex items-center gap-2">
      {/* Icono del idioma actual */}
      <span className={`text-sm leading-none ${baseColor}`} aria-hidden="true">
        {current.icon}
      </span>

      {/* Switch minimalista */}
      <button
        type="button"
        role="switch"
        aria-checked={!isEnglish}
        aria-label={`Switch language. Current: ${current.short}`}
        className={`
    relative inline-flex rounded-full drop-shadow-sm
    ${sizes.containerH} ${sizes.containerW} ${sizes.padding}
    border ${borderColor} ${bgColor}
    overflow-hidden
  `}
        onClick={(e) => {
          onToggle?.(e);
          onSelect(current.next);
        }}
      >
        <span
          className={`
            absolute top-1/2 -translate-y-1/2 rounded-full
            ${sizes.knob} ${knobColor}
            transition-transform duration-300 ease-out
          `}
          style={{
            left: isEnglish ? "4px" : undefined,
            right: isEnglish ? undefined : "4px",
          }}
        />
      </button>
    </div>
  );
};
