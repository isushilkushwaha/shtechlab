"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-black text-white"
      aria-label="Hero Section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a1a_1px,transparent_1px),linear-gradient(to_bottom,#27272a1a_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            {/* <div className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur sm:text-sm">
              🚀 Innovative IT Solutions For Modern Businesses
            </div> */}

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Build Your
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Digital Presence
              </span>
              <br />
              With SH Tech Lab
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg lg:mx-0">
              SH Tech Lab helps businesses build a strong online presence with
               modern, fast, and mobile-friendly websites. We create professional
               websites that look great, load quickly, and help attract more
               customers to grow your business online.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group rounded-2xl bg-white px-7 py-4 text-center text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200 sm:text-base"
              >
                Start Your Project
              </Link>

              <Link
                href="/services"
                className="rounded-2xl border border-zinc-700 bg-zinc-900/50 px-7 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-zinc-800 sm:text-base"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-500 lg:justify-start">
              <span>✔ Fast Delivery</span>
              <span>✔ Responsive Design</span>
              <span>✔ SEO Friendly</span>
              <span>✔ Modern UI/UX</span>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Main Dashboard */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 p-4 shadow-2xl backdrop-blur sm:p-6">
              
              {/* Browser Top */}
              <div className="mb-5 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              {/* Dashboard Content */}
              <div className="space-y-4">
                
                {/* Banner */}
                <motion.div
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-5"
                >
                  <p className="text-xs uppercase tracking-wider text-white/80 sm:text-sm">
                    SH Tech Lab
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    Innovative Digital Solutions
                  </h2>

                  <p className="mt-2 text-sm text-white/80">
                    Build • Innovate • Scale
                  </p>
                </motion.div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  
                  {/* Website Development */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
                  >
                    <p className="text-sm text-zinc-400">
                      Service
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Website Development
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      Fast and responsive modern business websites.
                    </p>

                    <div className="mt-5 h-2 rounded-full bg-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 2 }}
                        className="h-2 rounded-full bg-blue-500"
                      />
                    </div>
                  </motion.div>

                  {/* SEO Optimization */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
                  >
                    <p className="text-sm text-zinc-400">
                      Growth
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      SEO Optimization
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      Better Google visibility and online growth.
                    </p>

                    <div className="mt-5 h-2 rounded-full bg-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "88%" }}
                        transition={{ duration: 2 }}
                        className="h-2 rounded-full bg-cyan-500"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-zinc-400">
                        Modern Technology Stack
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-white">
                        JavaScript Ecosystem
                      </h3>
                    </div>

                    <div className="inline-flex w-fit rounded-xl bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                      Production Ready
                    </div>
                  </div>

                  {/* Tech Pills */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {[
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Tailwind",
                      "Firebase",
                    ].map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-zinc-700 bg-black px-4 py-2 text-sm text-zinc-300"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 shadow-xl backdrop-blur md:block"
            >
              <p className="text-sm font-medium text-zinc-300">
                ⚡ High Performance & SEO Optimized Websites
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}