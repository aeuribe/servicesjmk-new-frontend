import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#19165F] font-main text-white flex flex-col items-center px-4 md:px-8 py-12">
      <div className="w-full max-w-7xl border-b border-white md:pb-5 sm:pb-4 pb-2 flex flex-row md:flex-row justify-between items-center gap-6">
        <div className="flex items-center md:gap-3.5 gap-2">
          <Image
            src="/isotipo.svg"
            alt="Logo Services JMK"
            width={30}
            height={30}
            className="md:max-w-8 sm:max-w-7 max-w-5"
          />
          <Link
            href="/"
            className="font-medium md:text-2xl sm:text-xl text-sm select-none cursor-pointer"
          >
            Services JMK
          </Link>
        </div>
        <nav className="flex sm:gap-8 gap-2 sm:text-[10px] md:text-sm text-[8px] font-medium flex-wrap justify-center">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
      <div className="w-full max-w-7xl mt-10 flex justify-between lg:text-sm md:text-sm sm:text-[10px] text-[8px] text-white">
        {/* Columna izquierda */}
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul className="space-y-1">
            <li>
              <Link className="text-white/40" href="/">
                Filling Machine
              </Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">
                Labeling Machine
              </Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">
                Packing Machine
              </Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">
                Sealing Machine
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna central */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li>
              <Link className="text-white/40" href="/">
                Maintenance
              </Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">
                Installation
              </Link>
            </li>
            <li>
              <Link className="text-white/40" href="/">
                Consultancy
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>
              <Link className="text-white/40" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-white/40" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 sm:text-[10px] md:text-sm  text-xs text-white/70 text-center">
        © {new Date().getFullYear()} Services JMK, LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
