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
  // Determine current language (EN vs ES)
  const isEnglish = language.toLowerCase().startsWith("en");
  const currentShort = isEnglish ? "EN" : "ES";
  const currentIcon = isEnglish ? "🇺🇸" : "🇪🇸";
  const nextLanguage = isEnglish ? "Español" : "English";

  const h = isMobile ? "h-8" : "h-9";
  const w = isMobile ? "w-10" : "w-11";
  const knob = isMobile ? "w-4 h-4" : "w-5 h-5";
  const pad = isMobile ? "p-0.5" : "p-0.5";

  return (
    <div className="inline-flex items-center gap-2">
      {/* Current language icon */}
      <span className={`text-sm leading-none ${
        isLightMode ? "text-gray-900" : "text-white"
      }`} aria-hidden="true">
        {currentIcon}
      </span>

      {/* Minimal transparent switch */}
      <button
        type="button"
        role="switch"
        aria-checked={!isEnglish}
        aria-label={`Switch language. Current: ${currentShort}`}
        className={`relative inline-flex ${h} ${w} ${pad} rounded-full border ${
          isLightMode 
            ? "border-gray-300 bg-white/50" 
            : "border-white/60 bg-transparent"
        } drop-shadow-sm`}
        onClick={(e) => {
          // Keep compatibility if parent expects toggle for outside click behavior
          onToggle?.(e);
          onSelect(nextLanguage);
        }}
      >
        <span
          className={`absolute top-1/2 -translate-y-1/2 ${knob} rounded-full ${
            isLightMode ? "bg-gray-700" : "bg-white"
          }`}
          style={{
            left: isEnglish ? (isMobile ? "4px" : "4px") : undefined,
            right: isEnglish ? undefined : (isMobile ? "4px" : "4px"),
          }}
        />
      </button>
    </div>
  );
};

