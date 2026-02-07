import { GalleryItem } from "@/components/gallery/ServiceGallery";

export interface ServiceBenefit {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ServiceMetric {
  label: string;
  value: string;
}

export interface ServiceData {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle: string;
  description: string;
  iconKey: string;
  gallery: GalleryItem[];
  layout: "text-left" | "text-right";
  colorTheme: "blue" | "white" | "dark-blue";
  metrics?: ServiceMetric[];
  benefits?: ServiceBenefit[];
  keywords?: string[];
  externalLink?: string;
  externalLinkText?: string;
}

export interface ColorTheme {
  background: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  border: string;
  cardBg: string;
  iconBg: string;
  numberColor: string;
  lineColor: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

