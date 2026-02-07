"use client";
import React, { useState } from "react";
import { useServicesTranslations } from "../hooks/useServicesTranslations";
import { FormData, FormErrors, FormStatus } from "../types";

export const ContactFormSection: React.FC = () => {
  const t = useServicesTranslations();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateAllFields = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = t.contactForm.validation.nameRequired;
    } else if (data.name.trim().length < 2) {
      newErrors.name = t.contactForm.validation.nameMinLength;
    }

    if (!data.email.trim()) {
      newErrors.email = t.contactForm.validation.emailRequired;
    } else if (!validateEmail(data.email)) {
      newErrors.email = t.contactForm.validation.emailInvalid;
    }

    if (data.phone && !/^[\d\s\-\+\(\)]+$/.test(data.phone)) {
      newErrors.phone = t.contactForm.validation.phoneInvalid;
    }

    if (!data.message.trim()) {
      newErrors.message = t.contactForm.validation.messageRequired;
    } else if (data.message.trim().length < 10) {
      newErrors.message = t.contactForm.validation.messageMinLength;
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allErrors = validateAllFields(formData);
    setErrors(allErrors);
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
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
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
          phone: "",
          company: "",
          message: "",
        });
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="py-20 lg:py-32 font-main relative overflow-hidden">
      {/* Background matching Hero section gray */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100vh",
        }}
      >
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
      <div className="absolute left-4 lg:left-8 top-0 bottom-0 z-20 flex flex-col items-center">
        <span className="text-2xl font-bold drop-shadow-sm text-white/60">
          03
        </span>
        <div className="w-px bg-white/30 flex-1"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pl-12 lg:pl-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#2563eb] text-sm uppercase tracking-widest block mb-4 font-semibold">
            {t.contactForm.badge}
          </span>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t.contactForm.title}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {t.contactForm.description}
          </p>
        </div>

        {/* Contact Form */}
        <div
          className="bg-white/12 backdrop-blur-sm p-8 lg:p-12"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
            boxShadow: `
              0 4px 12px rgba(0, 0, 0, 0.8),
              0 12px 48px rgba(0, 0, 0, 0.6),
              0 24px 96px rgba(0, 0, 0, 0.4),
              0 48px 192px rgba(0, 0, 0, 0.2)
            `,
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-semibold mb-2 transition-colors ${
                    focusedField === "name"
                      ? "text-[#2563eb]"
                      : errors.name
                      ? "text-red-400"
                      : "text-white/90"
                  }`}
                >
                  {t.contactForm.form.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.name
                      ? "border-red-400"
                      : focusedField === "name"
                      ? "border-[#2563eb]"
                      : "border-white/20"
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all`}
                  placeholder={t.contactForm.form.fullNamePlaceholder}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-semibold mb-2 transition-colors ${
                    focusedField === "email"
                      ? "text-[#2563eb]"
                      : errors.email
                      ? "text-red-400"
                      : "text-white/90"
                  }`}
                >
                  {t.contactForm.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.email
                      ? "border-red-400"
                      : focusedField === "email"
                      ? "border-[#2563eb]"
                      : "border-white/20"
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all`}
                  placeholder={t.contactForm.form.emailPlaceholder}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone and Company Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className={`block text-sm font-semibold mb-2 transition-colors ${
                    focusedField === "phone"
                      ? "text-[#2563eb]"
                      : errors.phone
                      ? "text-red-400"
                      : "text-white/90"
                  }`}
                >
                  {t.contactForm.form.phone}
                  <span className="text-white/60 text-xs font-normal ml-1">
                    {t.contactForm.form.phoneOptional}
                  </span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.phone
                      ? "border-red-400"
                      : focusedField === "phone"
                      ? "border-[#2563eb]"
                      : "border-white/20"
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all`}
                  placeholder={t.contactForm.form.phonePlaceholder}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className={`block text-sm font-semibold mb-2 transition-colors ${
                    focusedField === "company"
                      ? "text-[#2563eb]"
                      : "text-white/90"
                  }`}
                >
                  {t.contactForm.form.company}
                  <span className="text-white/60 text-xs font-normal ml-1">
                    {t.contactForm.form.phoneOptional}
                  </span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    focusedField === "company"
                      ? "border-[#2563eb]"
                      : "border-white/20"
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all`}
                  placeholder={t.contactForm.form.companyPlaceholder}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-semibold mb-2 transition-colors ${
                  focusedField === "message"
                    ? "text-[#2563eb]"
                    : errors.message
                    ? "text-red-400"
                    : "text-white/90"
                }`}
              >
                {t.contactForm.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows={6}
                className={`w-full px-4 py-3 bg-white/5 border ${
                  errors.message
                    ? "border-red-400"
                    : focusedField === "message"
                    ? "border-[#2563eb]"
                    : "border-white/20"
                } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all resize-none`}
                placeholder={t.contactForm.form.messagePlaceholder}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full bg-[#2563eb] text-white px-8 py-4 text-base font-semibold hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 uppercase tracking-wider inline-flex items-center justify-center gap-3 group relative"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
                }}
              >
                {formStatus === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>{t.contactForm.form.sendingMessage}</span>
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{t.contactForm.form.messageSent}</span>
                  </>
                ) : (
                  <>
                    <span>{t.contactForm.form.sendMessage}</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </>
                )}
              </button>

              {formStatus === "error" && (
                <p className="mt-4 text-sm text-red-400 text-center">
                  {t.contactForm.form.errorDescription}{" "}
                  <a
                    href={`mailto:${t.contactForm.form.contactEmail}`}
                    className="underline hover:text-red-300"
                  >
                    {t.contactForm.form.contactEmail}
                  </a>
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm mb-4">{t.contactForm.directContact.title}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${t.contactForm.directContact.phone}`}
              className="flex items-center gap-3 text-white hover:text-[#2563eb] transition-colors px-6 py-3 border border-white/30 hover:border-[#2563eb] group"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{t.contactForm.directContact.phone}</span>
            </a>
            <a
              href={`mailto:${t.contactForm.directContact.email}`}
              className="flex items-center gap-3 text-white hover:text-[#2563eb] transition-colors px-6 py-3 border border-white/30 hover:border-[#2563eb] group"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{t.contactForm.directContact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

