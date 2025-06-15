import React from "react";
import Image from "next/image";

const WhyUsSection = () => {
  return (
    <div className="bg-[#F5F8F9] lg:pt-32 md:pt-20 sm:pt-18 pt-10 pb-20 px-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center font-medium xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          Why Choose Services JMK
        </h2>
        <p className="lg:text-xl sm:text-sm text-xs text-center md:max-w-xl sm:max-w-lg max-w-sm text-black/70 lg:mt-8 mt-3">
          Delivering industrial solutions backed by decades of hands-on
          engineering and tailored service.
        </p>
      </div>
      <div className="flex justify-center xl:pt-28 lg:pt-20 md:pt-15 sm:pt-10 pt-10">
        <Image
          src="/why-choose-us.svg"
          alt="Why Choose Us"
          width={750}
          height={750}
          className="xl:max-w-7xl lg:max-w-xl sm:max-w-lg max-w-xs px-10"
        />
      </div>
    </div>
  );
};

export default WhyUsSection;
