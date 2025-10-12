"use client";
import React, { useState } from "react";

// Custom SVG Icons for Services
const InstallationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MaintenanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

const RepairIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
  </svg>
);

const DesignIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const OptimizationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ConsultingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  scope: {
    title: string;
    items: string[];
  };
  color: "primary" | "accent";
}

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const services: Service[] = [
    {
      icon: InstallationIcon,
      title: "Specialized Industrial Installation",
      description: "Assembly and commissioning of industrial equipment, ensuring proper integration with existing infrastructure.",
      scope: {
        title: "Scope",
        items: [
          "Technical and logistics planning",
          "Physical assembly and system connection",
          "Calibration and operational testing"
        ]
      },
      color: "primary"
    },
    {
      icon: MaintenanceIcon,
      title: "Comprehensive Industrial Maintenance",
      description: "Service combining scheduled and specialized maintenance to ensure operational continuity of equipment.",
      scope: {
        title: "Scope",
        items: [
          "Scheduled maintenance: periodic inspections, preventive adjustments, critical parts replacement",
          "Specialized maintenance: immediate attention to unforeseen failures, rapid diagnostics and repairs"
        ]
      },
      color: "accent"
    },
    {
      icon: RepairIcon,
      title: "Repair & Operational Recovery",
      description: "Diagnosis and repair of failures in equipment and production lines, focused on minimizing downtime.",
      scope: {
        title: "Scope",
        items: [
          "Technical failure identification",
          "Replacement of damaged components",
          "Adjustments and validation testing"
        ]
      },
      color: "primary"
    },
    {
      icon: DesignIcon,
      title: "Production Line Design & Adaptation",
      description: "Development of custom industrial solutions, from conceptual design to implementation of complete production lines.",
      scope: {
        title: "Scope",
        items: [
          "Process engineering and planning",
          "Equipment and system integration",
          "Pilot testing and initial optimization"
        ]
      },
      color: "accent"
    },
    {
      icon: OptimizationIcon,
      title: "Industrial Process Optimization",
      description: "Analysis and improvement of existing processes to increase productivity and reduce costs.",
      scope: {
        title: "Scope",
        items: [
          "Process auditing",
          "Bottleneck identification",
          "Implementation of technical and operational improvements"
        ]
      },
      color: "primary"
    },
    {
      icon: ConsultingIcon,
      title: "Technical & Industrial Consulting",
      description: "Strategic and technical advisory to support companies in decision-making related to industrial processes, technological infrastructure, and resource optimization.",
      scope: {
        title: "Scope",
        items: [
          "Assessment of technical and operational needs",
          "Recommendation of scalable and sustainable solutions",
          "Definition of honest metrics to measure impact",
          "Support during implementation of improvements"
        ]
      },
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#19165F]/5 font-main">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInFromRight 0.6s ease-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-[#19165F] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53E3E] rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div>
                <div className="inline-block mb-4">
                  <span className="text-[#E53E3E] tracking-[0.3em] uppercase text-xs">
                    Our Expertise
                  </span>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#E53E3E] to-transparent mt-2"></div>
                </div>
                <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                  Industrial Services<br />That Drive Results
                </h1>
              </div>
              
              <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions designed to optimize your operations, reduce downtime, 
                and maximize efficiency across every stage of your industrial processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-[#19165F]/60 tracking-[0.2em] uppercase text-sm">
              What We Offer
            </span>
            <div className="h-px bg-[#E53E3E] mt-3 w-20 mx-auto mb-6"></div>
            <h2 className="text-[#19165F] leading-tight mb-4">
              Specialized Solutions for Every Challenge
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From installation to optimization, we provide end-to-end industrial services 
              tailored to your specific operational needs.
            </p>
          </div>

          {/* Services Cards */}
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedService === index;
              const isPrimary = service.color === "primary";
              
              return (
                <div
                  key={index}
                  className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="relative">
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${isPrimary ? 'bg-[#19165F]' : 'bg-[#E53E3E]'}`}></div>
                    
                    <div className="p-8 lg:p-12">
                      <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                          <div className={`w-20 h-20 ${isPrimary ? 'bg-[#19165F]' : 'bg-[#E53E3E]'} flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-10 h-10 text-white" />
                            <div className={`absolute inset-0 ${isPrimary ? 'bg-[#E53E3E]' : 'bg-[#19165F]'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-[#19165F] mb-3 group-hover:text-[#E53E3E] transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          {/* Scope Section - Expandable */}
                          <div>
                            <button
                              onClick={() => setExpandedService(isExpanded ? null : index)}
                              className="flex items-center gap-2 text-[#19165F] hover:text-[#E53E3E] transition-colors duration-300 group/button"
                            >
                              <span className="uppercase tracking-wider text-sm">{service.scope.title}</span>
                              <svg 
                                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            <div 
                              className={`overflow-hidden transition-all duration-500 ${
                                isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className={`border-l-2 ${isPrimary ? 'border-[#19165F]' : 'border-[#E53E3E]'} pl-6 space-y-3`}>
                                {service.scope.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1.5">
                                      <div className={`w-1.5 h-1.5 ${isPrimary ? 'bg-[#19165F]' : 'bg-[#E53E3E]'}`}></div>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {item}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Number Badge */}
                        <div className="hidden lg:flex flex-shrink-0">
                          <div className="w-16 h-16 border-2 border-gray-200 group-hover:border-[#E53E3E] transition-colors duration-300 flex items-center justify-center">
                            <span className="text-gray-400 group-hover:text-[#E53E3E] transition-colors duration-300 text-2xl">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Capabilities Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.7s' }}
          >
            <span className="text-[#19165F]/60 tracking-[0.2em] uppercase text-sm">
              Additional Capabilities
            </span>
            <div className="h-px bg-[#E53E3E] mt-3 w-20 mx-auto mb-6"></div>
            <h2 className="text-[#19165F] leading-tight mb-4">
              Comprehensive Industrial Support
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Beyond our core services, we offer specialized capabilities to ensure complete coverage of your industrial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Equipment Assembly */}
            <div 
              className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.75s' }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 border-2 border-gray-200 hover:border-[#19165F] transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[#19165F]/10 group-hover:bg-[#19165F] flex items-center justify-center mb-6 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#19165F] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <h3 className="text-[#19165F] mb-4 group-hover:text-[#E53E3E] transition-colors duration-300">
                  Equipment Assembly
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Professional assembly of industrial machinery with precision and adherence to manufacturer specifications and safety standards.
                </p>
                <div className="flex items-center gap-2 text-[#19165F] group-hover:text-[#E53E3E] transition-colors duration-300">
                  <div className="w-8 h-px bg-[#E53E3E]"></div>
                  <span className="text-sm uppercase tracking-wide">Core Capability</span>
                </div>
              </div>
            </div>

            {/* Technical Inspection */}
            <div 
              className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 border-2 border-gray-200 hover:border-[#E53E3E] transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[#E53E3E]/10 group-hover:bg-[#E53E3E] flex items-center justify-center mb-6 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#E53E3E] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-[#19165F] mb-4 group-hover:text-[#E53E3E] transition-colors duration-300">
                  Technical Inspection
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive evaluation and diagnostic services to identify potential issues, ensure compliance, and optimize equipment performance.
                </p>
                <div className="flex items-center gap-2 text-[#19165F] group-hover:text-[#E53E3E] transition-colors duration-300">
                  <div className="w-8 h-px bg-[#E53E3E]"></div>
                  <span className="text-sm uppercase tracking-wide">Core Capability</span>
                </div>
              </div>
            </div>

            {/* Custom Design */}
            <div 
              className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.85s' }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 border-2 border-gray-200 hover:border-[#19165F] transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[#19165F]/10 group-hover:bg-[#19165F] flex items-center justify-center mb-6 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#19165F] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-[#19165F] mb-4 group-hover:text-[#E53E3E] transition-colors duration-300">
                  Custom Design
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Tailored design solutions for equipment layouts, workflow optimization, and custom installations adapted to your specific operational requirements.
                </p>
                <div className="flex items-center gap-2 text-[#19165F] group-hover:text-[#E53E3E] transition-colors duration-300">
                  <div className="w-8 h-px bg-[#E53E3E]"></div>
                  <span className="text-sm uppercase tracking-wide">Core Capability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#19165F] to-[#19165F]/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block mb-4">
              <span className="text-[#E53E3E] tracking-[0.3em] uppercase text-xs">
                Get Started Today
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-[#E53E3E] to-transparent mt-2"></div>
            </div>

            <h2 className="text-white leading-tight">
              Ready to Enhance Your<br />Industrial Operations?
            </h2>

            <p className="text-white/80 leading-relaxed max-w-2xl mx-auto text-lg">
              Let&apos;s discuss how our specialized services can help you achieve your operational goals. 
              Contact us for a free consultation and custom solution assessment.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <button className="bg-[#E53E3E] text-white px-10 py-5 hover:bg-[#E53E3E]/90 transition-all duration-300 inline-flex items-center gap-3 group shadow-lg hover:shadow-xl">
                <span>Request a Consultation</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <a
                href="tel:+17862587335"
                className="flex items-center gap-3 text-white hover:text-[#E53E3E] transition-colors px-10 py-5 border-2 border-white hover:border-[#E53E3E] group"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (786) 258-7335</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}