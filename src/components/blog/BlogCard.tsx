

import Link from "next/link";

interface Props {
  post: any;
}

export default function BlogCard({
  post,
}: Props) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white">
       {post.image && (
  <img
    src={post.image}
    alt={post.title}
    className="w-full h-52 object-cover"
  />
)}

      <div className="p-5">
        <span className="text-sm text-blue-600 font-medium">
          {post.category}
        </span>

        <h2 className="text-xl font-bold mt-2 mb-3">
          {post.title}
        </h2>

        <p className="text-gray-600 mb-4">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{post.date}</span>

          <span>{post.readingTime}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}