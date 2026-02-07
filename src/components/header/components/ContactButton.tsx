import Link from "next/link";
import { useTranslations } from "next-intl";

interface ContactButtonProps {
  isScrolled?: boolean;
  onPageChange: (page: "home" | "services" | "about" | "contact") => void;
  isMobile?: boolean;
}

export const ContactButton = ({
  onPageChange,
  isMobile = false,
}: ContactButtonProps) => {
  const t = useTranslations("header");

  const className = isMobile
    ? "bg-[#2563eb] text-white px-6 py-3.5 text-sm font-semibold hover:bg-[#1d4ed8] uppercase tracking-wider inline-flex items-center justify-center gap-3 group relative w-full"
    : "bg-[#2563eb] text-white px-6 py-2.5 text-xs font-semibold hover:bg-[#1d4ed8] uppercase tracking-wider inline-flex items-center gap-3 group relative";

  if (isMobile) {
    return (
      <Link
        href="/contact"
        onClick={() => onPageChange("contact")}
        className={className}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
        }}
      >
        <span className="relative z-10">{t("contact")}</span>
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10"
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
    );
  }

  return (
    <Link
      href="/contact"
      onClick={() => onPageChange("contact")}
      className={className}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
      }}
    >
      <span className="relative z-10">{t("contact")}</span>
      <svg
        className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10"
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
  );
};

