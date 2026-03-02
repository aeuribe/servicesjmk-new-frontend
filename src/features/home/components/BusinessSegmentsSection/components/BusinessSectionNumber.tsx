export const BusinessSectionNumber: React.FC = () => (
  /* hidden: desaparece en móvil por defecto.
     lg:flex: reaparece en escritorio (1024px+) manteniendo la estructura vertical.
  */
  <div
    className="hidden lg:flex absolute left-8 z-20 flex-col items-center"
    style={{ top: 0, bottom: 0 }}
  >
    {/* Línea superior corta */}
    <div className="w-px bg-gray-400/50 h-10"></div>

    {/* Número: Mantenemos el estilo sutil para desktop */}
    <span className="text-2xl font-bold drop-shadow-sm text-[#0a1929]/30 my-2">
      03
    </span>

    {/* Línea inferior que crece dentro de la sección */}
    <div className="w-px bg-gray-400/50 flex-1"></div>
  </div>
);