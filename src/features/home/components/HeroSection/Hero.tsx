"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "Excellence in industrial solutions",
    "Precision engineering services", 
    "Your trusted industrial partner"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center xl:pt-10 lg:mt-15 md:mt-10 pt-15 mt-5 px-10 font-main ">
      <div className="xl:max-w-7xl lg:max-w-6xl md:max-w-2xl sm:max-w-xl max-w-sm mt-10 ">
        <h2 className="text-white text-4xl xl:text-7xl lg:text-6xl md:text-4xl md:text-start lg:mt-0 text-justify  leading-tight lg:px-0">
          We provide, install and maintain your industrial machinery
        </h2>
      </div>

      <div className="flex items-center justify-start xl:max-w-7xl lg:max-w-6xl lg:w-full md:max-w-2xl md:w-full sm:max-w-xl sm:w-full max-w-sm w-full lg:mt-10 md:mt-10 mt-10">
        <div className="flex flex-wrap">
          <div className="flex items-center gap-4">
            {/* Slider minimalista mejorado */}
            <div className="relative overflow-hidden xl:h-12 lg:h-10 md:h-10 h-8 flex items-center xl:w-72 lg:w-60 md:w-52 w-44">
              {/* Línea decorativa que se anima */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-[#E53E3E] to-transparent"></div>
              
              {/* Backdrop sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-[1px]"></div>
              
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute flex items-center gap-2 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 scale-100 blur-0"
                      : index < currentSlide
                      ? "opacity-0 -translate-y-4 scale-95 blur-sm"
                      : "opacity-0 translate-y-4 scale-95 blur-sm"
                  }`}
                >
                  <p 
                    className="font-main xl:text-base lg:text-sm md:text-sm text-xs whitespace-normal pl-3 relative"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 20%, #e0e0e0 50%, #ffffff 80%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      letterSpacing: '0.03em',
                      filter: index === currentSlide 
                        ? 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 24px rgba(229, 62, 62, 0.1))' 
                        : 'none',
                      textRendering: 'optimizeLegibility',
                      fontSmooth: 'always',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    {slide}
                  </p>
                </div>
              ))}
            </div>
            {/* Indicadores mejorados */}
            <div className="flex gap-1.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentSlide ? "bg-[#E53E3E] w-6" : "bg-white/30 w-1.5 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Link href="/services" passHref>
              <button className="bg-[#E53E3E] text-white xl:text-base lg:text-sm md:text-sm sm:text-xs xl:px-7 lg:px-5 md:px-3 sm:px-3 xl:py-2 lg:py-2 md:py-1 sm:py-1 py-1 px-3 text-xs transition duration-300 hover:bg-white hover:text-[#19165F] cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>

        </div>
      </div>

      <div className="my-5 ">
        <Image
          src="/hero-image4.png"
          alt="Hero Image"
          width={1280}
          height={0}
          className="xl:max-w-7xl lg:max-w-5xl  md:max-w-2xl sm:max-w-xl max-w-[310px] w-full h-auto xl:mt-16 lg:mt-10 md:mt-10 sm:mt-10 mt-10 mb-14 lg:mx-0 object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
