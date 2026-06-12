import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ArrowUpRight, Linkedin, Mail, Quote, ShieldCheck, Zap, Layers, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About & Leadership | SH Tech Lab",
  description: "Discover the engineering vision, operational purpose, and corporate philosophy guiding SH Tech Lab's web architecture development models.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 font-sans selection:bg-indigo-100 antialiased overflow-x-hidden">
      
      {/* =========================================================
          1. ABOUT SH TECH LAB SECTION
          ========================================================= */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
        {/* Soft premium background gradients */}
        <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-indigo-50/50 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-slate-50/80 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            
            {/* Left Column: Company Description */}
            <div className="flex flex-col items-start lg:col-span-7">
              
              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                About Us
              </h1>

              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-slate-600">
                <p>
                  <strong className="font-semibold text-slate-900">SH Tech Lab</strong> is a modern web development company dedicated to helping businesses establish a strong digital presence. We specialize in creating fast, responsive, and user-friendly websites that not only look great but also deliver real business results.
                </p>
                <p>
                  Our goal is to provide high-quality digital solutions that help startups, small businesses, and growing brands succeed in today&apos;s competitive online world. By combining modern technologies with creative thinking, we build websites and web applications that are scalable, secure, and performance-driven.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          2. OUR VISION SECTION
          ========================================================= */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Vision Centered Premium Card */}
            <div className="bg-white border border-slate-200/80 p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden group hover:border-indigo-200 transition-colors">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 w-24 rounded-b" />
              
              <div className="h-12 w-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6 border border-indigo-100 shadow-sm">
                <Eye className="h-6 w-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">Strategic Direction</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-6 sm:text-4xl">Our Vision</h2>
              
              <div className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto space-y-4">
                <p>
                  Our vision is to <span className="font-semibold text-slate-950">empower businesses</span> through innovative digital solutions and become a <span className="font-semibold text-indigo-600">trusted technology partner</span> for organizations worldwide.
                </p>
                <p className="text-sm sm:text-base text-slate-500 pt-2">
                  We aim to simplify technology, drive digital transformation, and help businesses grow confidently in the ever-evolving digital landscape.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. FOUNDER'S MESSAGE SECTION
          ========================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">LEADERSHIP PHILOSOPHY</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Founder&apos;s Message
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            

            {/* Quote Block & Mission Copy Column (lg:col-span-8) */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6 lg:pt-2">
              
              {/* Premium Interactive Quote Box */}
              <div className="relative bg-slate-50 border-l-4 border-indigo-600 p-6 sm:p-8 rounded-r-2xl shadow-inner">
                <Quote className="absolute top-4 right-6 h-10 w-10 text-slate-200/80 pointer-events-none select-none" />
                <p className="text-slate-800 italic font-medium text-base sm:text-xl leading-relaxed relative z-10">
                  &ldquo;At SH Tech Lab, we believe that technology should create opportunities, solve problems, and drive meaningful growth. Every business deserves a strong digital foundation, regardless of its size or industry.&rdquo;
                </p>
                {/* Semantic Citation for high search ranking discoverability */}
                <cite className="not-italic block text-right text-xs font-bold text-slate-400 uppercase tracking-wider mt-4">
                  — Sushil Kushwaha, Founder &amp; CEO
                </cite>
              </div>

              {/* Mission Text Columns */}
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Our mission is to build reliable, modern, and impactful digital solutions that help our clients achieve their goals and stay ahead in a competitive market. We are committed to continuous learning, innovation, and delivering value through every project we undertake.
                </p>
                <p className="font-mono text-xs text-slate-400 tracking-wider uppercase pt-2">
                  Operational Core: Discipline is Liberty &bull; Engineered to Scale
                </p>
              </div>

              {/* Bottom Communication Anchor */}
              <div className="pt-4 border-t border-slate-100 flex justify-center md:justify-start">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-indigo-600 transition-colors group"
                >
                  <span>Connect with our leadership team</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}