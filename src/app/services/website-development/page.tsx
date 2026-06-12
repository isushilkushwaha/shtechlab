import Link from "next/link";
import { Sparkles, CheckCircle2, Layout, Search, Layers, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Website Development | SH Tech Lab",
  description: "Professional website development services using Next.js and React.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-white text-slate-900 font-sans selection:bg-indigo-100 antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
        {/* Subtle engineering background accents */}
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-50/50 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-blue-50/40 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col items-start">
           

            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.1]">
              Build Modern, High-Performance <span className="text-indigo-600">Websites</span>
            </h1>

            <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-slate-600 mb-10">
              We engineer professional websites that establish corporate authority, attract premium traffic, showcase offerings, and convert visitors into partners. Built on modern architecture optimized entirely around your real-world targets.
            </p>

            {/* Core Features Pillars */}
            <div className="w-full mt-2 grid gap-4 grid-cols-1 sm:grid-cols-3 max-w-3xl">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-indigo-600 shadow-sm"><Layout className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Modern UI Design</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-indigo-600 shadow-sm"><Search className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">SEO Optimized</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-indigo-600 shadow-sm"><Layers className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Mobile Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BUSINESS PERSPECTIVE SECTION --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:col-span-1 sticky top-6">
              Why Every Business Needs a Website
            </h2>
            <div className="md:col-span-2 space-y-6 text-slate-600 text-lg leading-relaxed">
              <p className="font-medium text-slate-900">
                In today's ecosystem, consumer behaviors begin at search networks. A professional production-grade website runs 24 hours a day as your digital corporate office.
              </p>
              <p>
                It informs users instantly about your operational capabilities, validates customer brand trust, and removes barriers to interaction. Without an authoritative web presence, potential customers naturally leak to competitors with superior digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TYPES OF WEBSITES (MOBILE CARD ROW SCROLLING EFFECT) --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
                Types of Websites We Build
              </h2>
              <p className="text-slate-500 text-base max-w-xl">
                Tailored solutions customized for varying industry and audience profiles.
              </p>
            </div>
            {/* Mobile swipe gesture cue */}
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md px-2.5 py-1 mt-3 md:hidden w-fit animate-pulse">
              Swipe options &rarr;
            </span>
          </div>

          {/* MOBILE EFFECT: Swipeable, snap-on row scrolling setup via overflow-x-auto.
            DESKTOP EFFECT: Resets to a traditional 2-column grid.
          */}
          <div className="flex md:grid md:grid-cols-2 gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            
            <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full snap-start group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Business Websites
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Perfect for corporate setups, startups, and service providers who need an immediate, trustworthy online presence that establishes market authority.
              </p>
            </div>

            <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full snap-start group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Educational Websites
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Clean, organized portals for schools and institutions enabling parents, staff, and students to seamlessly track admissions, notices, and updates.
              </p>
            </div>

            <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full snap-start group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Portfolio Websites
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Visually striking, optimized presentations made specifically for creators, engineers, and consultants to highlight professional skills and case studies.
              </p>
            </div>

            <div className="min-w-[85%] sm:min-w-[50%] md:min-w-full snap-start group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Service Websites
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Purpose-built layouts for healthcare clinics, real estate firms, and local agencies looking to display operational options and capture inquiries.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION BENEFIT LIST --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-5">
                Benefits of a Professional Website
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A custom platform gives you complete control over your user journey, eliminating the limitations of third-party templates and template builders.
              </p>
            </div>

            <div className="md:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Core Commercial Advantages</h3>
              <ul className="grid sm:grid-cols-2 gap-4 text-slate-700 font-medium text-sm sm:text-base">
                {[
                  "Build trust and credibility",
                  "Reach more customers online",
                  "Showcase products and services",
                  "Generate more inquiries and leads",
                  "Improve customer communication",
                  "Support business growth",
                  "Stay available 24/7"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 transition-all duration-200 hover:translate-x-1">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHO BENEFITS SECTOR --- */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Who Can Benefit From a Website?
            </h2>
            <p className="text-slate-500">
              Modern digital architecture structured to drive growth across multiple sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Small Businesses",
              "Startups",
              "Schools & Colleges",
              "Clinics & Hospitals",
              "Real Estate Businesses",
              "Consultants & Coaches"
            ].map((sector, index) => (
              <div key={index} className="rounded-xl border border-slate-200/80 bg-slate-50/40 p-5 font-semibold text-slate-800 text-center shadow-sm transition-all duration-300 hover:bg-white hover:border-indigo-200 hover:shadow-md hover:text-indigo-600">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORKFLOW STEP TIMELINE (MOBILE CARD ROW SCROLLING EFFECT) --- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 block mb-2">The Workflow</span>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                How We Build Your Website
              </h2>
            </div>
            <span className="text-[11px] font-medium text-slate-400 bg-slate-800 rounded px-2 py-0.5 mt-3 md:hidden w-fit">
              Swipe stages &rarr;
            </span>
          </div>

          {/* MOBILE EFFECT: Swipeable horizontal pipeline on mobile screen boundaries.
            DESKTOP EFFECT: Standard balanced 5-column engineering grid layout.
          */}
          <div className="flex md:grid gap-6 md:grid-cols-5 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { step: "1", title: "Discovery", desc: "Understanding goals and project requirements." },
              { step: "2", title: "Planning", desc: "Mapping structure, page logic, and layout flows." },
              { step: "3", title: "Designing", desc: "Engineering premium visual interfaces." },
              { step: "4", title: "Review", desc: "Refining details through targeted client feedback." },
              { step: "5", title: "Launch", desc: "Going live with ongoing maintenance setup." }
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

      {/* --- CTA BOTTOM LINK SECTION --- */}
      <section className="py-16 bg-white flex flex-col justify-center items-center px-4 border-t border-slate-100">
        <div className="text-center max-w-lg mx-auto mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to expand your web footprint?</h3>
          <p className="text-slate-500 text-sm">Let&apos;s build a fast, secure web app completely focused on your commercial growth.</p>
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