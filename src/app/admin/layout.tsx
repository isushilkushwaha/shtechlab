
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SH Tech Lab Admin",
  manifest: "/admin.webmanifest",
  applicationName: "SH Tech Lab Admin",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SH Admin",
  },
};

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
