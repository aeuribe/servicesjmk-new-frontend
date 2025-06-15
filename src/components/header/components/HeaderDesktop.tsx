import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";

const HeaderDesktop = () => (
  <header className="max-w-6xl xl:max-w-7xl px-2 mx-auto pt-3 font-main text-white hidden lg:block">
    <div className="grid grid-cols-3 items-center ">
      <Navbar />
      <div className="flex flex-row items-center justify-center gap-3.5 ">
        <Image
          src="/isotipo.svg"
          alt="Logo Services JMK"
          width={45}
          height={45}
        />
        <Link
          href="/"
          className="font-medium text-3xl select-none cursor-pointer"
        >
          Services JMK
        </Link>
      </div>

      <LanguageSwitcher />
    </div>
  </header>
);

export default HeaderDesktop;
