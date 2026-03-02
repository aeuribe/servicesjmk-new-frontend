export type FormStatus = "idle" | "loading" | "success" | "error";

export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

