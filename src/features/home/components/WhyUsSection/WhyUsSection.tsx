"use client";

import React, { useState } from "react";

const WhyUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <span className="text-[#19165F]/60 tracking-[0.2em] uppercase text-sm">
                Why Choose Us
              </span>
              <div className="h-px bg-[#E53E3E] mt-3 w-20"></div>
            </div>

            <h2 className="text-[#19165F] leading-tight">
              Industry-Leading Service Standards
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#19165F]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#19165F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-[#19165F] mb-2">Certified Expertise</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our team holds industry-recognized certifications and brings
                    decades of combined experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#E53E3E]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#E53E3E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-[#19165F] mb-2">Rapid Response</h4>
                  <p className="text-gray-600 leading-relaxed">
                    24/7 emergency support ensures minimal downtime for critical
                    operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#19165F]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#19165F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-[#19165F] mb-2">Proven Results</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Track record of measurable improvements in efficiency and
                    cost reduction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div
            className={`grid grid-cols-2 gap-6 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-gradient-to-br from-[#19165F] to-[#19165F]/90 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E53E3E] opacity-10 rounded-full -mr-12 -mt-12"></div>
              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl mb-2">99%</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">
                  Completion Rate
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#E53E3E] p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-[#19165F] text-4xl lg:text-5xl mb-2">
                  25+
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#19165F] p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-[#19165F] text-4xl lg:text-5xl mb-2">
                  24/7
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">
                  Support Available
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E53E3E] to-[#E53E3E]/90 p-8 text-white relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#19165F] opacity-10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl mb-2">100%</div>
                <div className="text-white/90 text-sm uppercase tracking-wide">
                  Custom Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
