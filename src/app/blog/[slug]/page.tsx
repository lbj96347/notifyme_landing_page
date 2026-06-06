import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getAllSlugs, getPost, formatDate } from "@/lib/blog";
import { SOCIAL_IMAGE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${slug}`,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [SOCIAL_IMAGE.url],
    },
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-20 md:py-24">
        <Link
          href="/blog"
          className="text-sm font-semibold text-lcd-dim transition-colors hover:text-amber"
        >
          ← All posts
        </Link>

        <article className="mt-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-lcd-dim">
            <span className="chip">{post.tag}</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-lcd sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-lcd-dim">{post.description}</p>

          <hr className="rule my-8" />

          <div className="prose">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
