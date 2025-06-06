import React from "react";
import Header from "../../components/header/Header";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: "url('/background-hero.jpg')" }}
    >
      <Header title="Header" />
      <Hero/>
    </div>
  );
};

export default Home;
