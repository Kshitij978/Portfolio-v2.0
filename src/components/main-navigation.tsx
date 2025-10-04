import { SimpleTooltip } from "./ui/tooltip";
import Link from "next/link";
import { NavItem } from "@/features/profile/types/nav";
import {
  HouseIcon,
  LaptopMinimalIcon,
  LayersIcon,
  MailIcon,
  PenLineIcon,
  SearchIcon,
  UserRoundIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: ({ size, stroke }) => <HouseIcon stroke={stroke} size={size} />,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: ({ size, stroke }) => (
      <LaptopMinimalIcon stroke={stroke} size={size} />
    ),
  },
  {
    title: "Blog",
    href: "/blog",
    icon: ({ size, stroke }) => <PenLineIcon stroke={stroke} size={size} />,
  },
  {
    title: "Stack",
    href: "/stack",
    icon: ({ size, stroke }) => <LayersIcon stroke={stroke} size={size} />,
  },
  {
    title: "About",
    href: "/about",
    icon: ({ size, stroke }) => <UserRoundIcon stroke={stroke} size={size} />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: ({ size, stroke }) => <MailIcon stroke={stroke} size={size} />,
  },
  {
    title: "Search",
    href: "/search",
    icon: ({ size, stroke }) => <SearchIcon stroke={stroke} size={size} />,
  },
];

const MainNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed  md:relative  z-50 w-full md:w-fit right-0 md:right-auto left-0 md:top-0 bottom-0 md:h-screen">
      <ul
        className={cn(
          "flex md:flex-col w-full md:border-r bg-[var(--background)] md:min-w-16 items-center justify-evenly  md:justify-center h-16 md:h-full border-t gap-6"
        )}
      >
        {MAIN_NAV.map(({ title, href, icon }) => (
          <SimpleTooltip
            contentProps={{
              side: "left",
              sideOffset: 10,
            }}
            key={title}
            content={title}
          >
            <Link
              href={href}
              rel="noopener noreferer"
              className="md:pb-0 md:pt-0 pb-10 pt-6"
            >
              <li className="text-zinc-500  hover:text-zinc-300">
                {icon({
                  size: 22,
                  stroke:
                    (pathname === "/" && href === "/") ||
                    (pathname !== "/" &&
                      href !== "/" &&
                      pathname.startsWith(href))
                      ? "white"
                      : "currentColor",
                })}
              </li>
            </Link>
          </SimpleTooltip>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
