
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        flex
        h-14
        items-center
        gap-3
        border-b
        bg-white
        px-4
        shadow-sm
      "
    >
      <SidebarTrigger />

      <div className="ml-auto text-right">
  <h1 className="text-sm font-semibold tracking-tight">
    SH Tech Lab 
  </h1>

  <p className="text-[11px] text-muted-foreground">
    Customer Relationship Management System
  </p>
</div>

    </header>
  );
}