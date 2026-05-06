"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500" />

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-14 text-center shadow-2xl"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            🚀 Let’s Build Your Digital Presence
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready to Grow Your Business Online?
          </h2>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            SH Tech Lab helps businesses create fast, modern,
            mobile-friendly, and SEO-optimized websites that
            attract more customers and grow online professionally.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-white/90 text-sm">
            <div className="bg-white/10 rounded-xl py-3 px-4">
              ⚡ Fast Delivery
            </div>

            <div className="bg-white/10 rounded-xl py-3 px-4">
              📱 Mobile Friendly
            </div>

            <div className="bg-white/10 rounded-xl py-3 px-4">
              🔍 SEO Optimized
            </div>

            <div className="bg-white/10 rounded-xl py-3 px-4">
              🎨 Modern Design
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}