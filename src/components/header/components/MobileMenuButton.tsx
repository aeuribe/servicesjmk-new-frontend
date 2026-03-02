interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  isLightMode?: boolean;
}

export const MobileMenuButton = ({
  isOpen,
  onToggle,
  isLightMode = false,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`group relative inline-flex items-center justify-center w-10 h-10 transition-colors duration-300 ${
        isLightMode
          ? "text-slate-900 hover:bg-slate-200/50"
          : "text-slate-100 hover:bg-white/10"
      }`}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    >
      <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú principal"}</span>

      {/* Contenedor del icono: Tamaño rígido para asegurar que la animación no salte */}
      <div className="relative w-6 h-3.5 flex flex-col justify-between items-end">
        
        {/* Línea Superior */}
        <span
          className={`block h-[2px] bg-current transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen 
              ? "w-6 rotate-45 translate-y-[6px]" 
              : "w-full"
          }`}
        />

        {/* Línea Central (Diseño asimétrico industrial) */}
        <span
          className={`block h-[2px] bg-current transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen 
              ? "w-0 opacity-0" 
              : "w-4 group-hover:w-full" // Se expande mecánicamente al pasar el dedo/mouse
          }`}
        />

        {/* Línea Inferior */}
        <span
          className={`block h-[2px] bg-current transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen 
              ? "w-6 -rotate-45 -translate-y-[6px]" 
              : "w-full"
          }`}
        />
      </div>
    </button>
  );
};