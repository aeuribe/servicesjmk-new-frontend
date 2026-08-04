"use client";

import { useState } from "react";
import Image from "next/image";
import type { MediaItem } from "../work-entries";
import { PlayBadge } from "./PlayBadge";

export function MediaGallery({
  media,
  title,
}: {
  media: MediaItem[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = media[activeIndex];

  return (
    <div>
      {/* Vista principal, con el corte diagonal de marca */}
      <div
        className="relative w-full aspect-video bg-black overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 92%, 94% 100%, 0 100%)",
        }}
      >
        <Image
          src={active.src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
        {active.type === "video" && <PlayBadge size="lg" />}
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
              <Image
                src={item.src}
                alt={`${title} - ${i + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
              {item.type === "video" && <PlayBadge size="sm" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
