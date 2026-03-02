import React from "react";
import { ServiceData } from "../../types";

interface ServiceBackgroundProps {
  colorTheme: ServiceData["colorTheme"];
  sectionNumber: ServiceData["sectionNumber"];
}

export const ServiceBackground: React.FC<ServiceBackgroundProps> = ({
  colorTheme,
  sectionNumber,
}) => {
  const isWhiteTheme = colorTheme === "white";

  // Blue matches footer gradient:
  // linear-gradient(135deg, #062046 0%, #03152d 50%, #062046 100%)
  const gradientClass = isWhiteTheme
    ? "bg-gradient-to-br from-white via-[#f8f9fa] to-white"
    : "bg-gradient-to-br from-[#062046] via-[#03152d] to-[#062046]";

  const isGraySection02 = sectionNumber === "02";
  const backgroundClass = isGraySection02
    ? "bg-[linear-gradient(135deg,_#141414_0%,_#1a1a1a_50%,_#141414_100%)]"
    : gradientClass;

  return (
    <div className={`absolute inset-0 bg-local md:bg-fixed ${backgroundClass}`}>
      <div className={`absolute inset-0 ${isWhiteTheme ? "opacity-10" : "opacity-5"}`}>
        <div className="absolute inset-0 bg-local md:bg-fixed bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] bg-[length:40px_40px]" />
      </div>
    </div>
  );
};
