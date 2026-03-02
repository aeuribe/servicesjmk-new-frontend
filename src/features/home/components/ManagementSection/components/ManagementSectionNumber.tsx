export const ManagementSectionNumber: React.FC = () => (
  /* hidden: Eliminamos el número 04 en móviles para evitar distracciones.
     lg:flex: Lo restauramos en pantallas grandes para mantener la línea de diseño.
  */
  <div
    className="hidden lg:flex absolute left-8 z-20 flex-col items-center"
    style={{ top: 0, bottom: 0 }}
  >
    {/* Línea superior guía */}
    <div className="w-px bg-gray-400/50 h-10"></div>

    {/* Número de sección con transparencia sutil */}
    <span className="text-2xl font-bold drop-shadow-sm text-white/30 my-2">
      04
    </span>

    {/* Extensión de la línea hacia el final de la sección */}
    <div className="w-px bg-gray-400/50 flex-1"></div>
  </div>
);