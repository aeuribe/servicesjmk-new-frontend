"use client";
import React, { useState } from "react";
import Image from "next/image";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string; // Ahora es opcional para videos
  alt?: string;
  title?: string;
}

interface ServiceGalleryProps {
  items: GalleryItem[];
  aspectRatio?: "cinematic" | "portrait" | "square";
  className?: string;
}

// Función auxiliar para extraer el ID de YouTube de cualquier formato de URL
const getYouTubeID = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  items,
  aspectRatio = "cinematic",
  className = "",
}) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const aspectRatioClasses = {
    cinematic: "aspect-video",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  };

  if (!items || items.length === 0) {
    return (
      <div className={`${aspectRatioClasses[aspectRatio]} bg-white/5 border border-white/10 rounded-lg flex items-center justify-center ${className}`}>
        <p className="text-white/50 text-sm">No media available</p>
      </div>
    );
  }

  const activeItem = items[activeMediaIndex];
  const videoId = activeItem.type === "video" ? getYouTubeID(activeItem.src) : null;

  return (
    <div className={`relative w-full min-w-0 ${className}`}>
      {/* Main Screen - Featured Viewport */}
      <div
        className={`relative w-full mb-3 sm:mb-4 bg-black/20 transition-all duration-300 overflow-hidden group min-h-[180px] sm:min-h-0 ${aspectRatioClasses[aspectRatio]}`}
      >
        {/* Media Content Logic */}
        {activeItem.type === "image" ? (
          <Image
            src={activeItem.src}
            alt={activeItem.alt || activeItem.title || "Gallery image"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
        ) : (
          videoId && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0`}
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )
        )}

        {/* Caption Overlay */}

      </div>

      {/* Thumbnail Strip */}
      {items.length > 1 && (
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide gap-2 sm:gap-3 pb-2 snap-x snap-mandatory">
            {items.map((item, index) => {
              const isActive = index === activeMediaIndex;
              const thumbVideoId = item.type === "video" ? getYouTubeID(item.src) : null;
              
              // Resolve thumbnail: use provided thumb, youtube thumb, or image src
              const thumbSrc = item.type === "image" 
                ? (item.thumbnail || item.src) 
                : (item.thumbnail || `https://img.youtube.com/vi/${thumbVideoId}/mqdefault.jpg`);

              return (
                <button
                  key={index}
                  onClick={() => setActiveMediaIndex(index)}
                  className={`flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 relative border-2 transition-all duration-300 overflow-hidden snap-start ${
                    isActive ? "border-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.5)] scale-105" : "border-white/10 hover:border-white/30"
                  }`}
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)" }}
                >
                  <Image
                    src={thumbSrc}
                    alt={item.title || `Thumbnail ${index}`}
                    fill
                    className={`object-cover ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
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