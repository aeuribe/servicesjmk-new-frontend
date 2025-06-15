"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(true)}>
        <Image src="/ham-menu.svg" alt="Open menu" width={25} height={25} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-[#19165F] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex p-4 text-black">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/close-icon.svg"
              alt="Close Icon"
              width={15}
              height={15}
            />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default MobileMenu;
