import { getCollection } from "astro:content";

/**
 * Return blog posts in reverse chronological order.
 * Drafts are visible while developing locally and excluded from production builds.
 */
export async function getBlogPosts() {
  const posts = await getCollection("blog");

  return posts
    .filter((post) => import.meta.env.DEV || !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
