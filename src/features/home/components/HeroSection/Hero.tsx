import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center xl:mt-20 lg:mt-15 md:mt-10 mt-5 px-10 font-main ">
      <div className="xl:max-w-7xl lg:max-w-6xl md:max-w-2xl sm:max-w-xl max-w-sm mt-10 ">
        <h2 className="text-white text-4xl xl:text-7xl lg:text-6xl md:text-4xl md:text-start lg:mt-0 text-justify  leading-tight lg:px-0">
          We provide, install and maintain your industrial machinery
        </h2>
      </div>

      <div className="flex items-center justify-start xl:max-w-7xl lg:max-w-6xl lg:w-full md:max-w-2xl md:w-full sm:max-w-xl sm:w-full max-w-sm w-full lg:mt-10 md:mt-10 mt-10">
        <div className="flex flex-wrap">
          <div className="flex items-center ">
            <Link href="/contact" passHref>
              <button className="bg-white text-black xl:text-base lg:text-sm md:text-sm sm:text-xs xl:px-7 lg:px-5 md:px-3 sm:px-3 xl:py-2 lg:py-2 md:py-1 sm:py-1 py-1 px-3 text-xs sm:bg-[#FFAE34]transition duration-300 hover:bg-[#FFAE34] hover:text-white cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="lg:text-5xl md:text-4xl text-4xl xl:pl-12 lg:pl-8 md:pl-5 pl-3 pr-1 text-[#FE6265]">
            |
          </div>
          <div className="flex items-center">
            <p className="font-main text-white/70 lg:text-base sm:text-sm text-[8px] ">
              Trusted by businesses to boost <br /> industrial performance
            </p>
          </div>
        </div>
      </div>

      <div className="my-5 ">
        <Image
          src="/hero-image4.png"
          alt="Hero Image"
          width={1280}
          height={0} // Mantén proporción
          className="xl:max-w-7xl lg:max-w-5xl  md:max-w-2xl sm:max-w-xl max-w-[310px] w-full h-auto xl:mt-16 lg:mt-10 md:mt-10 sm:mt-10 mt-10 mb-14 lg:mx-0 object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
