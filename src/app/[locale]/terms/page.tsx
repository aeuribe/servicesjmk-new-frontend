import Header from "@/components/header/Header";
import TermsPage from "@/features/legal/TermsPage";
import React from "react";

export default function TermsRoute() {
  return (
    <div className="min-w-[320px]">
      <Header />
      <TermsPage />
    </div>
  );
}
