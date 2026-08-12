import Header from "@/components/header/Header";
import React from "react";
import InAction from "@/features/in-action/InAction";

const InActionPage = () => {
  return (
    <div className="min-w-[320px]">
      <div>
        <Header />
        <InAction/>
      </div>
    </div>
  );
};

export default InActionPage;
