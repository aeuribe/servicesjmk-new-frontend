"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
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
      newErrors.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!data.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!data.projectType) {
      newErrors.projectType = "Project type is required";
    }
    
    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
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
            company: formData.company,
            project_type: formData.projectType,
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
          company: "",
          projectType: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "name") {
        if (!value.trim()) newErrors.name = "Name is required";
        else if (value.trim().length < 2)
          newErrors.name = "Name must be at least 2 characters";
        else delete newErrors.name;
      }
      if (name === "email") {
        if (!value.trim()) newErrors.email = "Email is required";
        else if (!validateEmail(value))
          newErrors.email = "Please enter a valid email address";
        else delete newErrors.email;
      }
      if (name === "company") {
        if (!value.trim()) newErrors.company = "Company is required";
        else delete newErrors.company;
      }
      if (name === "projectType") {
        if (!value) newErrors.projectType = "Project type is required";
        else delete newErrors.projectType;
      }
      if (name === "message") {
        if (!value.trim()) newErrors.message = "Message is required";
        else if (value.trim().length < 10)
          newErrors.message = "Message must be at least 10 characters";
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
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] font-main flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-12 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
              filter: "drop-shadow(0 20px 40px rgba(0, 212, 255, 0.3))",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] via-[#2563eb] to-[#00D4FF]"></div>
            
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#00D4FF] to-[#2563eb] flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-[#00D4FF] opacity-0 animate-ping"></div>
              <svg className="w-12 h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="inline-block">
                  <span className="text-[#00D4FF] tracking-[0.3em] uppercase text-xs">
                    Protocol Initiated
                  </span>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent mt-2"></div>
                </div>
              </div>
              
              <h2 className="text-white text-4xl font-bold leading-tight">
                Request Submitted Successfully
              </h2>
              
              <p className="text-white/80 leading-relaxed max-w-md mx-auto">
                Your project request has been received. Our engineering team will review your submission and respond within 24 hours.
              </p>

              <button
                onClick={resetForm}
                className="mt-8 bg-gradient-to-r from-[#00D4FF] to-[#2563eb] text-white px-10 py-4 hover:from-[#00D4FF]/90 hover:to-[#2563eb]/90 transition-all duration-300 inline-flex items-center gap-3 group relative overflow-hidden shadow-lg hover:shadow-xl"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                <span className="relative z-10 font-semibold">Submit Another Request</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    );
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
            <div
              className={`mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="inline-block mb-6">
                <span className="text-[#00D4FF] tracking-[0.3em] uppercase text-xs font-semibold">
                  {t("heroSection.getInTouch") || "Initiate Contact Protocol"}
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent mt-2"></div>
              </div>
              <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight font-bold">
                {t("heroSection.headline") || "Mission Control Interface"}
              </h1>
              <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                {t("heroSection.description") || "Connect with our engineering team. Submit your project request through our secure interface."}
              </p>
            </div>

            {/* Split Layout: Info Side + Form Side */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
              {/* LEFT SIDE: Contact Info Node */}
              <div
                className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "0.2s" }}
              >
                {/* Contact Node */}
                <div
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 relative overflow-hidden group hover:border-[#00D4FF]/50 transition-all duration-300"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
                    filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
                  }}
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00D4FF] rounded-full pulse-glow"></div>
                    <span className="text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">ONLINE</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00D4FF] to-[#2563eb] flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-bold">Contact Center</h3>
                        <p className="text-white/60 text-sm">Direct Communication</p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <a
                        href="tel:+17862587335"
                        className="flex items-center gap-3 text-white/90 hover:text-[#00D4FF] transition-colors group/item"
                      >
                        <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm">+1 (786) 258-7335</span>
                      </a>
                      <a
                        href="mailto:info@servicesjmk.com"
                        className="flex items-center gap-3 text-white/90 hover:text-[#00D4FF] transition-colors group/item"
                      >
                        <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">info@servicesjmk.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* System Status Card */}
                <div
                  className="bg-gradient-to-br from-[#00D4FF]/10 to-[#2563eb]/10 backdrop-blur-sm border border-[#00D4FF]/30 p-6"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#00D4FF]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold">System Status</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    All systems operational. Response time: &lt;24 hours. Emergency support available 24/7.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE: Mission Control Form */}
              <div
                className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "0.3s" }}
              >
                <div
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-10 relative overflow-hidden"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
                    filter: "drop-shadow(0 20px 40px rgba(0, 212, 255, 0.2))",
                  }}
                >
                  {/* Form Header */}
                  <div className="mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00D4FF] to-[#2563eb] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h2 className="text-white text-2xl font-bold">Project Request Form</h2>
                    </div>
                    <p className="text-white/70 text-sm">
                      Complete all required fields to initiate your engineering protocol.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-semibold mb-2 transition-colors ${
                          focusedField === "name"
                            ? "text-[#00D4FF]"
                            : errors.name
                            ? "text-red-400"
                            : "text-white/90"
                        }`}
                      >
                        Full Name <span className="text-[#00D4FF]">*</span>
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
                            ? "border-[#00D4FF]"
                            : "border-white/20"
                        } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 transition-all`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-semibold mb-2 transition-colors ${
                          focusedField === "email"
                            ? "text-[#00D4FF]"
                            : errors.email
                            ? "text-red-400"
                            : "text-white/90"
                        }`}
                      >
                        Email Address <span className="text-[#00D4FF]">*</span>
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
                            ? "border-[#00D4FF]"
                            : "border-white/20"
                        } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 transition-all`}
                        placeholder="your.email@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Company Field */}
                    <div>
                      <label
                        htmlFor="company"
                        className={`block text-sm font-semibold mb-2 transition-colors ${
                          focusedField === "company"
                            ? "text-[#00D4FF]"
                            : errors.company
                            ? "text-red-400"
                            : "text-white/90"
                        }`}
                      >
                        Company <span className="text-[#00D4FF]">*</span>
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
                          errors.company
                            ? "border-red-400"
                            : focusedField === "company"
                            ? "border-[#00D4FF]"
                            : "border-white/20"
                        } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 transition-all`}
                        placeholder="Your company name"
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Project Type Field */}
                    <div>
                      <label
                        htmlFor="projectType"
                        className={`block text-sm font-semibold mb-2 transition-colors ${
                          focusedField === "projectType"
                            ? "text-[#00D4FF]"
                            : errors.projectType
                            ? "text-red-400"
                            : "text-white/90"
                        }`}
                      >
                        Project Type <span className="text-[#00D4FF]">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("projectType")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-white/5 border ${
                          errors.projectType
                            ? "border-red-400"
                            : focusedField === "projectType"
                            ? "border-[#00D4FF]"
                            : "border-white/20"
                        } text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 transition-all`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300D4FF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          paddingRight: "2.5rem",
                        }}
                      >
                        <option value="" className="bg-[#1a1a1a] text-white">
                          Select project type
                        </option>
                        <option value="engineering" className="bg-[#1a1a1a] text-white">
                          Industrial Engineering & Consulting
                        </option>
                        <option value="automation" className="bg-[#1a1a1a] text-white">
                          Maintenance & Automation
                        </option>
                        <option value="machinery" className="bg-[#1a1a1a] text-white">
                          Machinery Supply & Logistics
                        </option>
                        <option value="other" className="bg-[#1a1a1a] text-white">
                          Other / Custom Solution
                        </option>
                      </select>
                      {errors.projectType && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.projectType}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-semibold mb-2 transition-colors ${
                          focusedField === "message"
                            ? "text-[#00D4FF]"
                            : errors.message
                            ? "text-red-400"
                            : "text-white/90"
                        }`}
                      >
                        Project Details <span className="text-[#00D4FF]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className={`w-full px-4 py-3 bg-white/5 border ${
                          errors.message
                            ? "border-red-400"
                            : focusedField === "message"
                            ? "border-[#00D4FF]"
                            : "border-white/20"
                        } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 transition-all resize-none`}
                        placeholder="Describe your project requirements, timeline, and any specific technical needs..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.message}
                        </p>
                      )}
                      <div className="mt-2 text-xs text-white/50">
                        {formData.message.length} / 10 minimum characters
                      </div>
                    </div>

                    {/* Submit Button - The Star */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={formStatus === "loading"}
                        className="w-full bg-gradient-to-r from-[#00D4FF] to-[#2563eb] text-white px-8 py-5 hover:from-[#00D4FF]/90 hover:to-[#2563eb]/90 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden shadow-lg hover:shadow-2xl font-bold text-lg"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                          filter: "drop-shadow(0 0 20px rgba(0, 212, 255, 0.5))",
                        }}
                      >
                        {formStatus === "loading" ? (
                          <>
                            <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="relative z-10">Initiating Protocol...</span>
                          </>
                        ) : (
                          <>
                            <span className="relative z-10">INITIATE PROJECT REQUEST</span>
                            <svg
                              className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </>
                        )}
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </button>
                    </div>

                    {/* Error Message */}
                    {formStatus === "error" && (
                      <div className="flex items-start gap-3 p-5 border-l-4 border-red-400 bg-red-400/10 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <h4 className="text-white mb-1 font-semibold">Transmission Failed</h4>
                          <p className="text-white/80 text-sm">
                            Unable to submit request. Please try again or contact us directly at{" "}
                            <a href="mailto:info@servicesjmk.com" className="text-[#00D4FF] hover:underline">
                              info@servicesjmk.com
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
