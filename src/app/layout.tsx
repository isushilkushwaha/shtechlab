import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";

import { defaultSEO } from "@/lib/seo";
import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: "https://shtechlab.in",
    siteName: "SH Tech Lab",
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
    title: defaultSEO.title,
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
        <Header />
        <Toaster richColors position="top-right" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}