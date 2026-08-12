import Link from "next/link";
import { CATEGORY_LABELS, pickText, type WorkEntry, type ContentBlock } from "../work-entries";
import { MediaGallery } from "./MediaGallery";
import { formatDate } from "../../../app/utils/formatDate";
import { isYouTubeUrl, getYouTubeEmbedUrl } from "../../../app/utils/youtube";

export default function WorkEntryDetail({
  entry,
  locale,
  labels,
}: {
  entry: WorkEntry;
  locale: string;
  labels: {
    backToInAction: string;
    needSimilar: string;
    contactUs: string;
  };
}) {
  return (
    <div className="relative bg-[#141414] min-h-screen">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
        <Link
          href="/in-action"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {labels.backToInAction}
        </Link>

        <MediaGallery media={entry.media} title={pickText(entry.title, locale)} />

        <div className="mt-8">
          <div className="flex flex-wrap gap-2 mb-5">
            {entry.category.map((c) => (
              <span
                key={c}
                className="bg-[#2563eb]/15 text-[#2563eb] text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1"
              >
                {pickText(CATEGORY_LABELS[c], locale)}
              </span>
            ))}
          </div>

          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">
            {pickText(entry.title, locale)}
          </h1>
          <p className="text-white/50 text-sm mb-10">
            {entry.location} · {formatDate(entry.date, locale)}
          </p>

          {/* Cuerpo del detalle: bloques libres, en el orden definido en work-entries.ts */}
          <div className="space-y-6">
            {entry.content.map((block, i) => (
              <ContentBlockRenderer key={i} block={block} locale={locale} />
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm mb-3">{labels.needSimilar}</p>
            <Link
              href="/contact"
              className="inline-block bg-[#2563eb] text-white text-sm font-semibold px-6 py-3"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 65%, 92% 100%, 0 100%)",
              }}
            >
              {labels.contactUs}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentBlockRenderer({
  block,
  locale,
}: {
  block: ContentBlock;
  locale: string;
}) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-white text-lg sm:text-xl font-bold pt-2">
          {pickText(block.text, locale)}
        </h2>
      );

    case "paragraph":
      return (
        <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
          {pickText(block.text, locale)}
        </p>
      );

    case "media":
      return (
        <figure>
          <div
            className="relative w-full overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 94%, 95% 100%, 0 100%)",
            }}
          >
            {block.item.type === "video" ? (
              isYouTubeUrl(block.item.src) ? (
                <div className="relative w-full aspect-video">
                  <iframe
                    src={getYouTubeEmbedUrl(block.item.src) ?? undefined}
                    title={block.caption ? pickText(block.caption, locale) : "Video"}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video
                  src={block.item.src}
                  controls
                  className="w-full h-auto block"
                />
              )
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={block.item.src}
                alt={block.caption ? pickText(block.caption, locale) : ""}
                className="w-full h-auto block"
              />
            )}
          </div>
          {block.caption && (
            <figcaption className="text-white/45 text-xs mt-2">
              {pickText(block.caption, locale)}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}
