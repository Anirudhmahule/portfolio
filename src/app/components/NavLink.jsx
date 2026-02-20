import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  const baseClasses =
    "relative px-2 py-1 text-sm font-medium transition-colors duration-200";
  const activeClasses =
    "text-white";
  const inactiveClasses =
    "text-slate-300 hover:text-white";

  const isActive = isHome && href.startsWith("#");

  return (
    <Link href={href} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      <span>{title}</span>
      <span
        className={`absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 transition-transform duration-200 origin-center ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
};

export default NavLink;
