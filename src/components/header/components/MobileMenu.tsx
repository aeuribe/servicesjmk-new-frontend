"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ContactButton } from "./ContactButton";
import { Logo } from "./Logo";

export type PageKey = "home" | "services" | "about" | "contact";

interface MobileMenuProps {
  isOpen: boolean;
  items: ReadonlyArray<{ readonly key: PageKey; readonly label: string; readonly href: string }>;
  pathname: string;
  onPageChange: (page: PageKey) => void;
  onClose: () => void;
  isLightMode?: boolean;
}

export const MobileMenu = ({
  isOpen,
  items,
  pathname,
  onPageChange,
  onClose,
}: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Manejo de la tecla ESC para cerrar
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a");
      firstLink?.focus();
    }
  }, [isOpen]);

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      name: "Instagram",
      href: "#",
      path: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
      customPath: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
  ];

  return (
    <>
      {/* Fondo sólido y oscuro (cero desenfoques gomosos) */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-950/90 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel lateral técnico */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-slate-900 border-l border-white/5 z-50 
          shadow-2xl flex flex-col items-center transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Freno mecánico
        }}
      >
        {/* Línea superior indicadora de estado (Acero azul) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />

        {/* Cabecera */}
        <div className="w-full flex items-center justify-between px-8 pt-10 pb-6 border-b border-white/5">
          <div className="scale-90 origin-left">
            <Logo 
              onPageChange={() => {
                onPageChange("home");
                onClose();
              }} 
              isLightMode={false} 
            />
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors duration-200"
            aria-label="Cerrar menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navegación - Tipografía estructurada y monolineal */}
        <nav className="flex-1 w-full flex flex-col justify-center px-8 space-y-8">
          {items.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => {
                  onPageChange(item.key);
                  onClose();
                }}
                className={`group flex items-center justify-between text-sm uppercase tracking-[0.25em] font-medium transition-all duration-300 ${
                  isActive ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
                style={{
                  animation: isOpen ? `slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.05}s both` : "none",
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Indicador de bloque cuadrado en lugar de una flecha sutil */}
                  <span 
                    className={`h-2 w-2 transition-all duration-300 ${
                      isActive ? "bg-blue-500" : "bg-transparent border border-slate-700 group-hover:bg-slate-600"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer técnico - Redes y CTA */}
        <div className="w-full px-8 pb-12 space-y-10 border-t border-white/5 pt-8">
          {/* Botón de Contacto - Sin brillos ni pulsos, solo solidez */}
          <div 
            style={{
              animation: isOpen ? `slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both` : "none",
            }}
          >
            <ContactButton
              onPageChange={(page) => {
                onPageChange(page);
                onClose();
              }}
              isMobile={true}
            />
          </div>

          {/* Redes Sociales - Sin escalas, solo transiciones de color */}
          <div className="flex justify-start gap-8">
            {socialLinks.map((social, i) => (
              <a
                key={social.name}
                href={social.href}
                className="text-slate-600 hover:text-blue-500 transition-colors duration-200"
                style={{
                  animation: isOpen ? `slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + i * 0.05}s both` : "none",
                }}
                aria-label={social.name}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {social.customPath ? social.customPath : <path d={social.path} />}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Animaciones CSS Mecánicas */}
        <style jsx>{`
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(15px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
};