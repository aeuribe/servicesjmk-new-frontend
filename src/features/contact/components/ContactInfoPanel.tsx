import React from "react";

interface ContactInfoPanelProps {
  isVisible: boolean;
  t: (key: string) => string;
}

export function ContactInfoPanel({ isVisible, t }: ContactInfoPanelProps) {
  return (
    <div
      className={`space-y-6 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: "0.2s" }}
    >
      <div
        className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 relative overflow-hidden group hover:border-[#2563eb]/50 transition-all duration-300"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
          filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
        }}
      >
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-[#2563eb] rounded-full pulse-glow"></div>
          <span className="text-[#2563eb] text-xs font-semibold uppercase tracking-wider">
            {t("info.status.online") || "ONLINE"}
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#2563eb] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">
                {t("info.contactCenter.title") || "Contact Center"}
              </h3>
              <p className="text-white/60 text-sm">
                {t("info.contactCenter.subtitle") || "Direct Communication"}
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <a
              href="tel:+17862587335"
              className="flex items-center gap-3 text-white/90 hover:text-[#2563eb] transition-colors group/item"
            >
              <svg
                className="w-5 h-5 text-[#2563eb]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm">+1 (786) 258-7335</span>
            </a>
            <a
              href="mailto:info@servicesjmk.com"
              className="flex items-center gap-3 text-white/90 hover:text-[#2563eb] transition-colors group/item"
            >
              <svg
                className="w-5 h-5 text-[#2563eb]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">info@servicesjmk.com</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="bg-gradient-to-br from-[#2563eb]/10 to-[#2563eb]/10 backdrop-blur-sm border border-[#2563eb]/30 p-6"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#2563eb]/20 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#2563eb]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h4 className="text-white font-semibold">
            {t("info.systemStatus.title") || "System Status"}
          </h4>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          {t("info.systemStatus.description") ||
            "All systems operational. Response time: <24 hours. Emergency support available 24/7."}
        </p>
      </div>
    </div>
  );
}

