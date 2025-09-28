"use client";
import { useState } from "react";
import { AlertCircleIcon } from "@/features/contact/components/Icon";
import SucessInfo from "@/features/contact/components/SucessInfo";
import ContactFields from "@/features/contact/components/ContactFields";
import ContactCard from "./components/ContactCard";
import SubmitButton from "./components/SubmitButton";
import { validateAllFields, validateEmail } from "@/app/utils/validation";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

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
            message: `Phone: ${formData.phone}\n\n${formData.message}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormStatus("success");

      // Reset form después de mostrar confirmación
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  // Manejo campo a campo para actualizar data y validar en tiempo real
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    return <SucessInfo resetForm={resetForm} />;
  }

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6">
      {/* Enhanced gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#19165F]/95 via-[#1E1A6B]/90 to-[#252078]/95"></div> */}

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/30 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/30 rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-white/30 rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Left-aligned header section */}
        <div className="mb-16 opacity-0 translate-y-8 animate-[slideInUp_0.6s_ease-out_forwards]">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 opacity-0 translate-y-5 animate-[slideInUp_0.6s_ease-out_0.1s_forwards]">
              <span className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-sm uppercase tracking-[0.2em] text-white/90 inline-block">
                Professional Industrial Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8 opacity-0 translate-y-5 animate-[slideInUp_0.6s_ease-out_0.2s_forwards]">
              <span className="relative inline-block">
                Industrial Solutions{" "}
                <span className="text-[#FF9500] relative">That Work</span>
              </span>
              <br />
              <span className="text-white/80 block mt-2">For You</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl leading-relaxed mb-6 opacity-0 translate-y-5 animate-[slideInUp_0.6s_ease-out_0.4s_forwards]">
              From manufacturing optimization to automated systems, Services JMK
              delivers
              <span className="text-[#FF9500]">
                {" "}
                reliable industrial expertise
              </span>{" "}
              that drives real results.
            </p>
          </div>
        </div>

        {/* Form Section - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-2xl opacity-0 translate-y-10 animate-[slideInUp_0.6s_ease-out_0.6s_forwards] relative">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#FF9500]/50"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#FF9500]/50"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#FF9500]/50"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#FF9500]/50"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl text-white mb-3">
                    Get Technical Assistance
                  </h2>
                  <p className="text-base text-white/60">
                    Fill out the form below and we&apos;ll get back to you within 24
                    hours.
                  </p>
                </div>

                {/* Contact Fields */}
                <ContactFields
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                />

                {/* Submit Button */}
                <SubmitButton formStatus={formStatus} />

                {/* Error Message */}
                {formStatus === "error" && (
                  <div className="flex items-center gap-3 mt-6 text-red-300 bg-red-500/10 backdrop-blur-sm border border-red-500/20 p-6 opacity-0 translate-y-2 animate-[slideInUp_0.3s_ease-out_forwards]">
                    <AlertCircleIcon />
                    <span>
                      There was an error sending your message. Please try again.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right side - Contact Info */}
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
