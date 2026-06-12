import Link from "next/link";
import { Sparkles, ShieldCheck, Zap, Database, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Website Maintenance | SH Tech Lab",
  description: "Keep your website secure, updated and optimized with our maintenance services.",
};

export default function WebsiteMaintenancePage() {
  return (
    <main className="bg-white text-slate-900 font-sans selection:bg-amber-100 antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
        {/* Guard and Monitoring soft light accents */}
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-50/60 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-orange-50/40 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col items-start">
            

            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.1]">
              Keep Your Website <span className="text-amber-600">Secure &amp; Updated</span>
            </h1>

            <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-slate-600 mb-10">
              A high-performing platform is built once but optimized constantly. We handle the technical infrastructure, continuous security hardening, and minor changes so you can run your business with complete clarity.
            </p>

            {/* Crucial Infrastructure Pillars */}
            <div className="w-full mt-2 grid gap-4 grid-cols-1 sm:grid-cols-3 max-w-3xl">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-amber-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-amber-600 shadow-sm"><ShieldCheck className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Security Updates</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-amber-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-amber-600 shadow-sm"><Zap className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Performance Optimization</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-amber-200 hover:bg-white hover:shadow-md">
                <div className="p-2 bg-white rounded-lg border border-slate-100 text-amber-600 shadow-sm"><Database className="h-5 w-5" /></div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">Regular Backups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BUSINESS VALUE PRESERVATION --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:col-span-1 sticky top-6">
              Why Website Maintenance Is Important
            </h2>
            <div className="md:col-span-2 space-y-6 text-slate-600 text-lg leading-relaxed">
              <p className="font-medium text-slate-900">
                Your web platform acts as your brand's digital storefront every day. If core data becomes outdated, components break down, or workflows stop working, customer trust erodes instantly.
              </p>
              <p>
                Proactive monitoring ensures your digital products stay accurate, thoroughly protected against shifting vulnerabilities, and fully prepared to support your business operations without unexpected interruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RISK MANAGEMENT / POOR MAINTENANCE PROBLEMS --- */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Problems Caused by Poor Maintenance
            </h2>
            <p className="text-slate-500 max-w-xl text-base">
              Overlooked software dependencies turn small bugs into expensive blockages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Outdated business information",
              "Broken contact forms & leads",
              "Missing business opportunities",
              "Poor customer experience",
              "Reduced customer trust",
              "Website downtime or server issues"
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-slate-200/70 bg-slate-50/30 transition-all duration-200 hover:border-orange-200 hover:bg-white hover:shadow-sm">
                <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RECIPIENTS / WHAT WE TAKE CARE OF (MOBILE CARD ROW SCROLLING EFFECT) --- */}
      <section className="py-16 md:py-24 border-b border-slate-100 overflow-hidden bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
                What We Take Care Of
              </h2>
              <p className="text-slate-500 text-base max-w-xl">
                Comprehensive engineering support covering every layer of your production runtime.
              </p>
            </div>
            {/* Swipe prompt indicator on small screens */}
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100 rounded-md px-2.5 py-1 mt-3 md:hidden w-fit animate-pulse">
              Swipe details &rarr;
            </span>
          </div>

          {/* MOBILE EFFECT: Row horizontal slider view.
              DESKTOP EFFECT: 3-column robust grid layout.
          */}
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { title: "Content Updates", body: "Modifying text fields, refreshing banners, and updating service copy smoothly on demand." },
              { title: "Website Monitoring", body: "Continuous oversight tracking server responses and resolving layout performance anomalies." },
              { title: "Regular System Checks", body: "Validating navigation points, evaluating load times, and verifying link architectures." },
              { title: "Information Syncing", body: "Keeping contact protocols, addresses, maps, and service guidelines current." },
              { title: "Contact Form Testing", body: "Verifying email relays, automated endpoints, and client booking funnels remain active." },
              { title: "Ongoing Tech Support", body: "Direct developer availability to provide help whenever software improvements are needed." }
            ].map((item, index) => (
              <div key={index} className="min-w-[85%] sm:min-w-[45%] md:min-w-full snap-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
                <div className="h-1 bg-amber-500 w-12 rounded mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES BENEFITING --- */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
              Who Can Benefit From Website Maintenance?
            </h2>
            <p className="text-slate-500">
              Reliable infrastructure protection built for teams focused on sustainable digital operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Small Businesses",
              "Startups",
              "Schools & Colleges",
              "Clinics & Hospitals",
              "Service Providers",
              "Growing Companies"
            ].map((client, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200/80 bg-slate-50/40 p-5 font-semibold text-slate-800 text-center shadow-sm transition-all duration-300 hover:bg-white hover:border-amber-200 hover:shadow-md hover:text-amber-600">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAINTENANCE PROCESS WORKFLOW (MOBILE CARD ROW SCROLLING EFFECT) --- */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">The Engine</span>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                How Our Maintenance Service Works
              </h2>
            </div>
            <span className="text-[11px] font-medium text-slate-400 bg-slate-800 rounded px-2 py-0.5 mt-3 md:hidden w-fit">
              Swipe pipeline &rarr;
            </span>
          </div>

          {/* MOBILE EFFECT: Side scrolling sequence layout for easier reading on compact screens.
              DESKTOP EFFECT: Standard symmetrical 4-column process timeline grid.
          */}
          <div className="flex md:grid gap-6 md:grid-cols-4 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { step: "1", title: "Site Audit", desc: "Reviewing active layouts and configurations." },
              { step: "2", title: "Target Optimization", desc: "Finding structural errors and code dependencies." },
              { step: "3", title: "Scheduled Runs", desc: "Applying system updates and running secure backups regularly." },
              { step: "4", title: "Continuous Monitoring", desc: "Providing active developer help and engineering support." }
            ].map((phase, i) => (
              <div key={i} className="min-w-[75%] sm:min-w-[40%] md:min-w-full snap-start bg-slate-800/40 border border-slate-800 p-6 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-amber-500/50 hover:bg-slate-800/80">
                <div>
                  <span className="text-amber-400 font-mono text-xs font-bold tracking-wider uppercase block mb-3">Step 0{phase.step}</span>
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
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Secure your digital presence today</h3>
          <p className="text-slate-500 text-sm">Let our lab monitor your software integrity so your team can scale with full confidence.</p>
        </div>
        
        <div className="w-full flex justify-center px-4">
          <Link
            href="/start-project"
            className="group flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 h-14 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:bg-amber-600 hover:shadow-amber-600/10 active:scale-[0.98] w-full max-w-[320px] sm:w-fit text-center select-none"
          >
            <span>Secure Your Website</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

    </main>
  );
}