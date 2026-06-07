interface Props {
  title: string;
  slug: string;
}

export default function BreadcrumbSchema({
  title,
  slug,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shtechlab.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://shtechlab.in/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://shtechlab.in/blog/${slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}