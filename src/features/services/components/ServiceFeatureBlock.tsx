"use client";
import React from "react";
import ServiceGallery from "@/features/services/components/gallery/ServiceGallery";
import { ServiceData } from "../types";
import { serviceIcons } from "../config/serviceIcons";
import { ServiceBackground } from "./ServiceFeatureBlock/ServiceBackground";
import { SectionNumberLine } from "./ServiceFeatureBlock/SectionNumberLine";
import { ServiceContent } from "./ServiceFeatureBlock/ServiceContent";

interface ServiceFeatureBlockProps {
  service: ServiceData;
}

export const ServiceFeatureBlock: React.FC<ServiceFeatureBlockProps> = ({
  service,
}) => {
  const isTextLeft = service.layout === "text-left";
  const Icon = serviceIcons[service.iconKey as keyof typeof serviceIcons];

  if (!Icon) {
    console.error(`Icon not found for key: ${service.iconKey}`);
    return null;
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 font-main relative overflow-hidden">
      {/* Background with color theme */}
      <ServiceBackground
        colorTheme={service.colorTheme}
        sectionNumber={service.sectionNumber}
      />

      {/* Section Number Line */}
      <SectionNumberLine
        sectionNumber={service.sectionNumber}
        colorTheme={service.colorTheme}
      />

      <div className="max-w-7xl mx-auto pl-12 sm:pl-14 lg:pl-16 pr-4 sm:pr-6 lg:pr-8 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch lg:items-center ${
            isTextLeft ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Text Content */}
          <div
            className={`${
              isTextLeft ? "lg:order-1" : "lg:order-2"
            } space-y-4 sm:space-y-6 lg:space-y-8 min-w-0`}
          >
            <ServiceContent service={service} Icon={Icon} />
          </div>

          {/* Service Gallery - Main View + Thumbnail Strip */}
          <div
            className={`${
              isTextLeft ? "lg:order-2" : "lg:order-1"
            } relative min-w-0`}
          >
            <ServiceGallery
              items={service.gallery}
              aspectRatio="cinematic"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

