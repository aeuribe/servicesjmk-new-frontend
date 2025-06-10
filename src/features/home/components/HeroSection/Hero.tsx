import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20 font-main">
      <div className="max-w-7xl">
        <h2 className="text-white text-7xl text-start leading-tight">
          We provide, install and maintain your industrial machinery
        </h2>
      </div>

      <div className="flex items-center justify-start w-7xl mt-10">
        <div className="flex flex-wrap">
          <div className="flex items-center">
            <button className="bg-white text-black text-base px-7 py-2 transition duration-300 hover:bg-[#FFAE34] hover:text-white cursor-pointer">
              Contact Us
            </button>
          </div>
          <div className=" text-5xl pl-12 pr-4 text-[#FE6265]">|</div>
          <div className="flex items-center ">
            <p className="font-main text-white/70">
              Trusted by businesses to boost <br /> industrial performance
            </p>
          </div>
        </div>
      </div>

      <div className="my-5">
        <Image
          src="/hero-image4.png"
          alt="Hero Image"
          width={1280}
          height={0}
          className="mt-16 w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
