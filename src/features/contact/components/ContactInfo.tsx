// Contact Info Component - Pure Tailwind CSS

// Custom icon components with unique designs
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path 
      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <circle 
      cx="12" 
      cy="12" 
      r="9" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M12 7V12L15.5 15.5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    <path 
      d="M12 3V5M21 12H19M12 19V21M5 12H3" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path 
      d="M8 10.5C8 9.11929 9.11929 8 10.5 8H13.5C14.8807 8 16 9.11929 16 10.5C16 11.8807 14.8807 13 13.5 13H10.5C9.11929 13 8 14.1193 8 15.5C8 16.8807 9.11929 18 10.5 18H13.5C14.8807 18 16 16.8807 16 15.5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M12 6V8M12 18V20" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeDasharray="2 4" 
      opacity="0.3"
    />
  </svg>
);

export function ContactInfo() {
  const contactMethods = [
    {
      icon: EmailIcon,
      title: "Email Address",
      content: "industrial@servicesjmk.com",
      subtitle: "For technical inquiries and project specifications",
      href: "mailto:industrial@servicesjmk.com"
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      content: "Monday - Saturday: 9:00 AM - 6:00 PM EST",
      subtitle: "Response within 4 hours during business hours"
    },
    {
      icon: SupportIcon,
      title: "Technical Support",
      content: "24/7 Emergency Consultation",
      subtitle: "Critical industrial support available anytime"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 translate-y-8 animate-[slideInUp_0.6s_ease-out_forwards] [animation-delay:0.2s]">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Contact Information
          </h2>
          <h3 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Industrial Solutions<br />
            Available Worldwide
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert team provides comprehensive industrial services, from equipment maintenance to large-scale manufacturing solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#19165F]/20 opacity-0 translate-y-8 animate-[slideInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#19165F] to-[#252078] flex items-center justify-center shadow-lg text-white">
                  <method.icon />
                </div>
                <h4 className="text-lg text-gray-900">{method.title}</h4>
              </div>
              
              <div className="space-y-2">
                {method.href ? (
                  <a 
                    href={method.href}
                    className="text-gray-900 hover:text-[#19165F] transition-colors block"
                  >
                    {method.content}
                  </a>
                ) : (
                  <p className="text-gray-900">{method.content}</p>
                )}
                <p className="text-sm text-gray-600">{method.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}