import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getAllPosts, formatDate } from "@/lib/blog";
import { SOCIAL_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides for wiring NotifyMe into Claude Code, GitHub Actions, n8n, Statuspage, and any workflow that can send an HTTP POST.",
  openGraph: {
    title: "NotifyMe Blog",
    description:
      "Guides for wiring NotifyMe into your developer and AI-agent workflows.",
    type: "website",
    url: "/blog",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "NotifyMe Blog",
    description:
      "Guides for wiring NotifyMe into your developer and AI-agent workflows.",
    images: [SOCIAL_IMAGE.url],
  },
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-20 md:py-24">
        <span className="kicker">
          <span className="indicator" aria-hidden />
          NotifyMe blog
        </span>
        <h1 className="mt-4 text-4xl font-bold text-lcd sm:text-5xl">
          Guides &amp; usage notes
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-lcd-dim">
          Practical, copy-paste guides for connecting NotifyMe to the tools you
          already run.
        </p>

        <div className="mt-12 space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="panel group block p-6 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-lcd-dim">
                <span className="chip">{post.tag}</span>
                <span>{formatDate(post.date)}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-lcd group-hover:text-amber">
                {post.title}
              </h2>
              <p className="mt-2 text-lcd-dim">{post.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-amber">
                Read post →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
