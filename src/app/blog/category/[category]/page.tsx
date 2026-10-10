type BlogPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function BlogCategoryPage({
  params,
}: BlogPageProps) {
  const { category } = await params;

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-4xl font-bold">
          Blog Category: {category}
        </h1>

        <p className="text-zinc-600">
          Blog articles in this category are under development.
        </p>
      </div>
    </main>
  );
}