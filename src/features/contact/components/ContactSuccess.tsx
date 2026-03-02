import React from "react";

interface ContactSuccessProps {
  onReset: () => void;
  t: (key: string) => string;
}

export function ContactSuccess({ onReset, t }: ContactSuccessProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] font-main flex items-center justify-center py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className="bg-white/10 backdrop-blur-sm border border-white/20 p-12 relative overflow-hidden"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
            filter: "drop-shadow(0 20px 40px rgba(37, 99, 235, 0.3))",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563eb] via-[#2563eb] to-[#2563eb]"></div>

          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#2563eb] to-[#2563eb] flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-[#2563eb] opacity-0 animate-ping"></div>
            <svg
              className="w-12 h-12 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <div className="space-y-6">
            <div>
              <div className="inline-block">
                <span className="text-[#2563eb] tracking-[0.3em] uppercase text-xs">
                  {t("success.protocolInitiated") || "Protocol Initiated"}
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-[#2563eb] to-transparent mt-2"></div>
              </div>
            </div>

            <h2 className="text-white text-4xl font-bold leading-tight">
              {t("success.title") || "Request Submitted Successfully"}
            </h2>

            <p className="text-white/80 leading-relaxed max-w-md mx-auto">
              {t("success.description") ||
                "Your project request has been received. Our engineering team will review your submission and respond within 24 hours."}
            </p>

            <button
              onClick={onReset}
              className="mt-8 bg-gradient-to-r from-[#2563eb] to-[#2563eb] text-white px-10 py-4 hover:from-[#2563eb]/90 hover:to-[#2563eb]/90 transition-all duration-300 inline-flex items-center gap-3 group relative overflow-hidden shadow-lg hover:shadow-xl"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
              }}
            >
              <span className="relative z-10 font-semibold">
                {t("success.button") || "Submit Another Request"}
              </span>
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
          </div>
        </div>
      </div>
    </div>
  );
}

