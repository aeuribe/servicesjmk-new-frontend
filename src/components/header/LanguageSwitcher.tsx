"use client";

import React, { use } from "react";
import Image from "next/image";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="relative flex flex-row justify-end items-center gap-1">
      <Image
        src="/language.svg"
        alt="Language Selector"
        width={24}
        height={24}
      />
      <button className="text-sm hover: cursor-pointer" onClick={toggleDropdown}>
        {language === "en" ? "English" : "Español"}
      </button>

      {/* Dropdown con animación */}
      <div
        className={`
        absolute mt-36 w-44 bg-transparent border border-white transition-all duration-200 ease-in-out
        ${open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
        `}
      >
        <ul>
          <li
            className="px-4 py-2 text-sm hover:bg-white/10 cursor-pointer"
            onClick={() => {
              setLanguage("en");
              setOpen(false);
            }}
          >
            English
          </li>
          <li
            className="px-4 py-2 text-sm hover:bg-white/10 cursor-pointer"
            onClick={() => {
              setLanguage("es");
              setOpen(false);
            }}
          >
            Español
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
