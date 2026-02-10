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
      absolute top-0 bottom-0 left-0 z-10
      w-full
      lg:w-[calc(100%-6rem)]
    "
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 75%, 88% 100%, 0 100%)",
      filter:
        "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 0 1px rgba(255, 255, 255, 0.05))",
    }}
  >
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-20" />
    </div>
  </div>
);