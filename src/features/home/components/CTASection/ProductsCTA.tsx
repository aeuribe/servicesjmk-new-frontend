import React from "react";

const ProductsCTA = () => {
  return (
    <div className="bg-[#F5F8F9] flex justify-center items-center py-16 font-main">
      <div
        className="relative bg-cover bg-center bg-no-repeat w-full max-w-7xl h-80 px-12 py-16"
        style={{ backgroundImage: "url('/product-cta-image.jpg')" }}
      >
        <div className="flex justify-between items-center flex-wrap gap-8">
          <h2 className="text-white text-4xl max-w-xl leading-snug">
            Industrial-Grade Machinery <br /> Designed For Performance <br />{" "}
            And Reliability.
          </h2>
          <button className="bg-white text-black text-base px-7 py-2 transition duration-300 hover:bg-[#19165F] hover:text-white cursor-pointer">
            View Our Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCTA;
