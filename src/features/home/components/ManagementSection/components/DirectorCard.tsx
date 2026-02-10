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
      bg-white/5 backdrop-blur-sm border border-white/10 p-6
      transition-all duration-500 
      ${active ? "opacity-100 scale-100" : "opacity-70 scale-95"}
      hover:scale-105 hover:opacity-100 hover:bg-white/10 hover:border-white/20
      hover:shadow-xl hover:-translate-y-1
    `}
  >
    <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
      <Image
        src={director.image}
        alt={director.name}
        fill
        className="object-cover"
      />
    </div>

    <h3 className="text-white text-xl font-semibold mb-2 text-center">
      {director.name}
    </h3>

    <p className="text-[#2563eb] text-sm mb-4 text-center">{director.title}</p>

    <p className="text-gray-400 text-sm leading-relaxed">
      {director.description}
    </p>
  </div>
);
