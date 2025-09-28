import Header from "@/components/header/Header";
import { ContactForm } from "@/features/contact/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-w-[320px]">
      <div
        className="relative bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/background-hero.jpg')" }}
      >
        <Header />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
