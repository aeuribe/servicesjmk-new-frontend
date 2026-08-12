"use client";

import { useState } from "react";
import type { MediaItem } from "../work-entries";
import { PlayBadge } from "./PlayBadge";
import { isYouTubeUrl, getYouTubeThumbnail, getYouTubeEmbedUrl } from "../../../app/utils/youtube";

export function MediaGallery({
  media,
  title,
}: {
  media: MediaItem[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const active = media[activeIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${x}% ${y}%`);
  };

  return (
    <div>
      {/* Vista principal — tamaño natural (sin franjas negras), con
          zoom tipo Amazon: hover amplía siguiendo el cursor, clic
          abre pantalla completa. */}
      <div
        className="relative w-full bg-black overflow-hidden flex items-center justify-center max-h-[60vh]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 92%, 94% 100%, 0 100%)",
        }}
      >
        {active.type === "video" ? (
          isYouTubeUrl(active.src) ? (
            <div className="relative w-full aspect-video max-h-[60vh]">
              <iframe
                src={getYouTubeEmbedUrl(active.src) ?? undefined}
                title={title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              src={active.src}
              controls
              className="max-h-[60vh] w-auto max-w-full block"
            />
          )
        ) : (
          <div
            className="relative overflow-hidden cursor-zoom-in flex items-center justify-center max-h-[60vh]"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onClick={() => setIsLightboxOpen(true)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={title}
              className="max-h-[60vh] w-auto max-w-full block transition-transform duration-200 ease-out"
              style={{
                transform: isZoomed ? "scale(2)" : "scale(1)",
                transformOrigin: zoomOrigin,
              }}
            />
          </div>
        )}
      </div>

      {/* Tira de miniaturas — solo si hay más de un elemento */}
      {media.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {media.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 overflow-hidden ${
                i === activeIndex
                  ? "ring-2 ring-[#2563eb]"
                  : "ring-1 ring-white/15 opacity-70 hover:opacity-100"
              } transition-all`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  item.type === "video" && isYouTubeUrl(item.src)
                    ? getYouTubeThumbnail(item.src) ?? item.src
                    : item.src
                }
                alt={`${title} - ${i + 1}`}
                className="w-full h-full object-cover"
              />
              {item.type === "video" && <PlayBadge size="sm" />}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox — pantalla completa al hacer clic en la imagen */}
      {isLightboxOpen && active.type === "image" && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Cerrar"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
