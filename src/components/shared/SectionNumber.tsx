"use client";
import React from "react";

interface SectionNumberProps {
  number: string;
  className?: string;
  lineClassName?: string;
  textColor?: string;
  showBottomCircle?: boolean;
  circleLetter?: string;
}

export const SectionNumber: React.FC<SectionNumberProps> = ({
  number,
  className = "",
  lineClassName = "",
  textColor = "text-[#0a1929]/30",
  showBottomCircle = false,
  circleLetter = "N",
}) => {
  return (
    <div className={`flex flex-col items-center h-full ${className}`}>
      <span className={`text-2xl font-bold drop-shadow-sm ${textColor}`}>{number}</span>
      <div className={`w-px ${lineClassName} flex-1 relative`}>
        {showBottomCircle && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-black border border-gray-400/50 flex items-center justify-center z-10">
            <span className="text-white font-semibold text-lg">{circleLetter}</span>
          </div>
        )}
      </div>
    </div>
  );
};

