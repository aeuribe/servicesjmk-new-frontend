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
    {/* CAMBIO 3: El contenedor de la imagen. 
       Añadimos un anillo sutil y un "brillo" detrás de la cabeza para que destaque del fondo oscuro.
    */}
    <div className="relative w-44 h-44 mb-6 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent group-hover:from-blue-500/30 transition-all duration-500">
        <div className="relative w-full h-full rounded-full overflow-hidden bg-white/10">
            {/* IMPORTANTE: Esta imagen debe ser un PNG transparente */}
            <Image
                src={director.image}
                alt={director.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // Ajustamos object-position para que la cabeza quede perfecta (puede que necesites mover el 'top')
                className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 saturate-120"
            />
      </div>
    </div>

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