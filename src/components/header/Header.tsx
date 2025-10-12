"use client";

import React from "react";
import Navigation from "./components/Navigation";

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Navigation currentPage="home" onPageChange={() => {}} />
    </>
  );
};

export default Header;
