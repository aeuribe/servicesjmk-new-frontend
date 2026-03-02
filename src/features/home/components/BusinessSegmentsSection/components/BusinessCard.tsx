import React, { useState } from 'react';
import Image from "next/image";
// Puedes quitar esta importación si ya no vas a usar el scroll reveal aquí
// import { useScrollReveal } from '@/components/hooks/useScrollReveal'; 

interface SegmentItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BusinessCard: React.FC<{ segment: SegmentItem; index: number }> = ({ segment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Manejador unificado para clics y toques de pantalla
  const toggleMobile = () => {
    // Solo ejecutamos la lógica de expansión si estamos en móvil
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      // touch-manipulation elimina el lag táctil en móviles
      className="relative aspect-square overflow-hidden group cursor-pointer bg-[#0A1E3F] transition-all duration-700 ease-out will-change-transform max-md:!delay-0 touch-manipulation"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
      }}
      // onPointerDown responde instantáneamente al dedo, sin esperar a que se levante
      onPointerDown={toggleMobile} 
    >
      {/* IMAGEN DE FONDO */}
      <Image
        src={segment.image}
        alt={segment.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* OVERLAY OSCURO */}
      <div
        className={`absolute inset-0 transition-all duration-500 bg-gradient-to-t from-[#051124] via-[#051124]/80 to-transparent ${
          isExpanded ? 'opacity-95' : 'opacity-70 group-hover:opacity-95'
        }`}
      />

      {/* LÍNEA AZUL LATERAL */}
      <div className={`absolute left-0 top-0 bottom-0 bg-blue-600 transition-all duration-500 z-20 ${
        isExpanded ? 'opacity-100 w-[3px]' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100 w-1'
      }`} />

      {/* CONTENEDOR DE TEXTOS */}
      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end z-10">
        <div className={`transition-transform duration-700 ease-in-out w-full ${
          isExpanded ? '-translate-y-4' : 'translate-y-0'
        }`}>

          {/* LÍNEA AZUL SUPERIOR */}
          <div className={`h-[3px] bg-blue-600 mb-2 transition-all duration-500 ${
            isExpanded 
              ? 'w-10 opacity-100 top-0 mt-2 absolute' 
              : 'w-10 opacity-100 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0'
          }`} />

          {/* TÍTULO CORREGIDO: Ya no se vuelve transparente */}
          <h3 className={`text-white font-bold uppercase tracking-wider leading-tight drop-shadow-lg text-xs md:text-xl lg:text-2xl ${isExpanded ? 'opacity-0' : 'text-white'}`}>
            {segment.title}
          </h3>

          {/* DESCRIPCIÓN */}
          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isExpanded 
              ? 'max-h-[160px] opacity-100 mt-2 visible' 
              : 'max-h-0 opacity-0 invisible md:group-hover:max-h-[160px] md:group-hover:opacity-100 md:group-hover:mt-3 md:group-hover:visible'
          }`}>
            <p className="text-slate-200 text-[10px] leading-[1.35] md:text-sm md:leading-relaxed w-full">
              {segment.description}
            </p>
          </div>
          
          {/* INDICADOR TÁCTIL (MÓVIL) */}
          {!isExpanded && (
            <div className="md:hidden text-[8px] text-blue-400 mt-1 animate-pulse uppercase font-medium">
              Toca para leer
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;