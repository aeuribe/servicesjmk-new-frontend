"use client";
import React from "react";
import { ServicesHero } from "./components/ServicesHero";
import { ServiceFeatureBlock } from "./components/ServiceFeatureBlock";
import { ContactFormSection } from "./components/ContactFormSection";
import { useServicesTranslations } from "./hooks/useServicesTranslations";
import { createServiceData } from "./config/serviceData";

export default function Services() {
  const t = useServicesTranslations();
  const services = createServiceData(t);

  return (
    <div className="min-w-[320px] font-main">
      <ServicesHero />

      {services.map((service) => (
        <ServiceFeatureBlock key={service.id} service={service} />
      ))}

      <ContactFormSection />
    </div>
  );
}
