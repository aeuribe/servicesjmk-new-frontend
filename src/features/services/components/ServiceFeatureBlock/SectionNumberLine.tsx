import React from "react";
import { ServiceData } from "../../types";

interface SectionNumberLineProps {
  sectionNumber: string | number;
  colorTheme: ServiceData["colorTheme"];
}

export const SectionNumberLine: React.FC<SectionNumberLineProps> = ({
  sectionNumber,
  colorTheme,
}) => {
  const numberColorClass =
    colorTheme === "white" ? "text-[#07296b]/40" : "text-white/60";
  const lineColorClass =
    colorTheme === "white" ? "bg-[#07296b]/20" : "bg-white/30";

  return (
    <div className="absolute left-3 sm:left-4 lg:left-8 top-0 bottom-0 z-20 flex flex-col items-center">
      <span
        className={`text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-sm ${numberColorClass}`}
      >
        {sectionNumber}
      </span>
      <div className={`w-px ${lineColorClass} flex-1`}></div>
    </div>
  );
};

