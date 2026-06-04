import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

// Static-first sitemap: the landing page, the blog index, and one entry per
// MDX post. Post lastModified comes from the frontmatter `date`.
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const latestPost = posts[0]?.date ? new Date(posts[0].date) : new Date();

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestPost,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
