"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

/**
 * Botón flotante de WhatsApp
 *
 * Uso: importar y colocar una sola vez en el layout raíz (layout.tsx / layout.jsx)
 * para que aparezca en todas las páginas del sitio.
 *
 *   import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
 *   ...
 *   <body>
 *     {children}
 *     <WhatsAppFloatingButton />
 *   </body>
 *
 * CONFIGURAR ANTES DE USAR:
 * - PHONE_NUMBER: número en formato internacional, SOLO dígitos (sin +, espacios ni guiones)
 * - Agregar las claves whatsapp.tooltip y whatsapp.defaultMessage en es.json / en.json
 *   (ver ejemplo al final de este archivo)
 */

const PHONE_NUMBER = "17862587335"; // TODO: confirmar número real de WhatsApp Business

export default function WhatsAppFloatingButton() {
  const t = useTranslations("whatsapp");
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    // Monta el tooltip casi de inmediato, deja un frame para que la
    // transición de entrada corra, y lo retira suavemente después.
    const mountTimer = setTimeout(() => setShowTooltip(true), 300);
    const animateInTimer = setTimeout(() => setTooltipVisible(true), 340);
    const animateOutTimer = setTimeout(() => setTooltipVisible(false), 9000);
    const unmountTimer = setTimeout(() => setShowTooltip(false), 9400);
    return () => {
      clearTimeout(mountTimer);
      clearTimeout(animateInTimer);
      clearTimeout(animateOutTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    t("defaultMessage")
  )}`;

  return (
    <div
      className="whatsapp-floating-button"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
      }}
    >
      {showTooltip && (
        <div
          style={{
            background: "#fff",
            color: "#0c1a2b",
            borderLeft: "3px solid #2952E3",
            padding: "12px 18px 12px 14px",
            maxWidth: "220px",
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            opacity: tooltipVisible ? 1 : 0,
            transform: tooltipVisible
              ? "translateY(0) scale(1)"
              : "translateY(8px) scale(0.96)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            pointerEvents: tooltipVisible ? "auto" : "none",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "13.5px",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {t("tooltipTitle")}
          </p>
          <p
            style={{
              margin: "2px 0 0",
              fontSize: "12px",
              color: "#5F5E5A",
              lineHeight: 1.4,
            }}
          >
            {t("tooltipSubtitle")}
          </p>
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("ariaLabel")}
        style={{
          position: "relative",
          width: "56px",
          height: "56px",
          minWidth: "56px",
          minHeight: "56px",
          flexShrink: 0,
          boxSizing: "border-box",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2px",
            right: "2px",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#FF3B30",
            border: "2px solid #14181d",
            animation: "wa-pulse 1.8s ease-in-out infinite",
          }}
          aria-hidden="true"
        />
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ pointerEvents: "none" }}
        >
          <path
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.27 16.61L5.07 16.29C4.24 14.98 3.79 13.46 3.79 11.91C3.79 7.37 7.5 3.66 12.05 3.66C14.25 3.66 16.31 4.51 17.87 6.07C19.42 7.63 20.29 9.69 20.28 11.92C20.28 16.46 16.57 20.15 12.04 20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.19C14.65 13.11 14.49 13.07 14.33 13.32C14.17 13.57 13.71 14.11 13.57 14.27C13.43 14.43 13.29 14.45 13.04 14.33C12.79 14.21 11.99 13.94 11.04 13.1C10.3 12.44 9.8 11.63 9.66 11.38C9.52 11.13 9.64 10.99 9.76 10.87C9.87 10.76 10.01 10.58 10.13 10.44C10.25 10.3 10.29 10.2 10.37 10.04C10.45 9.88 10.41 9.74 10.35 9.62C10.29 9.5 9.8 8.28 9.6 7.78C9.4 7.29 9.19 7.36 9.04 7.35C8.9 7.34 8.74 7.34 8.58 7.34C8.42 7.34 8.16 7.4 7.94 7.65C7.72 7.9 7.13 8.45 7.13 9.67C7.13 10.89 7.96 12.06 8.08 12.22C8.2 12.38 9.79 14.86 12.24 15.93C12.82 16.18 13.28 16.33 13.63 16.44C14.21 16.63 14.74 16.6 15.16 16.54C15.63 16.47 16.6 15.96 16.8 15.4C17 14.84 17 14.36 16.94 14.26C16.88 14.16 16.72 14.1 16.56 13.99Z"
            fill="#fff"
          />
        </svg>
      </a>

      <style jsx>{`
        @keyframes wa-pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}