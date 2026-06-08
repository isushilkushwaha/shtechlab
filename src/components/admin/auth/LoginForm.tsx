"use client";

import { useState } from "react";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const login = async () => {
    try {
      setLoading(true);

      const provider =
        new GoogleAuthProvider();

      const result =
        await signInWithPopup(
          auth,
          provider
        );

      if (
        result.user.email ===
        "iamsushilkushwaha@gmail.com"
      ) {
        router.push(
          "/admin/dashboard"
        );
      } else {
        alert(
          "Unauthorized User"
        );

        await auth.signOut();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 flex items-center justify-center p-6">

    <div className="w-full max-w-md">

      <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-2xl">

        {/* Logo */}

        <div className="text-center mb-8">

          <Image
            src="/logo.jpeg"
            alt="SH Tech Lab"
            width={90}
            height={90}
            className="mx-auto mb-4 rounded-2xl shadow-md"
          />

          <h1 className="text-3xl font-bold text-slate-900">
            SH Tech Lab CRM
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Internal Client & Project Management System
          </p>

        </div>

        {/* Welcome */}

        <div className="mb-8 text-center">

          <h2 className="text-xl font-semibold text-slate-900">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Sign in with your authorized Google account
            to access the SH Tech Lab dashboard.
          </p>

        </div>

        {/* Login Button */}

        <button
          onClick={login}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
        >
          {!loading && (
            <svg
              className="h-5 w-5"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3 0 5.8 1.1 8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.3c-2.1 1.6-4.7 2.6-7.3 2.6-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.3-6.3 6.9l6.3 5.3C39.7 36.3 44 30.8 44 24c0-1.3-.1-2.4-.4-3.5z"
              />
            </svg>
          )}

          {loading
            ? "Signing In..."
            : "Continue with Google"}
        </button>

        {/* Footer */}

        <div className="mt-8 border-t border-slate-200 pt-4 text-center">

          <p className="text-xs text-slate-500">
            Authorized access only. All activities may be monitored.
          </p>

        </div>

      </div>

      {/* Bottom Text */}

      <p className="mt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SH Tech Lab. All rights reserved.
      </p>

    </div>

  </div>
); 
}