"use client";

import React from "react";
import { ServicesHero } from "./components/ServicesHero";
import { EngineeringSection } from "./components/sections/EngineeringSection";
import { MachinerySection } from "./components/sections/MachinerySection";
import { MaintenanceSection } from "./components/sections/MaintenanceSection";
import { ContactFormSection } from "./components/ContactFormSection";

export default function Services() {
  return (
    <div className="min-w-[320px] max-w-[100vw] overflow-x-hidden font-main">
      <ServicesHero />
      <EngineeringSection />
      <MachinerySection />
      <MaintenanceSection />
      <ContactFormSection />
    </div>
  );
}
