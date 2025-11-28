"use client";

import { useParams } from "next/navigation";
import DynamicNav from "./dynamic-nav";
import { Post } from "@/features/blog/types/post";

export default function BlogNav({ data }: { data: Post[] }) {
  const { slug } = useParams();
  if (!slug) return null;
  return <DynamicNav data={data} slug={slug} />;
}
