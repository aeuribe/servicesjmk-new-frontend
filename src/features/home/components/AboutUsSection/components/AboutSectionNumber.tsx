export const AboutSectionNumber: React.FC = () => (
  /* hidden: Eliminamos la distracción en móvil.
     lg:flex: Lo restauramos solo en escritorio (1024px+).
  */
  <div
    className="hidden lg:flex absolute left-8 z-20 flex-col items-center"
    style={{ top: "0", bottom: 0 }}
  >
    <div className="w-px bg-gray-400/50" />
    
    {/* Línea superior corta */}
    <div className="w-px bg-gray-400/50 h-10"></div>
    
    {/* Número 02 con el estilo sutil de escritorio */}
    <span className="text-2xl font-bold drop-shadow-sm text-white/60 my-2">
      02
    </span>
    
    {/* Línea guía que conecta con el resto del layout */}
    <div className="w-px bg-gray-400/50 flex-1" />
  </div>
);