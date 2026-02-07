"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SectionNumber } from "@/components/shared/SectionNumber";

// Hero images array - puedes agregar más imágenes aquí
const HERO_IMAGES = [
  { src: "/placa-jmk.png", alt: "Industrial Services JMK" },
  { src: "/founder.jpg", alt: "Technology Robot Arm" },
  { src: "/brazo.png", alt: "Technology Robot Arm" },
  // Agrega más imágenes aquí si lo deseas
];

const SLIDE_DURATION = 7000; // 10 segundos por imagen

const Hero = () => {
  const t = useTranslations("Hero");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      setProgress(0); // Reset progress when changing image
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION / 50); // Update every 50ms
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center font-main overflow-hidden">
      {/* Hero Background Image - Clear and Full Viewport */}

      {/* 1. FONDO BASE (Gradiente fijo basado en viewport para continuidad) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100vh",
        }}
      >
        {/* Top vignette to give the header more presence over the image (no blur, only darkening) */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none" />

        {/* Subtle background pattern for depth - same as section 2 */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
              backgroundAttachment: "fixed",
            }}
          ></div>
        </div>
      </div>

      {/* 2. LA "TARJETA" CON LA IMAGEN DEL ROBOT - Con profundidad y elevación */}
      <div
        className="
          absolute top-0 bottom-0 left-0 z-10 
          
          /* RESPONSIVE: */
          w-full                 /* Móvil: Ocupa 100% del ancho */
          lg:w-[calc(100%-6rem)] /* Desktop: Resta espacio a la derecha para ver el fondo base */
        "
        style={{
          // El corte industrial limpio
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 88% 100%, 0 100%)",
          // Sombras múltiples para profundidad
          filter:
            "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 0 1px rgba(255, 255, 255, 0.05))",
        }}
      >
        {/* A. Carrusel de Imágenes con transición suave */}
        <div className="relative w-full h-full">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                index === currentIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0} // Solo la primera imagen tiene priority
              />
            </div>
          ))}

          {/* 2. LA CAPA DE OPACIDAD (OVERLAY) */}
          {/* Esta es la clave: absolute, inset-0 (ocupa todo) y bg-black con transparencia */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-20"></div>
        </div>
      </div>

      {/* Progress Bar Vertical - Elegante y sutil */}
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <div className="w-0.5 h-80 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="absolute bottom-0 left-0 right-0 bg-white/20 transition-all duration-50 ease-linear rounded-full"
            style={{
              height: `${progress}%`,
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
            }}
          />
        </div>
      </div>

      {/* Continuous Section Number Line */}
      <div className="absolute left-4 lg:left-8 top-16 bottom-0 z-20 flex flex-col items-center">
        {/* Number at the top of this section */}
        <span className="text-2xl font-bold drop-shadow-sm text-white/60">
          01
        </span>
        {/* Line extending down through this section - consistent color */}
        <div className="w-px bg-gray-400/50 flex-1"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-32 pb-16">
        <div className="max-w-4xl pl-12 lg:pl-16">
          {/* Section Content */}
          <div className="mb-6">
            {/* Main Headline */}
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              {t("headline")}
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-lg drop-shadow-2xl  sm:text-xl md:text-2xl mb-8 font-light max-w-2xl ">
              {t("subtitle")}
            </p>

            {/* CTA Button with Clipped Corner */}
            <Link href="/services" passHref>
              <button
                className="bg-[#2563eb] text-white px-8 py-4 text-base sm:text-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 uppercase tracking-wider inline-flex items-center gap-3 group relative"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
                }}
              >
                <span className="relative z-10">{t("button")}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
