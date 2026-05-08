import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(blogsDirectory);

  return files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fullPath = path.join(blogsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });
}