"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import NavbarMobile from "./components/NavbarMobile";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/about",
    label: "About",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-row justify-start items-center gap-12">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative pb-3 text-white text-sm transition-all duration-300 ${
                  isActive ? "text-[#FFAE34]"  : "hover:text-[#FFAE34]"
                } group`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full transition-transform duration-300 transform ${
                    isActive
                      ? "bg-[#FFAE34] scale-x-100 h-[2px]"
                      : "bg-[#FFAE34] scale-x-0 group-hover:scale-x-100"
                  } origin-center`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <NavbarMobile />
    </nav>
  );
};

export default Navbar;
