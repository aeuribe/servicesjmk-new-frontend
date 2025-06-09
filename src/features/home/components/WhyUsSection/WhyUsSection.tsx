import React from "react";
import Image from "next/image";

const WhyUsSection = () => {
  return (
    <div className="bg-[#F5F8F9] pt-32 pb-20">
      <div>
        <h2 className="text-center font-medium text-6xl">
          Why Choose Services JMK
        </h2>
        <p className="text-xl text-center text-black/70 mt-8">
          Delivering industrial solutions backed by decades of <br /> hands-on
          engineering and tailored service.
        </p>
      </div>
      <div className="flex justify-center pt-28">
        <Image
          src="/why-choose-us.svg"
          alt="Why Choose Us"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default WhyUsSection;
