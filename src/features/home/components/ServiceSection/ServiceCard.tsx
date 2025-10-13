import React, { useState } from "react";
import Image from "next/image";

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
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className={`bg-white border border-gray-200 hover:border-[#19165F]/30 transition-all duration-500 group relative overflow-hidden shadow-lg hover:shadow-2xl ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ... resto del JSX ... */}
    </div>
  );
};

export default ServiceCard;
