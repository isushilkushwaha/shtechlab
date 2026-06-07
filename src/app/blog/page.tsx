import { Metadata } from "next";

import { getBlogPosts } from "@/lib/markdown";

import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog | SH Tech Lab",
  description:
    "Read latest website development, SEO, and digital business blogs from SH Tech Lab.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-bold mb-10">
          SH Tech Lab Blog
        </h1> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <BlogCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>
      </div>
    </main>
  );
}