import React from "react";
import Header from "../../components/header/Header";
import Hero from "./components/HeroSection/Hero";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import BusinessSegmentsSection from "./components/BusinessSegmentsSection/BusinessSegmentsSection";
import ManagementSection from "./components/ManagementSection/ManagementSection";
import NewsSection from "./components/NewsSection/NewsSection";
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <div className="min-w-[320px]">
      <div className="relative">
        <Header title="Header" />
        <Hero />
      </div>

      <AboutUsSection />
      <BusinessSegmentsSection />
      <ManagementSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Home;
