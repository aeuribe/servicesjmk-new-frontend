interface ContactInfoProps {
  isScrolled?: boolean;
  isLightMode?: boolean;
}

export const ContactInfo = ({ isLightMode = false }: ContactInfoProps) => {
  return (
    <a
      href="tel:+13055551234"
      className={`text-xs font-normal tracking-wide ${
        isLightMode 
          ? "text-gray-700 hover:text-gray-900" 
          : "text-white/85 drop-shadow-sm hover:text-white"
      }`}
    >
      +1 (305) 555-1234
    </a>
  );
};

