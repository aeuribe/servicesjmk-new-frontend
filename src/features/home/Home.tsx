import React from "react";
import Header from "../../components/header/Header";
import Hero from "./components/HeroSection/Hero";
import ServicesSection from "./components/ServiceSection/ServicesSection";
import ProductsCTA from "./components/CTASection/ProductsCTA";
import WhyUsSection from "./components/WhyUsSection/WhyUsSection";
import Footer from "@/components/footer/Footer";

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
      <WhyUsSection />
      <Footer />
    </div>
  );
};

export default Home;
