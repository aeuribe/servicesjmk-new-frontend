import React from "react";
import Header from "../../components/header/Header";
import Hero from "./components/HeroSection/Hero";
import ServicesSection from "./components/ServiceSection/ServicesSection";
import WhyUsSection from "./components/WhyUsSection/WhyUsSection";
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <div className="min-w-[320px]">
      <div
        className="relative bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/background-hero.jpg')" }}
      >
        <Header title="Header" />
        <Hero />
      </div>

      <ServicesSection />
      <WhyUsSection />
      <Footer />
    </div>
  );
};

export default Home;
