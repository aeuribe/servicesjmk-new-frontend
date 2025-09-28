import React from "react";

const ContactCard = () => {
  return (
    <div className="order-1 lg:order-2 w-full max-w-full">
      <div className="opacity-0 translate-y-5 lg:translate-y-0 lg:translate-x-10 animate-[slideInUp_0.6s_ease-out_0.8s_forwards] lg:animate-[slideInLeft_0.6s_ease-out_0.8s_forwards]">
        <div className="space-y-4 sm:space-y-6 w-full max-w-full">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {/* Phone Contact */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF9500]/20 backdrop-blur-sm border border-[#FF9500]/30 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#FF9500]/30 transition-all duration-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9500]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base sm:text-lg text-white mb-1">
                    Call Us
                  </h4>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    <a
                      href="https://wa.me/17862587335"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white transition-colors break-all sm:break-normal"
                    >
                      +1 (786) 258-7335
                    </a>
                    <br />
                    <span className="text-xs sm:text-sm">
                      Professional Support
                    </span>
                  </p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF9500]/20 backdrop-blur-sm border border-[#FF9500]/30 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#FF9500]/30 transition-all duration-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9500]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base sm:text-lg text-white mb-1">
                    Email Us
                  </h4>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed break-all sm:break-normal">
                    <a
                      href="mailto:info@servicesjmk.com"
                      className="underline hover:text-white transition-colors"
                    >
                      info@servicesjmk.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4 rounded-sm">
            <h4 className="text-base sm:text-lg text-white mb-2 sm:mb-3">
              Our Services
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/60">
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF9500] rounded-full flex-shrink-0"></div>
                <span className="leading-relaxed">Manufacturing Solutions</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF9500] rounded-full flex-shrink-0"></div>
                <span className="leading-relaxed">Preventive Maintenance</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF9500] rounded-full flex-shrink-0"></div>
                <span className="leading-relaxed">Process Automation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
