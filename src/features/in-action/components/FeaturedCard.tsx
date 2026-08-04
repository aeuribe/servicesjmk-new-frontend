import Link from "next/link";
import Image from "next/image";
import { pickText, type WorkEntry } from "../work-entries";
import { PlayBadge } from "./PlayBadge";
import { formatDate } from "../../../app/utils/formatDate";

export function FeaturedCard({
  entry,
  locale,
  label,
}: {
  entry: WorkEntry;
  locale: string;
  label: string;
}) {
  return (
    <Link
      href={`/in-action/${entry.slug}`}
      className="group relative block overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)",
      }}
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/7] bg-black">
        <Image
          src={entry.media[0].src}
          alt={pickText(entry.title, locale)}
          fill
          sizes="100vw"
          className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {entry.media[0].type === "video" && <PlayBadge size="lg" />}

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <span className="inline-block bg-[#2563eb] text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2 sm:px-2.5 py-1 mb-2 sm:mb-3">
            {label}
          </span>
          <h2 className="text-white text-base sm:text-2xl font-bold mb-1 max-w-lg leading-snug">
            {pickText(entry.title, locale)}
          </h2>
          <p className="text-white/60 text-xs sm:text-sm">
            {entry.location} · {formatDate(entry.date, locale)}
          </p>
        </div>
      </div>
    </Link>
  );
}
