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
    icon: ({ size }) => <HouseIcon size={size} />,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: ({ size }) => <LaptopMinimalIcon size={size} />,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: ({ size }) => <PenLineIcon size={size} />,
  },
  {
    title: "Stack",
    href: "/stack",
    icon: ({ size }) => <LayersIcon size={size} />,
  },
  {
    title: "About",
    href: "/about",
    icon: ({ size }) => <UserRoundIcon size={size} />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: ({ size }) => <MailIcon size={size} />,
  },
  {
    title: "Search",
    href: "/",
    icon: ({ size }) => <SearchIcon size={size} />,
  },
];

const Navigation = () => {
  return (
    <nav className="fixed z-50 w-full md:w-fit right-0 md:right-auto left-0 md:top-0 bottom-0 md:h-screen">
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
            <Link href={href} rel="noopener noreferer">
              <li className="text-zinc-500 hover:text-zinc-300">
                {icon({ size: 22 })}
              </li>
            </Link>
          </SimpleTooltip>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
