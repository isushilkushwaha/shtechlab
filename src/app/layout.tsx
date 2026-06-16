import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";

import { defaultSEO } from "@/lib/seo";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import WhatsAppButton from "@/components/sections/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  authors: defaultSEO.authors,
  creator: defaultSEO.creator,
  metadataBase: new URL("https://shtechlab.in"),
  openGraph: {
    title: defaultSEO.title.default,
    description: defaultSEO.description,
    url: "https://shtechlab.in",
    siteName: defaultSEO.siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title.default,
    description: defaultSEO.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-white text-black antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SH Tech Lab",
              "url": "https://shtechlab.in"
            }),
          }}
        />

        <LayoutWrapper>
          <Toaster richColors position="top-right" />
          {children}
          <WhatsAppButton />
        </LayoutWrapper>
      </body>
    </html>
  );
}