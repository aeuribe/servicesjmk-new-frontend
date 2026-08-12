import Link from "next/link";
import Image from "next/image";
import { CATEGORY_LABELS, pickText, type WorkEntry } from "../work-entries";
import { PlayBadge } from "./PlayBadge";
import { formatDate } from "../../../app/utils/formatDate";
import { isYouTubeUrl, getYouTubeThumbnail } from "../../../app/utils/youtube";

export function WorkCard({
  entry,
  index,
  locale,
}: {
  entry: WorkEntry;
  index: number;
  locale: string;
}) {
  const aspect = index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]";

  return (
    <Link
      href={`/in-action/${entry.slug}`}
      className="group relative block mb-5 break-inside-avoid overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 92%, 88% 100%, 0 100%)",
      }}
    >
      <div className={`relative w-full ${aspect} bg-black`}>
        <Image
          src={
            entry.media[0].type === "video" && isYouTubeUrl(entry.media[0].src)
              ? getYouTubeThumbnail(entry.media[0].src) ?? entry.media[0].src
              : entry.media[0].src
          }
          alt={pickText(entry.title, locale)}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        {entry.media[0].type === "video" && <PlayBadge size="sm" />}

        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/60 backdrop-blur-sm text-white/80 text-[8px] sm:text-[10px] font-medium tracking-wide uppercase px-1.5 sm:px-2 py-0.5 sm:py-1">
          {pickText(CATEGORY_LABELS[entry.category[0]], locale)}
          {entry.category.length > 1 && (
            <span className="hidden sm:inline">
              {" "}
              ·{" "}
              {entry.category
                .slice(1)
                .map((c) => pickText(CATEGORY_LABELS[c], locale))
                .join(" · ")}
            </span>
          )}
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4">
          <h3 className="text-white text-xs sm:text-sm font-semibold mb-0.5 leading-snug line-clamp-2">
            {pickText(entry.title, locale)}
          </h3>
          <p className="text-white/55 text-[10px] sm:text-xs">
            {entry.location} · {formatDate(entry.date, locale)}
          </p>
        </div>
      </div>
    </Link>
  );
}
