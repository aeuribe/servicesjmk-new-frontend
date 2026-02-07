import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  onPageChange: (page: "home" | "services" | "about" | "contact") => void;
  isLightMode?: boolean;
}

export const Logo = ({ onPageChange, isLightMode = false }: LogoProps) => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 min-w-0"
      onClick={() => onPageChange("home")}
    >
      <Image
        src="/isotipo.svg"
        alt="Logo Services JMK"
        width={28}
        height={28}
        className="select-none"
      />
      <span className="min-w-0">
        <span className={`block text-xs leading-[1.1] tracking-[0.22em] uppercase font-semibold ${
          isLightMode ? "text-gray-900" : "text-white"
        }`}>
          Services JMK
        </span>
        <span className={`block text-[11px] leading-[1.1] tracking-wide ${
          isLightMode ? "text-gray-600" : "text-gray-300"
        }`}>
          Industrial services
        </span>
      </span>
    </Link>
  );
};

