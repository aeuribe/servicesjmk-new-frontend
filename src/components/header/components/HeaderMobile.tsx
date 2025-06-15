import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";

const HeaderMobile = () => {
  return (
    <header className="max-w-sm mx-auto pt-3 font-main sm:max-w-xl md:max-w-2xl px-2 text-white block lg:hidden">
      <div className=" grid grid-cols-[auto_1fr_auto] items-center">
        <Navbar />
        <div className=" flex flex-row items-center justify-center gap-2 ">
          <Image
            src="/isotipo.svg"
            alt="Logo Services JMK"
            width={30}
            height={30}
          />
          <Link
            href="/"
            className="font-medium text-base md:text-base select-none cursor-pointer"
          >
            Services JMK
          </Link>
        </div>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default HeaderMobile;
