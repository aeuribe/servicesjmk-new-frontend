import React from "react";
import { CheckCircleIcon } from "./Icon";

type SuccessInfoProps = {
  resetForm: () => void;
};

const SuccessInfo: React.FC<SuccessInfoProps> = ({ resetForm }) => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
    >

      {/* Responsive decorative geometric elements */}
      <div className="absolute inset-0 opacity-10 lg:opacity-20">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-white/30 rotate-45 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 sm:bottom-32 right-1/4 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 border border-white/20 rotate-12 animate-[float_8s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-1/3 right-2 sm:right-10 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border border-white/25 rotate-45 animate-[float_8s_ease-in-out_infinite_4s]"></div>
        
        {/* Additional industrial elements */}
        <div className="absolute bottom-1/4 left-4 sm:left-10 w-6 sm:w-8 lg:w-12 h-20 sm:h-32 lg:h-40 border-l-2 border-white/15 animate-[float_8s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-1/4 left-1/4 w-20 sm:w-32 lg:w-40 h-6 sm:h-8 lg:h-12 border-t-2 border-white/15 animate-[float_8s_ease-in-out_infinite_3s]"></div>
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10">
        <div className="max-w-6xl w-full">
          
          {/* Success Status Badge */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 opacity-0 translate-y-5 animate-[slideInUp_0.6s_ease-out_0.1s_forwards]">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-500/10 backdrop-blur-sm border border-green-400/30 text-xs sm:text-sm uppercase tracking-[0.2em] text-green-300">
              Message Delivered Successfully
            </div>
          </div>

          {/* Success Icon */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16 opacity-0 scale-0 animate-[bounceIn_1.2s_ease-out_0.3s_forwards]">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-green-400/20 backdrop-blur-sm border border-green-400/40 flex items-center justify-center animate-pulse"></div>
              
              {/* Main icon container */}
              <div className="relative w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/40">
                <CheckCircleIcon />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-l-2 border-t-2 border-white/60"></div>
                <div className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-r-2 border-t-2 border-white/60"></div>
                <div className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-l-2 border-b-2 border-white/60"></div>
                <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-r-2 border-b-2 border-white/60"></div>
              </div>
            </div>
          </div>

          {/* Success Content */}
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 lg:space-y-12 opacity-0 translate-y-8 animate-[slideInUp_1.0s_ease-out_0.6s_forwards]">
            
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight">
                Message Sent
                <br />
                <span className="text-green-400">Successfully</span>
              </h1>
              
              {/* Decorative line */}
              <div className="flex justify-center">
                <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-transparent via-[#FF9500] to-transparent"></div>
              </div>
            </div>

            {/* Thank you message */}
            <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
                Thank you for contacting <span className="text-[#FF9500] font-medium">Services JMK</span>.
              </p>
            </div>
            
            {/* Response time callout */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-green-500/10 backdrop-blur-sm border border-green-400/30 p-4 sm:p-6 lg:p-8 relative">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 border-green-400/50"></div>
                <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-t-2 border-green-400/50"></div>
                <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-b-2 border-green-400/50"></div>
                <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 border-green-400/50"></div>
                
                <p className="text-base sm:text-lg lg:text-xl text-green-300 leading-relaxed">
                  Our industrial solutions team will review your inquiry and respond within{" "}
                  <span className="text-green-200 font-medium">24 hours</span>.
                </p>
              </div>
            </div>

            {/* Services description */}
            <div className="max-w-2xl mx-auto">
              <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
                We specialize in manufacturing, automation, and industrial maintenance solutions
                tailored to your specific requirements.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-8 opacity-0 translate-y-6 animate-[slideInUp_0.8s_ease-out_1.4s_forwards]">
              <button
                onClick={resetForm}
                className="group relative bg-gradient-to-r from-[#FF9500] to-[#FF8500] hover:from-[#FF8500] hover:to-[#FF7500] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF9500]/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto max-w-xs sm:max-w-sm overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF9500]/20 to-[#FF8500]/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-l-2 border-t-2 border-white/40 group-hover:border-white/60 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-r-2 border-t-2 border-white/40 group-hover:border-white/60 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-l-2 border-b-2 border-white/40 group-hover:border-white/60 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-r-2 border-b-2 border-white/40 group-hover:border-white/60 transition-colors duration-300"></div>
                
                <div className="relative flex items-center gap-3">
                  <span className="tracking-wide">Send Another Message</span>
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-2 duration-300">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Additional info */}
            <div className="pt-8 sm:pt-12 lg:pt-16 border-t border-white/10 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[slideInUp_0.8s_ease-out_1.8s_forwards]">
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                For urgent matters, please call us directly at{" "}
                <span className="text-[#FF9500]">+1 (786) 258-7335</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessInfo;