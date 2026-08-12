export function PlayBadge({ size }: { size: "sm" | "lg" }) {
  const dims = size === "lg" ? "w-14 h-14" : "w-8 h-8 sm:w-10 sm:h-10";
  const iconDims = size === "lg" ? "w-5 h-5" : "w-3 h-3 sm:w-3.5 sm:h-3.5";

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className={`${dims} rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-[#2563eb]/80 group-hover:border-[#2563eb] transition-colors`}
      >
        <svg
          className={`${iconDims} text-white ml-0.5`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}
