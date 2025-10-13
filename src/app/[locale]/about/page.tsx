"use client";

import React from "react";
import Header from "@/components/header/Header";
import About from "@/features/about/About";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <main>
        <Header />
        <About onNavigateToContact={() => router.push("/contact")} />
      </main>
    </>
  );
};

export default Page;
