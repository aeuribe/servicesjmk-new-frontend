import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

type HeaderProps = {
  title?: string;
};


const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="max-w-[82.125rem] mx-auto font-main text-white">
      <div className="grid grid-cols-3 items-center ">
        <Navbar/>
        <div className="flex flex-row items-center justify-center gap-3.5 ">
          <Image
            src="/isotipo.svg"
            alt="Logo Services JMK"
            width={45}
            height={45}
          />
          <h1 className="font-medium text-[2.3rem]">Services JMK</h1>
        </div>
        <div className="flex flex-row justify-end items-center gap-1">
          <Image
            src="/language.svg"
            alt="Language Selector"
            width={24}
            height={24}
          />
          <button>English</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
