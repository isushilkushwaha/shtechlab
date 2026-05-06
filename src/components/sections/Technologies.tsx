"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    description: "Modern interactive UI development",
    icon: SiReact,
  },
  {
    name: "Next.js",
    description: "Fast and SEO-friendly websites",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    description: "Clean and responsive design system",
    icon: SiTailwindcss,
  },
  {
    name: "TypeScript",
    description: "Secure and scalable applications",
    icon: SiTypescript,
  },
  {
    name: "Firebase",
    description: "Backend, database and hosting",
    icon: SiFirebase,
  },
];

export default function Technologies() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-wider mb-3">
            Technologies
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Modern Technologies We Use
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            We create fast, secure, scalable, and SEO-friendly websites using
            modern technologies trusted by businesses worldwide.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-4xl text-cyan-400 group-hover:rotate-6 transition-transform duration-300" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">
                  {tech.name}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}