"use client";
import {
  HouseIcon,
  LaptopMinimalIcon,
  PenLineIcon,
  UserRoundIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/features/profile/types/nav";
import { useTailwindMedia } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

import { SimpleTooltip } from "./ui/tooltip";

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
    title: "About",
    href: "/about",
    icon: ({ size, stroke }) => <UserRoundIcon stroke={stroke} size={size} />,
  },
];

const MainNavigation = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isMobile = useTailwindMedia("md", "down");

  return (
    <nav className="fixed  md:relative  z-50 w-full md:w-fit right-0 md:right-auto left-0 md:top-0 bottom-0 md:h-screen">
      <ul
        className={cn(
          "flex md:flex-col w-full md:border-r bg-[var(--background)] md:min-w-16 items-center justify-evenly md:gap-8  md:justify-center h-16 md:h-full border-t gap-6"
        )}
      >
        {MAIN_NAV.map(({ title, href, icon }) => (
          <SimpleTooltip
            contentProps={{
              side: isMobile ? "top" : "left",
              sideOffset: isMobile ? 0 : 10,
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
        <li className="md:pb-0 md:pt-0 pb-10 pt-6">
          <SimpleTooltip
            contentProps={{
              side: isMobile ? "top" : "left",
              sideOffset: isMobile ? 0 : 10,
            }}
            key={"search"}
            content={"Search"}
          >
            {children}
          </SimpleTooltip>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
