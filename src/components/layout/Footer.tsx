
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-zinc-900">
      <Container>
        <div className="py-14">

          {/* Main Footer */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14">

            {/* Left Section */}
            <div className="space-y-8">

              {/* Brand */}
              <div className="space-y-5">

                <div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                    SH Tech Lab
                  </h2>

                  <p className="text-zinc-500 text-sm mt-1 font-medium">
                    Innovate • Build • Scale
                  </p>
                </div>

                {/* SEO Description */}
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-2xl">
                  SH Tech Lab is a modern web development company providing
                  website development, website redesign, website maintenance,
                  app development and digital business solutions for startups,
                  creators and growing businesses worldwide.
                </p>

                {/* Trust Text */}
                <p className="text-sm text-zinc-500">
                  Trusted by startups, creators and growing businesses.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-5">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-2xl shrink-0">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">
                      Email
                    </p>

                    <a
                      href="mailto:shtechlab.in@gmail.com"
                      className="font-semibold text-sm md:text-base hover:text-zinc-300 transition"
                    >
                      shtechlab.in@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-2xl shrink-0">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">
                      Mobile
                    </p>

                    <a
                      href="tel:+918303806952"
                      className="font-semibold text-sm md:text-base hover:text-zinc-300 transition"
                    >
                      +91 8303806952
                    </a>
                  </div>
                </div>

                

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-3 rounded-2xl shrink-0">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">
                      Location
                    </p>

                    <p className="font-semibold text-sm md:text-base">
                      India • Serving Clients Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">

                <h4 className="font-semibold text-base">
                  Connect With Us
                </h4>

                <div className="flex flex-wrap items-center gap-4">

                    {/* Facebook */}
                  <Link
                    href="https://facebook.com/shtechlabb"
                    className="bg-zinc-900 hover:bg-white hover:text-black transition-all duration-300 p-3 rounded-2xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.77-3.88 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                    </svg>
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://instagram.com/shtechlab"
                    className="bg-zinc-900 hover:bg-white hover:text-black transition-all duration-300 p-3 rounded-2xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5c0 2.08-1.67 3.75-3.75 3.75h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://linkedin.com/company/sh-tech-lab"
                    className="bg-zinc-900 hover:bg-white hover:text-black transition-all duration-300 p-3 rounded-2xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-10h3v1.528c1.396-2.586 7-2.777 7 2.476v5.996z" />
                    </svg>
                  </Link>

                  
                  {/* Twitter */}
<Link
  href="https://twitter.com/shtechlab"
  target="_blank"
  aria-label="Twitter"
  className="bg-zinc-900 hover:bg-white hover:text-black transition-all duration-300 p-3 rounded-2xl"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.494h2.04L6.486 3.24H4.298l13.313 17.407Z" />
  </svg>
</Link>

                  {/* WhatsApp */}
                  <Link
                    href="https://wa.me/918303806952"
                    target="_blank"
                    aria-label="WhatsApp"
                    className="bg-zinc-900 hover:bg-[#25D366] hover:text-white transition-all duration-300 p-3 rounded-2xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.14 1.59 5.95L0 24l6.36-1.67a11.8 11.8 0 0 0 5.68 1.45h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.23-6.14-3.4-8.42Z" />
                    </svg>
                  </Link>

                  {/* Linktree */}
                  <Link
                    href="https://linktr.ee/shtechlab"
                    target="_blank"
                    aria-label="Linktree"
                    className="bg-zinc-900 hover:bg-white hover:text-black transition-all duration-300 px-4 py-3 rounded-2xl text-sm font-semibold"
                  >
                    Linktree
                  </Link>

                  
                  
                  
                  

                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-2 gap-10 md:gap-16">

              {/* Company */}
              <div className="space-y-5">

                <h3 className="text-lg font-bold">
                  Company
                </h3>

                <ul className="space-y-3 text-sm text-zinc-400">

                  <li>
                    <Link
                      href="/"
                      aria-label="Home"
                      className="hover:text-white transition"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      aria-label="About SH Tech Lab"
                      className="hover:text-white transition"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/blog"
                      aria-label="Blog"
                      className="hover:text-white transition"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      aria-label="Contact"
                      className="hover:text-white transition"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/faq"
                      aria-label="FAQ"
                      className="hover:text-white transition"
                    >
                      FAQ
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Services */}
              <div className="space-y-5">

                <h3 className="text-lg font-bold">
                  Services
                </h3>

                <ul className="space-y-3 text-sm text-zinc-400">

                  <li>
                    <Link
                      href="/services/website-development"
                      aria-label="Website Development"
                      className="hover:text-white transition"
                    >
                      Website Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/website-redesign"
                      aria-label="Website Redesign"
                      className="hover:text-white transition"
                    >
                      Website Redesign
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/website-maintenance"
                      aria-label="Website Maintenance"
                      className="hover:text-white transition"
                    >
                      Website Maintenance
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/app-development"
                      aria-label="App Development"
                      className="hover:text-white transition"
                    >
                      App Development
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-14 pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <div className="text-center md:text-left">

              <p className="text-sm font-medium text-zinc-300">
                © {currentYear} SH Tech Lab. All rights reserved.
              </p>

              <p className="text-xs text-zinc-500 mt-1">
                Modern Digital Solutions Company
              </p>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center items-center gap-5 text-sm text-zinc-500">

              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>

            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}