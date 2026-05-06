"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Smartphone,
  Search,
  ShieldCheck,
  Code2,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Performance",
    desc: "Lightning-fast websites optimized for speed and smooth user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    desc: "Fully responsive websites that look perfect on every device.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    desc: "Built with modern SEO practices to improve Google visibility.",
  },
  {
    icon: Code2,
    title: "Modern Technologies",
    desc: "Powered by React, Next.js, TypeScript, Tailwind CSS, and Firebase.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    desc: "Clean architecture designed for security and future business growth.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "Reliable maintenance and technical support whenever you need it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Why Choose SH Tech Lab
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            We Build Modern Digital
            <span className="block text-cyan-400">
              Experiences For Businesses
            </span>
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            SH Tech Lab helps businesses grow online with fast,
            scalable, mobile-friendly, and SEO-optimized digital
            solutions using modern technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300"
              >
                {/* Glow Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20">
                  <Icon className="text-white w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="relative text-zinc-400 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}