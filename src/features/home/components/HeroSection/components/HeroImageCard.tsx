import Image from "next/image";

export interface HeroImage {
  src: string;
  alt: string;
}

interface HeroImageCardProps {
  images: HeroImage[];
  currentIndex: number;
}

export const HeroImageCard = ({ images, currentIndex }: HeroImageCardProps) => (
  <div
    className="
      absolute top-0 left-0 z-10 w-full h-[100vh] sm:h-[75vh] lg:h-full lg:w-[calc(100%-6rem)]
      /* SOLUCIÓN AL HYDRATION: Usamos clases personalizadas de Tailwind o estilos inline con variables */
      /* Definimos el clip-path por defecto (MÓVIL) y luego lo sobreescribimos en lg (DESKTOP) */
      [clip-path:polygon(0_0,_100%_0,_100%_90%,_78%_100%,_0_100%)]
      lg:[clip-path:polygon(0_0,_100%_0,_100%_75%,_88%_100%,_0_100%)]
    "
    style={{
      filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
    }}
  >
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="
              object-cover object-center lg:object-center
              scale-100 transition-transform duration-[2000ms]
            "
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 90vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/90 lg:via-black/40 lg:to-transparent z-20" />
    </div>
  </div>
);