interface Props {
  title: string;
  description: string;
  image: string |null;
  date: string;
  slug: string;
}

export default function BlogSchema({
  title,
  description,
  image,
  date,
  slug,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: `https://shtechlab.in${image}`,
    author: {
      "@type": "Organization",
      name: "SH Tech Lab",
    },
    publisher: {
      "@type": "Organization",
      name: "SH Tech Lab",
      logo: {
        "@type": "ImageObject",
        url: "https://shtechlab.in/logo.png",
      },
    },
    datePublished: date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://shtechlab.in/blog/${slug}`,
    },
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