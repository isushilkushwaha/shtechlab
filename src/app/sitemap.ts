

import { MetadataRoute } from "next";

import { getBlogPosts } from "@/lib/markdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://shtechlab.in";

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

    // Blog
    "/blog",

    // Service Pages
    "/services/website-development",
    "/services/website-redesign",
    "/services/website-maintenance",
    "/services/app-development",

    // Country Pages
    "/india",
    "/india/services",

    "/usa",
    "/usa/services",

    "/uae",
    "/uae/services",
  ];

  const staticRoutes: MetadataRoute.Sitemap =
    routes.map((route) => ({
      url: `${baseUrl}${route}`,

      lastModified: new Date(),

      changeFrequency: "weekly",

      priority: route === "" ? 1 : 0.8,
    }));

  /*
   |--------------------------------------------------------------------------
   | Dynamic Blog Routes
   |--------------------------------------------------------------------------
   */

  const posts = await getBlogPosts();

  const blogRoutes: MetadataRoute.Sitemap =
    posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,

      lastModified: post.date
        ? new Date(post.date)
        : new Date(),

      changeFrequency: "monthly",

      priority: 0.7,
    }));

  /*
   |--------------------------------------------------------------------------
   | Return All Routes
   |--------------------------------------------------------------------------
   */

  return [
    ...staticRoutes,
    ...blogRoutes,
  ];
}