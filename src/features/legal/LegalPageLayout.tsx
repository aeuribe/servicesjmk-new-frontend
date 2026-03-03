"use client";

import React from "react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen font-main bg-[#141414] text-white">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="border-b border-white/10 pb-8 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-2 text-sm text-white/50">
            {lastUpdated}
          </p>
        </div>
        <div className="space-y-12 text-white/85 text-base sm:text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <span className="h-1 w-8 bg-[#2563eb]" aria-hidden />
        {title}
      </h2>
      <div className="space-y-4 pl-0 sm:pl-0">{children}</div>
    </section>
  );
}
