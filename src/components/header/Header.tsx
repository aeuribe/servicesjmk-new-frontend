import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="max-w-[82.125rem] mx-auto font-main text-white">
      <div className="grid grid-cols-3 items-center ">
        <Navbar />
        <div className="flex flex-row items-center justify-center gap-3.5 ">
          <Image
            src="/isotipo.svg"
            alt="Logo Services JMK"
            width={45}
            height={45}
          />
          <a
            href="/"
            className="font-medium text-[2.3rem] select-none cursor-pointer"
          >
            Services JMK
          </a>
        </div>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
