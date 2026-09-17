import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE, withBase } from "../consts";
import { getBlogPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getBlogPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: new URL(withBase(), context.site),
    items: posts.map((post) => ({
      ...post.data,
      link: new URL(withBase(`blog/${post.id}/`), context.site).href,
    })),
  });
}
