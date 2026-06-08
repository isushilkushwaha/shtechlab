

import { ReactNode } from "react";

import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

import AdminSidebar from "@/components/admin/AdminSidebar";
import Header from "@/components/admin/Header";
import AdminAuthGuard from "@/components/admin/auth/AdminAuthGuard";

export default function CRMLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AdminAuthGuard>
      <SidebarProvider>
        <AdminSidebar />

        <SidebarInset className="h-screen overflow-hidden">

          <Header />

          <main className="h-[calc(100vh-56px)] overflow-y-auto p-4">
            {children}
          </main>

        </SidebarInset>

      </SidebarProvider>
    </AdminAuthGuard>
  );
}