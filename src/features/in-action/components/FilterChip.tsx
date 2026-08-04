export function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs sm:text-sm font-semibold px-5 py-2.5 transition-all ${
        active
          ? "bg-[#2563eb] text-white"
          : "bg-transparent text-white/70 border border-white/20 hover:border-[#2563eb] hover:text-white"
      }`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)",
      }}
    >
      {label}
    </button>
  );
}
