"use client";
import { useParams } from "next/navigation";
import DynamicNav from "./dynamic-nav";
import MainNavigation from "./main-navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const { slug } = useParams();

  return (
    <div
      className={cn(
        "sticky top-0 flex w-full z-50  md:h-screen",
        slug ? "md:w-1/3" : "md:w-fit"
      )}
    >
      <MainNavigation />
      {slug && <DynamicNav />}
    </div>
  );
}
