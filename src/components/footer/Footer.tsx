import React from "react";
import { BackgroundPattern } from "../shared/BackgroundPattern";
import NavigationSection from "./components/NavigationSection";
import ServicesColumn from "./components/ServicesColumn";
import CompanyColumn from "./components/CompanyColumn";
import ContactColumn from "./components/ContactColumn";
import BotomSection from "./components/BotomSection";
interface FooterProps {
  hideInfrastructureSection?: boolean;
}

const Footer: React.FC<FooterProps> = ({
}) => {
  return (
    <footer
      className="font-main text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #062046 0%, #03152d 50%, #062046 100%)",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100vh",
      }}
    >
      <BackgroundPattern />
      {/* Infrastructure Leading Section */}
      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center px-4 md:px-8 py-12 border-t border-white/0">
        {/* Top Section - Logo and Nav */}
        <NavigationSection />
        {/* Middle Section - Content Columns */}
        <div className="w-full max-w-7xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Services Column */}
          <ServicesColumn />

          {/* Company Column */}
          <CompanyColumn />

          {/* Contact Column */}
          <ContactColumn />
        </div>

        {/* Bottom Section - Copyright */}
        <BotomSection />
      </div>
    </footer>
  );
};

export default Footer;
