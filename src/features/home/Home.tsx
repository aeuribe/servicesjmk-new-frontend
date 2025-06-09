import React from "react";
import Header from "../../components/header/Header";
import Hero from "./components/HeroSection/Hero";
import ServicesSection from "./components/ServiceSection/ServicesSection";
import ProductsCTA from "./components/CTASection/ProductsCTA";

const Home = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background-hero.jpg')" }}
      >
        <Header title="Header" />
        <Hero />
      </div>

      <ServicesSection />
      <ProductsCTA />
    </div>
  );
};

export default Home;
