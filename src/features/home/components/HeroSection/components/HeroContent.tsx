import Link from "next/link";
import { useTranslations } from "next-intl";

export const HeroContent = ({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) => (
  <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 lg:pt-32 pb-16">
    
    <style>{`
      /* Aparición súper sutil y rápida desde abajo (Igual a la sección About) */
      @keyframes fadeInUpSubtle {
        0% { opacity: 0; transform: translateY(24px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      .anim-fade-up-subtle {
        /* Bajamos el tiempo a 700ms para que sea dinámico pero no molesto */
        animation: fadeInUpSubtle 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0;
      }
      
      /* Retrasos cortos para una cascada rápida */
      .delay-150 { animation-delay: 150ms; }
      .delay-300 { animation-delay: 300ms; }
    `}</style>

    <div className="max-w-4xl pl-4 lg:pl-16 flex flex-col items-start text-left">
      <div className="mb-6 w-full">
        
        {/* TÍTULO: Entra instantáneamente hacia arriba (quitamos el deslizamiento lateral) */}
        <div className="anim-fade-up-subtle">
          {/* Nota: Asegúrate de agregarle 'text-balance' al h1 si el "EN" se seguía quedando solo */}
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
            {t("headline")}
          </h1>
        </div>

        {/* SUBTÍTULO: Sigue la cascada (delay-150) */}
        <div className="anim-fade-up-subtle delay-150 mb-10 max-w-xl">
          <div className="pl-5 border-l-[3px] border-[#2563eb] py-1">
            <p className="text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,1)] md:drop-shadow-lg">
              {t("subtitle")}
            </p>
          </div>
        </div>

        {/* BOTÓN: Cierra la cascada (delay-300) */}
        <div className="anim-fade-up-subtle delay-300">
          <Link href="/services" passHref>
            <button
              className="bg-[#2563eb] text-white px-8 py-4 text-sm sm:text-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 uppercase tracking-widest inline-flex items-center gap-3 group"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)",
              }}
            >
              <span>{t("button")}</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>

      </div>
    </div>
  </div>
);