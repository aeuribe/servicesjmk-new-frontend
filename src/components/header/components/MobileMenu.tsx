"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Logo } from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  items: ReadonlyArray<{ readonly key: string; readonly label: string; readonly href: string }>;
  pathname: string;
  onPageChange: (page: "home" | "services" | "about" | "contact") => void;
  onClose: () => void;
  isLightMode?: boolean;
}

export const MobileMenu = ({
  isOpen,
  items,
  pathname,
  onPageChange,
  onClose,
  isLightMode = false,
}: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("header");
  const tFooter = useTranslations("Footer");

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Focus trap - focus first link when menu opens
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a");
      firstLink?.focus();
    }
  }, [isOpen]);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Subtle Transparent Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
        style={{
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Elegant Glassmorphism Slide-Over Drawer */}
      <div
        id="mobile-menu-drawer"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-slate-900/80 backdrop-blur-xl z-50 
          border-l border-white/5 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Header: Logo & Close Button */}
        <div className="w-full flex items-center justify-between px-6 pt-8 pb-6">
          <div
            onClick={() => {
              onPageChange("home");
              onClose();
            }}
            className="cursor-pointer"
          >
            <Logo onPageChange={onPageChange} isLightMode={false} />
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-white/50 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 rounded-lg"
            aria-label="Cerrar menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links with Stagger Fade-In */}
        <nav className="flex-1 w-full flex flex-col justify-start px-8 space-y-1">
          {items.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => {
                  onPageChange(item.key as any);
                  onClose();
                }}
                className={`group relative flex items-center text-3xl font-light tracking-wide text-white/90 transition-all duration-300 py-3 ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
                style={{
                  animation: isOpen
                    ? `fadeInStagger 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + index * 0.08}s both`
                    : "none",
                }}
              >
                {/* Active State - Subtle Left Border Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#2563eb] rounded-r-full" />
                )}

                {/* Link Text */}
                <span className="relative z-10">{item.label}</span>

                {/* Subtle Hover Glow */}
                <div
                  className={`absolute inset-0 bg-[#2563eb]/5 rounded-lg transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Centered CTA Button */}
        <div
          className="w-full px-8 pb-6"
          style={{
            animation: isOpen
              ? `fadeInStagger 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + items.length * 0.08 + 0.15}s both`
              : "none",
          }}
        >
          <Link
            href="/contact"
            onClick={() => {
              onPageChange("contact");
              onClose();
            }}
            className="group relative w-full bg-[#2563eb] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:bg-[#1d4ed8]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
            }}
          >
            <span className="relative z-10">{t("contact")}</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10"
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
          </Link>
        </div>

        {/* Social Media Icons - Subtle */}
        <div
          className="w-full px-8 pb-4 flex items-center justify-center gap-4"
          style={{
            animation: isOpen
              ? `fadeInStagger 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + items.length * 0.08 + 0.25}s both`
              : "none",
          }}
        >
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 text-white/40 hover:text-white/70 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 rounded-full flex items-center justify-center"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright - Bottom */}
        <div
          className="w-full px-8 pb-8 text-center"
          style={{
            animation: isOpen
              ? `fadeInStagger 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + items.length * 0.08 + 0.3}s both`
              : "none",
          }}
        >
          <p className="text-xs text-white/30 tracking-wide">
            © {new Date().getFullYear()}. {tFooter("bottom.copyright")}
          </p>
        </div>

        {/* Styles & Animations */}
        <style jsx>{`
          @keyframes fadeInStagger {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </>
  );
};
