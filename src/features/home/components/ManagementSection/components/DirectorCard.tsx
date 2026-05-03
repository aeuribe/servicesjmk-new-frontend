import Image from "next/image";

interface DirectorItem {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

export const DirectorCard = ({
  director,
  active,
}: {
  director: DirectorItem;
  active: boolean;
}) => (
  <div
    className={`
      relative group overflow-hidden
      bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md

      border border-white/10 hover:border-blue-500/30
      p-8 flex flex-col items-center text-center

      transition-all duration-500 ease-out

      ${active ? "opacity-100 translate-y-0 shadow-lg shadow-black/20" : "opacity-70 translate-y-2 shadow-none"}
      hover:opacity-100 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/10
    `}
  >
    {director.image ? (
      <div className="relative w-44 h-44 mb-6 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent group-hover:from-blue-500/30 transition-all duration-500">
        <div className="relative w-full h-full rounded-full overflow-hidden bg-white/10">
          <Image
            src={director.image}
            alt={director.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 saturate-120"
          />
        </div>
      </div>
    ) : (
      /* Placeholder premium dorado para el CEO */
      <div className="relative w-44 h-44 mb-6 flex-shrink-0">
        {/* Anillo exterior dorado animado */}
        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 group-hover:from-yellow-200 group-hover:via-amber-400 group-hover:to-yellow-600 transition-all duration-700 shadow-[0_0_24px_4px_rgba(251,191,36,0.18)] group-hover:shadow-[0_0_40px_8px_rgba(251,191,36,0.32)]">
          {/* Cuerpo interno del placeholder */}
          <div className="w-full h-full rounded-full bg-[#0f0f0f] flex flex-col items-center justify-center gap-1 relative overflow-hidden">
            {/* Destello radial de fondo */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.10)_0%,transparent_70%)] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.18)_0%,transparent_70%)] transition-all duration-700" />
            {/* Línea decorativa superior */}
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-1 opacity-70" />
            {/* Texto principal */}
            <span className="text-amber-300 font-bold text-[11px] tracking-[0.22em] uppercase leading-tight z-10">
              Services
            </span>
            <span className="text-white font-extrabold text-xl tracking-[0.12em] uppercase leading-tight z-10">
              JMK
            </span>
            {/* Línea decorativa inferior */}
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-1 opacity-70" />
          </div>
        </div>
        {/* Destellos de esquina para efecto premium */}
        <div className="absolute top-1 right-3 w-1.5 h-1.5 rounded-full bg-amber-300 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
        <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-yellow-400 opacity-40 group-hover:opacity-80 transition-opacity duration-700 blur-[1px]" />
      </div>
    )}

    {/* Nombre con más presencia */}
    <h3 className="text-white text-2xl font-bold tracking-wide mb-2 group-hover:text-blue-100 transition-colors">
      {director.name}
    </h3>

    {/* CAMBIO 4: Pequeño acento visual "tech" debajo del título 
    */}
    <div className="flex flex-col items-center gap-3 mb-5 w-full">
        <p className="text-[#2563eb] font-medium text-sm uppercase tracking-wider">
            {director.title}
        </p>
        {/* Una pequeña línea divisoria que se expande al hacer hover */}
        <div className="h-px w-12 bg-white/20 group-hover:w-24 group-hover:bg-blue-500/50 transition-all duration-500"></div>
    </div>

    {/* Descripción con mejor color para lectura (slate-300 en vez de gray-400) */}
    <p className="text-slate-300 text-sm leading-relaxed px-4">
      {director.description}
    </p>
    
    {/* Un destello sutil en la esquina superior para dar profundidad */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
  </div>
);