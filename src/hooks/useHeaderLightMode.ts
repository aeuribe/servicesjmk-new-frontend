"use client";
import { useState, useEffect } from "react";

/**
 * Hook que detecta cuando el header está sobre un fondo claro/blanco
 * y si estamos en el top de la página
 * Retorna: { isLightMode: boolean, isAtTop: boolean }
 */
export const useHeaderLightMode = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const checkBackground = () => {
      const scrollY = window.scrollY;
      const topThreshold = 150; // Umbral para considerar que estamos en el top (Hero section)
      
      // Detectar si estamos en el top
      const atTop = scrollY < topThreshold;
      setIsAtTop(atTop);
      
      // Si estamos en el top, mantener modo oscuro (para el Hero con fondo oscuro)
      if (atTop) {
        setIsLightMode(false);
        return;
      }

      // Múltiples puntos de verificación para mayor precisión
      const headerHeight = 64;
      const checkPoints = [
        { x: window.innerWidth / 2, y: headerHeight + 30 },
        { x: window.innerWidth / 4, y: headerHeight + 30 },
        { x: (window.innerWidth * 3) / 4, y: headerHeight + 30 },
      ];

      let lightCount = 0;
      let darkCount = 0;

      for (const point of checkPoints) {
        const elementAtPoint = document.elementFromPoint(point.x, point.y);
        
        if (!elementAtPoint) continue;

        // Buscar el elemento padre que tenga un fondo definido
        let current: HTMLElement | null = elementAtPoint as HTMLElement;
        let found = false;
        
        const maxDepth = 25;
        for (let i = 0; i < maxDepth && current; i++) {
          const classList = current.classList;
          
          // Verificar clases de Tailwind que indiquen fondo blanco/claro
          const hasLightClass = 
            classList.contains("bg-white") || 
            classList.contains("bg-gray-50") ||
            classList.contains("bg-gray-100") ||
            classList.contains("bg-slate-50") ||
            classList.contains("bg-zinc-50") ||
            classList.contains("bg-[#ffffff]");
          
          // Verificar clases de Tailwind que indiquen fondo oscuro
          const hasDarkClass = 
            classList.contains("bg-black") ||
            classList.contains("bg-gray-900") ||
            classList.contains("bg-gray-800") ||
            classList.contains("bg-[#0a1929]") ||
            classList.contains("bg-[#141414]") ||
            classList.contains("bg-[#1a1a1a]") ||
            classList.contains("bg-[#19165F]");
          
          if (hasLightClass) {
            lightCount++;
            found = true;
            break;
          }
          
          if (hasDarkClass) {
            darkCount++;
            found = true;
            break;
          }

          // Verificar el color de fondo calculado
          const computedStyle = window.getComputedStyle(current);
          const bgColor = computedStyle.backgroundColor;
          
          if (bgColor && bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
            const rgbMatch = bgColor.match(/\d+/g);
            if (rgbMatch && rgbMatch.length >= 3) {
              const r = parseInt(rgbMatch[0]);
              const g = parseInt(rgbMatch[1]);
              const b = parseInt(rgbMatch[2]);
              const alpha = rgbMatch[3] ? parseFloat(rgbMatch[3]) : 1;
              
              // Si tiene suficiente opacidad, analizar el color
              if (alpha > 0.4) {
                const brightness = r + g + b;
                
                // Umbrales ajustados para mejor detección
                if (brightness > 500) {
                  lightCount++;
                  found = true;
                  break;
                } else if (brightness < 150) {
                  darkCount++;
                  found = true;
                  break;
                }
              }
            }
          }
          
          current = current.parentElement;
        }
      }

      // Decidir el modo basado en la mayoría de puntos
      // Si hay más puntos claros que oscuros, activar modo claro
      setIsLightMode(lightCount > darkCount);
    };

    // Verificar al cargar y al hacer scroll
    const handleScroll = () => {
      requestAnimationFrame(checkBackground);
    };

    // Verificar también cuando cambia el tamaño de la ventana
    const handleResize = () => {
      requestAnimationFrame(checkBackground);
    };

    checkBackground();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isLightMode, isAtTop };
};

