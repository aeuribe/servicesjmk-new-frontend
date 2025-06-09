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
    <div className="bg-[#F5F8F9] py-32 font-main">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center font-medium text-6xl">
          Industrial Solutions
          <br />
          Tailored to Your Operations
        </h2>
        <p className="text-xl text-black/70 mt-8">
          We offer end-to-end support for machinery installation, assembly,
          <br /> maintenance, and technical consultancy across all industries.
        </p>
      </div>
      <div className="flex items-center justify-center my-24">
        <div className="grid grid-cols-3 gap-7 w-7xl">
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
