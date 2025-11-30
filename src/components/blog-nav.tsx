"use client";

import { useParams } from "next/navigation";

import type { Post } from "@/features/blog/types/post";

import DynamicNav from "./dynamic-nav";

export default function BlogNav({ data }: { data: Post[] }) {
  const { slug } = useParams();
  if (!slug) return null;
  return <DynamicNav data={data} slug={slug} />;
}
