import React from "react";
import {
  ArrowRightIcon,
  LoaderIcon,
} from "@/features/contact/components/Icon";

type SubmitButtonProps = {
  formStatus: "idle" | "loading" | "success" | "error";
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ formStatus }) => {
  return (
    <div className="pt-4 opacity-0 translate-y-5 animate-[slideInUp_0.5s_ease-out_1.5s_forwards]">
      <button
        type="submit"
        disabled={formStatus === "loading"}
        className="w-full bg-gradient-to-r from-[#FF9500] to-[#FF8500] hover:from-[#FF8500] hover:to-[#FF7500] disabled:from-[#FF9500]/50 disabled:to-[#FF8500]/50 text-white px-6 py-4 text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF9500]/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group disabled:cursor-not-allowed overflow-hidden relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9500]/20 to-[#FF8500]/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>

        <div className="relative flex items-center gap-4">
          {formStatus === "loading" ? (
            <>
              <LoaderIcon />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRightIcon />
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default SubmitButton;