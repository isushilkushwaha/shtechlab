"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      // YOUR ADMIN EMAIL
      if (
        result.user.email === "iamsushilkushwaha@gmail.com"
      ) {
        router.push("/admin/leads");
      } else {
        alert("Unauthorized");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <button
        onClick={login}
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
      >
        Login with Google
      </button>
    </div>
  );
}