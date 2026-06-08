

"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import { LogOut } from "lucide-react";

import { auth } from "@/lib/firebase";

import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);

      router.replace("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      variant="ghost"
      className="   -ml-2 w-full
    justify-start
    group-data-[collapsible=icon]:justify-center
    group-data-[collapsible=icon]:px-0
"
      onClick={handleLogout}
    >
      <LogOut className="h-5 w-5 shrink-0" />
      <span className="group-data-[collapsible=icon]:hidden">
    Logout
  </span>
    </Button>
  );
}