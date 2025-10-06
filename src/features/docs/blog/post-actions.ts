"use server";

import { getAllPosts } from "./data/posts";

export default async function fetchAllPosts() {
  const posts = getAllPosts();
  return posts;
}
