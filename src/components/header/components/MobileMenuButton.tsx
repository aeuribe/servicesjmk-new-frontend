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
      className={`inline-flex items-center justify-center p-2.5 rounded-lg transition-all duration-300 
        hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 ${
        isLightMode
          ? "text-gray-900 hover:bg-gray-100"
          : "text-white drop-shadow-sm hover:bg-white/10"
      }`}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-controls="mobile-menu-drawer"
    >
      <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú principal"}</span>

      {/* Smooth Morphing Hamburger to X Icon */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full h-full gap-1.5">
          {/* Top Line - Smooth morph to X */}
          <span
            className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isOpen
                ? "rotate-45 translate-y-[6px]"
                : "rotate-0 translate-y-0"
            }`}
            style={{
              transformOrigin: "center",
            }}
          />

          {/* Middle Line - Fade out smoothly */}
          <span
            className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isOpen
                ? "opacity-0 scale-0"
                : "opacity-100 scale-100"
            }`}
            style={{
              transformOrigin: "center",
            }}
          />

          {/* Bottom Line - Smooth morph to X */}
          <span
            className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isOpen
                ? "-rotate-45 -translate-y-[6px]"
                : "rotate-0 translate-y-0"
            }`}
            style={{
              transformOrigin: "center",
            }}
          />
        </div>
      </div>
    </button>
  );
};
