

import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { remark } from "remark";

import remarkHtml from "remark-html";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";

import readingTime from "reading-time";

const postsDirectory = path.join(
  process.cwd(),
  "src/content/blogs"
);

export interface BlogPost {
  slug: string;

  title: string;
  description: string;
  image: string | null;
  date: string;
  category: string;

  content: string;

  readingTime: string;
}

export async function getBlogPosts() {
  const fileNames = fs.readdirSync(
    postsDirectory
  );

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(
        /\.md$/,
        ""
      );

      const fullPath = path.join(
        postsDirectory,
        fileName
      );

      const fileContents = fs.readFileSync(
        fullPath,
        "utf8"
      );

      const { data, content } = matter(
        fileContents
      );

      return {
        slug,

        title: data.title || "",

        description:
          data.description || "",

        image: data.image || null,

        date: data.date || "",

        category:
          data.category || "",

        content,

        readingTime:
          readingTime(content).text,
      };
    })
  );

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export async function getBlogPost(
  slug: string
): Promise<BlogPost> {
  const fullPath = path.join(
    postsDirectory,
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(
    fullPath,
    "utf8"
  );

  const { data, content } = matter(
    fileContents
  );

  const processedContent =
    await remark()
      .use(remarkGfm) // Enables tables, task lists, strikethrough, etc.
      .use(remarkToc)
      .use(remarkHtml, {
        sanitize: false,
      })
      .process(content);

  return {
    slug,

    title: data.title || "",

    description:
      data.description || "",

    image: data.image || null,

    date: data.date || "",

    category:
      data.category || "",

    content:
      processedContent.toString(),

    readingTime:
      readingTime(content).text,
  };
}