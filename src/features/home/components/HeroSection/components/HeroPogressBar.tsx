interface HeroProgressBarProps {
  progress: number;
}

export const HeroProgressBar = ({ progress }: HeroProgressBarProps) => (
  <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
    <div className="relative w-0.5 h-80 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
      <div
        className="absolute bottom-0 left-0 right-0 bg-white/20 transition-all duration-50 ease-linear rounded-full"
        style={{
          height: `${progress}%`,
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
        }}
      />
    </div>
  </div>
);