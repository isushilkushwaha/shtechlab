interface Props {
  content: string;
}

export default function BlogContent({
  content,
}: Props) {
  return (
    <article
      className="blog-content"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}