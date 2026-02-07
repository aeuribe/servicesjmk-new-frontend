import Link from "next/link";

interface NavigationLinksProps {
  items: ReadonlyArray<{ readonly key: string; readonly label: string; readonly href: string }>;
  pathname: string;
  onPageChange: (page: "home" | "services" | "about" | "contact") => void;
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
            onClick={() => onPageChange(item.key as any)}
            className={`text-[12px] tracking-[0.12em] uppercase font-medium ${
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

