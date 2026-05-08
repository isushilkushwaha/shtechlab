import { MetadataRoute } from "next";

// Import your blog fetching function
import { getAllBlogs } from "@/lib/markdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://shtechlab.com";

  /*
   |--------------------------------------------------------------------------
   | Static Routes
   |--------------------------------------------------------------------------
   */

  const routes = [
    "",

    // Main Pages
    "/about",
    "/services",
    "/contact",
    "/faq",

    // Service Pages
    "/services/website-development",
    "/services/website-redesign",
    "/services/website-maintenance",
    "/services/app-development",

    // Blog
    "/blog",

    // Country Pages
    "/india",
    "/india/services",

    "/usa",
    "/usa/services",

    "/uae",
    "/uae/services",
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  /*
   |--------------------------------------------------------------------------
   | Dynamic Blog Routes
   |--------------------------------------------------------------------------
   */

  const blogs = getAllBlogs();

  const blogRoutes = blogs.map((blog: any) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.date
      ? new Date(blog.date)
      : new Date(),

    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /*
   |--------------------------------------------------------------------------
   | Return All Routes
   |--------------------------------------------------------------------------
   */

  return [...staticRoutes, ...blogRoutes];
}