import { LucideProps } from "lucide-react";
import { ReactNode } from "react";

export type NavItem = {
  title: string;
  href: string;
  icon: (props: LucideProps) => ReactNode;
};
