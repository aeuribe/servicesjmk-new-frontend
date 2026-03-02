import { useState, useEffect } from "react";

export function useHeroProgress(duration: number, interval: number, trigger: unknown) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const step = 100 / (duration / interval);

    const id = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + step));
    }, interval);

    return () => clearInterval(id);
  }, [duration, interval, trigger]);

  return progress;
}