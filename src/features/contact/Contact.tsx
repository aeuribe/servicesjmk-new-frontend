"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import type {
  FormStatus,
  FormErrors,
  FormData,
} from "@/features/contact/contactTypes";
import { ContactSuccess } from "./components/ContactSuccess";
import { ContactHeroHeader } from "./components/ContactHeroHeader";
import { ContactInfoPanel } from "./components/ContactInfoPanel";
import { ContactForm } from "./components/ContactForm";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const t = useTranslations("contact");

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateAllFields = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name =
        t("form.validation.name.required") || "Name is required";
    } else if (data.name.trim().length < 2) {
      newErrors.name =
        t("form.validation.name.minLength") ||
        "Name must be at least 2 characters";
    }

    if (!data.email.trim()) {
      newErrors.email =
        t("form.validation.email.required") || "Email is required";
    } else if (!validateEmail(data.email)) {
      newErrors.email =
        t("form.validation.email.invalid") ||
        "Please enter a valid email address";
    }

    if (!data.company.trim()) {
      newErrors.company =
        t("form.validation.company.required") || "Company is required";
    }

    if (!data.projectType) {
      newErrors.projectType =
        t("form.validation.projectType.required") ||
        "Project type is required";
    }

    if (!data.message.trim()) {
      newErrors.message =
        t("form.validation.message.required") || "Message is required";
    } else if (data.message.trim().length < 10) {
      newErrors.message =
        t("form.validation.message.minLength") ||
        "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allErrors = validateAllFields(formData);
    setErrors(allErrors);

    if (!turnstileToken) {
      alert("Por favor, completa la verificación de seguridad.");
      return;
    }

    if (Object.keys(allErrors).length > 0) return;

    setFormStatus("loading");

    try {
      const response = await fetch(
        "https://servicesjmk-backend.onrender.com/enviar-correo-services",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: formData.name,
            email: formData.email,
            company: formData.company,
            project_type: formData.projectType,
            message: formData.message,
            token: turnstileToken,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormStatus("success");

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
        });
        setTurnstileToken("");
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
    
    setErrors((prevErrors: FormErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "name") {
        if (!value.trim())
          newErrors.name =
            t("form.validation.name.required") || "Name is required";
        else if (value.trim().length < 2)
          newErrors.name =
            t("form.validation.name.minLength") ||
            "Name must be at least 2 characters";
        else delete newErrors.name;
      }
      if (name === "email") {
        if (!value.trim())
          newErrors.email =
            t("form.validation.email.required") || "Email is required";
        else if (!validateEmail(value))
          newErrors.email =
            t("form.validation.email.invalid") ||
            "Please enter a valid email address";
        else delete newErrors.email;
      }
      if (name === "company") {
        if (!value.trim())
          newErrors.company =
            t("form.validation.company.required") || "Company is required";
        else delete newErrors.company;
      }
      if (name === "projectType") {
        if (!value)
          newErrors.projectType =
            t("form.validation.projectType.required") ||
            "Project type is required";
        else delete newErrors.projectType;
      }
      if (name === "message") {
        if (!value.trim())
          newErrors.message =
            t("form.validation.message.required") || "Message is required";
        else if (value.trim().length < 10)
          newErrors.message =
            t("form.validation.message.minLength") ||
            "Message must be at least 10 characters";
        else delete newErrors.message;
      }
      return newErrors;
    });
  };

  const resetForm = () => {
    setFormStatus("idle");
    setErrors({});
  };

  if (formStatus === "success") {
    return <ContactSuccess onReset={resetForm} t={t} />;
  }

  return (
    <div className="min-h-screen font-main relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section - Mission Control Header */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark Industrial Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)",
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100vh",
          }}
        >
          {/* Top vignette */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none" />

          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
                backgroundAttachment: "fixed",
              }}
            ></div>
          </div>
        </div>

        {/* Section Number Line */}
        <div className="absolute left-4 lg:left-8 top-16 bottom-0 z-20 flex flex-col items-center">
          <span className="text-2xl font-bold drop-shadow-sm text-white/60">
            01
          </span>
          <div className="w-px bg-white/30 flex-1"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-32 pb-16">
          <div className="max-w-6xl mx-auto pl-12 lg:pl-16">
            {/* Hero Header */}
            <ContactHeroHeader t={t} isVisible={isVisible} />

            {/* Split Layout: Info Side + Form Side */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
              {/* LEFT SIDE: Contact Info Node */}
              <ContactInfoPanel isVisible={isVisible} t={t} />

              {/* RIGHT SIDE: Mission Control Form */}
              <ContactForm
                formData={formData}
                errors={errors}
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                formStatus={formStatus}
                onChange={handleChange}
                onSubmit={handleSubmit}
                t={t}
                turnstileToken={turnstileToken}
                setTurnstileToken={setTurnstileToken}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
