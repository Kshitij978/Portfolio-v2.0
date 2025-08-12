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

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: <HouseIcon />,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <LaptopMinimalIcon />,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <PenLineIcon />,
  },
  {
    title: "Stack",
    href: "/stack",
    icon: <LayersIcon />,
  },
  {
    title: "About",
    href: "/about",
    icon: <UserRoundIcon />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <MailIcon />,
  },
  {
    title: "Search",
    href: "/",
    icon: <SearchIcon />,
  },
];

const Navigation = () => {
  return (
    <nav className="fixed z-50 w-full md:w-fit right-0 md:right-auto left-0 md:top-0 bottom-0 md:h-screen">
      <ul
        className={cn(
          "flex md:flex-col w-full border-r bg-[var(--background)] border-zinc-800 md:w-14 items-center justify-evenly  md:justify-center h-16 md:h-full border-t border-t-zinc-800 gap-6"
        )}
      >
        {MAIN_NAV.map((item) => (
          <SimpleTooltip
            contentProps={{
              side: "left",
              sideOffset: 10,
            }}
            key={item.title}
            content={item.title}
          >
            <Link href={item.href} rel="noopener noreferer">
              <li className="text-zinc-500 hover:text-zinc-300">{item.icon}</li>
            </Link>
          </SimpleTooltip>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
