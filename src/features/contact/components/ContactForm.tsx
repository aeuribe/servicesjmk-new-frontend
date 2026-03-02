import React from "react";
import type {
  FormData,
  FormErrors,
  FormStatus,
} from "@/features/contact/contactTypes";

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  focusedField: string | null;
  setFocusedField: (field: string | null) => void;
  formStatus: FormStatus;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  t: (key: string) => string;
}

export function ContactForm({
  formData,
  errors,
  focusedField,
  setFocusedField,
  formStatus,
  onChange,
  onSubmit,
  t,
}: ContactFormProps) {
  return (
    <div
      className={`${focusedField !== null ? "animate-fade-in-up" : "animate-fade-in-up"}`}
      style={{ animationDelay: "0.3s" }}
    >
      <div
        className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-10 relative overflow-hidden"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 90% 100%, 0 100%)",
          filter: "drop-shadow(0 20px 40px rgba(37, 99, 235, 0.2))",
        }}
      >
        <div className="mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#2563eb] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-white text-2xl font-bold">
              {t("form.title") || "Project Request Form"}
            </h2>
          </div>
          <p className="text-white/70 text-sm">
            {t("form.description") ||
              "Complete all required fields to initiate your engineering protocol."}
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
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
              {t("form.fields.name.label") || "Full Name"}{" "}
              <span className="text-[#2563eb]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.name
                  ? "border-red-400"
                  : focusedField === "name"
                  ? "border-[#2563eb]"
                  : "border-white/20"
              } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all`}
              placeholder={
                t("form.fields.name.placeholder") || "Enter your full name"
              }
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.name}
              </p>
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
              {t("form.fields.email.label") || "Email Address"}{" "}
              <span className="text-[#2563eb]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.email
                  ? "border-red-400"
                  : focusedField === "email"
                  ? "border-[#2563eb]"
                  : "border-white/20"
              } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all`}
              placeholder={
                t("form.fields.email.placeholder") || "your.email@company.com"
              }
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="company"
              className={`block text-sm font-semibold mb-2 transition-colors ${
                focusedField === "company"
                  ? "text-[#2563eb]"
                  : errors.company
                  ? "text-red-400"
                  : "text-white/90"
              }`}
            >
              {t("form.fields.company.label") || "Company"}{" "}
              <span className="text-[#2563eb]">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={onChange}
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.company
                  ? "border-red-400"
                  : focusedField === "company"
                  ? "border-[#2563eb]"
                  : "border-white/20"
              } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all`}
              placeholder={
                t("form.fields.company.placeholder") || "Your company name"
              }
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.company}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="projectType"
              className={`block text-sm font-semibold mb-2 transition-colors ${
                focusedField === "projectType"
                  ? "text-[#2563eb]"
                  : errors.projectType
                  ? "text-red-400"
                  : "text-white/90"
              }`}
            >
              {t("form.fields.projectType.label") || "Project Type"}{" "}
              <span className="text-[#2563eb]">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={onChange}
              onFocus={() => setFocusedField("projectType")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.projectType
                  ? "border-red-400"
                  : focusedField === "projectType"
                  ? "border-[#2563eb]"
                  : "border-white/20"
              } text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232563eb' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                paddingRight: "2.5rem",
              }}
            >
              <option value="" className="bg-[#1a1a1a] text-white">
                {t("form.fields.projectType.options.default") ||
                  "Select project type"}
              </option>
              <option value="engineering" className="bg-[#1a1a1a] text-white">
                {t("form.fields.projectType.options.engineering") ||
                  "Industrial Engineering & Consulting"}
              </option>
              <option value="automation" className="bg-[#1a1a1a] text-white">
                {t("form.fields.projectType.options.automation") ||
                  "Maintenance & Automation"}
              </option>
              <option value="machinery" className="bg-[#1a1a1a] text-white">
                {t("form.fields.projectType.options.machinery") ||
                  "Machinery Supply & Logistics"}
              </option>
              <option value="other" className="bg-[#1a1a1a] text-white">
                {t("form.fields.projectType.options.other") ||
                  "Other / Custom Solution"}
              </option>
            </select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.projectType}
              </p>
            )}
          </div>

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
              {t("form.fields.message.label") || "Project Details"}{" "}
              <span className="text-[#2563eb]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={onChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={5}
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.message
                  ? "border-red-400"
                  : focusedField === "message"
                  ? "border-[#2563eb]"
                  : "border-white/20"
              } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 transition-all resize-none`}
              placeholder={
                t("form.fields.message.placeholder") ||
                "Describe your project requirements, timeline, and any specific technical needs..."
              }
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.message}
              </p>
            )}
            <div className="mt-2 text-xs text-white/50">
              {formData.message.length} / 10 minimum characters
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full bg-gradient-to-r from-[#2563eb] to-[#2563eb] text-white px-8 py-5 hover:from-[#2563eb]/90 hover:to-[#2563eb]/90 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden shadow-lg hover:shadow-2xl font-bold text-lg"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
                filter: "drop-shadow(0 0 20px rgba(37, 99, 235, 0.5))",
              }}
            >
              {formStatus === "loading" ? (
                <>
                  <svg
                    className="animate-spin h-6 w-6 text-white"
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
                  <span className="relative z-10">
                    {t("form.submit.loading") || "Initiating Protocol..."}
                  </span>
                </>
              ) : (
                <>
                  <span className="relative z-10">
                    {t("form.submit.label") || "INITIATE PROJECT REQUEST"}
                  </span>
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

          {formStatus === "error" && (
            <div className="flex items-start gap-3 p-5 border-l-4 border-red-400 bg-red-400/10 backdrop-blur-sm">
              <svg
                className="w-6 h-6 text-red-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="text-white mb-1 font-semibold">
                  {t("form.error.title") || "Transmission Failed"}
                </h4>
                <p className="text-white/80 text-sm">
                  {t("form.error.description") ||
                    "Unable to submit request. Please try again or contact us directly at"}{" "}
                  <a
                    href="mailto:info@servicesjmk.com"
                    className="text-[#2563eb] hover:underline"
                  >
                    info@servicesjmk.com
                  </a>
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

