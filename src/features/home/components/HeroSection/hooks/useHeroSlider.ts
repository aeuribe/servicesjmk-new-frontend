import { useState, useEffect } from "react";

export function useHeroSlider(imagesLength: number, duration: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(i => (i + 1) % imagesLength);
    }, duration);

    return () => clearInterval(id);
  }, [imagesLength, duration]);

  return currentIndex;
}