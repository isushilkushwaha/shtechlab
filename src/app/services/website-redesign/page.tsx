import Link from "next/link";
import { Sparkles, Palette, ShieldAlert, Sparkle, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Website Redesign | SH Tech Lab",
  description: "Upgrade your old website into a modern responsive business website.",
};

export default function WebsiteRedesignPage() {
  return (
    <main className="bg-white text-slate-900 font-sans selection:bg-violet-100 antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
        {/* Soft creative violet glow shapes */}
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-50/60 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-purple-50/40 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col items-start">
            

            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.1]">
              Transform Your Old Site Into a <span className="text-violet-600">Growth Engine</span>
            </h1>

            <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-slate-600 mb-10">
              If your current website feels dated, runs slowly, or fails to convert incoming traffic into loyal users, it is costing you market share. We completely overhaul old interfaces to deliver modern customer experiences.
            </p>

            {/* Core Redesign Capabilities */}
            <div className="w-full mt-2 grid gap-4 grid-cols-1 sm:grid-cols-3 max-w-3xl">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-violet-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-violet-600 shadow-sm"><Palette className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Modern UI/UX</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-violet-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-violet-600 shadow-sm"><Sparkles className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Mobile Responsive</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-violet-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-violet-600 shadow-sm"><Sparkle className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Better Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RECOGNITION SECTION: WARNING SIGNS --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Signs Your Website Needs a Redesign
            </h2>
            <p className="text-slate-500 max-w-xl text-base">
              If your system suffers from these symptoms, it is holding your sales team back.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Your website looks visually outdated",
              "Customers struggle to find clear information",
              "Your core business offerings have changed",
              "You receive fewer digital inquiries than expected",
              "Your competitors run cleaner, faster layouts",
              "The interface no longer reflects your modern brand"
            ].map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 rounded-xl border border-slate-200/70 bg-white shadow-sm transition-all duration-200 hover:border-violet-200">
                <ShieldAlert className="h-5 w-5 text-violet-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION: VALUE ADDED --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-5">
                Benefits of a Website Redesign
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A thorough system upgrade alters how prospective clients perceive your operations. Modern interfaces eliminate friction points, convey technical competence, and increase conversion cycles instantly.
              </p>
            </div>

            <div className="md:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Post-Redesign Transformations</h3>
              <ul className="grid sm:grid-cols-2 gap-4 text-slate-700 font-medium text-sm sm:text-base">
                {[
                  "More professional appearance",
                  "Better customer experience",
                  "Clearer presentation of services",
                  "Increased customer trust",
                  "More inquiries and leads",
                  "Stronger online presence"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 transition-all duration-200 hover:translate-x-1">
                    <CheckCircle2 className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHAT WE IMPROVE (MOBILE CARD ROW SCROLLING EFFECT) --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
                What We Improve
              </h2>
              <p className="text-slate-500 text-base max-w-xl">
                Refactoring structural layers to match enterprise-grade expectations.
              </p>
            </div>
            {/* Swipe prompt indicator on smaller screens */}
            <span className="text-xs font-semibold text-violet-700 bg-violet-50 border border-violet-100 rounded-md px-2.5 py-1 mt-3 md:hidden w-fit animate-pulse">
              Swipe details &rarr;
            </span>
          </div>

          {/* MOBILE EFFECT: Flexible, responsive side scrolling track.
              DESKTOP EFFECT: 3-column robust engineering grid.
          */}
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { title: "Website Appearance", body: "Replacing legacy typography, dense layouts, and dull assets with premium styles." },
              { title: "Navigation & Structure", body: "Re-mapping indexing parameters to make information discoverable in under two clicks." },
              { title: "Content Organization", body: "Formatting textual components cleanly to highlight your business logic effortlessly." },
              { title: "Mobile Experience", body: "Adapting layout views seamlessly to look exceptional on phones and tablets." },
              { title: "Inquiry Flow Optimization", body: "Rebuilding contact fields and data gateways to make capturing leads frictionless." },
              { title: "User Experience (UX)", body: "Eliminating lag, optimizing loading speeds, and styling elements for long-term user retention." }
            ].map((item, index) => (
              <div key={index} className="min-w-[85%] sm:min-w-[45%] md:min-w-full snap-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
                <div className="h-1 bg-violet-600 w-12 rounded mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFICIARIES SECTION --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Who Can Benefit From a Website Redesign?
            </h2>
            <p className="text-slate-500">
              Transforming aging infrastructure across diverse modern commercial branches.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Small Businesses",
              "Startups",
              "Schools & Colleges",
              "Clinics & Hospitals",
              "Consultants & Agencies",
              "Growing Companies"
            ].map((client, i) => (
              <div key={i} className="rounded-xl border border-slate-200/80 bg-white p-5 font-semibold text-slate-800 text-center shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-md hover:text-violet-600">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PIPELINE SYSTEM WORKFLOW (MOBILE CARD ROW SCROLLING EFFECT) --- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 block mb-2">The Framework</span>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                How We Redesign Your Website
              </h2>
            </div>
            <span className="text-[11px] font-medium text-slate-400 bg-slate-800 rounded px-2 py-0.5 mt-3 md:hidden w-fit">
              Swipe steps &rarr;
            </span>
          </div>

          {/* MOBILE EFFECT: Horizontal swipeable trail layout.
              DESKTOP EFFECT: Standard sequential 5-column process grid layout.
          */}
          <div className="flex md:grid gap-6 md:grid-cols-5 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { step: "1", title: "Site Review", desc: "Analyzing operational bottlenecks on your live layout." },
              { step: "2", title: "Target Mapping", desc: "Defining clear aesthetic and architectural milestones." },
              { step: "3", title: "Interface Build", desc: "Engineering high-performance modular components." },
              { step: "4", title: "Review Cycles", desc: "Fine-tuning page features based on target testing." },
              { step: "5", title: "Live Launch", desc: "Seamless deployment with zero disruption to active traffic." }
            ].map((phase, i) => (
              <div key={i} className="min-w-[75%] sm:min-w-[40%] md:min-w-full snap-start bg-slate-800/40 border border-slate-800 p-6 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-violet-500/50 hover:bg-slate-800/80">
                <div>
                  <span className="text-violet-400 font-mono text-xs font-bold tracking-wider uppercase block mb-3">Step 0{phase.step}</span>
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
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to modernise your platform?</h3>
          <p className="text-slate-500 text-sm">Let&apos;s trade your legacy complications for clean engineering built to perform.</p>
        </div>
        
        <div className="w-full flex justify-center px-4">
          <Link
            href="/start-project"
            className="group flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 h-14 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:bg-violet-600 hover:shadow-violet-600/10 active:scale-[0.98] w-full max-w-[320px] sm:w-fit text-center select-none"
          >
            <span>Start Your Redesign</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

    </main>
  );
}