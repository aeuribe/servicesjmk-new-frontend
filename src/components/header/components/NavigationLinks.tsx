import Link from "next/link";

// 1. Definimos las páginas permitidas
type PageKey = "home" | "services" | "about" | "contact";

interface NavigationLinksProps {
  // 2. Aquí está el truco: la key ya no es un string cualquiera
  items: ReadonlyArray<{ readonly key: PageKey; readonly label: string; readonly href: string }>;
  pathname: string;
  onPageChange: (page: PageKey) => void;
  isLightMode?: boolean;
}

export const NavigationLinks = ({
  items,
  pathname,
  onPageChange,
  isLightMode = false,
}: NavigationLinksProps) => {
  return (
    <div className="hidden lg:flex items-center gap-7">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.key}
            href={item.href}
            // 3. Ya no necesitas 'as any'. TypeScript sabe que item.key es PageKey
            onClick={() => onPageChange(item.key)} 
            className={`text-[12px] tracking-[0.12em] uppercase font-medium transition-colors duration-300 ${
              isLightMode
                ? isActive
                  ? "text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
                : isActive
                ? "text-white"
                : "text-white/85 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};