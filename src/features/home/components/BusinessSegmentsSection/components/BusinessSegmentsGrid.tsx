import Image from "next/image";

interface SegmentsGridProps {
  segments: SegmentItem[];
}

interface SegmentItem {
  id: number;
  title: string;
  image: string;
}

export const BusinessSegmentsGrid: React.FC<SegmentsGridProps> = ({ segments }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pl-12 lg:pl-16">
    {segments.map((segment) => (
      <SegmentCard key={segment.id} segment={segment} />
    ))}
  </div>
);

/* ============================================================
   COMPONENTE 4: Tarjeta individual de segmento
============================================================ */
const SegmentCard: React.FC<{ segment: SegmentItem }> = ({ segment }) => (
  <div
    className="relative aspect-square overflow-hidden group cursor-pointer"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)",
    }}
  >
    {/* Imagen recortada por el clipPath */}
    <Image
      src={segment.image}
      alt={segment.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Panel sólido coherente con la página */}
    <div
      className="
        absolute inset-0 flex flex-col justify-end
        bg-gradient-to-t from-[#0A1E3F]/95 via-[#0A1E3F]/70 to-transparent
        p-6
        transition-all duration-500
        group-hover:from-[#0A1E3F]
      "
    >
      {/* Título: sube y se centra al hacer hover */}
      <h3
        className="
          text-white font-semibold text-lg md:text-xl leading-tight
          transition-all duration-500
          group-hover:translate-y-[-40px] 
        "
      >
        {segment.title}
      </h3>

      {/* Descripción oculta que sube desde abajo */}
      <p
        className="
          text-white/90 text-sm opacity-0
          translate-y-6
          transition-all duration-500
          group-hover:opacity-100 group-hover:translate-y-0
        "
      >
        aaaaaaaaaaa aaa aaaaa aaaaaaaaa aaaaaaaaaaa aaaaaa aaaaaaaaaa aaaaaaa a aaaaaaa aaaaaa aaa
      </p> 
    </div>

    {/* Overlay suave para profundidad */}
    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
  </div>
);