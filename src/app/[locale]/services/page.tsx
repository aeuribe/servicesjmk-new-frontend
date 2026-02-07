import React from "react";
import Header from "@/components/header/Header";
import Services from "@/features/services/Services";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <div className="min-w-[320px]">
      <div className="relative">
        <Header />
        <Services />
      </div>
      <Footer hideInfrastructureSection={true} />
    </div>
  );
};

export default page;
