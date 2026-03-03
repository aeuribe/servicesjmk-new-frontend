import Header from "@/components/header/Header";
import PrivacyPage from "@/features/legal/PrivacyPage";
import React from "react";

export default function PrivacyRoute() {
  return (
    <div className="min-w-[320px]">
      <Header />
      <PrivacyPage />
    </div>
  );
}
