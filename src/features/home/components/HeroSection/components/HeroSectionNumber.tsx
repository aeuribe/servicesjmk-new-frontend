export const HeroSectionNumber = () => (
  /* hidden: lo oculta por defecto (móvil).
     lg:flex: lo vuelve a mostrar en pantallas grandes (1024px+).
  */
  <div className="hidden lg:flex absolute left-8 top-4 bottom-0 z-20 flex-col items-center opacity-100">
    
    {/* En Desktop mantenemos tu estilo original de alta fidelidad */}
    <span className="text-2xl font-bold font-mono tracking-tighter drop-shadow-sm text-white/60 mb-4">
      01
    </span>
    
    {/* La línea guía vertical */}
    <div className="w-[1px] bg-gray-400/50 flex-1" />
  </div>
);