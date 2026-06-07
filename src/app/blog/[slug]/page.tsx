

import { Metadata } from "next";

import {
  getBlogPost,
  getBlogPosts,
} from "@/lib/markdown";

import BlogContent from "@/components/blog/BlogContent";

import RelatedPosts from "@/components/blog/RelatedPosts";

import BlogSchema from "@/components/seo/BlogSchema";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

import FAQSchema from "@/components/seo/FAQSchema";

import { notFound } from "next/navigation";

import ShareButtons from "@/components/blog/ShareButtons";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await getBlogPost(slug);

  return {
    title: post.title,

    description:
      post.description,

    alternates: {
      canonical: `https://shtechlab.in/blog/${post.slug}`,
    },

   openGraph: {
  title: post.title,
  description: post.description,
  ...(post.image && {
    images: [post.image],
  }),
},

twitter: {
  card: "summary_large_image",
  title: post.title,
  description: post.description,
  ...(post.image && {
    images: [post.image],
  }),
},

  };
}

export default async function BlogPostPage({
  params,
}: Props) {
  try {
    const { slug } = await params;

    const post = await getBlogPost(
      slug
    );

    const posts = await getBlogPosts();

    const relatedPosts = posts
      .filter(
        (p) => p.slug !== slug
      )
      .slice(0, 3);

    const faqs = [
      {
        question:
          "How much does website development cost in India?",

        answer:
          "Website development cost in India depends on design, features, and business requirements.",
      },

      {
        question:
          "Is static website good for small businesses?",

        answer:
          "Yes, static websites are fast, secure, and affordable for small businesses.",
      },
    ];

    return (
      <main className="py-16">
        <BlogSchema
          title={post.title}
          description={
            post.description
          }
          image={post.image}
          date={post.date}
          slug={post.slug}
        />

        <BreadcrumbSchema
          title={post.title}
          slug={post.slug}
        />

        <FAQSchema faqs={faqs} />

        <div className="container mx-auto px-4 max-w-4xl">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl mb-6]"
            />
          )}

          <div className="mb-6">
            <span className="text-blue-600 font-medium">
              {post.category}
            </span>

            <h1 className="text-4xl font-bold mt-3 mb-4 ">
              {post.title}
            </h1>

            <div className="flex gap-4 text-gray-500 text-sm">
              <span>{post.date}</span>

              <span>
                {post.readingTime}
              </span>
            </div>
              
              <ShareButtons
               title={post.title}
               url={`https://shtechlab.in/blog/${post.slug}`}
              />

          </div>

          <BlogContent
            content={post.content}
          />

          <RelatedPosts
            posts={relatedPosts}
          />
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}