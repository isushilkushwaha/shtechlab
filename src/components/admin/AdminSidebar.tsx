"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./auth/LogoutButton";
import Image from "next/image";

import {
  LayoutDashboard,
  Users,
  Building2,
  FolderKanban,
  Receipt,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Leads",
    url: "/admin/leads",
    icon: Users,
  },
  {
    title: "Clients",
    url: "/admin/clients",
    icon: Building2,
  },
  {
    title: "Projects",
    url: "/admin/projects",
    icon: FolderKanban,
  },
  {
    title: "Invoices",
    url: "/admin/invoices",
    icon: Receipt,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" 
    >
      
      <SidebarHeader className="border-b">
  <div
    className="
      flex items-center
      px-3 py-3
      group-data-[collapsible=icon]:justify-center
    "
  >
    <div className="flex items-center justify-center h-10 w-10 shrink-0">
      <Image
        src="/logo.jpeg"
        alt="SH Tech Lab"
        width={40}
        height={40}
        className="rounded-lg"
      />
    </div>

    <div className="ml-3 group-data-[collapsible=icon]:hidden">
      <h2 className="font-semibold text-sm">
        SH Tech Lab
      </h2>

      <p className="text-xs text-muted-foreground">
        CRM Dashboard
      </p>
    </div>
  </div>
</SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                     className="
                     h-10
                    group-data-[collapsible=icon]:justify-center
                     group-data-[collapsible=icon]:px-0"
                     >

                <Link href={item.url}>
                  <item.icon className="ml-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
       <SidebarFooter className="border-t p-2">
      <LogoutButton />
    </SidebarFooter>
    </Sidebar>
  );
}