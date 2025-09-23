// components/MegaMenu.tsx
"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";

const CATEGORIES = [
  {
    label: "Packing Machines",
    subcategories: [
      "Horizontal Flow Wrapping Machine",
      "Sachet Packing Machine",
      "Bagging Machine",
      "Cartoning Machine",
    ],
    rightPanel: ["Automatic Labeling Machine", "Stretch Wrapping Machine"],
  },
  {
    label: "Quality Control Equipment",
    subcategories: [],
    rightPanel: [],
  },
  {
    label: "Filling & Capping Machines",
    subcategories: [],
    rightPanel: [],
  },
  {
    label: "Mixing equipment",
    subcategories: [],
    rightPanel: [],
  },
];

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 300);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="px-4 py-2 text-white hover:text-gray-300 font-medium">
        Products
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 w-full max-w-5xl bg-white shadow-lg z-50 border border-gray-200">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {/* Left Column */}
            <div className="bg-gray-50 p-4">
              {CATEGORIES.map((category) => (
                <div
                  key={category.label}
                  className={`flex items-center justify-between cursor-pointer px-2 py-2 hover:bg-white transition-colors ${
                    activeCategory.label === category.label
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }`}
                  onMouseEnter={() => setActiveCategory(category)}
                >
                  {category.label}
                  <Image
                    src="/chevron-right.svg"
                    alt=""
                    width={4}
                    height={4}
                    className="ml-2"
                  />
                </div>
              ))}
            </div>

            {/* Middle Column */}
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {activeCategory.label}
              </h4>
              <ul className="space-y-2">
                {activeCategory.subcategories.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-gray-700 hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="p-4">
              <ul className="space-y-2">
                {activeCategory.rightPanel.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-gray-700 hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
