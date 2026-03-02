import Link from "next/link";

export const ServiceHeroCTA = ({ label }: { label: string }) => (
  <Link href="/contact" passHref className="block w-full sm:w-auto">
    <button
      className="w-full sm:w-auto min-h-[48px] bg-[#2563eb] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-semibold 
                 hover:bg-[#1d4ed8] transition-all duration-300 uppercase tracking-wider 
                 inline-flex items-center justify-center gap-2 sm:gap-3 group relative touch-manipulation"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)",
      }}
    >
      <span className="relative z-10">{label}</span>

      <svg
        className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  </Link>
);