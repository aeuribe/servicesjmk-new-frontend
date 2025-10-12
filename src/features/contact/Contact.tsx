"use client";

import React, { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
            message: `Phone: ${formData.phone}\n\n${formData.message}`,
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
          message: "",
        });
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
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#19165F]/5 font-main flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#19165F] via-[#E53E3E] to-[#19165F]"></div>
            
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#19165F] to-[#19165F]/80 flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-[#E53E3E] opacity-0 animate-ping"></div>
              <svg className="w-12 h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="inline-block">
                  <span className="text-[#19165F]/60 tracking-[0.3em] uppercase text-xs">
                    Success
                  </span>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#E53E3E] to-transparent mt-2"></div>
                </div>
              </div>
              
              <h2 className="text-[#19165F] leading-tight">
                Message Sent Successfully
              </h2>
              
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                Thank you for contacting Services JMK. We&apos;ve received your message and will get back to you within 24 hours.
              </p>

              <button
                onClick={resetForm}
                className="mt-8 bg-[#19165F] text-white px-10 py-4 hover:bg-[#19165F]/90 transition-all duration-300 inline-flex items-center gap-3 group relative overflow-hidden shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Send Another Message</span>
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
                <div className="absolute inset-0 bg-[#E53E3E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#19165F]/5 font-main">
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
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }
        .input-focus-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #19165F, #E53E3E);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .input-wrapper:focus-within .input-focus-line {
          transform: scaleX(1);
        }
      `}</style>

      {/* Hero Section - Minimal */}
      <section className="relative bg-[#19165F] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#E53E3E] rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div 
              className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div>
                <div className="inline-block mb-4">
                  <span className="text-[#E53E3E] tracking-[0.3em] uppercase text-xs">
                    Get In Touch
                  </span>
                  <div className="h-px bg-gradient-to-r from-[#E53E3E] to-transparent mt-2"></div>
                </div>
                <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                  Let&apos;s Start a<br />Conversation
                </h1>
              </div>
              
              <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                Share your industrial challenges with us. Our team of experts is ready to provide 
                customized solutions that drive real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20">
            {/* Left Column - Form */}
            <div 
              className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="bg-white p-8 lg:p-12 shadow-xl relative">
                <div className="absolute top-0 left-0 w-20 h-1 bg-[#E53E3E]"></div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <div className="input-wrapper relative">
                    <label htmlFor="name" className="block text-[#19165F] mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 border-2 bg-gray-50/50 ${
                          errors.name ? 'border-[#E53E3E]' : focusedField === 'name' ? 'border-[#19165F]' : 'border-gray-200'
                        } focus:border-[#19165F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-900`}
                        placeholder="John Smith"
                      />
                      <div className="input-focus-line"></div>
                    </div>
                    {errors.name && (
                      <p className="text-[#E53E3E] text-sm mt-2 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="input-wrapper relative">
                    <label htmlFor="email" className="block text-[#19165F] mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 border-2 bg-gray-50/50 ${
                          errors.email ? 'border-[#E53E3E]' : focusedField === 'email' ? 'border-[#19165F]' : 'border-gray-200'
                        } focus:border-[#19165F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-900`}
                        placeholder="john@company.com"
                      />
                      <div className="input-focus-line"></div>
                    </div>
                    {errors.email && (
                      <p className="text-[#E53E3E] text-sm mt-2 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="input-wrapper relative">
                    <label htmlFor="phone" className="block text-[#19165F] mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone Number
                      <span className="text-gray-400 text-sm">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 border-2 bg-gray-50/50 ${
                          focusedField === 'phone' ? 'border-[#19165F]' : 'border-gray-200'
                        } focus:border-[#19165F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-900`}
                        placeholder="+1 (555) 000-0000"
                      />
                      <div className="input-focus-line"></div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="input-wrapper relative">
                    <label htmlFor="message" className="block text-[#19165F] mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Tell Us About Your Project *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={6}
                        className={`w-full px-5 py-4 border-2 bg-gray-50/50 ${
                          errors.message ? 'border-[#E53E3E]' : focusedField === 'message' ? 'border-[#19165F]' : 'border-gray-200'
                        } focus:border-[#19165F] focus:outline-none focus:bg-white transition-all duration-300 resize-none text-gray-900`}
                        placeholder="Describe your industrial automation needs, technical challenges, or any questions you have for our team..."
                      />
                      <div className="input-focus-line"></div>
                    </div>
                    {errors.message && (
                      <p className="text-[#E53E3E] text-sm mt-2 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                      </p>
                    )}
                    <div className="mt-2 text-sm text-gray-500">
                      {formData.message.length} / 10 characters minimum
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="w-full bg-[#19165F] text-white px-8 py-5 hover:bg-[#19165F]/90 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden shadow-lg hover:shadow-2xl"
                    >
                      {formStatus === "loading" ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="relative z-10">Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Send Message</span>
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
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#E53E3E] to-[#E53E3E]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </button>
                  </div>

                  {/* Error Message */}
                  {formStatus === "error" && (
                    <div className="flex items-start gap-3 p-5 border-l-4 border-[#E53E3E] bg-red-50 shadow-sm">
                      <svg className="w-6 h-6 text-[#E53E3E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="text-[#19165F] mb-1">Unable to Send Message</h4>
                        <p className="text-gray-600 text-sm">
                          We encountered an error. Please try again or contact us directly at{' '}
                          <a href="mailto:info@servicesjmk.com" className="text-[#E53E3E] hover:underline">
                            info@servicesjmk.com
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div 
              className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-[#19165F] to-[#19165F]/90 p-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#E53E3E] opacity-10 rounded-full -mr-20 -mt-20"></div>
                
                <div className="relative z-10 space-y-6">
                  <div>
                    <h3 className="text-white mb-2">Direct Contact</h3>
                    <div className="h-px bg-gradient-to-r from-[#E53E3E] to-transparent w-20"></div>
                  </div>

                  <div className="space-y-4">
                    <a 
                      href="tel:+17862587335" 
                      className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-[#E53E3E] flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/70 text-sm">Call Us</div>
                        <div className="text-white">+1 (786) 258-7335</div>
                      </div>
                    </a>

                    <a 
                      href="mailto:info@servicesjmk.com" 
                      className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-[#E53E3E] flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/70 text-sm">Email Us</div>
                        <div className="text-white">info@servicesjmk.com</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="space-y-4">
                <div className="bg-white p-6 border-l-4 border-[#E53E3E] shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#19165F]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#19165F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[#19165F] mb-1">Response Time</h4>
                      <p className="text-gray-600 text-sm">We typically respond within 24 hours during business days</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#19165F] shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#19165F]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#19165F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[#19165F] mb-1">Business Hours</h4>
                      <p className="text-gray-600 text-sm">Monday - Saturday<br />9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border-l-4 border-[#E53E3E] shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E53E3E]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[#19165F] mb-1">Emergency Support</h4>
                      <p className="text-gray-600 text-sm">24/7 availability for critical industrial emergencies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#19165F] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-[#19165F]">Confidential & Secure</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Your information is encrypted and protected. We respect your privacy and will never share your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
