type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPageProps) {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          Blog: {params.slug}
        </h1>

        <p className="text-zinc-600">
          This blog article is under development.
        </p>
      </div>
    </main>
  );
}