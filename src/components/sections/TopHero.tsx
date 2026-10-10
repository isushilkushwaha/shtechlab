// components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 pt-20">
        {/* LEFT: Content */}
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 rounded-full text-blue-400 text-sm font-medium w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Trusted IT Partner for Startups & Businesses
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tighter">
            Building Digital Solutions That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Drive Business Growth
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            SH Tech Lab helps startups and enterprises build scalable web platforms, 
            intelligent applications, and high-performance digital infrastructure.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all">
              Get Free Consultation <ArrowRight size={18} />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-md">
              View Our Services
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {['Fast Delivery', 'Modern Tech', 'Dedicated Support', 'SEO Optimized'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle2 size={16} className="text-blue-500" /> {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: 3D Visualization Placeholder (Styled Glass Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-900/50 to-blue-900/10 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl p-8 flex items-center justify-center">
            {/* Simulation of 3D Tech Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="w-64 h-40 bg-slate-800 rounded-lg shadow-xl border border-white/10 flex items-center justify-center transform rotate-3 animate-float">
              <span className="text-blue-400 font-bold">Analytics UI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}