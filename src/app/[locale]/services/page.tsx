import React from "react";
import Header from "@/components/header/Header";
import Services from "@/features/services/Services";

const page = () => {
  return (
    <div className="min-w-[320px]">
      <div
        className="relative bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/background-hero.jpg')" }}
      >
        <Header />
        <Services />
      </div>
    </div>
  );
};

export default page;
