// src/app/contact/page.tsx

import ContactSection from "@/components/sections/ContactSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SH Tech Lab",
  description:
    "Contact SH Tech Lab for website development, redesign, SEO, maintenance, and app development services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-1 text-sm text-zinc-300 backdrop-blur">
              Contact SH Tech Lab
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Let’s Build Your
              <span className="block text-zinc-400">
                Digital Presence
              </span>
            </h1>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              We help startups, businesses, and brands build
              modern websites, scalable web applications,
              SEO-friendly platforms, and high-performance
              digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              
              

              
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Bottom CTA */}
      <section className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready To Grow Your Business Online?
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
            SH Tech Lab creates fast, modern, and scalable
            digital solutions designed to help your business
            stand out in the digital world.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4">
                <p className="text-sm text-zinc-500">
                  Response Time
                </p>

                <h3 className="font-semibold mt-1">
                  Within 24 Hours
                </h3>
              </div>


            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4">
              <p className="text-sm text-zinc-500">
                Availability
              </p>

              <p className="font-medium mt-1">
                Monday - Saturday
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}