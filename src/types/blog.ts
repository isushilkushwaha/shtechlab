export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  author: string;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}