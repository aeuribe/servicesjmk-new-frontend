// components/LoadingScreen.tsx
import Image from "next/image";

interface LoadingScreenProps {
  title?: string;
  subtitle?: string;
}

export const LoadingScreen = ({ 
  title = "Procesando Solicitud", 
  subtitle = "Sincronizando entorno..." 
}: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 transition-opacity duration-300 font-satoshi">
      {/* Contenedor del Isotipo giratorio */}
      <div className="relative h-20 w-20 animate-spin drop-shadow-2xl">
        <Image
          src="/isotipo.png"
          alt="Cargando"
          fill
          className="object-contain grayscale-[30%] contrast-125"
          priority
        />
      </div>
      
      {/* Textos dinámicos */}
      <p className="mt-8 text-slate-300 text-sm font-bold tracking-[0.2em] uppercase leading-none">
        {title}
      </p>
      <p className="mt-2 text-slate-500 text-[10px] font-medium tracking-widest uppercase">
        {subtitle}
      </p>
    </div>
  );
};