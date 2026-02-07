"use client";
import React, { useState } from "react";
import Image from "next/image";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  thumbnail: string;
  alt?: string;
  title?: string;
}

interface ServiceGalleryProps {
  items: GalleryItem[];
  aspectRatio?: "cinematic" | "portrait" | "square";
  className?: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  items,
  aspectRatio = "cinematic",
  className = "",
}) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Aspect ratio classes
  const aspectRatioClasses = {
    cinematic: "aspect-video", // 16:9
    portrait: "aspect-[3/4]", // 3:4
    square: "aspect-square", // 1:1
  };

  if (!items || items.length === 0) {
    return (
      <div className={`${aspectRatioClasses[aspectRatio]} bg-white/5 border border-white/10 rounded-lg flex items-center justify-center ${className}`}>
        <p className="text-white/50 text-sm">No media available</p>
      </div>
    );
  }

  const activeItem = items[activeMediaIndex];

  return (
    <div className={`relative ${className}`}>
      {/* Main Screen - Featured Viewport */}
      <div
        className={`relative w-full mb-4 bg-black/20 transition-all duration-300 overflow-hidden group ${aspectRatioClasses[aspectRatio]}`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
          boxShadow: `
            0 4px 12px rgba(0, 0, 0, 0.8),
            0 12px 48px rgba(0, 0, 0, 0.6),
            0 24px 96px rgba(0, 0, 0, 0.4),
            0 48px 192px rgba(0, 0, 0, 0.2)
            ${activeMediaIndex !== null ? `, 0 0 20px rgba(37, 99, 235, 0.3)` : ''}
          `,
        }}
      >
        {/* Scanline effect on active item */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(37, 99, 235, 0.1) 2px, rgba(37, 99, 235, 0.1) 4px)",
            }}
          ></div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/20 via-transparent to-transparent"></div>
        </div>

        {/* Media Content */}
        {activeItem.type === "image" ? (
          <Image
            src={activeItem.src}
            alt={activeItem.alt || activeItem.title || "Gallery image"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={activeMediaIndex === 0}
          />
        ) : (
          <video
            src={activeItem.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        )}

        {/* Caption Overlay */}
        {activeItem.title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 z-10">
            <p className="text-white text-sm font-medium">{activeItem.title}</p>
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {items.length > 1 && (
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-2 snap-x snap-mandatory">
            {items.map((item, index) => {
              const isActive = index === activeMediaIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveMediaIndex(index)}
                  className={`flex-shrink-0 w-24 h-16 relative border-2 transition-all duration-300 overflow-hidden group/thumb ${
                    isActive
                      ? "border-[#2563eb] shadow-[0_0_15px_rgba(37,99,235,0.6)] scale-105"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  }}
                  aria-label={`View ${item.alt || item.title || `item ${index + 1}`}`}
                >
                  {/* Thumbnail Image */}
                  {item.type === "image" ? (
                    <Image
                      src={item.thumbnail || item.src}
                      alt={item.alt || item.title || `Thumbnail ${index + 1}`}
                      fill
                      className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.thumbnail}
                        alt={item.alt || item.title || `Video thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      {/* Video play icon overlay */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Active indicator glow */}
                  {isActive && (
                    <div className="absolute inset-0 border-2 border-[#2563eb] pointer-events-none">
                      <div className="absolute inset-0 bg-[#2563eb]/10"></div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceGallery;

