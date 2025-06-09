import React from "react";
import Header from "../../components/header/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";

const Home = () => {
  return (
    <div>
      {/* Sección con fondo */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background-hero.jpg')" }}
      >
        <Header title="Header" />
        <Hero />
      </div>

      {/* Sección sin fondo */}
      <ServicesSection />
    </div>
  );
};

export default Home;
