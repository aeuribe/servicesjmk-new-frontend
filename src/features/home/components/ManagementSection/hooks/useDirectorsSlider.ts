import React from "react";

export const useDirectorsSlider = (length: number) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % length);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + length) % length);

  return { currentIndex, next, prev };
};

