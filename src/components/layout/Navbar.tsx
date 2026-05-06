"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-12 items-center justify-between">
          
          {/* Company Name */}
          <Link href="/" className="text-lg font-bold tracking-tight">
            SH Tech Lab
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-700 transition hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-200 py-2">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-zinc-700 hover:text-black"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}