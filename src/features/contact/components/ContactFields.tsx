import React from "react";
import { CheckValidIcon, ErrorIcon } from "./Icon";

type ContactFieldsProps = {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const ContactFields: React.FC<ContactFieldsProps> = ({
  formData,
  errors,
  handleChange,
}) => {
  return (
    <div className="space-y-4">
      {/* Name Field */}
      <div className="opacity-0 translate-y-5 animate-[slideInUp_0.5s_ease-out_1.1s_forwards]">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            className={`w-full h-12 bg-white/5 backdrop-blur-sm text-white placeholder-transparent border border-white/20 focus:border-white/60 transition-all duration-300 px-4 pt-4 pb-2 text-sm focus:outline-none peer ${
              errors.name
                ? "border-red-400/60 focus:border-red-400"
                : formData.name.trim() && !errors.name
                ? "border-green-400/60 focus:border-green-400"
                : "border-white/20 focus:border-white/60"
            }`}
            required
          />
          <label className="absolute left-4 top-1 text-xs text-white/60 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white/80">
            Full Name *
          </label>
          {/* Validation Icons */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {errors.name && <ErrorIcon />}
            {formData.name.trim() && !errors.name && <CheckValidIcon />}
          </div>
        </div>
        {errors.name && (
          <p className="text-red-300 text-xs mt-1 flex items-center gap-1 opacity-0 translate-y-1 animate-[slideInUp_0.3s_ease-out_0.1s_forwards]">
            <ErrorIcon />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="opacity-0 translate-y-5 animate-[slideInUp_0.5s_ease-out_1.2s_forwards]">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-12 bg-white/5 backdrop-blur-sm text-white placeholder-transparent border border-white/20 focus:border-white/60 transition-all duration-300 px-4 pt-4 pb-2 text-sm focus:outline-none peer ${
              errors.email
                ? "border-red-400/60 focus:border-red-400"
                : formData.email.trim() && !errors.email
                ? "border-green-400/60 focus:border-green-400"
                : "border-white/20 focus:border-white/60"
            }`}
            required
          />
          <label className="absolute left-4 top-1 text-xs text-white/60 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white/80">
            Email Address *
          </label>
          {/* Validation Icons */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {errors.email && <ErrorIcon />}
            {formData.email.trim() && !errors.email && <CheckValidIcon />}
          </div>
        </div>
        {errors.email && (
          <p className="text-red-300 text-xs mt-1 flex items-center gap-1 opacity-0 translate-y-1 animate-[slideInUp_0.3s_ease-out_0.1s_forwards]">
            <ErrorIcon />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="opacity-0 translate-y-5 animate-[slideInUp_0.5s_ease-out_1.3s_forwards]">
        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-12 bg-white/5 backdrop-blur-sm text-white placeholder-transparent border border-white/20 focus:border-white/60 transition-all duration-300 px-4 pt-4 pb-2 text-sm focus:outline-none peer"
          />
          <label className="absolute left-4 top-1 text-xs text-white/60 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white/80">
            Phone Number (Optional)
          </label>
        </div>
      </div>

      {/* Message Field */}
      <div className="opacity-0 translate-y-5 animate-[slideInUp_0.5s_ease-out_1.4s_forwards]">
        <div className="relative group">
          <textarea
            name="message"
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full bg-white/5 backdrop-blur-sm text-white placeholder-transparent border-2 transition-all duration-300 px-4 pt-6 pb-3 text-base focus:outline-none resize-none peer ${
              errors.message
                ? "border-red-400/60 focus:border-red-400 shadow-red-400/20"
                : "border-white/20 focus:border-white/60 focus:shadow-white/10"
            } focus:shadow-lg group-hover:border-white/40`}
            required
          />
          <label className="absolute left-4 top-2 text-xs text-white/60 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-xs peer-focus:text-white/80">
            Share the details of your request *
          </label>
        </div>
        {errors.message && (
          <p className="text-red-300 text-sm mt-2 flex items-center gap-2 opacity-0 translate-y-1 animate-[slideInUp_0.3s_ease-out_0.1s_forwards]">
            {errors.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactFields;
