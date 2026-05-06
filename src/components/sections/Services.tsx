"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, fast, mobile-friendly websites built for your business growth.",
    icon: Globe,
    link: "/services/website-development",
  },
  {
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern and professional experience.",
    icon: RefreshCcw,
    link: "/services/website-redesign",
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, optimized, and running smoothly.",
    icon: ShieldCheck,
    link: "/services/website-maintenance",
  },
  {
    title: "App Development",
    description:
      "Custom mobile and web applications designed for performance and scalability.",
    icon: Smartphone,
    link: "/services/app-development",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm uppercase tracking-[4px] text-zinc-400">
            Our Services
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Digital Solutions For
            <span className="block text-zinc-300">
              Modern Businesses
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base leading-relaxed">
            SH Tech Lab helps businesses grow online with fast,
            modern, mobile-friendly, and SEO-optimized digital solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-white/30 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  href={service.link}
                  className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}