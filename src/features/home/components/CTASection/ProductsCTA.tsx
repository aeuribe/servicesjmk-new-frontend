import React from "react";

const ProductsCTA = () => {
  return (
    <div className="bg-[#F5F8F9] flex justify-center items-center pt-16 font-main lg:px-0 md:px-10 px-10">
      <div
        className="relative bg-cover bg-center bg-no-repeat w-full lg:max-w-7xl md:max-w-3xl sm:max-w-xl max-w-[320px] lg:mx-10 lg:h-80 md:h-60 sm:h-40 h-30 md:px-12 sm:px-7 px-5 md:py-16 sm:py-8 py-4"
        style={{ backgroundImage: "url('/product-cta-image.jpg')" }}
      >
        <div className="flex justify-between items-center flex-wrap md:gap-8 gap-2">
          <h2 className="text-white lg:text-4xl md:text-2xl sm:text-base text-xs sm:max-w-xl max-w-[100px] leading-snug">
            Industrial-Grade Machinery <br /> Designed For Performance <br />{" "}
            And Reliability.
          </h2>
          <button className="bg-white text-black lg:text-base md:text-sm sm:text-xs text-[8px] lg:px-7 md:px-5 sm:px-3 px-2 py-2 transition duration-300 hover:bg-[#19165F] hover:text-white cursor-pointer">
            View Our Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCTA;
