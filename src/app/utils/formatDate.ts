const MONTHS: Record<string, string[]> = {
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export function formatDate(value: string, locale: string) {
  const [year, month] = value.split("-");
  const months = MONTHS[locale] ?? MONTHS.es;
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}
