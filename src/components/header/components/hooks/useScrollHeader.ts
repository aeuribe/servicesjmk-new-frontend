"use client";
import { useState, useEffect } from "react";

export const useScrollHeader = (hideThreshold: number = 50) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the top
      if (currentScrollY < hideThreshold) {
        setIsVisible(true);
      } else {
        // Hide when scrolling down, show when scrolling up
        setIsVisible(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hideThreshold]);

  return isVisible;
};

