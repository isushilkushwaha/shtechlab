"use client";

import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

interface Props {
  title: string;
  url: string;
}

export default function ShareButtons({
  title,
  url,
}: Props) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle =
    encodeURIComponent(title);

  return (
    <div className="flex flex-wrap items-center gap-3 py-4">
      <span className="font-medium">
        Share:
      </span>

      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-green-500 text-white hover:scale-105 transition"
      >
        <FaWhatsapp size={18} />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-blue-600 text-white hover:scale-105 transition"
      >
        <FaFacebook size={18} />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-black text-white hover:scale-105 transition"
      >
        <FaXTwitter size={18} />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-blue-700 text-white hover:scale-105 transition"
      >
        <FaLinkedin size={18} />
      </a>
      <button
         onClick={() => {
          navigator.clipboard.writeText(url);
         alert("Link copied!");
         }}
       className="px-4 py-2 border rounded-lg"
       >
  Copy Link
</button>
    </div>
  );
}