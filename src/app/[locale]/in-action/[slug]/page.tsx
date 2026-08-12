import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getWorkEntryBySlug, pickText } from "@/features/in-action/work-entries";
import WorkEntryDetail from "@/features/in-action/components/WorkEntryDetail";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const entry = getWorkEntryBySlug(slug);
  if (!entry) return {};

  const title = pickText(entry.title, locale);
  const description = pickText(entry.shortDescription, locale);

  return {
    title: `${title} | Services JMK`,
    description,
    openGraph: {
      title,
      description,
      images: [entry.media[0].src],
    },
  };
}

export default async function WorkEntryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const entry = getWorkEntryBySlug(slug);
  if (!entry) notFound();

  const t = await getTranslations("inAction");

  return (
    <WorkEntryDetail
      entry={entry}
      locale={locale}
      labels={{
        backToInAction: t("backToInAction"),
        needSimilar: t("needSimilar"),
        contactUs: t("contactUs"),
      }}
    />
  );
}
