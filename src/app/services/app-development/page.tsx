

import Link from "next/link";
import { Sparkles, CheckCircle2, Monitor, Smartphone, Cpu, ArrowRight } from "lucide-react";

export const metadata = {
  title: "App Development | SH Tech Lab",
  description: "Professional app development services for Android and web applications.",
};

export default function AppDevelopmentPage() {
  return (
    <main className="bg-white text-slate-900 font-sans selection:bg-indigo-100 antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-50/50 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-blue-50/40 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col items-start">
            

            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.1]">
              Build Modern Mobile &amp; <span className="text-indigo-600">Web Applications</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-600 mb-10">
              SH Tech Lab develops scalable Android and web applications built with flawless user interfaces, lightning-fast performance, and intuitive user experiences.
            </p>

            {/* Core Capability Grid - Standard grid layout on desktop, responsive spacing */}
            <div className="w-full mt-2 grid gap-4 grid-cols-1 sm:grid-cols-3 max-w-3xl">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-indigo-600 shadow-sm"><Smartphone className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Android Apps</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-indigo-600 shadow-sm"><Monitor className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Web Applications</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-indigo-600 shadow-sm"><Cpu className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTRO INFO SECTION --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:col-span-1 sticky top-6">
              What Is App Development?
            </h2>
            <div className="md:col-span-2 space-y-6 text-slate-600 text-lg leading-relaxed">
              <p className="font-medium text-slate-900">
                App development is the strategic process of designing and building digital solutions that help businesses optimize daily workflows, connect seamlessly with customers, and unlock digital scaling.
              </p>
              <p>
                Whether you need a dedicated portal for customer bookings, robust internal order management systems, field employee tracking apps, or client-facing e-services, a tailored application eliminates operational bottlenecks instantly.
              </p>
              <p>
                At <span className="font-semibold text-slate-900">SH Tech Lab</span>, we architect secure, highly dependable products entirely shaped around your exact operational realities and commercial milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS WE BUILD (MOBILE SCROLLING CAROUSEL) --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
                Solutions We Build
              </h2>
              <p className="text-slate-500 text-base max-w-xl">
                Engineered blueprints precisely curated for diverse commercial ecosystems.
              </p>
            </div>
            {/* Mobile swipe indicator hint */}
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md px-2.5 py-1 mt-3 md:hidden w-fit animate-pulse">
              Swipe left / right &rarr;
            </span>
          </div>

          {/* 
            MOBILE EFFECT: flex-nowrap, overflow-x-auto, snap-x mechanism creates native-app mobile slider.
            DESKTOP EFFECT: Automatically reverts to grid alignment.
          */}
          <div className="flex md:grid md:grid-cols-2 gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            
            <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full snap-start group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Customer Service Applications
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Allow customers to easily book real-time appointments, file digital inquiries, and access 24/7 business interaction nodes without friction.
              </p>
            </div>

            <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full snap-start group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Business Management Systems
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Centralize your operations. Supervise staff assignments, handle complex appointments, and review critical metrics from a single dashboard.
              </p>
            </div>

            <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full snap-start group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Booking &amp; Scheduling Platforms
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Empower your user base to manage personal calendars, claim service slots, and securely settle payments online without requiring phone support.
              </p>
            </div>

            <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full snap-start group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Custom Business Applications
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Proprietary architecture structured strictly around your distinctive workflows, logic conditions, and specialized market strategies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- BENEFITS & VALUE PROPOSITION --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Why Businesses Choose Custom Applications
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Generic, mass-market software comes packed with feature bloat you don't use, while completely missing the custom parameters your team depends on every day.
              </p>
              <p className="text-slate-600 leading-relaxed">
                A custom app respects your native business methodology, giving your workforce a tool built purely to amplify output and remove operational friction.
              </p>
            </div>

            <div className="md:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Immediate Operational Advantages</h3>
              <ul className="grid sm:grid-cols-2 gap-4 text-slate-700 font-medium text-sm sm:text-base">
                {[
                  "Save time on repetitive tasks",
                  "Improve customer experience",
                  "Reduce manual paperwork",
                  "Organize business information",
                  "Improve team productivity",
                  "Support business growth"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 transition-all duration-200 hover:translate-x-1">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUE DELIVERABLES / WHAT YOU GET --- */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
              What You Get
            </h2>
            <p className="text-slate-500">
              The foundational pillars included with every application engineered by our laboratory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-t-2 border-indigo-600 bg-slate-50/50 p-6 rounded-b-xl shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Easy to Use</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Beautiful, hyper-intuitive user touchpoints explicitly designed for clear, everyday use without training.
              </p>
            </div>

            <div className="border-t-2 border-indigo-600 bg-slate-50/50 p-6 rounded-b-xl shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Fast &amp; Reliable</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Highly optimized execution logic providing instantaneous rendering and resilient system uptimes.
              </p>
            </div>

            <div className="border-t-2 border-indigo-600 bg-slate-50/50 p-6 rounded-b-xl shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Mobile Friendly</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fluid, responsive screen layouts matching native aesthetics beautifully across viewports, tabs, and systems.
              </p>
            </div>

            <div className="border-t-2 border-indigo-600 bg-slate-50/50 p-6 rounded-b-xl shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Ongoing Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proactive engineers standing ready to monitor infrastructure stability and supply software revisions as you scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKFLOW STEP TIMELINE (MOBILE SCROLLING ROW EFFECT) --- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 block mb-2">The Process</span>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                How We Build Your Application
              </h2>
            </div>
            <span className="text-[11px] font-medium text-slate-400 bg-slate-800 rounded px-2 py-0.5 mt-3 md:hidden w-fit">
              Swipe stages &rarr;
            </span>
          </div>

          {/* 
            MOBILE EFFECT: Converts long desktop timeline layout into a clean, horizontal card trail on mobile.
          */}
          <div className="flex md:grid gap-6 md:grid-cols-5 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { step: "1", title: "Discovery", desc: "Deeply researching your core workflows." },
              { step: "2", title: "Architecture", desc: "Mapping blueprints & logical wireframes." },
              { step: "3", title: "Engineering", desc: "Writing clean, modern production code." },
              { step: "4", title: "Quality Check", desc: "Rigorous debugging & security testing." },
              { step: "5", title: "Deployment", desc: "Live launch & continuous system scaling." }
            ].map((phase, i) => (
              <div key={i} className="min-w-[75%] sm:min-w-[40%] md:min-w-full snap-start bg-slate-800/40 border border-slate-800 p-6 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-800/80">
                <div>
                  <span className="text-indigo-400 font-mono text-xs font-bold tracking-wider uppercase block mb-3">Phase 0{phase.step}</span>
                  <h3 className="font-bold text-lg text-white mb-2">{phase.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="py-16 bg-white flex flex-col justify-center items-center px-4 border-t border-slate-100">
        <div className="text-center max-w-lg mx-auto mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to transform your workflow?</h3>
          <p className="text-slate-500 text-sm">Let&apos;s engineer custom software that positions your company ahead of the curve.</p>
        </div>
        
        <div className="w-full flex justify-center px-4">
          <Link
            href="/start-project"
            className="group flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 h-14 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:bg-indigo-600 hover:shadow-indigo-600/10 active:scale-[0.98] w-full max-w-[320px] sm:w-fit text-center select-none"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

    </main>
  );
}