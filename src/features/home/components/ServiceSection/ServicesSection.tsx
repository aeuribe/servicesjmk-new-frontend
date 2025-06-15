import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Equipment Assembly",
    description:
      "We assemble industrial machinery to meet operational requirements.",
    iconLeftUrl: "/icon _wrench_hammer.svg",
    width: 40,
    height: 40,
  },
  {
    id: 2,
    title: "Maintenance",
    description: "Scheduled maintenance to avoid unexpected downtime.",
    iconLeftUrl: "/icon _settings.svg",
    width: 40,
    height: 40,
  },
  {
    id: 3,
    title: "Technical Inspection",
    description:
      "Diagnosing potential issues and ensuring optimal equipment performance.",
    iconLeftUrl: "/icon _search.svg",
    width: 40,
    height: 40,
  },
  {
    id: 4,
    title: "Corrective Repairs",
    description: "Fast and effective solutions when equipment fails.",
    iconLeftUrl: "/icon _repair_service.svg",
    width: 55,
    height: 55,
  },
  {
    id: 5,
    title: "Custom Design",
    description: "Tailored equipment layouts and installation plans.",
    iconLeftUrl: "/icon _pencil_ruler.svg",
    width: 35,
    height: 35,
  },
  {
    id: 6,
    title: "Consulting Services",
    description: "Pre-project planning and operational advisory.",
    iconLeftUrl: "/icon _briefcase.svg",
    width: 40,
    height: 40,
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-[#F5F8F9] lg:pt-32 md:pt-20 sm:pt-18 pt-10 font-main md:px-0 px-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center font-medium text-2xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl">
          Industrial Solutions
          <br />
          Tailored to Your Operations
        </h2>
        <p className="lg:text-xl sm:text-sm text-xs text-center xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-sm text-black/70 lg:mt-8 sm:mt-3 mt-2">
          We offer end-to-end support for machinery installation, assembly,
           maintenance, and technical consultancy across all industries.
        </p>
      </div>
      <div className="flex items-center justify-center lg:mt-20 md:mt-10 mt-7">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-7 lg:max-w-7xl md:max-w-3xl sm:max-w-4xl max-w-xs sm:px-10">
          {services.map((services) => (
            <ServiceCard
              key={services.id}
              title={services.title}
              description={services.description}
              iconLeftUrl={services.iconLeftUrl}
              widht={services.width}
              height={services.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
