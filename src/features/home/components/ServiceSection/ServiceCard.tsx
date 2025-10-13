import React from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

const ServiceCard = ({ service, index, isVisible }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <div
      className={`bg-white border border-gray-200 hover:border-[#19165F]/30 transition-all duration-500 group relative overflow-hidden shadow-lg hover:shadow-2xl ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <Icon className="w-12 h-12 text-[#19165F] mb-4" />
        <h3 className="text-lg font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};


export default ServiceCard;
