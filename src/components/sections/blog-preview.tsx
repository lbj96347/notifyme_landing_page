import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import { SectionHeading } from "./section-heading";

export function BlogPreview({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;
  const preview = posts.slice(0, 4);

  return (
    <section id="blog" className="border-t border-casing-light/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="From the blog"
            title="Wire NotifyMe into your stack."
          />
          <Link href="/blog" className="btn btn-ghost !py-2 !text-xs">
            All posts →
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {preview.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="panel group block p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-lcd-dim">
                <span className="chip">{post.tag}</span>
                <span>{formatDate(post.date)}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-lcd group-hover:text-amber">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-lcd-dim">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
