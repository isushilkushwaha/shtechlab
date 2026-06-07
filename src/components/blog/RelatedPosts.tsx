import Link from "next/link";

interface Props {
  posts: any[];
}

export default function RelatedPosts({
  posts,
}: Props) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8">
        Related Posts
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            

            {post.image && (
            <img
             src={post.image}
             alt={post.title}
             className="w-full h-44 object-cover"
            />
        )}

            <div className="p-4">
              <h3 className="font-semibold">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}