import type { LucideProps } from "lucide-react";
import type { ReactNode } from "react";

export type NavItem = {
  title: string;
  href: string;
  icon: (props: LucideProps) => ReactNode;
};
