"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative flex flex-row justify-end items-center gap-1 mr-2"
    >
      <button
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <Image
          src="/language.svg"
          alt="Language Selector"
          width={24}
          height={24}
        />
        <span className="hidden lg:inline ml-1 text-white text-sm font-medium">
          {language === "en" ? "English" : "Español"}
        </span>
      </button>

      <div
        className={`absolute mt-36 lg:w-44 bg-white border border-gray-300 text-[#19165F] transition-all duration-200 ease-in-out z-50
          ${open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
        `}
      >
        <ul className="text-sm">
          {[
            { code: "en", label: "English" },
            { code: "es", label: "Español" },
          ].map(({ code, label }) => (
            <li
              key={code}
              className={`flex justify-between items-center px-4 py-2 cursor-pointer
                ${language === code ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"}
              `}
              onClick={() => {
                setLanguage(code);
                setOpen(false);
              }}
            >
              {label}
              {language === code && (
                <span className="ml-2 text-xs text-[#19165F]">●</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
