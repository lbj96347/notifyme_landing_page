import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { UseCases } from "@/components/sections/use-cases";
import { OpenSource } from "@/components/sections/open-source";
import { Examples } from "@/components/sections/examples";
import { BlogPreview } from "@/components/sections/blog-preview";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <UseCases />
        <OpenSource />
        <Examples />
        <BlogPreview posts={posts} />
      </main>
      <SiteFooter />
    </>
  );
}
