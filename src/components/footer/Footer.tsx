import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#19165F] font-main text-white flex flex-col items-center px-4 md:px-8 py-12">
      <div className="w-full max-w-7xl border-b border-white pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3.5">
          <Image
            src="/isotipo.svg"
            alt="Logo Services JMK"
            width={30}
            height={30}
          />
          <Link
            href="/"
            className="font-medium text-2xl select-none cursor-pointer"
          >
            Services JMK
          </Link>
        </div>
        <nav className="flex gap-8 text-sm font-medium flex-wrap justify-center">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
        </nav>
      </div>

      <div className="w-full max-w-7xl mt-10 flex justify-between text-sm text-white">
        {/* Columna izquierda */}
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul className="space-y-1">
            <li>
              <Link className="text-white/40" href="/">Filling Machine</Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">Labeling Machine</Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">Packing Machine</Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">Sealing Machine</Link>
            </li>
          </ul>
        </div>

        {/* Columna central */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li>
              <Link className="text-white/40" href="/">Maintenance</Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">Installation</Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">Consultancy</Link>
            </li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>
              <Link className="text-white/40" href="/about">About Us</Link>
            </li>
            <li>
              <Link className="text-white/40" href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-xs text-white/70 text-center">
        © {new Date().getFullYear()} Services JMK, LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
