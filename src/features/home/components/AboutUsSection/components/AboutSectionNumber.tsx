export const AboutSectionNumber: React.FC = () => (
  <div
    className="absolute left-4 lg:left-8 z-20 flex flex-col items-center"
    style={{ top: "0", bottom: 0 }}
  >
    <div className="w-px bg-gray-400/50" />
    {/* Línea superior corta */}
    <div className="w-px bg-gray-400/50 h-10"></div>
    <span className="text-2xl font-bold drop-shadow-sm text-white/60">02</span>
    <div className="w-px bg-gray-400/50 flex-1" />
  </div>
);
