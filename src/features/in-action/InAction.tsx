"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  workEntries as DEFAULT_ENTRIES,
  CATEGORY_LABELS,
  pickText,
  type WorkEntry,
  type CategoryKey,
} from "./work-entries";
import { FilterChip } from "./components/FilterChip";
import { FeaturedCard } from "./components/FeaturedCard";
import { WorkCard } from "./components/WorkCard";

/**
 * Sección "En Acción" — grid de trabajos realizados.
 *
 * Textos fijos de interfaz → next-intl, namespace "inAction"
 * (ver es.json / en.json). Textos de cada trabajo (título,
 * descripción) → bilingües directamente en workEntries.ts.
 */
export default function InAction({
  entries = DEFAULT_ENTRIES,
}: {
  entries?: WorkEntry[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const t = useTranslations("inAction");

  const activeCategory = searchParams.get("categoria") as CategoryKey | null;

  const filteredEntries = useMemo(() => {
    if (!activeCategory) return entries;
    return entries.filter((e) => e.category.includes(activeCategory));
  }, [entries, activeCategory]);

  const availableCategories = useMemo(() => {
    const present = new Set<CategoryKey>();
    entries.forEach((entry) => entry.category.forEach((c) => present.add(c)));
    return (Object.keys(CATEGORY_LABELS) as CategoryKey[]).filter((key) =>
      present.has(key)
    );
  }, [entries]);

  const [featured, ...rest] = filteredEntries;

  const handleFilter = (category: CategoryKey | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("categoria", category);
    } else {
      params.delete("categoria");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="relative bg-[#141414] min-h-screen pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[#2563eb] text-xs font-semibold tracking-widest uppercase mb-3">
            {t("eyebrow")}
          </p>
          <h1 className="uppercase text-white text-4xl sm:text-6xl font-bold mb-5">
            {t("title")}
          </h1>
          <div className="w-12 h-1 bg-[#2563eb] mb-6" />
          <p className="text-white/60 text-sm sm:text-base max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <FilterChip
            label={t("all")}
            active={!activeCategory}
            onClick={() => handleFilter(null)}
          />
          {availableCategories.map((key) => (
            <FilterChip
              key={key}
              label={pickText(CATEGORY_LABELS[key], locale)}
              active={activeCategory === key}
              onClick={() => handleFilter(key)}
            />
          ))}
        </div>

        {filteredEntries.length === 0 ? (
          <p className="text-white/50 text-sm">{t("noEntries")}</p>
        ) : (
          <>
            {featured && (
              <FeaturedCard entry={featured} locale={locale} label={t("mostRecent")} />
            )}

            <div className="columns-2 sm:columns-2 lg:columns-3 gap-3 sm:gap-5 mt-8 [column-fill:_balance]">
              {rest.map((entry, i) => (
                <WorkCard key={entry.slug} entry={entry} index={i} locale={locale} />
              ))}
            </div>

            {entries.length > filteredEntries.length && (
              <div className="flex justify-center mt-10">
                <button
                  className="text-white/70 border border-white/20 px-6 py-3 text-sm font-medium hover:border-[#2563eb] hover:text-white transition-colors"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)",
                  }}
                >
                  {t("loadMore")}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
