import {
  HouseIcon,
  LaptopMinimalIcon,
  PenLineIcon,
  UserRoundIcon,
} from "lucide-react";

import type { NavItem } from "@/features/profile/types/nav";

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
