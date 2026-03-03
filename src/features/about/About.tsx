"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// --- Components ---

const PillarIcon = ({ d }: { d: string }) => (
  <div className="w-12 h-12 bg-[#2563eb]/20 flex items-center justify-center border border-[#2563eb]/30">
    <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d} />
    </svg>
  </div>
);

// data structure for a person in the leadership section
interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const LeaderCard = ({
  leader,
  isLarge = false,
  hoveredId,
  setHoveredId,
}: {
  leader: Leader;
  isLarge?: boolean;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}) => {
  const [hasError, setHasError] = useState(false);
  
  return (
    <div
      className={`bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden group transition-all duration-500 ${
        isLarge ? "p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto w-full" : "p-6 sm:p-8 w-full"
      } `}
      onMouseEnter={() => setHoveredId(leader.id)}
      onMouseLeave={() => setHoveredId(null)}
      style={{
        boxShadow: hoveredId === leader.id ? '0 0 30px rgba(0, 212, 255, 0.15)' : 'none',
         clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
      }}
    >
      <div className={`flex ${isLarge ? "flex-col md:flex-row" : "flex-col"} items-center gap-8`}>
        {/* Contenedor de Imagen Optimizado */}
        <div
          className={`relative flex-shrink-0 overflow-hidden border-2 border-white/10 bg-slate-800 ${
            isLarge
              ? "w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56"
              : "w-28 h-28 sm:w-32 sm:h-32"
          }`}
        >
          {!hasError ? (
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className={`object-cover object-top transition-transform duration-700 ${
                hoveredId === leader.id ? "scale-110" : "scale-100"
              }`}
              style={{ filter: "contrast(1.1) brightness(1.1)" }} // Color vibrante desde el inicio
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/40 text-xs uppercase">Photo</div>
          )}
          {/* Overlay sutil que desaparece en hover */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${hoveredId === leader.id ? "opacity-0" : "opacity-100"}`} />
        </div>

        {/* Texto Alineado */}
        <div className={`${isLarge ? "text-center md:text-left" : "text-center"} flex-1`}>
          <h3
            className={`text-white font-bold mb-1 uppercase tracking-tight ${
              isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
            }`}
          >
            {leader.name}
          </h3>
          <p className="text-[#2563eb] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            {leader.role}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed font-light">
            {leader.bio}
          </p>
        </div>
      </div>
      
      {/* Decoración Industrial en la esquina */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none">
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#2563eb]" />
      </div>
    </div>
  );
};
// --- Main Component ---

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const t = useTranslations("About");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const leadership: Leader[] = [
    {
      id: "director",
      name: t("leadership.director.name"),
      role: t("leadership.director.role"),
      bio: t("leadership.director.bio"),
      image: "/team/director.jpg",
    },
    {
      id: "kleyder",
      name: t("leadership.kleyder.name"),
      role: t("leadership.kleyder.role"),
      bio: t("leadership.kleyder.bio"),
      image: "/kleyder.png",
    },
    {
      id: "it-director", // Cambiado de CTO a IT Director para reflejar tu cargo real
      name: t("leadership.andres.name"),
      role: t("leadership.andres.role"),
      bio: t("leadership.andres.bio"),
      image: "/me2.png",
    },
  ];

  const pillars = [
    { id: "logistics", d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
    { id: "heritage", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { id: "mastery", d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }
  ];

  return (
    <div className="min-h-screen font-main relative overflow-hidden bg-[#141414]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center py-16 sm:py-20">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute left-4 lg:left-8 top-16 bottom-0 hidden sm:flex flex-col items-center">
          <span className="text-2xl font-bold text-white/60 mb-4">01</span>
          <div className="w-px bg-white/20 flex-1" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight leading-tight">
                {t("heroHeadline")}
              </h1>
              <div className="h-1 bg-[#2563eb] w-20 sm:w-24 mt-4 sm:mt-6" />
            </div>

            <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed">
              <p>{t("heroDescription1")}</p>
              <p>{t("heroDescription2")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {pillars.map((p) => (
                <div key={p.id} className="space-y-3">
                  <PillarIcon d={p.d} />
                  <h3 className="text-white font-bold text-xs uppercase tracking-widest">{t(`pillars.${p.id}.title`)}</h3>
                  <p className="text-white/60 text-[10px] leading-tight">{t(`pillars.${p.id}.description`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative h-72 sm:h-96 lg:h-[600px] transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
              }}
            >
              <Image src="/founder-2.jpg" alt="Operational Background" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative py-20 sm:py-24 bg-[#1e1e1e]">
        <div className="absolute left-4 lg:left-8 top-0 bottom-0 hidden sm:flex flex-col items-center">
          <span className="text-2xl font-bold text-white/60 mb-4">02</span>
          <div className="w-px bg-white/20 flex-1" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-20">
          <span className="text-[#2563eb] tracking-[0.3em] uppercase text-xs font-bold mb-4 block">
            {t("leadership.pretitle")}
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold">{t("leadership.title")}</h2>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          {/* Director Row */}
          <LeaderCard leader={leadership[0]} isLarge hoveredId={hoveredId} setHoveredId={setHoveredId} />

          {/* IT Director & BizDev Row */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <LeaderCard leader={leadership[1]} hoveredId={hoveredId} setHoveredId={setHoveredId} />
            <LeaderCard leader={leadership[2]} hoveredId={hoveredId} setHoveredId={setHoveredId} />
          </div>
        </div>
      </section>
    </div>
  );
}