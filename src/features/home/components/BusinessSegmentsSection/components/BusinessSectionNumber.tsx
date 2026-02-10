export const BusinessSectionNumber: React.FC = () => (
  <div
    className="absolute left-4 lg:left-8 z-20 flex flex-col items-center"
    style={{ top: 0, bottom: 0 }}
  >
    {/* Línea superior corta */}
    <div className="w-px bg-gray-400/50 h-10"></div>

    {/* Número */}
    <span className="text-2xl font-bold drop-shadow-sm text-[#0a1929]/30">
      03
    </span>

    {/* Línea inferior que crece dentro de la sección */}
    <div className="w-px bg-gray-400/50 flex-1"></div>
  </div>
);